"use strict";(self["webpackChunkadmin_one_vue_tailwind"]=self["webpackChunkadmin_one_vue_tailwind"]||[]).push([[790],{455:function(e,t,l){l.d(t,{Z:function(){return W}});var n=l(6252),o=l(3577),u={class:"flex items-center justify-center flex-col md:flex-row text-2xl text-gray-500 dark:text-gray-400 mb-12"},a=(0,n._)("span",{class:"md:mr-3"},"Please star this project on",-1),r={href:"https://github.com/justboil/admin-one-vue-tailwind",class:"inline-flex items-center justify-center text-blue-500",target:"_blank"},i=(0,n._)("span",null,"GitHub",-1),c={class:"text-2xl text-gray-500 dark:text-gray-400 mb-12"},m=(0,n.Uk)(" Check out other components and layouts at"),s=(0,n._)("br",null,null,-1),d=(0,n.Uk)(", "),p=(0,n._)("br",null,null,-1),f=(0,n.Uk)(" screen samples "),b=(0,n._)("h1",{class:"text-2xl text-gray-500 dark:text-gray-400"},[(0,n.Uk)(" Get more with "),(0,n._)("a",{href:"https://justboil.me/tailwind-admin-templates/vue-dashboard/",target:"_blank",class:"text-blue-500"},"Premium version")],-1);function h(e,t,l,h,w,y){var g=(0,n.up)("icon"),k=(0,n.up)("router-link"),v=(0,n.up)("titled-section");return(0,n.wg)(),(0,n.j4)(v,{last:""},{default:(0,n.w5)((function(){return[(0,n._)("h1",u,[a,(0,n._)("a",r,[(0,n.Wm)(g,{path:h.mdiGithub,size:"36",class:"mr-1"},null,8,["path"]),i])]),(0,n._)("h1",c,[m,s,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(h.screens,(function(e,t){return(0,n.wg)(),(0,n.iD)(n.HY,{key:e.path},[(0,n.Wm)(k,{to:e.path,class:"text-blue-500"},{default:(0,n.w5)((function(){return[(0,n.Uk)((0,o.zw)(e.title),1)]})),_:2},1032,["to"]),t+1<h.screens.length?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[d],64)):(0,n.kq)("",!0)],64)})),128)),p,f]),b]})),_:1})}var w=l(2119),y=l(5317),g=l(4453),k=l(2209),v={name:"BottomOtherPagesSection",components:{TitledSection:g.Z,Icon:k.Z},setup:function(){var e=(0,w.tv)(),t=e.getRoutes(),l=[];for(var n in t){var o=t[n].path,u=t[n].meta&&t[n].meta.title?t[n].meta.title:null;u&&l.push({path:o,title:u})}return{screens:l,mdiGithub:y.LcO}}},x=l(3744);const _=(0,x.Z)(v,[["render",h]]);var W=_},9830:function(e,t,l){l.d(t,{Z:function(){return f}});l(8309);var n=l(6252),o=l(3577),u=l(9963),a=["type","name","value"],r=(0,n._)("span",{class:"check"},null,-1),i={class:"control-label"};function c(e,t,l,c,m,s){return(0,n.wg)(),(0,n.iD)("div",{class:(0,o.C_)(["flex justify-start flex-wrap -mb-3",{"flex-col":l.column}])},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(l.options,(function(e,m){return(0,n.wg)(),(0,n.iD)("label",{key:m,class:(0,o.C_)([l.type,"mr-6 mb-3 last:mr-0"])},[(0,n.wy)((0,n._)("input",{type:c.inputType,name:l.name,"onUpdate:modelValue":t[0]||(t[0]=function(e){return c.computedValue=e}),value:m},null,8,a),[[u.YZ,c.computedValue]]),r,(0,n._)("span",i,(0,o.zw)(e),1)],2)})),128))],2)}l(9653);var m=l(2262),s={name:"CheckRadioPicker",props:{options:{type:Object,default:function(){}},name:{type:String,required:!0},type:{type:String,default:"checkbox"},column:Boolean,modelValue:[String,Number,Boolean,Array]},emits:["update:modelValue"],setup:function(e,t){var l=t.emit,n=(0,m.Fl)({get:function(){return e.modelValue},set:function(e){l("update:modelValue",e)}}),o=(0,m.Fl)((function(){return"radio"===e.type?"radio":"checkbox"}));return{computedValue:n,inputType:o}}},d=l(3744);const p=(0,d.Z)(s,[["render",c]]);var f=p},338:function(e,t,l){l.d(t,{Z:function(){return p}});var n=l(6252),o=l(3577),u={class:"mb-6 last:mb-0"},a={key:0,class:"block font-bold mb-2"},r={key:1,class:"text-xs text-gray-500 dark:text-gray-400 mt-1"};function i(e,t,l,i,c,m){return(0,n.wg)(),(0,n.iD)("div",u,[l.label?((0,n.wg)(),(0,n.iD)("label",a,(0,o.zw)(l.label),1)):(0,n.kq)("",!0),(0,n._)("div",{class:(0,o.C_)(i.wrapperClass)},[(0,n.WI)(e.$slots,"default")],2),l.help?((0,n.wg)(),(0,n.iD)("div",r,(0,o.zw)(l.help),1)):(0,n.kq)("",!0)])}var c=l(2262),m={name:"Field",props:{label:String,help:String},setup:function(e,t){var l=t.slots,n=(0,c.Fl)((function(){var e=[],t=l.default().length;return t>1&&e.push("grid grid-cols-1 gap-3"),2===t&&e.push("md:grid-cols-2"),e}));return{wrapperClass:n}}},s=l(3744);const d=(0,s.Z)(m,[["render",i]]);var p=d},36:function(e,t,l){l.d(t,{Z:function(){return w}});l(8309);var n=l(6252),o=l(3577),u={class:"flex items-stretch justify-start relative"},a={class:"inline-flex"},r=["accept"],i={key:0},c={class:"inline-flex px-4 py-2 justify-center bg-gray-100 border-gray-200 border rounded-r"};function m(e,t,l,m,s,d){var p=(0,n.up)("jb-button");return(0,n.wg)(),(0,n.iD)("div",u,[(0,n._)("label",a,[(0,n.Wm)(p,{as:"a",label:l.label,icon:l.icon,color:l.color,class:(0,o.C_)({"rounded-r-none":m.file})},null,8,["label","icon","color","class"]),(0,n._)("input",{type:"file",ref:"root",class:"absolute top-0 left-0 w-full h-full opacity-0 outline-none cursor-pointer -z-1",accept:l.accept,onInput:t[0]||(t[0]=function(){return m.upload&&m.upload.apply(m,arguments)})},null,40,r)]),m.file?((0,n.wg)(),(0,n.iD)("div",i,[(0,n._)("span",c,(0,o.zw)(m.file.name),1)])):(0,n.kq)("",!0)])}var s=l(5317),d=l(2262),p=l(1479),f={name:"FilePicker",components:{JbButton:p.Z},props:{modelValue:[Object,File,Array],label:{type:String,default:"Upload"},icon:{type:String,default:s.xyB},accept:{type:String,default:null},color:{type:String,default:"info"}},emits:["update:modelValue"],setup:function(e,t){var l=t.emit,o=(0,d.iH)(null),u=(0,d.iH)(e.modelValue),a=(0,d.Fl)((function(){return e.modelValue}));(0,n.YP)(a,(function(e){u.value=e,e||(o.value.input.value=null)}));var r=function(e){var t=e.target.files||e.dataTransfer.files;u.value=t[0],l("update:modelValue",u.value)};return{root:o,file:u,upload:r}}},b=l(3744);const h=(0,b.Z)(f,[["render",m]]);var w=h},4453:function(e,t,l){l.d(t,{Z:function(){return m}});var n=l(6252),o=l(3577),u={key:1,class:"text-2xl text-gray-500 dark:text-gray-400"};function a(e,t,l,a,r,i){return(0,n.wg)(),(0,n.iD)("section",{class:(0,o.C_)(["py-24 px-6 lg:px-0 lg:max-w-2xl lg:mx-auto text-center",{"-mb-6":l.first,"-mt-6":l.last,"-my-6":!l.first&&!l.last}])},[l.custom?(0,n.WI)(e.$slots,"default",{key:0}):((0,n.wg)(),(0,n.iD)("h1",u,[(0,n.WI)(e.$slots,"default")]))],2)}var r={name:"TitledSection",props:{custom:Boolean,first:Boolean,last:Boolean}},i=l(3744);const c=(0,i.Z)(r,[["render",a]]);var m=c},578:function(e,t,l){l.r(t),l.d(t,{default:function(){return F}});l(8309);var n=l(6252),o=l(9963),u=(0,n.Uk)("Forms"),a=(0,n.Uk)(" Custom elements ");function r(e,t,l,r,i,c){var m=(0,n.up)("title-bar"),s=(0,n.up)("hero-bar"),d=(0,n.up)("title-sub-bar"),p=(0,n.up)("control"),f=(0,n.up)("field"),b=(0,n.up)("divider"),h=(0,n.up)("jb-button"),w=(0,n.up)("jb-buttons"),y=(0,n.up)("card-component"),g=(0,n.up)("main-section"),k=(0,n.up)("titled-section"),v=(0,n.up)("check-radio-picker"),x=(0,n.up)("file-picker"),_=(0,n.up)("bottom-other-pages-section");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(m,{"title-stack":r.titleStack},null,8,["title-stack"]),(0,n.Wm)(s,null,{default:(0,n.w5)((function(){return[u]})),_:1}),(0,n.Wm)(g,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(d,{icon:r.mdiBallotOutline,title:"Forms example"},null,8,["icon"]),(0,n.Wm)(y,{title:"Forms",icon:r.mdiBallot,onSubmit:(0,o.iM)(r.submit,["prevent"]),form:""},{default:(0,n.w5)((function(){return[(0,n.Wm)(f,{label:"Grouped with icons"},{default:(0,n.w5)((function(){return[(0,n.Wm)(p,{icon:r.mdiAccount,modelValue:r.form.name,"onUpdate:modelValue":t[0]||(t[0]=function(e){return r.form.name=e})},null,8,["icon","modelValue"]),(0,n.Wm)(p,{type:"email",icon:r.mdiMail,modelValue:r.form.email,"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.form.email=e})},null,8,["icon","modelValue"])]})),_:1}),(0,n.Wm)(f,{label:"With help line",help:"Do not enter the leading zero"},{default:(0,n.w5)((function(){return[(0,n.Wm)(p,{type:"tel",placeholder:"Your phone number",modelValue:r.form.phone,"onUpdate:modelValue":t[2]||(t[2]=function(e){return r.form.phone=e})},null,8,["modelValue"])]})),_:1}),(0,n.Wm)(f,{label:"Dropdown"},{default:(0,n.w5)((function(){return[(0,n.Wm)(p,{options:r.selectOptions,modelValue:r.form.department,"onUpdate:modelValue":t[3]||(t[3]=function(e){return r.form.department=e})},null,8,["options","modelValue"])]})),_:1}),(0,n.Wm)(b),(0,n.Wm)(f,{label:"Question",help:"Your question. Max 255 characters"},{default:(0,n.w5)((function(){return[(0,n.Wm)(p,{type:"textarea",placeholder:"Explain how we can help you"})]})),_:1}),(0,n.Wm)(b),(0,n.Wm)(w,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(h,{type:"submit",color:"info",label:"Submit"}),(0,n.Wm)(h,{type:"reset",color:"info",outline:"",label:"Reset"})]})),_:1})]})),_:1},8,["icon","onSubmit"])]})),_:1}),(0,n.Wm)(k,null,{default:(0,n.w5)((function(){return[a]})),_:1}),(0,n.Wm)(g,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(y,{title:"Custom elements",icon:r.mdiBallotOutline},{default:(0,n.w5)((function(){return[(0,n.Wm)(f,{label:"Checkbox","wrap-body":""},{default:(0,n.w5)((function(){return[(0,n.Wm)(v,{name:"sample-checkbox",modelValue:r.customElementsForm.checkbox,"onUpdate:modelValue":t[4]||(t[4]=function(e){return r.customElementsForm.checkbox=e}),options:{lorem:"Lorem",ipsum:"Ipsum",dolore:"Dolore"}},null,8,["modelValue"])]})),_:1}),(0,n.Wm)(b),(0,n.Wm)(f,{label:"Radio","wrap-body":""},{default:(0,n.w5)((function(){return[(0,n.Wm)(v,{name:"sample-radio",type:"radio",modelValue:r.customElementsForm.radio,"onUpdate:modelValue":t[5]||(t[5]=function(e){return r.customElementsForm.radio=e}),options:{one:"One",two:"Two"}},null,8,["modelValue"])]})),_:1}),(0,n.Wm)(b),(0,n.Wm)(f,{label:"Switch"},{default:(0,n.w5)((function(){return[(0,n.Wm)(v,{name:"sample-switch",type:"switch",modelValue:r.customElementsForm.switch,"onUpdate:modelValue":t[6]||(t[6]=function(e){return r.customElementsForm.switch=e}),options:{one:"One",two:"Two"}},null,8,["modelValue"])]})),_:1}),(0,n.Wm)(b),(0,n.Wm)(x,{modelValue:r.customElementsForm.file,"onUpdate:modelValue":t[7]||(t[7]=function(e){return r.customElementsForm.file=e})},null,8,["modelValue"])]})),_:1},8,["icon"])]})),_:1}),(0,n.Wm)(_)],64)}var i=l(2262),c=l(5317),m=l(179),s=l(5122),d=l(1330),p=l(9830),f=l(36),b=l(5685),h=l(338),w=l(2439),y=l(4312),g=l(1479),k=l(9275),v=l(455),x=l(4453),_=l(5231),W={name:"Forms",components:{TitleSubBar:_.Z,TitledSection:x.Z,Divider:y.Z,MainSection:m.Z,HeroBar:b.Z,FilePicker:f.Z,CheckRadioPicker:p.Z,CardComponent:d.Z,TitleBar:s.Z,Field:h.Z,Control:w.Z,JbButton:g.Z,JbButtons:k.Z,BottomOtherPagesSection:v.Z},setup:function(){var e=(0,i.iH)(["Admin","Forms"]),t=[{id:1,label:"Business development"},{id:2,label:"Marketing"},{id:3,label:"Sales"}],l=(0,i.qj)({name:"John Doe",email:"john.doe@example.com",phone:"",department:t[0],subject:"",question:""}),n=(0,i.qj)({checkbox:["lorem"],radio:"one",switch:["one"],file:null}),o=function(){};return{titleStack:e,selectOptions:t,form:l,customElementsForm:n,submit:o,mdiBallot:c.hjO,mdiBallotOutline:c.fmz,mdiAccount:c.rI3,mdiMail:c.xaU,mdiCheck:c.oL1}}},V=l(3744);const Z=(0,V.Z)(W,[["render",r]]);var F=Z}}]);
//# sourceMappingURL=forms-legacy.9b6b45d4.js.map