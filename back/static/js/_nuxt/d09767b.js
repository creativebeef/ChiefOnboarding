(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{660:function(e,t,n){var content=n(668);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(17).default)("19b267cc",content,!0,{sourceMap:!1})},665:function(e,t,n){"use strict";n(132);var r=n(659),o=n.n(r),c={name:"ContentDisplay",props:{content:{default:function(){return[]},type:Array},disableMustache:{default:!1,type:Boolean}},methods:{getYoutubeLink:function(e){var t=/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;return null!==e.trim().match(t)&&2===e.trim().match(t).length?"https://youtube.com/embed/"+e.trim().match(t)[1]:""},mustaching:function(content){return this.disableMustache?content:void 0===content?"":o.a.render(content,this.$store.state.baseInfo.new_hire||this.$store.state.admins[0])},downloadFile:function(e){this.$newhirepart.getFileURL(e.id,e.uuid).then((function(e){window.open(e,"_blank")}))}}},l=(n(667),n(22)),d=n(25),h=n.n(d),m=n(215),_=n(176),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.content,(function(i,t){return n("div",{key:t},["p"===i.type?n("p",[n("span",{domProps:{innerHTML:e._s(e.mustaching(i.content))}})]):e._e(),e._v(" "),"h1"===i.type?n("h1",[n("span",{domProps:{innerHTML:e._s(e.mustaching(i.content))}})]):e._e(),e._v(" "),"h2"===i.type?n("h2",[n("span",{domProps:{innerHTML:e._s(e.mustaching(i.content))}})]):e._e(),e._v(" "),"h3"===i.type?n("h3",[n("span",{domProps:{innerHTML:e._s(e.mustaching(i.content))}})]):e._e(),e._v(" "),"ul"===i.type?n("ul",{staticClass:"mb-3"},e._l(i.items,(function(t){return n("li",[n("span",{domProps:{innerHTML:e._s(e.mustaching(t.content))}})])})),0):e._e(),e._v(" "),"file"===i.type?n("h3",[n("label",[e._v("Files")]),n("br"),e._v(" "),e._l(i.files,(function(t,r){return n("v-chip",{key:r,on:{click:function(n){return e.downloadFile(t)}}},[e._v("\n        "+e._s(t.name)+"\n      ")])}))],2):e._e(),e._v(" "),"image"===i.type&&i.files.length?n("h3",[n("v-img",{attrs:{src:i.files[0].file_url}})],1):e._e(),e._v(" "),"youtube"===i.type?n("div",[""!==e.getYoutubeLink(i.content)?n("iframe",{attrs:{src:e.getYoutubeLink(i.content),width:"560",height:"315",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}):e._e()]):e._e(),e._v(" "),"quote"===i.type?n("blockquote",{style:"border-left-color: "+e.$store.state.baseInfo.org.base_color},[e._v("\n      "+e._s(i.content)+"\n    ")]):e._e()])})),0)}),[],!1,null,null,null);t.a=component.exports;h()(component,{VChip:m.a,VImg:_.a})},667:function(e,t,n){"use strict";n(660)},668:function(e,t,n){var r=n(16)(!1);r.push([e.i,"blockquote,h1,h2,h3{margin-bottom:10px}blockquote{margin-top:10px;padding:20px 30px;background:#f9f9f9;border-left:2px solid #ffbb42}p{margin-bottom:20px!important}",""]),e.exports=r},841:function(e,t,n){"use strict";n.r(t);n(7);var r=n(665),o=(n(23),{name:"QuestionsForm",props:{questions:{type:Array,default:function(){return[]}},org:{type:Object,default:function(){return{}}},resourceId:{type:Number,required:!0},id:{type:Number,required:!0}},data:function(){return{answers:[],submitting:!1,gettingAnswers:!1,changedQuestions:[]}},mounted:function(){this.changedQuestions=JSON.parse(JSON.stringify(this.questions))},methods:{submitAnswers:function(){var e=this;this.submitting=!0;var t=[];this.changedQuestions.forEach((function(e){"answer"in e&&t.push(e.answer)})),this.$newhirepart.addCourseAnswer(this.id,{id:this.resourceId,answers:t}).then((function(){e.$emit("completed")})).catch((function(){e.$store.dispatch("showSnackbar",e.$t("newHirePortal.couldNotSendAnswers"))})).finally((function(){e.submitting=!1}))}}}),c=n(22),l=n(25),d=n.n(l),h=n(144),m=n(707),_=n(708),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("LoadingIcon",{attrs:{"is-loading":e.gettingAnswers,color:e.$store.state.baseInfo.org.base_color}}),e._v(" "),e.gettingAnswers?e._e():n("div",[void 0!==e.answers.find((function(a){return a===e.id}))?n("div",[e._v("\n      "+e._s(e.$t("newHirePortal.theseQuestions"))+"\n    ")]):n("div",[e._l(e.changedQuestions,(function(i){return n("div",{key:i.id},[e._v("\n        "+e._s(i.content)+"\n        "),n("v-radio-group",{attrs:{label:i.text},model:{value:i.answer,callback:function(t){e.$set(i,"answer",t)},expression:"i.answer"}},e._l(i.items,(function(t){return n("v-radio",{key:t.id,attrs:{label:t.text,value:t.id,color:e.$store.state.baseInfo.org.base_color}})})),1)],1)})),e._v(" "),n("v-btn",{staticStyle:{"margin-top":"10px !important"},attrs:{color:e.$store.state.baseInfo.org.base_color,loading:e.submitting,dark:""},on:{click:e.submitAnswers}},[e._v("\n        "+e._s(e.$t("buttons.submit"))+"\n      ")])],2)])],1)}),[],!1,null,null,null),f=component.exports;d()(component,{VBtn:h.a,VRadio:m.a,VRadioGroup:_.a});var v={layout:"newhire",name:"ResourceItem",components:{ContentDisplay:r.a,QuestionsForm:f},data:function(){return{loading:!0,answers:[],select:{},resource:[],resources:[],tree:[],step:0,resource_user_id:0,searchResources:[]}},computed:{item:function(){return this.chapters.length?this.chapters[this.step]:{}}},mounted:function(){this.getResources()},methods:{getResources:function(){var e=this;this.$newhirepart.getCourse(this.$route.params.id).then((function(data){e.resource=data.organized.resource,e.chapters=data.original.resource.chapters,data.organized.step===e.resource.length&&e.$router.push({name:"portal-resources"}),e.step=data.organized.step,e.resource_user_id=data.original.id})).catch((function(){e.$store.dispatch("showSnackbar",e.$t("newHirePortal.couldNotGetResources"))})).finally((function(){e.loading=!1}))},registerStep:function(){this.$newhirepart.registerStep(this.resource_user_id,this.step+1),this.step===this.resource.length-1&&this.$router.push({name:"portal-resources"}),this.step+=1}}},w=n(208),y=n(641),$=n(649),k=n(645),x=n(646),I=Object(c.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{"mt-4":""}},[n("LoadingIcon",{attrs:{color:e.$store.state.baseInfo.org.base_color,"is-loading":e.loading}}),e._v(" "),e.loading?e._e():n("v-row",[n("v-col",{attrs:{sm:"12"}},[n("v-card",{staticClass:"pa-10",attrs:{outlined:""}},[n("h2",[e._v(e._s(e.item.name))]),e._v(" "),2===e.item.type?n("div",[n("QuestionsForm",{attrs:{questions:e.item.content,id:e.resource_user_id,resourceId:e.item.id,org:e.$store.state.baseInfo.org},on:{completed:e.registerStep}})],1):n("div",[n("ContentDisplay",{staticClass:"mb-10",attrs:{content:e.item.content}}),e._v(" "),n("v-container",[n("v-row",[e.resource.course&&0!==e.step?n("v-btn",{attrs:{color:e.$store.state.baseInfo.org.base_color,dark:""}},[e._v("\n                Previous\n              ")]):e._e(),e._v(" "),n("v-spacer"),e._v(" "),e.resource.course&&e.step!==e.resource.length?n("v-btn",{attrs:{color:e.$store.state.baseInfo.org.base_color,dark:""},on:{click:e.registerStep}},[e._v("\n                Next\n              ")]):e._e()],1)],1)],1)])],1)],1)],1)}),[],!1,null,null,null);t.default=I.exports;d()(I,{VBtn:h.a,VCard:w.a,VCol:y.a,VContainer:$.a,VRow:k.a,VSpacer:x.a})}}]);