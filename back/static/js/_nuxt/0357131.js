/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{659:function(t,e,r){t.exports=function(){"use strict";var t=Object.prototype.toString,e=Array.isArray||function(object){return"[object Array]"===t.call(object)};function r(object){return"function"==typeof object}function n(t){return e(t)?"array":typeof t}function o(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function l(t,e){return null!=t&&"object"==typeof t&&e in t}function c(t,e){return null!=t&&"object"!=typeof t&&t.hasOwnProperty&&t.hasOwnProperty(e)}var f=RegExp.prototype.test;function h(t,e){return f.call(t,e)}var v=/\S/;function d(t){return!h(v,t)}var m={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function _(t){return String(t).replace(/[&<>"'`=\/]/g,(function(s){return m[s]}))}var y=/\s*/,w=/\s+/,x=/\s*=/,k=/\s*\}/,C=/#|\^|\/|>|\{|&|=|!/;function S(template,t){if(!template)return[];var r,n,l,c=!1,f=[],h=[],v=[],m=!1,_=!1,S="",j=0;function I(){if(m&&!_)for(;v.length;)delete h[v.pop()];else v=[];m=!1,_=!1}function O(t){if("string"==typeof t&&(t=t.split(w,2)),!e(t)||2!==t.length)throw new Error("Invalid tags: "+t);r=new RegExp(o(t[0])+"\\s*"),n=new RegExp("\\s*"+o(t[1])),l=new RegExp("\\s*"+o("}"+t[1]))}O(t||V.tags);for(var U,P,M,A,R,F,H=new E(template);!H.eos();){if(U=H.pos,M=H.scanUntil(r))for(var i=0,J=M.length;i<J;++i)d(A=M.charAt(i))?(v.push(h.length),S+=A):(_=!0,c=!0,S+=" "),h.push(["text",A,U,U+1]),U+=1,"\n"===A&&(I(),S="",j=0,c=!1);if(!H.scan(r))break;if(m=!0,P=H.scan(C)||"name",H.scan(y),"="===P?(M=H.scanUntil(x),H.scan(x),H.scanUntil(n)):"{"===P?(M=H.scanUntil(l),H.scan(k),H.scanUntil(n),P="&"):M=H.scanUntil(n),!H.scan(n))throw new Error("Unclosed tag at "+H.pos);if(R=">"==P?[P,M,U,H.pos,S,j,c]:[P,M,U,H.pos],j++,h.push(R),"#"===P||"^"===P)f.push(R);else if("/"===P){if(!(F=f.pop()))throw new Error('Unopened section "'+M+'" at '+U);if(F[1]!==M)throw new Error('Unclosed section "'+F[1]+'" at '+U)}else"name"===P||"{"===P||"&"===P?_=!0:"="===P&&O(M)}if(I(),F=f.pop())throw new Error('Unclosed section "'+F[1]+'" at '+H.pos);return $(T(h))}function T(t){for(var e,r,n=[],i=0,o=t.length;i<o;++i)(e=t[i])&&("text"===e[0]&&r&&"text"===r[0]?(r[1]+=e[1],r[3]=e[3]):(n.push(e),r=e));return n}function $(t){for(var e,r=[],n=r,o=[],i=0,l=t.length;i<l;++i)switch((e=t[i])[0]){case"#":case"^":n.push(e),o.push(e),n=e[4]=[];break;case"/":o.pop()[5]=e[2],n=o.length>0?o[o.length-1][4]:r;break;default:n.push(e)}return r}function E(t){this.string=t,this.tail=t,this.pos=0}function j(view,t){this.view=view,this.cache={".":this.view},this.parent=t}function I(){this.templateCache={_cache:{},set:function(t,e){this._cache[t]=e},get:function(t){return this._cache[t]},clear:function(){this._cache={}}}}E.prototype.eos=function(){return""===this.tail},E.prototype.scan=function(t){var e=this.tail.match(t);if(!e||0!==e.index)return"";var r=e[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r},E.prototype.scanUntil=function(t){var e,r=this.tail.search(t);switch(r){case-1:e=this.tail,this.tail="";break;case 0:e="";break;default:e=this.tail.substring(0,r),this.tail=this.tail.substring(r)}return this.pos+=e.length,e},j.prototype.push=function(view){return new j(view,this)},j.prototype.lookup=function(t){var e,n=this.cache;if(n.hasOwnProperty(t))e=n[t];else{for(var o,f,h,v=this,d=!1;v;){if(t.indexOf(".")>0)for(o=v.view,f=t.split("."),h=0;null!=o&&h<f.length;)h===f.length-1&&(d=l(o,f[h])||c(o,f[h])),o=o[f[h++]];else o=v.view[t],d=l(v.view,t);if(d){e=o;break}v=v.parent}n[t]=e}return r(e)&&(e=e.call(this.view)),e},I.prototype.clearCache=function(){void 0!==this.templateCache&&this.templateCache.clear()},I.prototype.parse=function(template,t){var e=this.templateCache,r=template+":"+(t||V.tags).join(":"),n=void 0!==e,o=n?e.get(r):void 0;return null==o&&(o=S(template,t),n&&e.set(r,o)),o},I.prototype.render=function(template,view,t,e){var r=this.getConfigTags(e),n=this.parse(template,r),o=view instanceof j?view:new j(view,void 0);return this.renderTokens(n,o,t,template,e)},I.prototype.renderTokens=function(t,e,r,n,o){for(var l,symbol,c,f="",i=0,h=t.length;i<h;++i)c=void 0,"#"===(symbol=(l=t[i])[0])?c=this.renderSection(l,e,r,n,o):"^"===symbol?c=this.renderInverted(l,e,r,n,o):">"===symbol?c=this.renderPartial(l,e,r,o):"&"===symbol?c=this.unescapedValue(l,e):"name"===symbol?c=this.escapedValue(l,e,o):"text"===symbol&&(c=this.rawValue(l)),void 0!==c&&(f+=c);return f},I.prototype.renderSection=function(t,n,o,l,c){var f=this,h="",v=n.lookup(t[1]);function d(template){return f.render(template,n,o,c)}if(v){if(e(v))for(var m=0,_=v.length;m<_;++m)h+=this.renderTokens(t[4],n.push(v[m]),o,l,c);else if("object"==typeof v||"string"==typeof v||"number"==typeof v)h+=this.renderTokens(t[4],n.push(v),o,l,c);else if(r(v)){if("string"!=typeof l)throw new Error("Cannot use higher-order sections without the original template");null!=(v=v.call(n.view,l.slice(t[3],t[5]),d))&&(h+=v)}else h+=this.renderTokens(t[4],n,o,l,c);return h}},I.prototype.renderInverted=function(t,r,n,o,l){var c=r.lookup(t[1]);if(!c||e(c)&&0===c.length)return this.renderTokens(t[4],r,n,o,l)},I.prototype.indentPartial=function(t,e,r){for(var n=e.replace(/[^ \t]/g,""),o=t.split("\n"),i=0;i<o.length;i++)o[i].length&&(i>0||!r)&&(o[i]=n+o[i]);return o.join("\n")},I.prototype.renderPartial=function(t,e,n,o){if(n){var l=this.getConfigTags(o),c=r(n)?n(t[1]):n[t[1]];if(null!=c){var f=t[6],h=t[5],v=t[4],d=c;0==h&&v&&(d=this.indentPartial(c,v,f));var m=this.parse(d,l);return this.renderTokens(m,e,n,d,o)}}},I.prototype.unescapedValue=function(t,e){var r=e.lookup(t[1]);if(null!=r)return r},I.prototype.escapedValue=function(t,e,r){var n=this.getConfigEscape(r)||V.escape,o=e.lookup(t[1]);if(null!=o)return"number"==typeof o&&n===V.escape?String(o):n(o)},I.prototype.rawValue=function(t){return t[1]},I.prototype.getConfigTags=function(t){return e(t)?t:t&&"object"==typeof t?t.tags:void 0},I.prototype.getConfigEscape=function(t){return t&&"object"==typeof t&&!e(t)?t.escape:void 0};var V={name:"mustache.js",version:"4.1.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(t){O.templateCache=t},get templateCache(){return O.templateCache}},O=new I;return V.clearCache=function(){return O.clearCache()},V.parse=function(template,t){return O.parse(template,t)},V.render=function(template,view,t,e){if("string"!=typeof template)throw new TypeError('Invalid template! Template should be a "string" but "'+n(template)+'" was given as the first argument for mustache#render(template, view, partials)');return O.render(template,view,t,e)},V.escape=_,V.Scanner=E,V.Context=j,V.Writer=I,V}()},687:function(t,e,r){"use strict";var n=r(659),o=r.n(n),l={name:"IntroductionItem",props:{title:{type:String,default:""},user:{type:Object,default:function(){return{}}},disableMustache:{type:Boolean,default:!1}},computed:{message:function(){return this.disableMustache?this.user.message:o.a.render(this.user.message,this.$store.state.baseInfo.new_hire)}}},c=r(22),f=r(25),h=r.n(f),v=r(208),d=r(47),m=r(176),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h3",[t._v(t._s(t.title))]),t._v(" "),r("v-card",{attrs:{"max-width":"344",outlined:""}},[null!==t.user.profile_image?r("v-img",{staticClass:"white--text align-end",attrs:{src:t.user.profile_image.file_url,height:"200px"}}):t._e(),t._v(" "),r("v-card-text",{staticClass:"text--primary"},[r("h4",[t._v(t._s(t.user.first_name)+" "+t._s(t.user.last_name))]),t._v(" "),r("div",[t._v(t._s(t.message))]),t._v(" "),""!==t.user.linkedin?r("a",{attrs:{href:t._f("addHTTPS")(t.user.linkedin)}},[r("font-awesome-icon",{staticStyle:{color:"#0077b5 !important"},attrs:{icon:["fab","linkedin"]}})],1):t._e(),t._v(" "),""!==t.user.facebook?r("a",{attrs:{href:t._f("addHTTPS")(t.user.facebook)}},[r("font-awesome-icon",{staticStyle:{color:"#3b5998 !important"},attrs:{icon:["fab","facebook"]}})],1):t._e(),t._v(" "),""!==t.user.twitter?r("a",{attrs:{href:t._f("addHTTPS")(t.user.twitter)}},[r("font-awesome-icon",{staticStyle:{color:"#1da1f2 !important"},attrs:{icon:["fab","twitter"]}})],1):t._e(),t._v(" "),""!==t.user.email?r("a",{attrs:{href:"mailto:"+t.user.email}},[r("font-awesome-icon",{staticStyle:{color:"green !important"},attrs:{icon:["fas","envelope"]}})],1):t._e(),t._v(" "),""!==t.user.phone?r("a",{attrs:{href:"tel:"+t.user.phone}},[r("font-awesome-icon",{staticStyle:{color:"gray !important"},attrs:{icon:["fas","phone-square"]}})],1):t._e()])],1)],1)}),[],!1,null,null,null);e.a=component.exports;h()(component,{VCard:v.a,VCardText:d.b,VImg:m.a})},696:function(t,e,r){"use strict";var n={components:{IntroductionItem:r(687).a},props:{value:{type:Object,default:function(){return{}}},errors:{type:Object,default:function(){return{}}}},data:function(t){return{search:"",text:t.$t("intro.placeholders")}},computed:{errorMessages:function(){return JSON.parse(JSON.stringify(this.errors))}},watch:{value:{handler:function(t){this.$emit("input",t)},deep:!0},"value.intro_person":function(t){this.value.intro_person_id=t.id},errors:function(t){"content"in t&&this.$store.dispatch("showSnackbar","Content: "+t.content[0])}}},o=r(22),l=r(25),c=r.n(l),f=r(131),h=r(641),v=r(649),d=r(645),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{"grid-list-md":"","pa-4":""}},[r("v-row",[r("v-col",{attrs:{xs:"4"}},[r("v-col",{attrs:{xs:"12"}},[r("VTextFieldEmoji",{attrs:{label:t.$t("intro.title"),errors:t.errorMessages.name},on:{removeError:function(e){t.errorMessages.name=""}},model:{value:t.value.name,callback:function(e){t.$set(t.value,"name",e)},expression:"value.name"}})],1),t._v(" "),r("v-col",{attrs:{xs:"12"}},[r("v-autocomplete",{attrs:{items:t.$store.state.employees.all,label:t.$t("intro.selectEmployee"),"error-messages":t.errorMessages.intro_person,"item-text":"full_name","return-object":""},on:{change:function(e){t.errorMessages.intro_person=""}},model:{value:t.value.intro_person,callback:function(e){t.$set(t.value,"intro_person",e)},expression:"value.intro_person"}})],1),t._v(" "),r("v-col",{attrs:{xs:"12"}},[r("TagsSelector",{staticClass:"pt-2",model:{value:t.value.tags,callback:function(e){t.$set(t.value,"tags",e)},expression:"value.tags"}})],1)],1),t._v(" "),r("v-col",{staticStyle:{"margin-left":"20px"},attrs:{xs:"8"}},[t.value.intro_person?r("div",[r("IntroductionItem",{attrs:{title:t.value.name,user:t.value.intro_person,"disable-mustache":""}})],1):t._e(),t._v(" "),r("div",[r("i",{staticStyle:{"font-size":"12px",top:"10px",position:"relative"}},[t._v(t._s(t.text)+" ")])])])],1)],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VAutocomplete:f.a,VCol:h.a,VContainer:v.a,VRow:d.a})},733:function(t,e,r){var content=r(796);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("4db7a872",content,!0,{sourceMap:!1})},795:function(t,e,r){"use strict";r(733)},796:function(t,e,r){var n=r(16)(!1);n.push([t.i,".border-bottom[data-v-5e76b7a6]{border-bottom:1px solid #e4e4e4}.second[data-v-5e76b7a6]{margin-left:10px}.first[data-v-5e76b7a6]{margin-right:10px}",""]),t.exports=n},868:function(t,e,r){"use strict";r.r(e);r(7);var n={layout:"admin",components:{IntroForm:r(696).a},data:function(){return{loading:!1,saving:!1,errors:{},employee:{},intro:{name:"",intro_person:"",tags:[]}}},methods:{saveIntro:function(){var t=this;this.saving=!0,this.$intros.create(this.intro).then((function(data){t.$router.push({name:"admin-templates-intros"}),t.$store.dispatch("showSnackbar",t.$t("intro.created"))})).catch((function(e){t.errors=e})).finally((function(){t.saving=!1}))}}},o=(r(795),r(22)),l=r(25),c=r.n(l),f=r(144),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("TemplateCompInner",[r("template",{slot:"header"},[r("h1",{staticClass:"heading",staticStyle:{"margin-top":"10px"}},[t._v("\n      "+t._s(t.$t("intro.addHeader"))+"\n    ")])]),t._v(" "),t.loading?t._e():r("template",{slot:"formpart"},[r("LoadingIcon",{attrs:{"is-loading":t.loading}}),t._v(" "),r("IntroForm",{attrs:{errors:t.errors},model:{value:t.intro,callback:function(e){t.intro=e},expression:"intro"}})],1),t._v(" "),r("template",{slot:"footer"},[r("v-btn",{staticStyle:{float:"right"},attrs:{loading:t.saving,color:"primary"},on:{click:t.saveIntro}},[t._v("\n      "+t._s(t.$t("buttons.save"))+"\n    ")])],1)],2)}),[],!1,null,"5e76b7a6",null);e.default=component.exports;c()(component,{VBtn:f.a})}}]);