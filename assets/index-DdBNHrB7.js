import{g as J}from"./index-BDp_d87C.js";import{z as K,m,d as L,C as F,D as O,n as P,c as p,a as o,w as a,k as Q,r as i,B as X,o as c,j as l,e as s,E as U,f as Y,g as Z,t as b,i as h,q as $,s as ee,_ as te}from"./index-Dl-Mm33K.js";import"./request-DkDDhs02.js";const oe=K("nowWeatherWarning",()=>{const f=m(!1),w=m(!1),x=m(!1),e=m(!1),_=m(!1);return{east:f,south:w,mid:x,north:e,out:_,resetFilter:()=>{f.value=!1,w.value=!1,x.value=!1,e.value=!1,_.value=!1}}},{persist:!0}),d=f=>($("data-v-1c3c8b66"),f=f(),ee(),f),ne=d(()=>l("div",{class:"title",style:{color:"salmon","font-weight":"bold"}},"各別縣市地區目前天氣警報",-1)),le=d(()=>l("div",{style:{color:"red",margin:"5px 0px"}},"此資料不定期更新",-1)),ae=d(()=>l("div",{class:"content"},"資料內容包含(現象、警報或特報，開始時間，結束時間)",-1)),se=d(()=>l("div",{class:"contentRwd"},"資料內容包含(現象、警報或特報，",-1)),de=d(()=>l("div",{class:"contentRwd"},"開始時間，結束時間)",-1)),ie=d(()=>l("span",{style:{color:"yellow"}},"搜尋你想查看縣市或篩選區域",-1)),re={class:"search"},ue={class:"centerSearch"},ce=d(()=>l("span",{style:{"margin-right":"5px",color:"red","font-size":"25px","font-weight":"bold"}},"搜尋縣市:",-1)),pe={class:"filter"},_e=d(()=>l("span",{style:{color:"red","font-size":"25px","font-weight":"bold"}},"依照縣市所在區域篩選:",-1)),he=d(()=>l("span",null,"北部:",-1)),me=d(()=>l("span",null,"中部:",-1)),fe=d(()=>l("span",null,"南部:",-1)),ge=d(()=>l("span",null,"東部:",-1)),ye=d(()=>l("span",null,"離島:",-1)),ve=d(()=>l("span",{style:{color:"yellow"}},"搜尋/查看/篩選",-1)),we={class:"search"},xe=d(()=>l("span",{style:{"margin-right":"5px",color:"red","font-size":"20px","font-weight":"bold"}},"搜尋縣市:",-1)),Ve={class:"filter"},ze=d(()=>l("span",{style:{color:"red","font-size":"25px","font-weight":"bold"}},"依照縣市所在區域篩選:",-1)),be=d(()=>l("span",null,"北部:",-1)),ke=d(()=>l("span",null,"中部:",-1)),Ce=d(()=>l("span",null,"南部:",-1)),We=d(()=>l("span",null,"東部:",-1)),Ue=d(()=>l("span",null,"離島:",-1)),Ne={key:0,style:{color:"red","font-size":"20px","font-weight":"bolder"}},Se={key:1},Be=d(()=>l("span",{style:{color:"gray","font-size":"12px"}},"(點擊查看詳情)",-1)),Te={key:1},De={key:0,style:{color:"red","font-size":"20px","font-weight":"bolder"}},Fe={key:1},Ie={key:0,style:{color:"red","font-size":"20px","font-weight":"bolder"}},Re={key:1},qe=L({__name:"index",setup(f){const w=Q(),x=()=>{w.push("/weatherWarning/weatherWarningContent")},e=oe(),_=m([]),k=m(!0),I=["臺北市","新北市","基隆市","新竹市","桃園市","新竹縣","宜蘭縣"],R=["臺中市","苗栗縣","彰化縣","南投縣","雲林縣"],q=["高雄市","臺南市","嘉義市","嘉義縣","屏東縣"],E=["花蓮縣","臺東縣"],j=["金門縣","連江縣","澎湖縣"],N=F(()=>{const r=V=>_.value.filter(y=>V.includes(y.locationName));let n=[];return e.east&&(n=n.concat(r(E))),e.south&&(n=n.concat(r(q))),e.mid&&(n=n.concat(r(R))),e.north&&(n=n.concat(r(I))),e.out&&(n=n.concat(r(j))),!e.east&&!e.south&&!e.mid&&!e.north&&!e.out&&C(),n});O(()=>[e.east,e.south,e.mid,e.north,e.out],()=>{_.value=N.value,C()});const g=m(""),A=F(()=>_.value.filter(r=>g.value!==""?r.locationName.match(g.value):r)),C=async()=>{const r=await J();_.value=r.data.records.location,(e.east||e.south||e.mid||e.north||e.out)&&(_.value=N.value),setTimeout(()=>{k.value=!1},500)};return P(()=>{C()}),(r,n)=>{const V=i("arrow-down"),y=i("el-icon"),z=i("el-button"),S=i("el-input"),B=i("Search"),u=i("el-switch"),W=i("el-card"),T=i("el-dropdown-menu"),D=i("el-dropdown"),M=i("el-tag"),v=i("el-table-column"),G=i("el-table"),H=X("loading");return c(),p("div",null,[o(W,{style:{margin:"40px 50px","border-radius":"20px"}},{default:a(()=>[o(M,{class:"tag"},{default:a(()=>[ne,le,ae,se,de,o(D,{style:{"margin-top":"10px"}},{dropdown:a(()=>[o(T,{style:{padding:"0"}},{default:a(()=>[o(W,{style:{background:"pink"}},{default:a(()=>[l("div",re,[l("div",ue,[ce,o(S,{modelValue:g.value,"onUpdate:modelValue":n[0]||(n[0]=t=>g.value=t),placeholder:"請輸入縣市名稱",style:{width:"300px"}},null,8,["modelValue"]),o(y,{style:{border:"2px gray solid",padding:"5px"}},{default:a(()=>[o(B,{style:{color:"red"}})]),_:1})])]),l("div",pe,[_e,he,o(u,{modelValue:s(e).north,"onUpdate:modelValue":n[1]||(n[1]=t=>s(e).north=t)},null,8,["modelValue"]),me,o(u,{modelValue:s(e).mid,"onUpdate:modelValue":n[2]||(n[2]=t=>s(e).mid=t)},null,8,["modelValue"]),fe,o(u,{modelValue:s(e).south,"onUpdate:modelValue":n[3]||(n[3]=t=>s(e).south=t)},null,8,["modelValue"]),ge,o(u,{modelValue:s(e).east,"onUpdate:modelValue":n[4]||(n[4]=t=>s(e).east=t)},null,8,["modelValue"]),ye,o(u,{modelValue:s(e).out,"onUpdate:modelValue":n[5]||(n[5]=t=>s(e).out=t)},null,8,["modelValue"]),o(z,{style:{"margin-left":"10px"},type:"primary",onClick:s(e).resetFilter},{default:a(()=>[U("重置篩選")]),_:1},8,["onClick"])])]),_:1})]),_:1})]),default:a(()=>[o(z,{class:"checkBtn",type:"warning"},{default:a(()=>[ie,o(y,{style:{"margin-left":"10px"}},{default:a(()=>[o(V)]),_:1})]),_:1})]),_:1}),o(D,{style:{"margin-top":"10px"}},{dropdown:a(()=>[o(T,{style:{padding:"0"}},{default:a(()=>[o(W,{style:{background:"pink"}},{default:a(()=>[l("div",we,[xe,o(S,{modelValue:g.value,"onUpdate:modelValue":n[6]||(n[6]=t=>g.value=t),placeholder:"請輸入縣市名稱",style:{width:"200px"}},null,8,["modelValue"]),o(y,{style:{border:"2px gray solid",padding:"5px"}},{default:a(()=>[o(B,{style:{color:"red"}})]),_:1})]),l("div",Ve,[ze,be,o(u,{modelValue:s(e).north,"onUpdate:modelValue":n[7]||(n[7]=t=>s(e).north=t)},null,8,["modelValue"]),ke,o(u,{modelValue:s(e).mid,"onUpdate:modelValue":n[8]||(n[8]=t=>s(e).mid=t)},null,8,["modelValue"]),Ce,o(u,{modelValue:s(e).south,"onUpdate:modelValue":n[9]||(n[9]=t=>s(e).south=t)},null,8,["modelValue"]),We,o(u,{modelValue:s(e).east,"onUpdate:modelValue":n[10]||(n[10]=t=>s(e).east=t)},null,8,["modelValue"]),Ue,o(u,{modelValue:s(e).out,"onUpdate:modelValue":n[11]||(n[11]=t=>s(e).out=t)},null,8,["modelValue"]),o(z,{style:{"margin-left":"10px"},type:"primary",onClick:s(e).resetFilter},{default:a(()=>[U("重置篩選")]),_:1},8,["onClick"])])]),_:1})]),_:1})]),default:a(()=>[o(z,{class:"checkBtnRwd",type:"warning"},{default:a(()=>[ve,o(y,{style:{"margin-left":"10px"}},{default:a(()=>[o(V)]),_:1})]),_:1})]),_:1})]),_:1}),Y((c(),Z(G,{data:A.value,border:"","max-height":"calc(100vh - 385px)",style:{width:"1060px",margin:"20px auto"}},{default:a(()=>[o(v,{fixed:"",label:"縣市名稱",prop:"locationName",align:"center","min-width":"80"}),o(v,{label:"現象",align:"center",width:"300"},{default:a(({row:t})=>[t.hazardConditions.hazards[0]?(c(),p("span",Ne,b(t.hazardConditions.hazards[0].info.phenomena),1)):h("",!0),t.hazardConditions.hazards[0]?h("",!0):(c(),p("span",Se,"目前暫無警報或特報"))]),_:1}),o(v,{label:"警報或特報",align:"center",width:"160"},{default:a(({row:t})=>[t.hazardConditions.hazards[0]?(c(),p("div",{key:0,class:"alarm",onClick:x,style:{color:"red","font-size":"20px","font-weight":"bolder"}},[U(b(t.hazardConditions.hazards[0].info.significance),1),Be])):h("",!0),t.hazardConditions.hazards[0]?h("",!0):(c(),p("span",Te,"目前暫無警報或特報"))]),_:1}),o(v,{label:"開始時間",align:"center",width:"200"},{default:a(({row:t})=>[t.hazardConditions.hazards[0]?(c(),p("span",De,b(t.hazardConditions.hazards[0].validTime.startTime),1)):h("",!0),t.hazardConditions.hazards[0]?h("",!0):(c(),p("span",Fe,"目前暫無警報或特報"))]),_:1}),o(v,{label:"結束時間",align:"center",width:"200"},{default:a(({row:t})=>[t.hazardConditions.hazards[0]?(c(),p("span",Ie,b(t.hazardConditions.hazards[0].validTime.endTime),1)):h("",!0),t.hazardConditions.hazards[0]?h("",!0):(c(),p("span",Re,"目前暫無警報或特報"))]),_:1})]),_:1},8,["data"])),[[H,k.value]])]),_:1})])}}}),Me=te(qe,[["__scopeId","data-v-1c3c8b66"]]);export{Me as default};