import{bb as Y,B as $,ah as be,_ as ye,l as Ce,av as he,bc as Ee,at as Be,bd as we,a2 as Me,be as ke,bf as Se,bg as Te,h as w,r as M,J as Ie,bh as x,E as _,L as ee,bi as Ae,H as Re,aL as $e,bj as Le,K as Oe,aG as k,o as c,Z as g,a0 as m,w as U,$ as C,p,t as r,D as ne,A as z,n as K,a9 as P,a1 as S,z as R,aH as D,x as Ve,y as N,ad as j,ae as ze,bk as Pe,i as De,c as le,bl as re,bm as ie,bn as se,bo as He,aR as Fe,bp as oe,am as ae}from"./index-62229c44.js";const q="_trap-focus-children",h=[],te=e=>{if(h.length===0)return;const n=h[h.length-1][q];if(n.length>0&&e.code===be.tab){if(n.length===1){e.preventDefault(),document.activeElement!==n[0]&&n[0].focus();return}const t=e.shiftKey,i=e.target===n[0],l=e.target===n[n.length-1];i&&t&&(e.preventDefault(),n[n.length-1].focus()),l&&!t&&(e.preventDefault(),n[0].focus())}},Ue={beforeMount(e){e[q]=Y(e),h.push(e),h.length<=1&&document.addEventListener("keydown",te)},updated(e){$(()=>{e[q]=Y(e)})},unmounted(){h.shift(),h.length===0&&document.removeEventListener("keydown",te)}},Ke=Ce({name:"ElMessageBox",directives:{TrapFocus:Ue},components:{ElButton:he,ElFocusTrap:Ee,ElInput:Be,ElOverlay:we,ElIcon:Me,...ke},inheritAttrs:!1,props:{buttonSize:{type:String,validator:Se},modal:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},closeOnHashChange:{type:Boolean,default:!0},center:Boolean,draggable:Boolean,roundButton:{default:!1,type:Boolean},container:{type:String,default:"body"},boxType:{type:String,default:""}},emits:["vanish","action"],setup(e,{emit:n}){const{locale:t,zIndex:i,ns:l,size:o}=Te("message-box",w(()=>e.buttonSize)),{t:d}=t,{nextZIndex:f}=i,y=M(!1),s=Ie({autofocus:!0,beforeClose:null,callback:null,cancelButtonText:"",cancelButtonClass:"",confirmButtonText:"",confirmButtonClass:"",customClass:"",customStyle:{},dangerouslyUseHTMLString:!1,distinguishCancelAndClose:!1,icon:"",inputPattern:null,inputPlaceholder:"",inputType:"text",inputValue:null,inputValidator:null,inputErrorMessage:"",message:null,modalFade:!0,modalClass:"",showCancelButton:!1,showConfirmButton:!0,type:"",title:void 0,showInput:!1,action:"",confirmButtonLoading:!1,cancelButtonLoading:!1,confirmButtonDisabled:!1,editorErrorMessage:"",validateError:!1,zIndex:f()}),H=w(()=>{const a=s.type;return{[l.bm("icon",a)]:a&&x[a]}}),F=_(),u=_(),ue=w(()=>s.icon||x[s.type]||""),de=w(()=>!!s.message),E=M(),G=M(),I=M(),O=M(),X=M(),ce=w(()=>s.confirmButtonClass);ee(()=>s.inputValue,async a=>{await $(),e.boxType==="prompt"&&a!==null&&J()},{immediate:!0}),ee(()=>y.value,a=>{var v,B;a&&(e.boxType!=="prompt"&&(s.autofocus?I.value=(B=(v=X.value)==null?void 0:v.$el)!=null?B:E.value:I.value=E.value),s.zIndex=f()),e.boxType==="prompt"&&(a?$().then(()=>{var Q;O.value&&O.value.$el&&(s.autofocus?I.value=(Q=ve())!=null?Q:E.value:I.value=E.value)}):(s.editorErrorMessage="",s.validateError=!1))});const fe=w(()=>e.draggable);Ae(E,G,fe),Re(async()=>{await $(),e.closeOnHashChange&&window.addEventListener("hashchange",A)}),$e(()=>{e.closeOnHashChange&&window.removeEventListener("hashchange",A)});function A(){y.value&&(y.value=!1,$(()=>{s.action&&n("action",s.action)}))}const Z=()=>{e.closeOnClickModal&&V(s.distinguishCancelAndClose?"close":"cancel")},me=Pe(Z),pe=a=>{if(s.inputType!=="textarea")return a.preventDefault(),V("confirm")},V=a=>{var v;e.boxType==="prompt"&&a==="confirm"&&!J()||(s.action=a,s.beforeClose?(v=s.beforeClose)==null||v.call(s,a,s,A):A())},J=()=>{if(e.boxType==="prompt"){const a=s.inputPattern;if(a&&!a.test(s.inputValue||""))return s.editorErrorMessage=s.inputErrorMessage||d("el.messagebox.error"),s.validateError=!0,!1;const v=s.inputValidator;if(typeof v=="function"){const B=v(s.inputValue);if(B===!1)return s.editorErrorMessage=s.inputErrorMessage||d("el.messagebox.error"),s.validateError=!0,!1;if(typeof B=="string")return s.editorErrorMessage=B,s.validateError=!0,!1}}return s.editorErrorMessage="",s.validateError=!1,!0},ve=()=>{const a=O.value.$refs;return a.input||a.textarea},W=()=>{V("close")},ge=()=>{e.closeOnPressEscape&&W()};return e.lockScroll&&Le(y),{...Oe(s),ns:l,overlayEvent:me,visible:y,hasMessage:de,typeClass:H,contentId:F,inputId:u,btnSize:o,iconComponent:ue,confirmButtonClasses:ce,rootRef:E,focusStartRef:I,headerRef:G,inputRef:O,confirmRef:X,doClose:A,handleClose:W,onCloseRequested:ge,handleWrapperClick:Z,handleInputEnter:pe,handleAction:V,t:d}}}),Ne=["aria-label","aria-describedby"],je=["aria-label"],qe=["id"];function Ge(e,n,t,i,l,o){const d=k("el-icon"),f=k("close"),y=k("el-input"),s=k("el-button"),H=k("el-focus-trap"),F=k("el-overlay");return c(),g(ze,{name:"fade-in-linear",onAfterLeave:n[11]||(n[11]=u=>e.$emit("vanish")),persisted:""},{default:m(()=>[U(C(F,{"z-index":e.zIndex,"overlay-class":[e.ns.is("message-box"),e.modalClass],mask:e.modal},{default:m(()=>[p("div",{role:"dialog","aria-label":e.title,"aria-modal":"true","aria-describedby":e.showInput?void 0:e.contentId,class:r(`${e.ns.namespace.value}-overlay-message-box`),onClick:n[8]||(n[8]=(...u)=>e.overlayEvent.onClick&&e.overlayEvent.onClick(...u)),onMousedown:n[9]||(n[9]=(...u)=>e.overlayEvent.onMousedown&&e.overlayEvent.onMousedown(...u)),onMouseup:n[10]||(n[10]=(...u)=>e.overlayEvent.onMouseup&&e.overlayEvent.onMouseup(...u))},[C(H,{loop:"",trapped:e.visible,"focus-trap-el":e.rootRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:m(()=>[p("div",{ref:"rootRef",class:r([e.ns.b(),e.customClass,e.ns.is("draggable",e.draggable),{[e.ns.m("center")]:e.center}]),style:ne(e.customStyle),tabindex:"-1",onClick:n[7]||(n[7]=z(()=>{},["stop"]))},[e.title!==null&&e.title!==void 0?(c(),K("div",{key:0,ref:"headerRef",class:r(e.ns.e("header"))},[p("div",{class:r(e.ns.e("title"))},[e.iconComponent&&e.center?(c(),g(d,{key:0,class:r([e.ns.e("status"),e.typeClass])},{default:m(()=>[(c(),g(P(e.iconComponent)))]),_:1},8,["class"])):S("v-if",!0),p("span",null,R(e.title),1)],2),e.showClose?(c(),K("button",{key:0,type:"button",class:r(e.ns.e("headerbtn")),"aria-label":e.t("el.messagebox.close"),onClick:n[0]||(n[0]=u=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel")),onKeydown:n[1]||(n[1]=D(z(u=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel"),["prevent"]),["enter"]))},[C(d,{class:r(e.ns.e("close"))},{default:m(()=>[C(f)]),_:1},8,["class"])],42,je)):S("v-if",!0)],2)):S("v-if",!0),p("div",{id:e.contentId,class:r(e.ns.e("content"))},[p("div",{class:r(e.ns.e("container"))},[e.iconComponent&&!e.center&&e.hasMessage?(c(),g(d,{key:0,class:r([e.ns.e("status"),e.typeClass])},{default:m(()=>[(c(),g(P(e.iconComponent)))]),_:1},8,["class"])):S("v-if",!0),e.hasMessage?(c(),K("div",{key:1,class:r(e.ns.e("message"))},[Ve(e.$slots,"default",{},()=>[e.dangerouslyUseHTMLString?(c(),g(P(e.showInput?"label":"p"),{key:1,for:e.showInput?e.inputId:void 0,innerHTML:e.message},null,8,["for","innerHTML"])):(c(),g(P(e.showInput?"label":"p"),{key:0,for:e.showInput?e.inputId:void 0},{default:m(()=>[N(R(e.dangerouslyUseHTMLString?"":e.message),1)]),_:1},8,["for"]))])],2)):S("v-if",!0)],2),U(p("div",{class:r(e.ns.e("input"))},[C(y,{id:e.inputId,ref:"inputRef",modelValue:e.inputValue,"onUpdate:modelValue":n[2]||(n[2]=u=>e.inputValue=u),type:e.inputType,placeholder:e.inputPlaceholder,"aria-invalid":e.validateError,class:r({invalid:e.validateError}),onKeydown:D(e.handleInputEnter,["enter"])},null,8,["id","modelValue","type","placeholder","aria-invalid","class","onKeydown"]),p("div",{class:r(e.ns.e("errormsg")),style:ne({visibility:e.editorErrorMessage?"visible":"hidden"})},R(e.editorErrorMessage),7)],2),[[j,e.showInput]])],10,qe),p("div",{class:r(e.ns.e("btns"))},[e.showCancelButton?(c(),g(s,{key:0,loading:e.cancelButtonLoading,class:r([e.cancelButtonClass]),round:e.roundButton,size:e.btnSize,onClick:n[3]||(n[3]=u=>e.handleAction("cancel")),onKeydown:n[4]||(n[4]=D(z(u=>e.handleAction("cancel"),["prevent"]),["enter"]))},{default:m(()=>[N(R(e.cancelButtonText||e.t("el.messagebox.cancel")),1)]),_:1},8,["loading","class","round","size"])):S("v-if",!0),U(C(s,{ref:"confirmRef",type:"primary",loading:e.confirmButtonLoading,class:r([e.confirmButtonClasses]),round:e.roundButton,disabled:e.confirmButtonDisabled,size:e.btnSize,onClick:n[5]||(n[5]=u=>e.handleAction("confirm")),onKeydown:n[6]||(n[6]=D(z(u=>e.handleAction("confirm"),["prevent"]),["enter"]))},{default:m(()=>[N(R(e.confirmButtonText||e.t("el.messagebox.confirm")),1)]),_:1},8,["loading","class","round","disabled","size"]),[[j,e.showConfirmButton]])],2)],6)]),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])],42,Ne)]),_:3},8,["z-index","overlay-class","mask"]),[[j,e.visible]])]),_:3})}var Xe=ye(Ke,[["render",Ge],["__file","/home/runner/work/element-plus/element-plus/packages/components/message-box/src/index.vue"]]);const L=new Map,Ze=e=>{let n=document.body;return e.appendTo&&(le(e.appendTo)&&(n=document.querySelector(e.appendTo)),ae(e.appendTo)&&(n=e.appendTo),ae(n)||(n=document.body)),n},Je=(e,n,t=null)=>{const i=C(Xe,e,oe(e.message)||re(e.message)?{default:oe(e.message)?e.message:()=>e.message}:null);return i.appContext=t,ie(i,n),Ze(e).appendChild(n.firstElementChild),i.component},We=()=>document.createElement("div"),Qe=(e,n)=>{const t=We();e.onVanish=()=>{ie(null,t),L.delete(l)},e.onAction=o=>{const d=L.get(l);let f;e.showInput?f={value:l.inputValue,action:o}:f=o,e.callback?e.callback(f,i.proxy):o==="cancel"||o==="close"?e.distinguishCancelAndClose&&o!=="cancel"?d.reject("close"):d.reject("cancel"):d.resolve(f)};const i=Je(e,t,n),l=i.proxy;for(const o in e)se(e,o)&&!se(l.$props,o)&&(l[o]=e[o]);return l.visible=!0,l};function T(e,n=null){if(!De)return Promise.reject();let t;return le(e)||re(e)?e={message:e}:t=e.callback,new Promise((i,l)=>{const o=Qe(e,n??T._context);L.set(o,{options:e,callback:t,resolve:i,reject:l})})}const Ye=["alert","confirm","prompt"],xe={alert:{closeOnPressEscape:!1,closeOnClickModal:!1},confirm:{showCancelButton:!0},prompt:{showCancelButton:!0,showInput:!0}};Ye.forEach(e=>{T[e]=_e(e)});function _e(e){return(n,t,i,l)=>{let o="";return He(t)?(i=t,o=""):Fe(t)?o="":o=t,T(Object.assign({title:o,message:n,type:"",...xe[e]},i,{boxType:e}),l)}}T.close=()=>{L.forEach((e,n)=>{n.doClose()}),L.clear()};T._context=null;const b=T;b.install=e=>{b._context=e._context,e.config.globalProperties.$msgbox=b,e.config.globalProperties.$messageBox=b,e.config.globalProperties.$alert=b.alert,e.config.globalProperties.$confirm=b.confirm,e.config.globalProperties.$prompt=b.prompt};const nn=b;export{nn as E};
