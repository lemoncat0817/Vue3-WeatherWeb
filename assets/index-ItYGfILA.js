import{c as q}from"./index-TXLhPUiL.js";import{u as L,a as O}from"./allTaiwanWeek-C6fO0oF7.js";import{d as j,D as G,A as H,m as w,C as J,n as P,c as z,a as e,w as o,k as Q,r as c,B as X,o as y,j as l,t as u,e as n,E as a,f as Y,g as Z,F as ee,b as oe,i as le,q as te,s as ae,_ as se}from"./index-Dl-Mm33K.js";import"./request-DkDDhs02.js";const i=m=>(te("data-v-49202e3c"),m=m(),ae(),m),re={class:"title",style:{color:"salmon","font-weight":"bold"}},de=i(()=>l("div",{style:{color:"red",margin:"5px 0px"}},"此資料約每六小時更新一次",-1)),ie=i(()=>l("div",{class:"folder"},"資料內容包含(天氣、降雨機率、溫度、體感溫度、相對濕度、舒適度指數、風速、風向，露點溫度)",-1)),ne=i(()=>l("div",{class:"rwdDiv"},"資料內容包含(天氣、降雨機率、溫度、體感溫度、",-1)),ce=i(()=>l("div",{class:"rwdDiv"},"、相對濕度、舒適度指數、風速、風向，露點溫度)",-1)),pe=i(()=>l("span",{style:{color:"yellow"}},"選擇你想查看縣市以及搜尋該縣市的鄉鎮市區",-1)),ue={class:"northMid"},_e={class:"north"},xe=i(()=>l("div",null,"北部:",-1)),ge={class:"mid"},me=i(()=>l("div",null,"中部:",-1)),ve={class:"southEastOut"},fe={class:"south"},ye=i(()=>l("div",null,"南部:",-1)),he={class:"east"},be=i(()=>l("div",null,"東部:",-1)),we={class:"out"},ze=i(()=>l("div",null,"離島:",-1)),De={class:"search"},Fe=i(()=>l("div",null,"搜尋鄉鎮市區:",-1)),Ve={class:"districtSearch"},Ie=i(()=>l("span",{style:{color:"yellow"}},"查看/搜尋",-1)),ke={class:"northMid"},Ee={class:"north"},Te=i(()=>l("div",null,"北部:",-1)),Se={class:"mid"},Ue=i(()=>l("div",null,"中部:",-1)),$e={class:"southEastOut"},Ce={class:"south"},Ne=i(()=>l("div",null,"南部:",-1)),Be={class:"east"},Ke=i(()=>l("div",null,"東部:",-1)),We={class:"out"},Ae=i(()=>l("div",null,"離島:",-1)),Me={class:"search"},Re=i(()=>l("div",null,"搜尋鄉鎮市區:",-1)),qe={class:"districtSearch"},Le={class:"locationNameTitle",style:{color:"brown","font-weight":"bold"}},Oe=["onClick"],je={key:0,class:"text-center"},Ge={style:{color:"palevioletred","font-size":"14px","font-weight":"bold",border:"1px solid gray"}},He={style:{"font-size":"14px",border:"1px solid gray",color:"royalblue"}},Je={class:"text-center"},Pe=i(()=>l("div",{style:{color:"palevioletred","font-size":"14px","font-weight":"bold",border:"1px solid gray","border-right":"0px"}}," 天氣:",-1)),Qe={style:{"font-size":"14px",border:"1px solid gray",color:"royalblue","border-left":"0px"}},Xe={class:"text-center"},Ye=i(()=>l("div",{style:{color:"palevioletred","font-size":"14px","font-weight":"bold",border:"1px solid gray","border-right":"0px"}}," 降雨機率:",-1)),Ze={style:{"font-size":"14px",border:"1px solid gray",color:"royalblue","border-left":"0px"}},eo={class:"text-center"},oo=i(()=>l("div",{style:{color:"palevioletred","font-size":"14px","font-weight":"bold",border:"1px solid gray","border-right":"0px"}}," 溫度:",-1)),lo={style:{"font-size":"14px",border:"1px solid gray",color:"royalblue","border-left":"0px"}},to={class:"text-center"},ao=i(()=>l("div",{style:{color:"palevioletred","font-size":"14px","font-weight":"bold",border:"1px solid gray","border-right":"0px"}}," 體感溫度:",-1)),so={style:{"font-size":"14px",border:"1px solid gray",color:"royalblue","border-left":"0px"}},ro={class:"text-center"},io=i(()=>l("div",{style:{color:"palevioletred","font-size":"14px","font-weight":"bold",border:"1px solid gray","border-right":"0px"}}," 相對濕度:",-1)),no={style:{"font-size":"14px",border:"1px solid gray",color:"royalblue","border-left":"0px"}},co={class:"text-center"},po=i(()=>l("div",{style:{color:"palevioletred","font-size":"14px","font-weight":"bold",border:"1px solid gray","border-right":"0px"}}," 舒適度指數:",-1)),uo={style:{"font-size":"14px",border:"1px solid gray",color:"royalblue","border-left":"0px"}},_o={class:"text-center"},xo=i(()=>l("div",{style:{color:"palevioletred","font-size":"14px","font-weight":"bold",border:"1px solid gray","border-right":"0px"}}," 風速:",-1)),go={style:{"font-size":"14px",border:"1px solid gray",color:"royalblue","border-left":"0px"}},mo={class:"text-center"},vo=i(()=>l("div",{style:{color:"palevioletred","font-size":"14px","font-weight":"bold",border:"1px solid gray","border-right":"0px"}}," 風向:",-1)),fo={style:{"font-size":"14px",border:"1px solid gray",color:"royalblue","border-left":"0px"}},yo={class:"text-center"},ho=i(()=>l("div",{style:{color:"palevioletred","font-size":"14px","font-weight":"bold",border:"1px solid gray","border-right":"0px"}}," 露點溫度:",-1)),bo={style:{"font-size":"14px",border:"1px solid gray",color:"royalblue","border-left":"0px"}},wo=j({__name:"index",setup(m){const r=L(),D=O(),N=Q(),B=x=>{N.push("/weatherForecast/allTaiwanWeek"),D.districtKeyword=x,D.locationId=r.locationId.slice(0,9)+(parseInt(r.locationId.slice(9,11))+2<10?"0"+(parseInt(r.locationId.slice(9,11))+2).toString():(parseInt(r.locationId.slice(9,11))+2).toString())};G(()=>r.locationId,()=>{I(r.locationId)}),H((x,d,v)=>{r.districtKeyword="",v()});const F=w(""),g=w([]),K=J(()=>g.value.filter(x=>r.districtKeyword!==""?x.locationName.match(r.districtKeyword):x)),V=w(!0),I=async x=>{const d=await q(x);F.value=d.data.records.locations[0].locationsName,g.value=d.data.records.locations[0].location,V.value=!1};return P(()=>{I(r.locationId)}),(x,d)=>{const v=c("arrow-down"),f=c("el-icon"),h=c("el-button"),t=c("el-radio"),_=c("el-radio-group"),k=c("el-input"),E=c("Search"),b=c("el-card"),T=c("el-dropdown-menu"),S=c("el-dropdown"),W=c("el-tag"),A=c("el-popover"),U=c("el-table-column"),M=c("el-table"),R=X("loading");return y(),z("div",null,[e(b,{style:{margin:"40px 50px","border-radius":"20px"}},{default:o(()=>[e(W,{class:"tag"},{default:o(()=>[l("div",re,"全臺灣各鄉鎮市區預報 - "+u(F.value),1),de,ie,ne,ce,l("div",null,[e(S,{style:{"margin-top":"10px"}},{dropdown:o(()=>[e(T,{style:{padding:"0"}},{default:o(()=>[e(b,{class:"card",style:{width:"100%",background:"pink"}},{default:o(()=>[l("div",ue,[l("div",_e,[xe,e(_,{modelValue:n(r).locationId,"onUpdate:modelValue":d[0]||(d[0]=s=>n(r).locationId=s)},{default:o(()=>[e(t,{style:{margin:"0px 3px",color:"brown"},value:"F-D0047-061",size:"large"},{default:o(()=>[a("臺北市")]),_:1}),e(t,{style:{margin:"0px 3px",color:"brown"},value:"F-D0047-069",size:"large"},{default:o(()=>[a("新北市")]),_:1}),e(t,{style:{margin:"0px 3px",color:"brown"},value:"F-D0047-049",size:"large"},{default:o(()=>[a("基隆市")]),_:1}),e(t,{style:{margin:"0px 3px",color:"brown"},value:"F-D0047-053",size:"large"},{default:o(()=>[a("新竹市")]),_:1}),e(t,{style:{margin:"0px 3px",color:"brown"},value:"F-D0047-005",size:"large"},{default:o(()=>[a("桃園市")]),_:1}),e(t,{style:{margin:"0px 3px",color:"brown"},value:"F-D0047-009",size:"large"},{default:o(()=>[a("新竹縣")]),_:1}),e(t,{style:{margin:"0px 3px",color:"brown"},value:"F-D0047-001",size:"large"},{default:o(()=>[a("宜蘭縣")]),_:1})]),_:1},8,["modelValue"])]),l("div",ge,[me,e(_,{modelValue:n(r).locationId,"onUpdate:modelValue":d[1]||(d[1]=s=>n(r).locationId=s)},{default:o(()=>[e(t,{style:{margin:"0px 3px",color:"brown"},value:"F-D0047-073",size:"large"},{default:o(()=>[a("臺中市")]),_:1}),e(t,{style:{margin:"0px 3px",color:"brown"},value:"F-D0047-013",size:"large"},{default:o(()=>[a("苗栗縣")]),_:1}),e(t,{style:{margin:"0px 3px",color:"brown"},value:"F-D0047-017",size:"large"},{default:o(()=>[a("彰化縣")]),_:1}),e(t,{style:{margin:"0px 3px",color:"brown"},value:"F-D0047-021",size:"large"},{default:o(()=>[a("南投縣")]),_:1}),e(t,{style:{margin:"0px 3px",color:"brown"},value:"F-D0047-025",size:"large"},{default:o(()=>[a("雲林縣")]),_:1})]),_:1},8,["modelValue"])])]),l("div",ve,[l("div",fe,[ye,e(_,{modelValue:n(r).locationId,"onUpdate:modelValue":d[2]||(d[2]=s=>n(r).locationId=s)},{default:o(()=>[e(t,{style:{margin:"0px 3px",color:"brown"},value:"F-D0047-065",size:"large"},{default:o(()=>[a("高雄市")]),_:1}),e(t,{style:{margin:"0px 3px",color:"brown"},value:"F-D0047-077",size:"large"},{default:o(()=>[a("臺南市")]),_:1}),e(t,{style:{margin:"0px 3px",color:"brown"},value:"F-D0047-057",size:"large"},{default:o(()=>[a("嘉義市")]),_:1}),e(t,{style:{margin:"0px 3px",color:"brown"},value:"F-D0047-029",size:"large"},{default:o(()=>[a("嘉義縣")]),_:1}),e(t,{style:{margin:"0px 3px",color:"brown"},value:"F-D0047-033",size:"large"},{default:o(()=>[a("屏東縣")]),_:1})]),_:1},8,["modelValue"])]),l("div",he,[be,e(_,{modelValue:n(r).locationId,"onUpdate:modelValue":d[3]||(d[3]=s=>n(r).locationId=s)},{default:o(()=>[e(t,{style:{margin:"0px 3px",color:"brown"},value:"F-D0047-041",size:"large"},{default:o(()=>[a("花蓮縣")]),_:1}),e(t,{style:{margin:"0px 3px",color:"brown"},value:"F-D0047-037",size:"large"},{default:o(()=>[a("臺東縣")]),_:1})]),_:1},8,["modelValue"])]),l("div",we,[ze,e(_,{modelValue:n(r).locationId,"onUpdate:modelValue":d[4]||(d[4]=s=>n(r).locationId=s)},{default:o(()=>[e(t,{style:{margin:"0px 3px",color:"brown"},value:"F-D0047-085",size:"large"},{default:o(()=>[a("金門縣")]),_:1}),e(t,{style:{margin:"0px 3px",color:"brown"},value:"F-D0047-081",size:"large"},{default:o(()=>[a("連江縣")]),_:1}),e(t,{style:{margin:"0px 3px",color:"brown"},value:"F-D0047-045",size:"large"},{default:o(()=>[a("澎湖縣")]),_:1})]),_:1},8,["modelValue"])]),l("div",De,[Fe,l("div",Ve,[e(k,{modelValue:n(r).districtKeyword,"onUpdate:modelValue":d[5]||(d[5]=s=>n(r).districtKeyword=s),placeholder:"請輸入鄉鎮市區",style:{width:"120px"}},null,8,["modelValue"]),e(f,{style:{border:"2px gray solid",padding:"5px"}},{default:o(()=>[e(E)]),_:1})])])])]),_:1})]),_:1})]),default:o(()=>[e(h,{type:"warning",class:"toolBtn"},{default:o(()=>[pe,e(f,{style:{"margin-left":"10px"}},{default:o(()=>[e(v)]),_:1})]),_:1})]),_:1}),e(S,{style:{"margin-top":"10px"}},{dropdown:o(()=>[e(T,{style:{padding:"0"}},{default:o(()=>[e(b,{class:"card",style:{width:"100%",background:"pink"}},{default:o(()=>[l("div",ke,[l("div",Ee,[Te,e(_,{modelValue:n(r).locationId,"onUpdate:modelValue":d[6]||(d[6]=s=>n(r).locationId=s)},{default:o(()=>[e(t,{style:{margin:"0px 3px",color:"brown"},value:"F-D0047-061",size:"large"},{default:o(()=>[a("臺北市")]),_:1}),e(t,{style:{margin:"0px 3px",color:"brown"},value:"F-D0047-069",size:"large"},{default:o(()=>[a("新北市")]),_:1}),e(t,{style:{margin:"0px 3px",color:"brown"},value:"F-D0047-049",size:"large"},{default:o(()=>[a("基隆市")]),_:1}),e(t,{style:{margin:"0px 3px",color:"brown"},value:"F-D0047-053",size:"large"},{default:o(()=>[a("新竹市")]),_:1}),e(t,{style:{margin:"0px 3px",color:"brown"},value:"F-D0047-005",size:"large"},{default:o(()=>[a("桃園市")]),_:1}),e(t,{style:{margin:"0px 3px",color:"brown"},value:"F-D0047-009",size:"large"},{default:o(()=>[a("新竹縣")]),_:1}),e(t,{style:{margin:"0px 3px",color:"brown"},value:"F-D0047-001",size:"large"},{default:o(()=>[a("宜蘭縣")]),_:1})]),_:1},8,["modelValue"])]),l("div",Se,[Ue,e(_,{modelValue:n(r).locationId,"onUpdate:modelValue":d[7]||(d[7]=s=>n(r).locationId=s)},{default:o(()=>[e(t,{style:{margin:"0px 3px",color:"brown"},value:"F-D0047-073",size:"large"},{default:o(()=>[a("臺中市")]),_:1}),e(t,{style:{margin:"0px 3px",color:"brown"},value:"F-D0047-013",size:"large"},{default:o(()=>[a("苗栗縣")]),_:1}),e(t,{style:{margin:"0px 3px",color:"brown"},value:"F-D0047-017",size:"large"},{default:o(()=>[a("彰化縣")]),_:1}),e(t,{style:{margin:"0px 3px",color:"brown"},value:"F-D0047-021",size:"large"},{default:o(()=>[a("南投縣")]),_:1}),e(t,{style:{margin:"0px 3px",color:"brown"},value:"F-D0047-025",size:"large"},{default:o(()=>[a("雲林縣")]),_:1})]),_:1},8,["modelValue"])])]),l("div",$e,[l("div",Ce,[Ne,e(_,{modelValue:n(r).locationId,"onUpdate:modelValue":d[8]||(d[8]=s=>n(r).locationId=s)},{default:o(()=>[e(t,{style:{margin:"0px 3px",color:"brown"},value:"F-D0047-065",size:"large"},{default:o(()=>[a("高雄市")]),_:1}),e(t,{style:{margin:"0px 3px",color:"brown"},value:"F-D0047-077",size:"large"},{default:o(()=>[a("臺南市")]),_:1}),e(t,{style:{margin:"0px 3px",color:"brown"},value:"F-D0047-057",size:"large"},{default:o(()=>[a("嘉義市")]),_:1}),e(t,{style:{margin:"0px 3px",color:"brown"},value:"F-D0047-029",size:"large"},{default:o(()=>[a("嘉義縣")]),_:1}),e(t,{style:{margin:"0px 3px",color:"brown"},value:"F-D0047-033",size:"large"},{default:o(()=>[a("屏東縣")]),_:1})]),_:1},8,["modelValue"])]),l("div",Be,[Ke,e(_,{modelValue:n(r).locationId,"onUpdate:modelValue":d[9]||(d[9]=s=>n(r).locationId=s)},{default:o(()=>[e(t,{style:{margin:"0px 3px",color:"brown"},value:"F-D0047-041",size:"large"},{default:o(()=>[a("花蓮縣")]),_:1}),e(t,{style:{margin:"0px 3px",color:"brown"},value:"F-D0047-037",size:"large"},{default:o(()=>[a("臺東縣")]),_:1})]),_:1},8,["modelValue"])]),l("div",We,[Ae,e(_,{modelValue:n(r).locationId,"onUpdate:modelValue":d[10]||(d[10]=s=>n(r).locationId=s)},{default:o(()=>[e(t,{style:{margin:"0px 3px",color:"brown"},value:"F-D0047-085",size:"large"},{default:o(()=>[a("金門縣")]),_:1}),e(t,{style:{margin:"0px 3px",color:"brown"},value:"F-D0047-081",size:"large"},{default:o(()=>[a("連江縣")]),_:1}),e(t,{style:{margin:"0px 3px",color:"brown"},value:"F-D0047-045",size:"large"},{default:o(()=>[a("澎湖縣")]),_:1})]),_:1},8,["modelValue"])]),l("div",Me,[Re,l("div",qe,[e(k,{modelValue:n(r).districtKeyword,"onUpdate:modelValue":d[11]||(d[11]=s=>n(r).districtKeyword=s),placeholder:"請輸入鄉鎮市區",style:{width:"120px"}},null,8,["modelValue"]),e(f,{style:{border:"2px gray solid",padding:"5px"}},{default:o(()=>[e(E)]),_:1})])])])]),_:1})]),_:1})]),default:o(()=>[e(h,{type:"warning",class:"toolBtnRwd"},{default:o(()=>[Ie,e(f,{style:{"margin-left":"10px"}},{default:o(()=>[e(v)]),_:1})]),_:1})]),_:1})])]),_:1}),Y((y(),Z(M,{data:K.value,border:"","max-height":"calc(100vh - 385px)",style:{width:"90%",margin:"20px auto"}},{default:o(()=>[e(U,{fixed:"left",align:"center","min-width":"105",label:"鄉鎮名稱"},{default:o(({row:s})=>[l("span",Le,u(s.locationName),1),e(A,{placement:"right",width:150,trigger:"click"},{reference:o(()=>[e(h,{class:"checkBtn",type:"danger",icon:"More",style:{width:"30px",height:"30px","border-radius":"50%"}})]),default:o(()=>[l("div",{onClick:p=>B(s.locationName),class:"locationName",style:{color:"gray","font-size":"12px"}},"查看未來一週預報",8,Oe)]),_:2},1024)]),_:1}),(y(),z(ee,null,oe(32,s=>e(U,{key:s,align:"center",width:"275"},{header:o(()=>{var p,$,C;return[g.value.length>0&&g.value[0].weatherElement[1].time[s-1].startTime?(y(),z("div",je,[l("div",Ge,u(`日期: ${(p=g.value[0].weatherElement[1].time[s-1].startTime)==null?void 0:p.slice(5,7)}
                  /${($=g.value[0].weatherElement[1].time[s-1].startTime)==null?void 0:$.slice(8,10)}`),1),l("div",He,u(`時間: ${(C=g.value[0].weatherElement[1].time[s-1].startTime)==null?void 0:C.slice(11,16)}`),1)])):le("",!0)]}),default:o(({row:p})=>[l("div",Je,[Pe,l("div",Qe,u(p.weatherElement[1].time[s-1].elementValue[0].value),1)]),l("div",Xe,[Ye,l("div",Ze,u(`${p.weatherElement[7].time[Math.ceil(s/2)-1].elementValue[0].value}%`),1)]),l("div",eo,[oo,l("div",lo,u(`${p.weatherElement[3].time[s-1].elementValue[0].value}°C `),1)]),l("div",to,[ao,l("div",so,u(`${p.weatherElement[2].time[s-1].elementValue[0].value}°C `),1)]),l("div",ro,[io,l("div",no,u(`${p.weatherElement[4].time[s-1].elementValue[0].value}% `),1)]),l("div",co,[po,l("div",uo,u(p.weatherElement[5].time[s-1].elementValue[1].value),1)]),l("div",_o,[xo,l("div",go,u(`${p.weatherElement[8].time[s-1].elementValue[0].value} m/s `),1)]),l("div",mo,[vo,l("div",fo,u(`${p.weatherElement[9].time[s-1].elementValue[0].value} `),1)]),l("div",yo,[ho,l("div",bo,u(`${p.weatherElement[10].time[s-1].elementValue[0].value}°C `),1)])]),_:2},1024)),64))]),_:1},8,["data"])),[[R,V.value]])]),_:1})])}}}),Io=se(wo,[["__scopeId","data-v-49202e3c"]]);export{Io as default};