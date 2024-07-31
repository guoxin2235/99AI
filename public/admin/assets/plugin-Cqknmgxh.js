
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.github.io
 */

import{_ as ge}from"./index.vue_vue_type_script_setup_true_lang-CHWp65cL.js";import{_ as fe}from"./index.vue_vue_type_script_setup_true_lang-D6-4wUAO.js";import{I as S,d as _e,r as p,m as A,p as N,a as be,n as i,q as ve,g as V,c as E,b as t,w as n,h as c,y as ye,i as d,z as $,e as r,t as x,B as we,C as he,A as Pe,D as Ve,G as xe,E as I,H as L,j as Ie,_ as ke,k as M}from"./index-CAe0BuuW.js";import{Q as Ce}from"./index-DfBvkKrB.js";const U={pluginList:f=>S.get("plugin/pluginList",{params:f}),delPlugin:f=>S.post("plugin/delPlugin",f),createPlugin:f=>S.post("plugin/createPlugin",f),updatePlugin:f=>S.post("plugin/updatePlugin",f)},Se=r("div",{class:"flex items-center gap-4"},"插件设置",-1),Ue=r("div",{class:"text-sm/6"},[r("div",null," 可自定义插件名称、描述和头像用于前端显示，同时需要设置对应的插件参数。 "),r("div",null,"插件系统包含，内置插件和普通插件两种。"),r("div",null," 内置插件已支持Suno音乐（参数：suno-v3）、Midjourney绘图（参数：midjourney）、Stable Diffusion绘图（参数：stable-diffusion）、 "),r("div",null," Dalle绘画（参数：dall-e-3）、LumaVideo（参数：luma-video），均需通过创意模型配置对应模型。 "),r("div",null,[c(" 普通插件需外部插件系统支持，具体参数请查看"),r("a",{href:"https://github.com/vastxie/99AIPlugin",target:"_blank"},"插件系统"),c(" 。 ")]),r("div",null," 若内置插件参数不在支持列表内，将以插件参数作为模型，调用对应模型。 ")],-1),De={style:{maxWidth:"350px"}},ze={style:{maxHeight:"50px",cursor:"pointer"}},Ae=["src"],$e={class:"flex justify-end mr-5"},Oe=_e({__name:"plugin",setup(f){p();const O=p(0),_=p(!1),k=p(!1),w=A({name:"",pluginImg:"",description:"",demoData:"",isEnabled:1,isSystemPlugin:0,parameters:"",sortOrder:100,page:1,size:10}),j=p(`/api/upload/file?dir=${encodeURIComponent("system/plugin")}`),D=p(),v=p(0),R=p(!1),G=p(0),o=A({name:"",pluginImg:"",description:"",demoData:"",isEnabled:1,isSystemPlugin:0,parameters:"",sortOrder:100}),H=A({name:[{required:!0,message:"请填写App名称",trigger:"blur"}],description:[{required:!0,message:"请填写App介绍信息、用于对外展示",trigger:"blur"}],pluginImg:[{required:!1,message:"请上传插件封面",trigger:"blur"}],demoData:[{required:!1,message:"请填写演示数据",trigger:"blur"}],isEnabled:[{required:!0,type:"number",message:"请选择插件状态",trigger:"change"}],isSystemPlugin:[{required:!0,type:"number",message:"请选择是否为系统插件",trigger:"change"}],parameters:[{required:!0,message:"请填写调用参数",trigger:"blur"}],sortOrder:[{required:!0,type:"number",message:"请填写排序值",trigger:"change"}]}),q=p([]);p([]);const Q=N(()=>v.value?"更新插件":"新增插件"),W=N(()=>v.value?"确认更新":"确认新增");async function h(){try{k.value=!0;const a=await U.pluginList(w),{rows:e,count:s}=a.data;k.value=!1,O.value=s,q.value=e.sort((u,g)=>g.order-u.order)}catch{k.value=!1}}function J(a){v.value=a.id,R.value=a.role==="user",G.value=a.status;const{name:e,pluginImg:s,description:u,demoData:g,isEnabled:z,isSystemPlugin:m,parameters:C,sortOrder:y}=a;xe(()=>{Object.assign(o,{name:e,pluginImg:s,description:u,demoData:g,isEnabled:z,isSystemPlugin:m,parameters:C,sortOrder:y})}),_.value=!0}function K(a){v.value=0,a==null||a.resetFields()}async function X(a){await U.delPlugin({id:a.id}),I.success("删除分类成功"),h()}const T=(a,e)=>{console.log("response: ",a.data),o.pluginImg=a.data};async function Y(){if(o.pluginImg){const a=await ee(o.pluginImg);Z(a,T)}}function Z(a,e){const s=new FormData;s.append("file",a),L.post(j.value,s,{headers:{"Content-Type":"multipart/form-data"}}).then(u=>{e(u.data)}).catch(u=>{console.error("上传失败",u)})}async function ee(a){const e=await L.get(a,{responseType:"blob"});let s="downloaded_file";const u=e.headers["content-disposition"];if(u){const g=/filename="([^"]+)"/.exec(u);g!=null&&g[1]&&(s=g[1])}else s=te(a);return new File([e.data],s,{type:e.data.type})}function te(a){const s=new URL(a).pathname;return s.substring(s.lastIndexOf("/")+1)}const le=a=>{if(["image/png","image/jpeg","image/gif","image/webp"].includes(a.type)){if(a.size/1024>300)return I.error("当前限制文件最大不超过 300KB!"),!1}else return I.error("当前系统仅支持 PNG、JPEG、GIF 和 WebP 格式的图片!"),!1};function ae(a){a==null||a.validate(async e=>{if(e){if(v.value){const s={id:v.value,...o};await U.updatePlugin(s),I({type:"success",message:"更新插件成功！"})}else await U.createPlugin(o),I({type:"success",message:"创建新的插件成功！"});_.value=!1,h()}})}return be(()=>{h()}),(a,e)=>{const s=Ie,u=ke,g=fe,z=i("el-image"),m=i("el-table-column"),C=i("el-tag"),y=i("el-button"),ne=i("el-popconfirm"),oe=i("el-table"),se=i("el-pagination"),ie=i("el-row"),re=ge,P=i("el-input"),b=i("el-form-item"),B=i("el-switch"),F=i("el-icon"),ue=i("el-upload"),de=i("el-form"),pe=i("el-dialog"),me=ve("loading");return V(),E("div",null,[t(g,null,{title:n(()=>[Se]),content:n(()=>[Ue]),default:n(()=>[t(u,{outline:"",onClick:e[0]||(e[0]=l=>_.value=!0)},{default:n(()=>[t(s,{name:"ic:baseline-plus"}),c(" 添加插件 ")]),_:1})]),_:1}),t(re,{style:{width:"100%"}},{default:n(()=>[ye((V(),$(oe,{border:"",data:d(q),style:{width:"100%"},size:"large"},{default:n(()=>[t(m,{prop:"pluginImg",label:"封面",width:"100"},{default:n(l=>[t(z,{style:{height:"50px"},src:l.row.pluginImg,fit:"fill"},null,8,["src"])]),_:1}),t(m,{prop:"sortOrder",label:"排序",width:"120"}),c(" /> "),t(m,{prop:"name",label:"名称",width:"120"}),t(m,{prop:"parameters",label:"调用参数",width:"120"}),t(m,{prop:"description",label:"描述信息"},{default:n(l=>[r("template",null,[r("div",De,x(l.row.description),1)]),r("div",ze,x(l.row.description),1)]),_:1}),t(m,{prop:"isSystemPlugin",label:"分类",width:"100"},{default:n(l=>[t(C,{type:l.row.isSystemPlugin===1?"success":"info"},{default:n(()=>[c(x(l.row.isSystemPlugin===1?"内置插件":"普通插件"),1)]),_:2},1032,["type"])]),_:1}),t(m,{prop:"isEnabled",label:"状态",width:"100"},{default:n(l=>[t(C,{type:l.row.isEnabled===1?"success":"danger"},{default:n(()=>[c(x(d(Ce)[l.row.isEnabled]),1)]),_:2},1032,["type"])]),_:1}),t(m,{label:"操作",width:"200"},{default:n(l=>[t(y,{link:"",type:"primary",size:"small",onClick:ce=>J(l.row)},{default:n(()=>[c(" 编辑 ")]),_:2},1032,["onClick"]),t(ne,{title:"确认删除此插件么?",width:"200","icon-color":"red",onConfirm:ce=>X(l.row)},{reference:n(()=>[t(y,{link:"",type:"danger",size:"small"},{default:n(()=>[c(" 删除 ")]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"])),[[me,d(k)]]),t(ie,{class:"flex justify-end mt-5"},{default:n(()=>[t(se,{"current-page":w.page,"onUpdate:currentPage":e[1]||(e[1]=l=>w.page=l),"page-size":w.size,"onUpdate:pageSize":e[2]||(e[2]=l=>w.size=l),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:d(O),onSizeChange:h,onCurrentChange:h},null,8,["current-page","page-size","total"])]),_:1})]),_:1}),t(pe,{modelValue:d(_),"onUpdate:modelValue":e[12]||(e[12]=l=>Ve(_)?_.value=l:null),"close-on-click-modal":!1,title:d(Q),width:"570",onClose:e[13]||(e[13]=l=>K(d(D)))},{footer:n(()=>[r("span",$e,[t(y,{onClick:e[10]||(e[10]=l=>_.value=!1)},{default:n(()=>[c("取消")]),_:1}),t(y,{type:"primary",onClick:e[11]||(e[11]=l=>ae(d(D)))},{default:n(()=>[c(x(d(W)),1)]),_:1})])]),default:n(()=>[t(de,{ref_key:"formPackageRef",ref:D,"label-position":"right","label-width":"100px",model:o,rules:H},{default:n(()=>[t(b,{label:"插件名称",prop:"name"},{default:n(()=>[t(P,{modelValue:o.name,"onUpdate:modelValue":e[3]||(e[3]=l=>o.name=l),placeholder:"请填写插件名称"},null,8,["modelValue"])]),_:1}),t(b,{label:"插件状态",prop:"isEnabled"},{default:n(()=>[t(B,{modelValue:o.isEnabled,"onUpdate:modelValue":e[4]||(e[4]=l=>o.isEnabled=l),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1}),t(b,{label:"插件描述",prop:"description"},{default:n(()=>[t(P,{modelValue:o.description,"onUpdate:modelValue":e[5]||(e[5]=l=>o.description=l),type:"textarea",placeholder:"请填写插件描述、用于对外展示...",rows:4},null,8,["modelValue"])]),_:1}),t(b,{label:"系统插件",prop:"status"},{default:n(()=>[t(B,{modelValue:o.isSystemPlugin,"onUpdate:modelValue":e[6]||(e[6]=l=>o.isSystemPlugin=l),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1}),t(b,{label:"插件参数",prop:"parameters"},{default:n(()=>[t(P,{modelValue:o.parameters,"onUpdate:modelValue":e[7]||(e[7]=l=>o.parameters=l),modelModifiers:{number:!0},placeholder:"请填写插件参数/模型，详见插件设置说明"},null,8,["modelValue"])]),_:1}),t(b,{label:"插件图标",prop:"pluginImg"},{default:n(()=>[t(P,{modelValue:o.pluginImg,"onUpdate:modelValue":e[8]||(e[8]=l=>o.pluginImg=l),placeholder:"请填写或上传插件图标",clearable:""},{append:n(()=>[t(ue,{class:"avatar-uploader",action:d(j),"show-file-list":!1,"on-success":T,"before-upload":le,style:{display:"flex","align-items":"center","justify-content":"center"}},{default:n(()=>[o.pluginImg?(V(),E("img",{key:0,src:o.pluginImg,style:{"max-width":"1.5rem","max-height":"1.5rem",margin:"5px 0","object-fit":"contain"}},null,8,Ae)):(V(),$(F,{key:1,style:{width:"1rem"}},{default:n(()=>[t(d(we))]),_:1}))]),_:1},8,["action"]),o.pluginImg?(V(),$(F,{key:0,onClick:Y,style:{"margin-left":"35px",width:"1rem"}},{default:n(()=>[t(d(he))]),_:1})):Pe("",!0)]),_:1},8,["modelValue"])]),_:1}),t(b,{label:"排序ID",prop:"sortOrder"},{default:n(()=>[t(P,{modelValue:o.sortOrder,"onUpdate:modelValue":e[9]||(e[9]=l=>o.sortOrder=l),modelModifiers:{number:!0},placeholder:"请填写排序ID[数字越大越靠前]"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])])}}});typeof M=="function"&&M(Oe);export{Oe as default};
