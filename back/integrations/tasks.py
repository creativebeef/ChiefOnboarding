from django.contrib.auth import get_user_model
from integrations.models import ScheduledAccess, AccessToken
from integrations.emails import send_access_email, google_error_email, slack_error_email
import requests
from integrations.google import Google, EmailAddressNotValidError, UnauthorizedError

from .slack import Slack


def create_accounts():
    for i in ScheduledAccess.objects.filter(status=0).order_by('-integration'):
        new_hire_time = i.new_hire.get_local_time()
        if new_hire_time.date() >= i.new_hire.start_day and new_hire_time.hour >= 7 and new_hire_time.weekday() < 5:
            if i.integration == 1:
                codes = AccessToken.objects.filter(integration=1, active=True)
                if codes.exists():
                    try:
                        s = Slack()
                        s.add_user(i.email)
                    except Exception:
                        # need to be replaced with a decent error thing
                        pass
                    i.status = 2
                    i.save()

            g = Google()
            if i.integration == 2 and g.exists():
                password = get_user_model().objects.make_random_password()
                userinfo = {
                    "primaryEmail": i.new_hire.email,
                    "name": {
                        "givenName": i.new_hire.first_name,
                        "familyName": i.new_hire.last_name
                    },
                    "password": password,
                    "changePasswordAtNextLogin": True
                }
                try:
                    g.add_user(userinfo)
                    send_access_email(i.new_hire, password, i.email)
                    i.status = 2
                    i.save()
                except EmailAddressNotValidError:
                    i.status = 2
                    i.save()
                except UnauthorizedError:
                    a = AccessToken.objects.filter(active=True, integration=2).first()
                    a.active = False
                    a.save()
                    google_error_email(get_user_model().objects.filter(role=1).order_by('date_joined').first())
                else:
                    i.status = 2
                    i.save()
    return
