import{ap as F,l as N,o as u,n as b,p as d,$ as a,a0 as o,a4 as g,aw as i,ax as A,ay as $,y as r,ac as C,Z as v,aI as P,aJ as B,at as L,av as T,az as U,au as O,aB as W,aC as z,as as S}from"./index-62229c44.js";import{E as D,a as J}from"./el-col-2a18ee9a.js";import{a as M,b as R,c as Z,d as j}from"./index-41f23380.js";import{c as q}from"./cloneDeep-af9ad142.js";const G=N({data(){return{options:[{value:!0,label:"是"},{value:!1,label:"否"}],options1:[{value1:0,label1:"升序"},{value1:1,label1:"降序"}],value:"",value1:"",input:"",adCates:[],page:{total:0,current:1,size:10},dialogFormVisible:!1,adCate:{catName:"",createTime:"",deleted:0,id:0,parentId:0,showInNav:!0,sortOrder:0,updateTime:""},formLabelWidth:80}},mounted(){this.getAdCatesPage()},methods:{toEdit(e){console.log(e),this.dialogFormVisible=!0,this.adCate=q(e)},getAdCatesPage(){M().then(e=>{console.log(e),console.log(e.data.articleCats),this.adCates=e.data.articleCats}).catch(e=>{console.log(e)})},currentchange(e){this.getAdCatesPage(e),this.page.current=e},del(e){console.log(e),R({id:e}).then(p=>{if(p.success)this.getAdCatesPage(this.page.current);else return console.log(p),!1}).catch(p=>{})},toAdd(){this.dialogFormVisible=!0},save(){const e=this.adCate;e.id==0?Z(e).then(l=>{if(l.success)this.dialogFormVisible=!1,this.getAdCatesPage(this.page.current),i(l.msg);else return i(l.msg),!1}).catch(l=>{i("网络错误联系管理员")}):j(e).then(l=>{if(l.success)this.dialogFormVisible=!1,this.getAdCatesPage(this.page.current),i(l.msg);else return i(l.msg),!1}).catch(l=>{i("网络错误联系管理员")})}}}),V=e=>(P("data-v-2dcf5ff0"),e=e(),B(),e),H={class:"adCates"},K=V(()=>d("div",{class:"title"},[d("div",{class:"text"},[d("h1",null,"类别管理")])],-1)),Q={class:"cat_rig"},X=V(()=>d("div",{class:"grid-content bg-purple"},null,-1)),Y={class:"grid-content bg-purple"},x={class:"grid-content bg-purple"},ee={class:"grid-content bg-purple"},ae={class:"dialog-footer"};function le(e,l,p,te,oe,de){const c=J,f=L,s=T,w=D,n=U,k=A,m=O,_=W,h=z,E=S,y=$;return u(),b(g,null,[d("div",H,[K,d("div",Q,[a(w,{gutter:20},{default:o(()=>[a(c,{span:6},{default:o(()=>[X]),_:1}),a(c,{span:6},{default:o(()=>[d("div",Y,[a(f,{modelValue:e.input,"onUpdate:modelValue":l[0]||(l[0]=t=>e.input=t),placeholder:"请输入id"},null,8,["modelValue"])])]),_:1}),a(c,{span:2},{default:o(()=>[d("div",x,[a(s,{type:"warning",onClick:e.search},{default:o(()=>[r("搜索")]),_:1},8,["onClick"])])]),_:1}),a(c,{span:2},{default:o(()=>[d("div",ee,[a(s,{type:"warning",onClick:e.toAdd},{default:o(()=>[r("添加")]),_:1},8,["onClick"])])]),_:1})]),_:1})]),a(k,{data:e.adCates,style:{width:"100%"},border:""},{default:o(()=>[a(n,{fixed:"",prop:"id",label:"序号",width:"80"}),a(n,{prop:"catName",label:"类别名称",width:""}),a(n,{prop:"createTime",label:"创建时间",width:""}),a(n,{prop:"showInNav",label:"是否导航显示"}),a(n,{prop:"sortOrder",label:"排序",width:""}),a(n,{fixed:"right",label:"操作",width:""},{default:o(t=>[a(s,{link:"",type:"primary",size:"small",onClick:I=>e.toEdit(t.row)},{default:o(()=>[r("更新")]),_:2},1032,["onClick"]),a(s,{link:"",type:"primary",size:"small",onClick:I=>e.del(t.row.id)},{default:o(()=>[r("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),a(y,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":l[6]||(l[6]=t=>e.dialogFormVisible=t),title:"类别信息编辑"},{footer:o(()=>[d("span",ae,[a(s,{onClick:l[5]||(l[5]=t=>e.dialogFormVisible=!1)},{default:o(()=>[r("Cancel")]),_:1}),a(s,{type:"primary",onClick:e.save},{default:o(()=>[r(" 保存 ")]),_:1},8,["onClick"])])]),default:o(()=>[a(E,{model:e.adCate},{default:o(()=>[a(m,{label:"类别名称","label-width":e.formLabelWidth},{default:o(()=>[a(f,{modelValue:e.adCate.catName,"onUpdate:modelValue":l[1]||(l[1]=t=>e.adCate.catName=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),a(m,{label:"父id","label-width":e.formLabelWidth},{default:o(()=>[a(f,{modelValue:e.adCate.parentId,"onUpdate:modelValue":l[2]||(l[2]=t=>e.adCate.parentId=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),a(m,{label:"显示导航","label-width":e.formLabelWidth},{default:o(()=>[a(h,{modelValue:e.adCate.showInNav,"onUpdate:modelValue":l[3]||(l[3]=t=>e.adCate.showInNav=t),placeholder:"请选择"},{default:o(()=>[(u(!0),b(g,null,C(e.options,t=>(u(),v(_,{key:t.value,label:t.label,value:t.value,disabled:t.disabled},null,8,["label","value","disabled"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label-width"]),a(m,{label:"排序方式","label-width":e.formLabelWidth},{default:o(()=>[a(h,{modelValue:e.adCate.sortOrder,"onUpdate:modelValue":l[4]||(l[4]=t=>e.adCate.sortOrder=t),placeholder:"请选择"},{default:o(()=>[(u(!0),b(g,null,C(e.options1,t=>(u(),v(_,{key:t.value1,label:t.label1,value:t.value1,disabled:t.disabled},null,8,["label","value","disabled"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}const ue=F(G,[["render",le],["__scopeId","data-v-2dcf5ff0"]]);export{ue as default};
