import{b as g,l as p,m as _,h as o,I as O,o as h,Z as w,a0 as $,x as v,t as N,q as c,D as j,a9 as x,_ as C,N as E,P as u,Q as r,g as S,e as b,bo as k}from"./index-62229c44.js";const R=Symbol("rowContextKey"),K=["start","center","end","space-around","space-between","space-evenly"],P=["top","middle","bottom"],B=g({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:K,default:"start"},align:{type:String,values:P,default:"top"}}),D=p({name:"ElRow"}),I=p({...D,props:B,setup(f){const t=f,l=_("row"),a=o(()=>t.gutter);O(R,{gutter:a});const i=o(()=>{const e={};return t.gutter&&(e.marginRight=e.marginLeft=`-${t.gutter/2}px`),e}),m=o(()=>[l.b(),l.is(`justify-${t.justify}`,t.justify!=="start"),l.is(`align-${t.align}`,t.align!=="top")]);return(e,d)=>(h(),w(x(e.tag),{class:N(c(m)),style:j(c(i))},{default:$(()=>[v(e.$slots,"default")]),_:3},8,["class","style"]))}});var L=C(I,[["__file","/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue"]]);const F=E(L),q=g({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:u([Number,Object]),default:()=>r({})},sm:{type:u([Number,Object]),default:()=>r({})},md:{type:u([Number,Object]),default:()=>r({})},lg:{type:u([Number,Object]),default:()=>r({})},xl:{type:u([Number,Object]),default:()=>r({})}}),A=p({name:"ElCol"}),J=p({...A,props:q,setup(f){const t=f,{gutter:l}=S(R,{gutter:o(()=>0)}),a=_("col"),i=o(()=>{const e={};return l.value&&(e.paddingLeft=e.paddingRight=`${l.value/2}px`),e}),m=o(()=>{const e=[];return["span","offset","pull","push"].forEach(s=>{const n=t[s];b(n)&&(s==="span"?e.push(a.b(`${t[s]}`)):n>0&&e.push(a.b(`${s}-${t[s]}`)))}),["xs","sm","md","lg","xl"].forEach(s=>{b(t[s])?e.push(a.b(`${s}-${t[s]}`)):k(t[s])&&Object.entries(t[s]).forEach(([n,y])=>{e.push(n!=="span"?a.b(`${s}-${n}-${y}`):a.b(`${s}-${y}`))})}),l.value&&e.push(a.is("guttered")),[a.b(),e]});return(e,d)=>(h(),w(x(e.tag),{class:N(c(m)),style:j(c(i))},{default:$(()=>[v(e.$slots,"default")]),_:3},8,["class","style"]))}});var Q=C(J,[["__file","/home/runner/work/element-plus/element-plus/packages/components/col/src/col.vue"]]);const G=E(Q);export{F as E,G as a};
