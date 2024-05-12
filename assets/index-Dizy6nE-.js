import{c as j}from"./index-MxetEPOt.js";import{d as z,m as u,C as M,n as X,c as r,a,w as t,r as o,B as G,o as n,E as _,F as k,b as S,f as H,g as b,t as x,j as c,i as J,q as K,s as Q,_ as Y}from"./index-Dl-Mm33K.js";import"./request-DkDDhs02.js";const U="/Vue3-WeatherWeb/assets/rain-BPgfuqvb.png",p=h=>(K("data-v-13917846"),h=h(),Q(),h),Z=p(()=>c("div",{class:"title",style:{color:"salmon","font-weight":"bold"}},"地面測站-每日雨量資料",-1)),$=p(()=>c("div",{style:{color:"red",margin:"5px 0px"}},"此資料約每一天的14:00更新一次",-1)),ee=p(()=>c("span",{style:{color:"yellow"}},"選擇你想查看的測量站",-1)),te=p(()=>c("span",{style:{color:"yellow"}},"查看測量站",-1)),ae={style:{color:"pink","font-size":"20px"}},le={key:0},oe={key:1},ne=p(()=>c("img",{src:U,alt:"降雨量",style:{width:"20px",height:"20px"}},null,-1)),se={key:2},ie=p(()=>c("img",{src:U,alt:"降雨量",style:{width:"20px",height:"20px"}},null,-1)),de=z({__name:"index",setup(h){const m=u([]),V=u(0),N=u(!0),v=u(!1),g=u(!0),d=u([]),s=u([]),C=i=>{s.value=i?d.value.map(l=>l.StationName):[],g.value=!1},T=i=>{const l=i.length;v.value=l===d.value.length,g.value=l>0&&l<d.value.length},q=M(()=>s.value?m.value.filter(i=>s.value.includes(i.station.StationName)):m.value),A=async()=>{const i=await j();m.value=i.data.records.location,V.value=m.value[0].stationObsTimes.stationObsTime.length,d.value=m.value.map(l=>l.station),s.value=d.value.map(l=>l.StationName),N.value=!1};return X(()=>{A()}),(i,l)=>{const O=o("arrow-down"),B=o("el-icon"),D=o("el-button"),f=o("el-checkbox"),E=o("el-checkbox-group"),w=o("el-card"),I=o("el-dropdown-menu"),R=o("el-dropdown"),F=o("el-tag"),P=o("el-table-column"),L=o("el-table"),W=G("loading");return n(),r("div",null,[a(w,{style:{margin:"40px 50px","border-radius":"20px"}},{default:t(()=>[a(F,{class:"tag"},{default:t(()=>[Z,$,a(R,{style:{"margin-top":"10px"}},{dropdown:t(()=>[a(I,{style:{padding:"0"}},{default:t(()=>[a(w,{style:{background:"pink","max-width":"700px"}},{default:t(()=>[a(f,{style:{color:"brown"},modelValue:v.value,"onUpdate:modelValue":l[0]||(l[0]=e=>v.value=e),indeterminate:g.value,onChange:C},{default:t(()=>[_(" 全選 ")]),_:1},8,["modelValue","indeterminate"]),a(E,{modelValue:s.value,"onUpdate:modelValue":l[1]||(l[1]=e=>s.value=e),onChange:T},{default:t(()=>[(n(!0),r(k,null,S(d.value,e=>(n(),b(f,{key:e.StationName,label:e.StationName,value:e.StationName,style:{width:"50px"}},{default:t(()=>[_(x(e.StationName),1)]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),default:t(()=>[a(D,{class:"checkBtn",type:"warning"},{default:t(()=>[ee,a(B,{style:{"margin-left":"10px"}},{default:t(()=>[a(O)]),_:1})]),_:1})]),_:1}),a(R,{style:{"margin-top":"10px"}},{dropdown:t(()=>[a(I,{style:{padding:"0"}},{default:t(()=>[a(w,{style:{background:"pink","max-width":"700px"}},{default:t(()=>[a(f,{style:{color:"brown"},modelValue:v.value,"onUpdate:modelValue":l[2]||(l[2]=e=>v.value=e),indeterminate:g.value,onChange:C},{default:t(()=>[_(" 全選 ")]),_:1},8,["modelValue","indeterminate"]),a(E,{modelValue:s.value,"onUpdate:modelValue":l[3]||(l[3]=e=>s.value=e),onChange:T},{default:t(()=>[(n(!0),r(k,null,S(d.value,e=>(n(),b(f,{key:e.StationName,label:e.StationName,value:e.StationName,style:{width:"50px"}},{default:t(()=>[_(x(e.StationName),1)]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),default:t(()=>[a(D,{class:"checkBtnRwd",type:"warning"},{default:t(()=>[te,a(B,{style:{"margin-left":"10px"}},{default:t(()=>[a(O)]),_:1})]),_:1})]),_:1})]),_:1}),H((n(),b(L,{data:q.value,border:"","max-height":"calc(100vh - 365px)",style:{width:"90%",margin:"20px auto"}},{default:t(()=>[a(P,{fixed:"",prop:"station.StationName",align:"center",label:"測量站名稱",width:"120"}),(n(!0),r(k,null,S(V.value,e=>(n(),b(P,{key:e,align:"center",width:"150"},{header:t(()=>[c("div",ae,x(m.value[0].stationObsTimes.stationObsTime[e-1].Date),1)]),default:t(({row:y})=>[y.stationObsTimes.stationObsTime[e-1].weatherElements.Precipitation==="X"?(n(),r("div",le," 故障 ")):J("",!0),y.stationObsTimes.stationObsTime[e-1].weatherElements.Precipitation==="T"?(n(),r("div",oe,[_(" < 0.5 mm "),ne])):(n(),r("div",se,[_(x(y.stationObsTimes.stationObsTime[e-1].weatherElements.Precipitation)+" mm ",1),ie]))]),_:2},1024))),128))]),_:1},8,["data"])),[[W,N.value]])]),_:1})])}}}),me=Y(de,[["__scopeId","data-v-13917846"]]);export{me as default};
