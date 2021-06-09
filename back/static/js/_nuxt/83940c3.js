(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{664:function(e,t,n){"use strict";var r=n(55),o=n(2);t.a=o.a.extend({name:"rippleable",directives:{ripple:r.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}})},666:function(e,t,n){var content=n(672);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(17).default)("2e2bc7da",content,!0,{sourceMap:!1})},667:function(e,t,n){"use strict";n.d(t,"b",(function(){return d}));n(10),n(35),n(36),n(7);var r=n(73),o=n(664),c=n(222),l=n(8);function d(e){e.preventDefault()}t.a=Object(l.a)(r.a,o.a,c.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var e=this,t=this.value,input=this.internalValue;return this.isMultiple?!!Array.isArray(input)&&input.some((function(n){return e.valueComparator(n,t)})):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,input):Boolean(input):this.valueComparator(input,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(e){this.lazyValue=e,this.hasColor=e}},methods:{genLabel:function(){var label=r.a.options.methods.genLabel.call(this);return label?(label.data.on={click:d},label):label},genInput:function(e,t){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:e,type:e},t),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:d},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(e){this.onChange(),this.$emit("click",e)},onChange:function(){var e=this;if(this.isInteractive){var t=this.value,input=this.internalValue;if(this.isMultiple){Array.isArray(input)||(input=[]);var n=input.length;(input=input.filter((function(n){return!e.valueComparator(n,t)}))).length===n&&input.push(t)}else input=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(input,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(input,t)?null:t:!input;this.validate(!0,input),this.internalValue=input,this.hasColor=input}},onFocus:function(){this.isFocused=!0},onKeydown:function(e){}}})},672:function(e,t,n){var r=n(16)(!1);r.push([e.i,'.theme--light.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:rgba(0,0,0,.26)!important}.theme--dark.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:hsla(0,0%,100%,.3)!important}.v-input--selection-controls{margin-top:16px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-top:0;margin-bottom:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;width:24px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;position:absolute;transition:inherit;width:34px;left:-12px;top:calc(50% - 24px);margin:7px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";position:absolute;opacity:.2;left:0;right:0;top:0;transform-origin:center center;transform:scale(.2);transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{width:28px;height:28px;left:-9px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls .v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}',""]),e.exports=r},678:function(e,t,n){var content=n(695);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(17).default)("b6e4e76a",content,!0,{sourceMap:!1})},681:function(e,t,n){"use strict";n(7),n(25),n(44),n(21);var r={props:{index:{type:Number,required:!0},type:{type:String,required:!0},items:{type:Array,required:!0},removable:{default:!0,type:Boolean},remind:{default:!1,type:Boolean}},data:function(){return{icons:[{name:"slack_messages",icon:"fab fa-slack-hash"},{name:"to_do",icon:"far fa-check-square"},{name:"resources",icon:"far fa-folder"},{name:"introductions",icon:"far fa-user-circle"},{name:"badges",icon:"far fa-arrow-alt-circle-right"},{name:"text_messages",icon:"far fa-comment"},{name:"emails",icon:"far fa-envelope"},{name:"admin_tasks",icon:"fas fa-tasks"},{name:"appointments",icon:"far fa-calendar-alt"},{name:"preboarding",icon:"fas fa-align-left"},{name:"introductions",icon:"far fa-user-circle"}]}},computed:{icon:function(){var e=this;return this.icons.find((function(a){return a.name===e.type}))}},methods:{remove:function(e){-1!==this.index?this.$store.commit("sequences/removeItem",{block:this.index,id:e,type:this.type}):this.$emit("removeUnconditionedItem",{id:e,type:this.type})},sendToParent:function(e,t){this.$emit("openItem",{index:this.index,_index:e,type:this.type,id:t})},remindNewHire:function(e){var t=this;e.loading=!0,this.$newhires.remindToDo(e.task_id).then((function(){e.reminded=new Date,t.$store.dispatch("showSnackbar",t.$t("sequence.reminderSent"))})).finally((function(){e.loading=!1}))}}},o=(n(694),n(23)),c=n(24),l=n.n(c),d=n(140),h=n(644),v=n(648),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.items,(function(t,r){return n("v-row",{key:r},[n("v-col",{staticClass:"py-0",class:{pointer:e.removable},attrs:{sm:"11"},on:{click:function(n){return e.sendToParent(r,t.id)}}},[n("i",{class:e.icon.icon+" mar7"}),e._v(" "),"task"===e.type?n("span",[e._v(e._s(t.todo))]):n("span",[e._v(e._s(t.name))]),e._v(" "),e.remind&&!t.completed?n("v-btn",{staticStyle:{margin:"0px 10px"},attrs:{disabled:!("task_id"in t),loading:t.loading,small:""},on:{click:function(n){return e.remindNewHire(t)}}},[e._v("\n        "+e._s(e.$t("sequence.remindNewHire"))+"\n      ")]):e._e()],1),e._v(" "),e.removable?n("v-col",{staticClass:"red-remove py-0",attrs:{sm:"1"},on:{click:function(n){return e.remove(t.id)}}},[n("i",{staticClass:"far fa-times-circle",class:{pointer:e.removable},staticStyle:{top:"2px",position:"relative"}})]):e._e()],1)})),1)}),[],!1,null,"5e17a5e6",null);t.a=component.exports;l()(component,{VBtn:d.a,VCol:h.a,VRow:v.a})},682:function(e,t,n){var content=n(683);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(17).default)("12a190a6",content,!0,{sourceMap:!1})},683:function(e,t,n){var r=n(16)(!1);r.push([e.i,".v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}",""]),e.exports=r},684:function(e,t,n){var content=n(685);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(17).default)("5e62c9d0",content,!0,{sourceMap:!1})},685:function(e,t,n){var r=n(16)(!1);r.push([e.i,".theme--light.v-radio--is-disabled label{color:rgba(0,0,0,.38)}.theme--light.v-radio--is-disabled .v-icon{color:rgba(0,0,0,.26)!important}.theme--dark.v-radio--is-disabled label{color:hsla(0,0%,100%,.5)}.theme--dark.v-radio--is-disabled .v-icon{color:hsla(0,0%,100%,.3)!important}.v-radio{align-items:center;display:flex;height:auto;outline:none}.v-radio--is-disabled{pointer-events:none;cursor:default}.v-input--radio-group.v-input--radio-group--row .v-radio{margin-right:16px}",""]),e.exports=r},686:function(e,t,n){var content=n(687);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(17).default)("999cb8a8",content,!0,{sourceMap:!1})},687:function(e,t,n){var r=n(16)(!1);r.push([e.i,".v-input--radio-group legend.v-label{cursor:text;font-size:14px;height:auto}.v-input--radio-group__input{border:none;cursor:default;display:flex;width:100%}.v-input--radio-group--column .v-input--radio-group__input>.v-label{padding-bottom:8px}.v-input--radio-group--row .v-input--radio-group__input>.v-label{padding-right:8px}.v-input--radio-group--row legend{align-self:center;display:inline-block}.v-input--radio-group--row .v-input--radio-group__input{flex-direction:row;flex-wrap:wrap}.v-input--radio-group--column legend{padding-bottom:8px}.v-input--radio-group--column .v-radio:not(:last-child):not(:only-child){margin-bottom:8px}.v-input--radio-group--column .v-input--radio-group__input{flex-direction:column}",""]),e.exports=r},694:function(e,t,n){"use strict";n(678)},695:function(e,t,n){var r=n(16)(!1);r.push([e.i,".mar7[data-v-5e17a5e6]{margin-right:7px;width:12.25px}.pointer[data-v-5e17a5e6]{cursor:pointer}.red-remove[data-v-5e17a5e6]{margin-top:-2px}",""]),e.exports=r},712:function(e,t,n){"use strict";n(15),n(10),n(12),n(11),n(13),n(35),n(36),n(7);var r=n(1),o=(n(682),n(666),n(29)),c=n(73),l=n(667);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=l.a.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return h(h({},c.a.options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(e){var t=this;this.$nextTick((function(){return t.inputIndeterminate=e}))},inputIndeterminate:function(e){this.$emit("update:indeterminate",e)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(o.a,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",h(h({},this.attrs$),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},713:function(e,t,n){"use strict";n(15),n(10),n(12),n(11),n(7),n(13),n(25);var r=n(1),o=(n(684),n(152)),c=n(29),l=n(73),d=n(88),h=n(20),v=n(77),m=n(664),f=n(18),_=n(667),w=n(0),x=n(8),y=n(39);function $(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function k(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?$(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):$(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var S=Object(x.a)(d.a,h.a,m.a,Object(v.a)("radioGroup"),f.a);t.a=S.extend().extend({name:"v-radio",inheritAttrs:!1,props:{disabled:Boolean,id:String,label:String,name:String,offIcon:{type:String,default:"$radioOff"},onIcon:{type:String,default:"$radioOn"},readonly:Boolean,value:{default:null}},data:function(){return{isFocused:!1}},computed:{classes:function(){return k(k({"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused},this.themeClasses),this.groupClasses)},computedColor:function(){return _.a.options.computed.computedColor.call(this)},computedIcon:function(){return this.isActive?this.onIcon:this.offIcon},computedId:function(){return l.a.options.computed.computedId.call(this)},hasLabel:l.a.options.computed.hasLabel,hasState:function(){return(this.radioGroup||{}).hasState},isDisabled:function(){return this.disabled||!!this.radioGroup&&this.radioGroup.isDisabled},isReadonly:function(){return this.readonly||!!this.radioGroup&&this.radioGroup.isReadonly},computedName:function(){return this.name||!this.radioGroup?this.name:this.radioGroup.name||"radio-".concat(this.radioGroup._uid)},rippleState:function(){return _.a.options.computed.rippleState.call(this)},validationState:function(){return(this.radioGroup||{}).validationState||this.computedColor}},methods:{genInput:function(e){return _.a.options.methods.genInput.call(this,"radio",e)},genLabel:function(){return this.hasLabel?this.$createElement(o.a,{on:{click:_.b},attrs:{for:this.computedId},props:{color:this.validationState,focused:this.hasState}},Object(w.t)(this,"label")||this.label):null},genRadio:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(c.a,this.setTextColor(this.validationState,{props:{dense:this.radioGroup&&this.radioGroup.dense}}),this.computedIcon),this.genInput(k({name:this.computedName,value:this.value},this.attrs$)),this.genRipple(this.setTextColor(this.rippleState))])},onFocus:function(e){this.isFocused=!0,this.$emit("focus",e)},onBlur:function(e){this.isFocused=!1,this.$emit("blur",e)},onChange:function(){this.isDisabled||this.isReadonly||this.isActive||this.toggle()},onKeydown:function(){}},render:function(e){return e("div",{staticClass:"v-radio",class:this.classes,on:Object(y.c)({click:this.onChange},this.listeners$)},[this.genRadio(),this.genLabel()])}})},714:function(e,t,n){"use strict";n(15),n(10),n(12),n(11),n(7),n(13);var r=n(1),o=(n(21),n(666),n(686),n(73)),c=n(58),l=n(222),d=n(8);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m=Object(d.a)(l.a,c.a,o.a);t.a=m.extend({name:"v-radio-group",provide:function(){return{radioGroup:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},name:String,row:Boolean,value:null},computed:{classes:function(){return v(v({},o.a.options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row})}},methods:{genDefaultSlot:function(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{id:this.id,role:"radiogroup","aria-labelledby":this.computedId}},o.a.options.methods.genDefaultSlot.call(this))},genInputSlot:function(){var e=o.a.options.methods.genInputSlot.call(this);return delete e.data.on.click,e},genLabel:function(){var label=o.a.options.methods.genLabel.call(this);return label?(label.data.attrs.id=this.computedId,delete label.data.attrs.for,label.tag="legend",label):null},onClick:c.a.options.methods.onClick}})},732:function(e,t,n){"use strict";n(37),n(10);var r={name:"SequenceitemsNeverTriggeredModal",components:{CardLine:n(681).a},props:{value:{type:Boolean,required:!0},conditions:{type:Array,required:!0},newHire:{type:Object,required:!0}},data:function(){return{loading:!1}},methods:{getExternalItems:function(i,e){return"external_messages"in i?i.external_messages.filter((function(a){return a.send_via===e})):[]},triggerConditions:function(){var e=this,t=this.conditions.filter((function(a){return a.checked})).map((function(a){return a.id}));this.$newhires.triggerItems(this.newHire.id,t).then((function(data){e.$emit("input",!1),e.$emit("completed"),e.$store.dispatch("showSnackbar",e.$t("sequence.completedConditions"))}))}}},o=n(23),c=n(24),l=n.n(c),d=n(140),h=n(208),v=n(43),m=n(712),f=n(644),_=n(646),w=n(648),x=n(649),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{persistent:!0,"max-width":"950"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[e._v("\n      "+e._s(e.$t("sequence.addRightAway"))+"\n    ")]),e._v(" "),n("v-card-text",e._l(e.conditions,(function(i){return n("div",{key:i.id},[n("v-row",[n("v-col",{attrs:{cols:"1"}},[n("v-checkbox",{model:{value:i.checked,callback:function(t){e.$set(i,"checked",t)},expression:"i.checked"}})],1),e._v(" "),n("v-col",{staticClass:"pt-8"},[n("CardLine",{attrs:{index:0,removable:!1,items:i.to_do,type:"to_do"}}),e._v(" "),n("CardLine",{attrs:{index:0,removable:!1,items:i.resources,type:"resources"}}),e._v(" "),n("CardLine",{attrs:{index:0,removable:!1,items:i.badges,type:"badges"}}),e._v(" "),n("CardLine",{attrs:{index:0,removable:!1,items:i.admin_tasks,type:"admin_tasks"}}),e._v(" "),n("CardLine",{attrs:{index:0,removable:!1,items:e.getExternalItems(i,1),type:"slack_messages"}}),e._v(" "),n("CardLine",{attrs:{index:0,removable:!1,items:e.getExternalItems(i,2),type:"text_messages"}}),e._v(" "),n("CardLine",{attrs:{index:0,removable:!1,items:e.getExternalItems(i,0),type:"emails"}})],1)],1)],1)})),0),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{loading:e.loading},on:{click:e.triggerConditions}},[e._v("\n        "+e._s(e.$t("buttons.submit"))+"\n      ")])],1)],1)],1)}),[],!1,null,null,null);t.a=component.exports;l()(component,{VBtn:d.a,VCard:h.a,VCardActions:v.a,VCardText:v.b,VCardTitle:v.c,VCheckbox:m.a,VCol:f.a,VDialog:_.a,VRow:w.a,VSpacer:x.a})},733:function(e,t,n){"use strict";n(7);var r={props:{newHire:{type:Object,default:function(){return{}}},value:{type:Boolean,required:!0}},data:function(e){return{sendingPreboardingDetails:!1,phone:"",medium:1,email:e.newHire.email}},methods:{sendPreboardingDetails:function(){var e=this;this.sendingPreboardingDetails=!0;var t={};t.type=1===this.medium?"email":"phone",t.value=1===this.medium?this.email:this.phone,this.$newhires.sendPreboardingDetails(this.$route.params.id,t).then((function(){e.$emit("detailsSend",!0),e.$emit("input",!1),e.$store.dispatch("showSnackbar",e.$t("newhires.hasBeenNotified"))})).catch((function(t){e.$store.dispatch("showSnackbar",e.$t("newhires.couldNotSendMessage"))})).finally((function(){e.sendingPreboardingDetails=!1}))}}},o=n(23),c=n(24),l=n.n(c),d=n(140),h=n(208),v=n(43),m=n(646),f=n(713),_=n(714),w=n(649),x=n(65),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{persistent:!0,"max-width":"650"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[e._v("\n      "+e._s(e.$t("newhires.sendPreEmailHeader"))+"\n    ")]),e._v(" "),n("v-card-text",[n("p",[e._v("\n        "+e._s(e.$t("newhires.sendPreEmailDescr"))+"\n      ")]),e._v(" "),n("v-radio-group",{attrs:{color:"primary"},model:{value:e.medium,callback:function(t){e.medium=t},expression:"medium"}},[n("v-radio",{attrs:{label:e.$t("newhires.email"),value:1,color:"primary"}}),e._v(" "),n("v-radio",{attrs:{label:e.$t("newhires.textMessage"),value:2,color:"primary"}})],1),e._v(" "),1===e.medium?n("div",[n("v-text-field",{attrs:{label:e.$t("forms.sendEmailMessageTo")},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1):n("div",[n("v-text-field",{attrs:{label:e.$t("forms.sendTextMessageTo")},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1),e._v(" "),e.newHire.send_preboarding_details?n("div",[n("b",[e._v(e._s(e.$t("newhires.alreadySendNotification")))])]):e._e()],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){return e.$emit("input",!1)}}},[e._v("\n        "+e._s(e.$t("buttons.cancel"))+"\n      ")]),e._v(" "),n("v-btn",{attrs:{loading:e.sendingPreboardingDetails,color:"primary",dark:""},on:{click:e.sendPreboardingDetails}},[e._v("\n        "+e._s(e.$t("buttons.send"))+"\n      ")])],1)],1)],1)}),[],!1,null,null,null);t.a=component.exports;l()(component,{VBtn:d.a,VCard:h.a,VCardActions:v.a,VCardText:v.b,VCardTitle:v.c,VDialog:m.a,VRadio:f.a,VRadioGroup:_.a,VSpacer:w.a,VTextField:x.a})},758:function(e,t,n){var content=n(855);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(17).default)("b54e18da",content,!0,{sourceMap:!1})},854:function(e,t,n){"use strict";n(758)},855:function(e,t,n){var r=n(16)(!1);r.push([e.i,".border-bottom[data-v-1fd5889e]{border-bottom:1px solid #e4e4e4}.second[data-v-1fd5889e]{margin-left:10px}.first[data-v-1fd5889e]{margin-right:10px}",""]),e.exports=r},917:function(e,t,n){"use strict";n.r(t);n(7),n(25);var r=n(732),o=n(733),c={layout:"admin",components:{SequenceItemsNeverTriggeredModal:r.a,SendPreboardingModal:o.a},data:function(){return{loading:!0,submittingForm:!1,removing:!1,errors:{details:{}},newHire:{},dialog:!1,preboardingDialog:!1,disabledForm:!0,refreshForm:!0,newHireTemp:{},active:0,loadingPrev:!1,sendingEmail:!1,loginSendForm:!1,updatingAccount:!1,addSequence:!1,neverTriggeredModal:!1,conditionItems:[]}},mounted:function(){this.getNewHire(),"admin-newhire-id"===this.$route.name?this.active=0:"admin-newhire-id-profile"===this.$route.name?this.active=1:"admin-newhire-id-access"===this.$route.name?this.active=2:"admin-newhire-id-tasks"===this.$route.name?this.active=3:"admin-newhire-id-progress"===this.$route.name?this.active=4:"admin-newhire-id-forms"===this.$route.name?this.active=5:"admin-newhire-id-notes"===this.$route.name?this.active=6:"admin-newhire-id-admintasks"===this.$route.name?this.active=7:"admin-newhire-id-welcome"===this.$route.name&&(this.active=8)},methods:{getNewHire:function(){var e=this;this.$newhires.get(this.$route.params.id).then((function(t){e.newHire=t})).catch((function(t){e.$store.dispatch("showSnackbar",e.$t("newhires.noNewHire"))})).finally((function(){e.loading=!1}))},sendLoginEmail:function(){var e=this;this.sendingEmail=!0,this.$newhires.sendLoginEmail(this.$route.params.id).then((function(data){e.$store.dispatch("showSnackbar",e.$t("newhires.emailHasBeenSend")),e.loginSendForm=!1})).catch((function(e){})).finally((function(){e.sendingEmail=!1}))},remove:function(){var e=this;this.removing=!0,this.$newhires.remove(this.$route.params.id).then((function(t){e.$newhires.getAll(),e.dialog=!1,e.$store.dispatch("showSnackbar",e.$t("newhires.removed")),e.$router.push({name:"admin-newhire"})})).catch((function(t){e.$store.dispatch("showSnackbar",e.$t("newhires.notRemoved"))})).finally((function(){e.removing=!1}))},addSequenceToNewHire:function(e){var t=this;this.$newhires.addSequence(this.$route.params.id,e).then((function(){t.$newhires.checkPastSequenceItems(t.$route.params.id,[e.id]).then((function(e){e.length&&(t.neverTriggeredModal=!0,t.conditionItems=e),t.$store.commit("toggleRefreshSequence")})),t.addSequence=!1,t.$store.dispatch("showSnackbar","Sequence has been added.")}))}}},l=(n(854),n(23)),d=n(24),h=n.n(d),v=n(140),m=n(208),f=n(43),_=n(644),w=n(652),x=n(646),y=n(211),$=n(119),k=n(213),S=n(141),C=n(38),O=n(216),V=n(648),I=n(649),j=n(654),D=n(657),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",[n("v-col",{attrs:{sm:"12",mb:"8","offset-mb":"2",md:"10","offset-sm":"1"}},[n("div",[n("v-row",{staticClass:"mb-4"},[n("v-col",{attrs:{sm:"6"}},[n("h1",{staticClass:"heading",staticStyle:{"margin-top":"10px","margin-left":"11px"}},[e._v("\n            "+e._s(e.newHire.first_name)+" "+e._s(e.newHire.last_name)+"\n          ")])]),e._v(" "),n("v-col",{staticStyle:{"text-align":"right"},attrs:{sm:"6"}},[n("v-menu",{attrs:{bottom:"",left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[n("v-btn",e._g({staticStyle:{"margin-top":"15px","font-size":"20px"},attrs:{icon:""}},r),[n("v-icon",[e._v("settings")])],1)]}}])},[e._v(" "),n("v-list",[n("v-list-item",{on:{click:function(t){e.preboardingDialog=!0,e.phone=e.newHire.phone}}},[n("v-list-item-title",[e._v(e._s(e.$t("newhires.sendPreMail")))])],1),e._v(" "),n("v-list-item",{on:{click:function(t){e.loginSendForm=!0}}},[n("v-list-item-title",[e._v(e._s(e.$t("newhires.sendLoginMail")))])],1),e._v(" "),n("v-list-item",{on:{click:function(t){e.addSequence=!0}}},[n("v-list-item-title",[e._v("Add sequence")])],1),e._v(" "),n("v-divider"),e._v(" "),n("v-list-item",{on:{click:function(t){e.dialog=!0}}},[n("v-list-item-title",[e._v(e._s(e.$t("buttons.remove")))])],1)],1)],1)],1)],1),e._v(" "),n("v-container",{staticClass:"md pa-0"},[n("v-row",{staticClass:"mb-4"},[n("v-col",{attrs:{sm:"12"}},[n("v-card",{staticClass:"mb-4 second"},[n("v-col",{staticStyle:{padding:"0px"}},[n("v-tabs",{attrs:{dark:"","slider-color":"primary"},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[n("v-tab",{attrs:{ripple:""},on:{click:function(t){return e.$router.push({name:"admin-newhire-id",params:{id:e.$route.params.id}})}}},[e._v("\n                    "+e._s(e.$t("newhires.timeline"))+"\n                  ")]),e._v(" "),n("v-tab",{attrs:{ripple:""},on:{click:function(t){return e.$router.push({name:"admin-newhire-id-profile",params:{id:e.$route.params.id}})}}},[e._v("\n                    "+e._s(e.$t("newhires.profile"))+"\n                  ")]),e._v(" "),e.$store.state.org.google_key||e.$store.state.org.slack_account_key?n("v-tab",{attrs:{ripple:""},on:{click:function(t){return e.$router.push({name:"admin-newhire-id-access",params:{id:e.$route.params.id}})}}},[e._v("\n                    "+e._s(e.$t("newhires.access"))+"\n                  ")]):e._e(),e._v(" "),n("v-tab",{attrs:{ripple:""},on:{click:function(t){return e.$router.push({name:"admin-newhire-id-tasks",params:{id:e.$route.params.id}})}}},[e._v("\n                    "+e._s(e.$t("newhires.tasks"))+"\n                  ")]),e._v(" "),n("v-tab",{attrs:{ripple:""},on:{click:function(t){return e.$router.push({name:"admin-newhire-id-progress",params:{id:e.$route.params.id}})}}},[e._v("\n                    "+e._s(e.$t("newhires.progress"))+"\n                  ")]),e._v(" "),n("v-tab",{attrs:{ripple:""},on:{click:function(t){return e.$router.push({name:"admin-newhire-id-forms",params:{id:e.$route.params.id}})}}},[e._v("\n                    "+e._s(e.$t("newhires.forms"))+"\n                  ")]),e._v(" "),n("v-tab",{attrs:{ripple:""},on:{click:function(t){return e.$router.push({name:"admin-newhire-id-notes",params:{id:e.$route.params.id}})}}},[e._v("\n                    "+e._s(e.$t("newhires.notes"))+"\n                  ")]),e._v(" "),n("v-tab",{attrs:{ripple:""},on:{click:function(t){return e.$router.push({name:"admin-newhire-id-admintasks",params:{id:e.$route.params.id}})}}},[e._v("\n                    "+e._s(e.$t("newhires.adminTasks"))+"\n                  ")]),e._v(" "),n("v-tab",{attrs:{ripple:""},on:{click:function(t){return e.$router.push({name:"admin-newhire-id-welcome",params:{id:e.$route.params.id}})}}},[e._v("\n                    "+e._s(e.$t("newhires.welcomeMessages"))+"\n                  ")])],1),e._v(" "),n("div",{staticClass:"pa3"},[n("nuxt-child")],1)],1)],1)],1)],1)],1)],1)]),e._v(" "),n("v-dialog",{attrs:{persistent:!0,"max-width":"650"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[e._v("\n        "+e._s(e.$t("newhires.removeNewHireHeader"))+"\n      ")]),e._v(" "),n("v-card-text",[n("p",{domProps:{innerHTML:e._s(e.$t("newhires.removeNewHireDescr"))}})]),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"secondary",text:""},on:{click:function(t){e.dialog=!1}}},[e._v("\n          "+e._s(e.$t("buttons.cancel"))+"\n        ")]),e._v(" "),n("v-btn",{staticStyle:{color:"white"},attrs:{loading:e.removing,color:"red"},on:{click:function(t){return e.remove()}}},[e._v("\n          "+e._s(e.$t("buttons.remove"))+"\n        ")])],1)],1)],1),e._v(" "),n("v-dialog",{attrs:{persistent:!0,"max-width":"650"},model:{value:e.loginSendForm,callback:function(t){e.loginSendForm=t},expression:"loginSendForm"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[e._v("\n        "+e._s(e.$t("newhires.sendEmailHeader"))+"\n      ")]),e._v(" "),n("v-card-text",[n("p",{domProps:{innerHTML:e._s(e.$t("newhires.sendEmailNewHireDescr"))}})]),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"secondary",text:""},on:{click:function(t){e.loginSendForm=!1}}},[e._v("\n          "+e._s(e.$t("buttons.cancel"))+"\n        ")]),e._v(" "),n("v-btn",{staticStyle:{color:"white"},attrs:{loading:e.sendingEmail,color:"primary"},on:{click:function(t){return e.sendLoginEmail()}}},[e._v("\n          "+e._s(e.$t("buttons.send"))+"\n        ")])],1)],1)],1),e._v(" "),n("SendPreboardingModal",{attrs:{newhire:e.newHire},on:{changeNewHire:function(t){e.newHire=arguments[0]}},model:{value:e.preboardingDialog,callback:function(t){e.preboardingDialog=t},expression:"preboardingDialog"}}),e._v(" "),e.addSequence?n("SelectTemplates",{attrs:{items:this.$store.state.sequences.all},on:{clickedItem:e.addSequenceToNewHire},model:{value:e.addSequence,callback:function(t){e.addSequence=t},expression:"addSequence"}}):e._e(),e._v(" "),n("SequenceItemsNeverTriggeredModal",{attrs:{conditions:e.conditionItems,"new-hire":e.newHire},model:{value:e.neverTriggeredModal,callback:function(t){e.neverTriggeredModal=t},expression:"neverTriggeredModal"}})],1)}),[],!1,null,"1fd5889e",null);t.default=component.exports;h()(component,{VBtn:v.a,VCard:m.a,VCardActions:f.a,VCardText:f.b,VCardTitle:f.c,VCol:_.a,VContainer:w.a,VDialog:x.a,VDivider:y.a,VIcon:$.a,VList:k.a,VListItem:S.a,VListItemTitle:C.c,VMenu:O.a,VRow:V.a,VSpacer:I.a,VTab:j.a,VTabs:D.a})}}]);