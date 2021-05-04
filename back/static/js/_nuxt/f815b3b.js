(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{661:function(t,e,n){"use strict";var o=n(60),r=n(2);e.a=r.a.extend({name:"rippleable",directives:{ripple:o.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}})},663:function(t,e,n){var content=n(669);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("2e2bc7da",content,!0,{sourceMap:!1})},664:function(t,e,n){"use strict";n.d(e,"b",(function(){return m}));n(10),n(43),n(44),n(7);var o=n(76),r=n(661),l=n(223),c=n(8);function m(t){t.preventDefault()}e.a=Object(c.a)(o.a,r.a,l.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,input=this.internalValue;return this.isMultiple?!!Array.isArray(input)&&input.some((function(n){return t.valueComparator(n,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,input):Boolean(input):this.valueComparator(input,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var label=o.a.options.methods.genLabel.call(this);return label?(label.data.on={click:m},label):label},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:m},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,input=this.internalValue;if(this.isMultiple){Array.isArray(input)||(input=[]);var n=input.length;(input=input.filter((function(n){return!t.valueComparator(n,e)}))).length===n&&input.push(e)}else input=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(input,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(input,e)?null:e:!input;this.validate(!0,input),this.internalValue=input,this.hasColor=input}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}})},669:function(t,e,n){var o=n(16)(!1);o.push([t.i,'.theme--light.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:rgba(0,0,0,.26)!important}.theme--dark.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:hsla(0,0%,100%,.3)!important}.v-input--selection-controls{margin-top:16px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-top:0;margin-bottom:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;width:24px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;position:absolute;transition:inherit;width:34px;left:-12px;top:calc(50% - 24px);margin:7px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";position:absolute;opacity:.2;left:0;right:0;top:0;transform-origin:center center;transform:scale(.2);transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{width:28px;height:28px;left:-9px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls .v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}',""]),t.exports=o},713:function(t,e,n){"use strict";var o=n(4),r=n.n(o),l={props:{value:{type:Object,required:!0},errors:{type:Object,required:!0}},data:function(){return{search:"",menu2:!1,time:null,showPicker:!1}},computed:{errorMessages:function(){return JSON.parse(JSON.stringify(this.errors))},computedDateFormattedMomentjs:function(){var t=r()();return this.value.date&&(t=r()(this.value.date)),"nl"===this.$store.state.org.language?t.format("dddd, D MMMM YYYY"):t.format("dddd, MMMM Do YYYY")}},watch:{appointment:{handler:function(t){this.$emit("input",t)},deep:!0},errors:function(t){"content"in t&&this.$store.dispatch("showSnackbar","Content: "+t.content[0]),"date"in t&&this.$store.dispatch("showSnackbar","Date: "+t.date[0])},time:function(t){this.value.time=t}}},c=n(22),m=n(25),v=n.n(m),d=n(641),h=n(649),f=n(835),_=n(216),y=n(645),x=n(710),k=n(68),$=n(890),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"grid-list-md":"","pa-4":""}},[n("v-row",[n("v-col",{attrs:{sm:"4"}},[n("v-col",{staticClass:"py-0",attrs:{sm:"12"}},[n("VTextFieldEmoji",{attrs:{label:t.$t("forms.name"),errors:t.errorMessages.name},on:{removeError:function(e){t.errorMessages.name=""}},model:{value:t.value.name,callback:function(e){t.$set(t.value,"name",e)},expression:"value.name"}})],1),t._v(" "),n("v-col",{staticClass:"py-0",attrs:{sm:"12"}},[n("TagsSelector",{staticClass:"pt-2",model:{value:t.value.tags,callback:function(e){t.$set(t.value,"tags",e)},expression:"value.tags"}})],1),t._v(" "),n("v-col",{staticClass:"py-0",attrs:{sm:"12"}},[n("v-switch",{staticStyle:{"margin-top":"0px"},attrs:{label:t.$t("forms.fixedDate")},model:{value:t.value.fixed_date,callback:function(e){t.$set(t.value,"fixed_date",e)},expression:"value.fixed_date"}})],1),t._v(" "),t.value.fixed_date?n("v-col",{staticClass:"py-0",attrs:{sm:"12"}},[n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-text-field",t._g({attrs:{label:t.$t("forms.appointmentDate"),"prepend-icon":"event"},model:{value:t.computedDateFormattedMomentjs,callback:function(e){t.computedDateFormattedMomentjs=e},expression:"computedDateFormattedMomentjs"}},o))]}}],null,!1,3505623366),model:{value:t.showPicker,callback:function(e){t.showPicker=e},expression:"showPicker"}},[t._v(" "),n("v-date-picker",{attrs:{"first-day-of-week":1,"error-messages":t.errorMessages.date,locale:t.$store.state.org.locale},on:{input:function(e){t.showPicker=!1},change:function(e){t.errorMessages.date=""}},model:{value:t.value.date,callback:function(e){t.$set(t.value,"date",e)},expression:"value.date"}})],1)],1):n("v-col",{staticClass:"py-0",attrs:{sm:"12"}},[n("v-text-field",{attrs:{label:t.$t("forms.workDay"),"error-messages":t.errorMessages.on_day,hint:t.$t("forms.workDayHint"),type:"number"},on:{keyup:function(e){t.errorMessages.on_day=""}},model:{value:t.value.on_day,callback:function(e){t.$set(t.value,"on_day",e)},expression:"value.on_day"}})],1),t._v(" "),n("v-col",{staticClass:"py-0",attrs:{sm:"12"}},[n("v-menu",{ref:"menu",staticClass:"mt-2",attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-text-field",t._g(t._b({attrs:{label:t.$t("forms.chooseTime"),"error-messages":t.errorMessages.time,"prepend-icon":"access_time",readonly:""},on:{change:function(e){t.errorMessages.time=""}},model:{value:t.value.time,callback:function(e){t.$set(t.value,"time",e)},expression:"value.time"}},"v-text-field",r,!1),o))]}}]),model:{value:t.menu2,callback:function(e){t.menu2=e},expression:"menu2"}},[t._v(" "),t.menu2?n("v-time-picker",{on:{change:function(e){return t.$refs.menu.save(t.time)}},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}}):t._e()],1)],1)],1),t._v(" "),n("v-col",{staticClass:"py-0",attrs:{sm:"8"}},[n("Editor",{ref:"editor",model:{value:t.value.content,callback:function(e){t.$set(t.value,"content",e)},expression:"value.content"}})],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;v()(component,{VCol:d.a,VContainer:h.a,VDatePicker:f.a,VMenu:_.a,VRow:y.a,VSwitch:x.a,VTextField:k.a,VTimePicker:$.a})},873:function(t,e,n){"use strict";n.r(e);n(7);var o={layout:"admin",components:{AppointmentForm:n(713).a},data:function(){return{loading:!0,saving:!1,removing:!1,duplicating:!1,submittingForm:!1,errors:{},employee:{},appointment:{}}},watch:{$route:function(t,e){this.getAppointment()}},mounted:function(){this.getAppointment()},methods:{getAppointment:function(){var t=this;this.$appointments.get(this.$route.params.id).then((function(data){t.appointment=data})).catch((function(e){t.$store.dispatch("showSnackbar",t.$t("appointment.noAppointment"))})).finally((function(){t.loading=!1}))},saveAppointment:function(){var t=this;this.saving=!0,this.$appointments.update(this.$route.params.id,this.appointment).then((function(data){t.$router.push({name:"admin-templates-appointments"}),t.$store.dispatch("showSnackbar",t.$t("appointment.updated"))})).catch((function(e){t.errors=e})).finally((function(){t.saving=!1}))},removeAppointment:function(){var t=this;this.removing=!0,this.$appointments.remove(this.$route.params.id).then((function(data){t.$router.push({name:"admin-templates-appointments"}),t.$store.dispatch("showSnackbar",t.$t("appointment.removed"))})).catch((function(e){t.errors=e})).finally((function(){t.removing=!1}))},duplicateAppointment:function(){var t=this;this.duplicating=!0,this.$appointments.update(this.$route.params.id,this.appointment).then((function(data){t.$appointments.duplicate(t.$route.params.id).then((function(data){t.$router.push({name:"admin-templates-appointments"}),t.$store.dispatch("showSnackbar",t.$t("appointment.savedAndDuplicated"))})).catch((function(e){t.errors=e})).finally((function(){t.duplicating=!1}))}))}}},r=n(22),l=n(25),c=n.n(l),m=n(144),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("TemplateCompInner",[n("template",{slot:"header"},[n("h1",{staticClass:"heading",staticStyle:{"margin-top":"10px"}},[t._v("\n      "+t._s(t.$t("appointment.changeHeader"))+"\n    ")])]),t._v(" "),n("template",{slot:"header-right"},[n("v-btn",{attrs:{loading:t.duplicating,color:"secondary"},on:{click:t.duplicateAppointment}},[t._v("\n      "+t._s(t.$t("buttons.duplicate"))+"\n    ")]),t._v(" "),n("v-btn",{staticStyle:{"margin-right":"0px"},attrs:{loading:t.removing,color:"error"},on:{click:t.removeAppointment}},[t._v("\n      "+t._s(t.$t("buttons.remove"))+"\n    ")])],1),t._v(" "),n("template",{slot:"formpart"},[n("LoadingIcon",{attrs:{"is-loading":t.loading}}),t._v(" "),t.loading?t._e():n("div",[n("AppointmentForm",{ref:"form",attrs:{errors:t.errors},model:{value:t.appointment,callback:function(e){t.appointment=e},expression:"appointment"}})],1)],1),t._v(" "),n("template",{slot:"footer"},[n("v-btn",{staticStyle:{float:"right"},attrs:{loading:t.saving,color:"primary"},on:{click:t.saveAppointment}},[t._v("\n      "+t._s(t.$t("buttons.save"))+"\n    ")])],1)],2)}),[],!1,null,"98bb8aa6",null);e.default=component.exports;c()(component,{VBtn:m.a})}}]);