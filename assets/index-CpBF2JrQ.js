import{a as Q}from"./index-TXLhPUiL.js";import{u as X,a as G,b as Y}from"./week-BKlI4aoh.js";import{d as J,k as Z,A as O,r as g,B as ee,e as te,o as c,f as N,w as n,a as t,i as l,t as _,c as p,b as k,F as y,h as V,_ as K,m as R,C as j,D as le,n as oe,j as a,E as W,q as ae,s as se}from"./index-Cl83UQQJ.js";import"./request-DkDDhs02.js";const L=(h=0)=>{const e=new Date;h&&e.setDate(e.getDate()+h);const f=e.getMonth()+1,b=e.getDate(),D=e.getDay(),T=["日","一","二","三","四","五","六"],U=f<10?"0"+f:f,$=b<10?"0"+b:b;return`${U}/${$} (${T[D]})`},q=(h=0)=>{const e=new Date;h&&e.setDate(e.getDate()+h);const f=e.getDate();return f<10?"0"+f:f},ne={class:"locationNameTitle",style:{color:"brown","font-weight":"bold"}},de=["onClick"],ie=["onClick"],re={key:0,class:"tableContent"},ue={style:{color:"palevioletred","font-size":"14px","font-weight":"bold",border:"1px solid gray"}},ce={style:{width:"145px","font-size":"14px",border:"1px solid gray",color:"royalblue","border-left":"0px"}},me={key:0,class:"tableContent"},pe={style:{color:"palevioletred","font-size":"14px","font-weight":"bold",border:"1px solid gray"}},he={style:{width:"100px","font-size":"14px",border:"1px solid gray",color:"royalblue","border-left":"0px"}},_e={key:0,class:"tableContent"},ye={style:{color:"palevioletred","font-size":"14px","font-weight":"bold",border:"1px solid gray"}},ge={style:{width:"100px","font-size":"14px",border:"1px solid gray",color:"royalblue","border-left":"0px"}},fe={key:0,class:"tableContent"},xe={style:{color:"palevioletred","font-size":"14px","font-weight":"bold",border:"1px solid gray"}},be={style:{width:"100px","font-size":"14px",border:"1px solid gray",color:"royalblue","border-left":"0px"}},ve={key:0,class:"tableContent"},we={style:{color:"palevioletred","font-size":"14px","font-weight":"bold",border:"1px solid gray"}},Ve={style:{width:"100px","font-size":"14px",border:"1px solid gray",color:"royalblue","border-left":"0px"}},$e={key:0,class:"tableContent"},ke={style:{color:"palevioletred","font-size":"14px","font-weight":"bold",border:"1px solid gray"}},De={style:{width:"100px","font-size":"14px",border:"1px solid gray",color:"royalblue","border-left":"0px"}},ze={key:0,class:"tableContent"},Ce={style:{color:"palevioletred","font-size":"14px","font-weight":"bold",border:"1px solid gray"}},Ee={style:{width:"100px","font-size":"14px",border:"1px solid gray",color:"royalblue","border-left":"0px"}},We={key:0,class:"tableContent"},Te={style:{color:"palevioletred","font-size":"14px","font-weight":"bold",border:"1px solid gray"}},Ue={style:{width:"100px","font-size":"14px",border:"1px solid gray",color:"royalblue","border-left":"0px"}},Se={key:0,class:"tableContent"},Ne={style:{color:"palevioletred","font-size":"14px","font-weight":"bold",border:"1px solid gray"}},Be={style:{width:"100px","font-size":"14px",border:"1px solid gray",color:"royalblue","border-left":"0px"}},Fe=J({__name:"threeDaysWeatherTable",props:["loading","threeDaysWeather","getDate"],setup(h){const e=X(),f=G(),b=Y(),D=Z(),T=$=>{D.push("/weatherForecast/thirtySixHours"),e.keyWord=$},U=$=>{D.push("/weatherForecast/week"),b.keyWord=$};return O(($,B,z)=>{f.keyWord="",f.resetFilter(),z()}),($,B)=>{const z=g("el-button"),S=g("el-popover"),v=g("el-table-column"),w=g("el-table"),o=ee("loading");return te((c(),N(w,{data:h.threeDaysWeather,border:"","max-height":"calc(100vh - 465px)",style:{width:"90%",margin:"20px auto"}},{default:n(()=>[t(v,{fixed:"left",label:"縣市名稱",align:"center","min-width":"95"},{default:n(({row:d})=>[l("span",ne,_(d.locationName),1),t(S,{placement:"right",width:150,trigger:"click"},{reference:n(()=>[t(z,{class:"checkBtn",type:"danger",icon:"More",style:{width:"30px",height:"30px","border-radius":"50%"}})]),default:n(()=>[l("div",{onClick:s=>T(d.locationName),class:"locationName",style:{color:"gray","font-size":"12px"}}," 查看36小時內預報",8,de),l("div",{onClick:s=>U(d.locationName),class:"locationName",style:{color:"gray","font-size":"12px"}},"查看未來一週預報 ",8,ie)]),_:2},1024)]),_:1}),t(v,{label:"天氣",align:"center",width:"220"},{default:n(({row:d})=>[(c(),p(y,null,k(32,s=>{var m,r;return c(),p(y,{key:s},[((m=d.weatherElement[1].time[s-1].startTime)==null?void 0:m.slice(8,10))===`${h.getDate}`?(c(),p("div",re,[l("div",ue,_(`${(r=d.weatherElement[1].time[s-1].startTime)==null?void 0:r.slice(11,13)}時`),1),l("div",ce,_(d.weatherElement[1].time[s-1].elementValue[0].value),1)])):V("",!0)],64)}),64))]),_:1}),t(v,{label:"降雨機率",align:"center",width:"150"},{default:n(({row:d})=>[(c(),p(y,null,k(16,s=>{var m,r;return c(),p(y,{key:s},[((m=d.weatherElement[7].time[s-1].startTime)==null?void 0:m.slice(8,10))===`${h.getDate}`?(c(),p("div",me,[l("div",pe,_(`${(r=d.weatherElement[7].time[s-1].startTime)==null?void 0:r.slice(11,13)}時`),1),l("div",he,_(`${d.weatherElement[7].time[s-1].elementValue[0].value}%`),1)])):V("",!0)],64)}),64))]),_:1}),t(v,{label:"溫度",align:"center",width:"150"},{default:n(({row:d})=>[(c(),p(y,null,k(32,s=>{var m,r;return c(),p(y,{key:s},[((m=d.weatherElement[3].time[s-1].dataTime)==null?void 0:m.slice(8,10))===`${h.getDate}`?(c(),p("div",_e,[l("div",ye,_(`${(r=d.weatherElement[3].time[s-1].dataTime)==null?void 0:r.slice(11,13)}時`),1),l("div",ge,_(`${d.weatherElement[3].time[s-1].elementValue[0].value}°C `),1)])):V("",!0)],64)}),64))]),_:1}),t(v,{label:"體感溫度",align:"center",width:"150"},{default:n(({row:d})=>[(c(),p(y,null,k(32,s=>{var m,r;return c(),p(y,{key:s},[((m=d.weatherElement[2].time[s-1].dataTime)==null?void 0:m.slice(8,10))===`${h.getDate}`?(c(),p("div",fe,[l("div",xe,_(`${(r=d.weatherElement[2].time[s-1].dataTime)==null?void 0:r.slice(11,13)}時`),1),l("div",be,_(`${d.weatherElement[2].time[s-1].elementValue[0].value}°C `),1)])):V("",!0)],64)}),64))]),_:1}),t(v,{label:"相對濕度",align:"center",width:"150"},{default:n(({row:d})=>[(c(),p(y,null,k(32,s=>{var m,r;return c(),p(y,{key:s},[((m=d.weatherElement[4].time[s-1].dataTime)==null?void 0:m.slice(8,10))===`${h.getDate}`?(c(),p("div",ve,[l("div",we,_(`${(r=d.weatherElement[4].time[s-1].dataTime)==null?void 0:r.slice(11,13)}時`),1),l("div",Ve,_(`${d.weatherElement[4].time[s-1].elementValue[0].value}% `),1)])):V("",!0)],64)}),64))]),_:1}),t(v,{label:"舒適度指數",align:"center",width:"150"},{default:n(({row:d})=>[(c(),p(y,null,k(32,s=>{var m,r;return c(),p(y,{key:s},[((m=d.weatherElement[5].time[s-1].dataTime)==null?void 0:m.slice(8,10))===`${h.getDate}`?(c(),p("div",$e,[l("div",ke,_(`${(r=d.weatherElement[5].time[s-1].dataTime)==null?void 0:r.slice(11,13)}時`),1),l("div",De,_(`${d.weatherElement[5].time[s-1].elementValue[1].value} `),1)])):V("",!0)],64)}),64))]),_:1}),t(v,{label:"風速",align:"center",width:"150"},{default:n(({row:d})=>[(c(),p(y,null,k(32,s=>{var m,r;return c(),p(y,{key:s},[((m=d.weatherElement[8].time[s-1].dataTime)==null?void 0:m.slice(8,10))===`${h.getDate}`?(c(),p("div",ze,[l("div",Ce,_(`${(r=d.weatherElement[8].time[s-1].dataTime)==null?void 0:r.slice(11,13)}時`),1),l("div",Ee,_(`${d.weatherElement[8].time[s-1].elementValue[0].value} m/s`),1)])):V("",!0)],64)}),64))]),_:1}),t(v,{label:"風向",align:"center",width:"150"},{default:n(({row:d})=>[(c(),p(y,null,k(32,s=>{var m,r;return c(),p(y,{key:s},[((m=d.weatherElement[9].time[s-1].dataTime)==null?void 0:m.slice(8,10))===`${h.getDate}`?(c(),p("div",We,[l("div",Te,_(`${(r=d.weatherElement[9].time[s-1].dataTime)==null?void 0:r.slice(11,13)}時`),1),l("div",Ue,_(`${d.weatherElement[9].time[s-1].elementValue[0].value} `),1)])):V("",!0)],64)}),64))]),_:1}),t(v,{label:"露點溫度",align:"center",width:"150"},{default:n(({row:d})=>[(c(),p(y,null,k(32,s=>{var m,r;return c(),p(y,{key:s},[((m=d.weatherElement[10].time[s-1].dataTime)==null?void 0:m.slice(8,10))===`${h.getDate}`?(c(),p("div",Se,[l("div",Ne,_(`${(r=d.weatherElement[10].time[s-1].dataTime)==null?void 0:r.slice(11,13)}時`),1),l("div",Be,_(`${d.weatherElement[10].time[s-1].elementValue[0].value}°C `),1)])):V("",!0)],64)}),64))]),_:1})]),_:1},8,["data"])),[[o,h.loading]])}}}),A=K(Fe,[["__scopeId","data-v-6220916e"]]),u=h=>(ae("data-v-c2c0d519"),h=h(),se(),h),Pe=u(()=>l("div",{class:"title",style:{color:"salmon","font-weight":"bold"}},"未來三天天氣預報",-1)),Ie=u(()=>l("div",{style:{color:"red",margin:"5px 0px"}},"此資料約每六小時更新一次",-1)),He=u(()=>l("div",null,"資料內容包含(天氣、降雨機率、溫度、體感溫度、相對濕度、舒適度指數、風速、風向，露點溫度)",-1)),Me=u(()=>l("div",{style:{color:"yellow"}},"搜尋你想查看縣市或篩選區域",-1)),Le={class:"search"},qe=u(()=>l("span",{style:{"margin-right":"5px",color:"red","font-weight":"bold"}},"搜尋縣市:",-1)),Ae={class:"filter"},Re=u(()=>l("span",{style:{color:"red","font-weight":"bold"}},"依照縣市所在區域篩選:",-1)),je=u(()=>l("span",null,"北部:",-1)),Ge=u(()=>l("span",null,"中部:",-1)),Je=u(()=>l("span",null,"南部:",-1)),Ke=u(()=>l("span",null,"東部:",-1)),Qe=u(()=>l("span",null,"離島:",-1)),Xe=u(()=>l("div",{class:"title",style:{color:"salmon","font-weight":"bold"}},"未來三天天氣預報",-1)),Ye=u(()=>l("div",{style:{color:"red",margin:"5px 0px"}},"此資料約每六小時更新一次",-1)),Ze=u(()=>l("div",null,"資料內容包含(天氣、降雨機率、溫度、體感溫度、相對濕度、舒適度指數、風速、風向，露點溫度)",-1)),Oe=u(()=>l("div",{style:{color:"yellow"}},"搜尋你想查看縣市或篩選區域",-1)),et={class:"search"},tt=u(()=>l("span",{style:{"margin-right":"5px",color:"red","font-weight":"bold"}},"搜尋縣市:",-1)),lt={class:"filter"},ot=u(()=>l("span",{style:{color:"red","font-weight":"bold"}},"依照縣市所在區域篩選:",-1)),at=u(()=>l("span",null,"北部:",-1)),st=u(()=>l("span",null,"中部:",-1)),nt=u(()=>l("span",null,"南部:",-1)),dt=u(()=>l("span",null,"東部:",-1)),it=u(()=>l("span",null,"離島:",-1)),rt=u(()=>l("div",{class:"title",style:{color:"salmon","font-weight":"bold"}},"未來三天天氣預報",-1)),ut=u(()=>l("div",{style:{color:"red",margin:"5px 0px"}},"此資料約每六小時更新一次",-1)),ct=u(()=>l("div",null,"資料內容包含(天氣、降雨機率、溫度、體感溫度、相對濕度、舒適度指數、風速、風向，露點溫度)",-1)),mt=u(()=>l("div",{style:{color:"yellow"}},"搜尋你想查看縣市或篩選區域",-1)),pt={class:"search"},ht=u(()=>l("span",{style:{"margin-right":"5px",color:"red","font-weight":"bold"}},"搜尋縣市:",-1)),_t={class:"filter"},yt=u(()=>l("span",{style:{color:"red","font-weight":"bold"}},"依照縣市所在區域篩選:",-1)),gt=u(()=>l("span",null,"北部:",-1)),ft=u(()=>l("span",null,"中部:",-1)),xt=u(()=>l("span",null,"南部:",-1)),bt=u(()=>l("span",null,"東部:",-1)),vt=u(()=>l("span",null,"離島:",-1)),wt=J({__name:"index",setup(h){const e=G(),f=R(!0),b=R([]),D=["臺北市","新北市","基隆市","新竹市","桃園市","新竹縣","宜蘭縣"],T=["臺中市","苗栗縣","彰化縣","南投縣","雲林縣"],U=["高雄市","臺南市","嘉義市","嘉義縣","屏東縣"],$=["花蓮縣","臺東縣"],B=["金門縣","連江縣","澎湖縣"],z=j(()=>{const w=d=>b.value.filter(s=>d.includes(s.locationName));let o=[];return e.east&&(o=o.concat(w($))),e.south&&(o=o.concat(w(U))),e.mid&&(o=o.concat(w(T))),e.north&&(o=o.concat(w(D))),e.out&&(o=o.concat(w(B))),!e.east&&!e.south&&!e.mid&&!e.north&&!e.out?b.value:o});le(()=>[e.east,e.south,e.mid,e.north,e.out],()=>{b.value=z.value,v()});const S=j(()=>b.value.filter(w=>e.keyWord!==""?w.locationName.match(e.keyWord):w)),v=async()=>{const w=await Q();b.value=w.data.records.locations[0].location,(e.east||e.south||e.mid||e.north||e.out)&&(b.value=z.value),f.value=!1};return oe(()=>{v()}),(w,o)=>{const d=g("el-menu-item"),s=g("el-menu"),m=g("arrow-down"),r=g("el-icon"),C=g("el-button"),F=g("el-input"),P=g("Search"),x=g("el-switch"),E=g("el-card"),I=g("el-dropdown-menu"),H=g("el-dropdown"),M=g("el-tag");return c(),p("div",null,[t(s,{"default-active":"1",mode:"horizontal",align:"center",style:{margin:"20px 0px",border:"none"}},{default:n(()=>[t(d,{style:{width:"300px","font-size":"30px","border-bottom":"1px solid #666"},onClick:o[0]||(o[0]=i=>a(e).timePeriod=0),index:"1"},{default:n(()=>[W(_(a(L)(1)),1)]),_:1}),t(d,{style:{width:"300px","font-size":"30px","border-bottom":"1px solid #666"},onClick:o[1]||(o[1]=i=>a(e).timePeriod=1),index:"2"},{default:n(()=>[W(_(a(L)(2)),1)]),_:1}),t(d,{style:{width:"300px","font-size":"30px","border-bottom":"1px solid #666"},onClick:o[2]||(o[2]=i=>a(e).timePeriod=2),index:"3"},{default:n(()=>[W(_(a(L)(3)),1)]),_:1})]),_:1}),a(e).timePeriod===0?(c(),N(E,{key:0,style:{margin:"40px 50px","border-radius":"20px"}},{default:n(()=>[t(M,{class:"tag"},{default:n(()=>[Pe,Ie,He,t(H,{style:{"margin-top":"10px"}},{dropdown:n(()=>[t(I,{style:{padding:"0"}},{default:n(()=>[t(E,{style:{background:"pink"}},{default:n(()=>[l("div",Le,[qe,t(F,{size:"small",modelValue:a(e).keyWord,"onUpdate:modelValue":o[3]||(o[3]=i=>a(e).keyWord=i),placeholder:"請輸入縣市名稱",style:{width:"300px"}},null,8,["modelValue"]),t(r,{style:{border:"2px gray solid",padding:"5px"},class:"icon"},{default:n(()=>[t(P,{style:{color:"red"}})]),_:1})]),l("div",Ae,[Re,je,t(x,{modelValue:a(e).north,"onUpdate:modelValue":o[4]||(o[4]=i=>a(e).north=i),size:"small"},null,8,["modelValue"]),Ge,t(x,{modelValue:a(e).mid,"onUpdate:modelValue":o[5]||(o[5]=i=>a(e).mid=i),size:"small"},null,8,["modelValue"]),Je,t(x,{modelValue:a(e).south,"onUpdate:modelValue":o[6]||(o[6]=i=>a(e).south=i),size:"small"},null,8,["modelValue"]),Ke,t(x,{modelValue:a(e).east,"onUpdate:modelValue":o[7]||(o[7]=i=>a(e).east=i),size:"small"},null,8,["modelValue"]),Qe,t(x,{modelValue:a(e).out,"onUpdate:modelValue":o[8]||(o[8]=i=>a(e).out=i),size:"small"},null,8,["modelValue"]),t(C,{style:{"margin-left":"10px"},type:"primary",size:"small",onClick:a(e).resetFilter},{default:n(()=>[W("重置篩選")]),_:1},8,["onClick"])])]),_:1})]),_:1})]),default:n(()=>[t(C,{class:"toolBtn",type:"warning"},{default:n(()=>[Me,t(r,{style:{"margin-left":"10px"}},{default:n(()=>[t(m)]),_:1})]),_:1})]),_:1})]),_:1}),t(A,{loading:f.value,threeDaysWeather:S.value,getDate:a(q)(1)},null,8,["loading","threeDaysWeather","getDate"])]),_:1})):V("",!0),a(e).timePeriod===1?(c(),N(E,{key:1,style:{margin:"40px 50px","border-radius":"20px"}},{default:n(()=>[t(M,{class:"tag"},{default:n(()=>[Xe,Ye,Ze,t(H,{style:{"margin-top":"10px"}},{dropdown:n(()=>[t(I,{style:{padding:"0"}},{default:n(()=>[t(E,{style:{background:"pink"}},{default:n(()=>[l("div",et,[tt,t(F,{size:"small",modelValue:a(e).keyWord,"onUpdate:modelValue":o[9]||(o[9]=i=>a(e).keyWord=i),placeholder:"請輸入縣市名稱",style:{width:"300px"}},null,8,["modelValue"]),t(r,{style:{border:"2px gray solid",padding:"5px"},class:"icon"},{default:n(()=>[t(P,{style:{color:"red"}})]),_:1})]),l("div",lt,[ot,at,t(x,{modelValue:a(e).north,"onUpdate:modelValue":o[10]||(o[10]=i=>a(e).north=i),size:"small"},null,8,["modelValue"]),st,t(x,{modelValue:a(e).mid,"onUpdate:modelValue":o[11]||(o[11]=i=>a(e).mid=i),size:"small"},null,8,["modelValue"]),nt,t(x,{modelValue:a(e).south,"onUpdate:modelValue":o[12]||(o[12]=i=>a(e).south=i),size:"small"},null,8,["modelValue"]),dt,t(x,{modelValue:a(e).east,"onUpdate:modelValue":o[13]||(o[13]=i=>a(e).east=i),size:"small"},null,8,["modelValue"]),it,t(x,{modelValue:a(e).out,"onUpdate:modelValue":o[14]||(o[14]=i=>a(e).out=i),size:"small"},null,8,["modelValue"]),t(C,{style:{"margin-left":"10px"},type:"primary",size:"small",onClick:a(e).resetFilter},{default:n(()=>[W("重置篩選")]),_:1},8,["onClick"])])]),_:1})]),_:1})]),default:n(()=>[t(C,{class:"toolBtn",type:"warning"},{default:n(()=>[Oe,t(r,{style:{"margin-left":"10px"}},{default:n(()=>[t(m)]),_:1})]),_:1})]),_:1})]),_:1}),t(A,{loading:f.value,threeDaysWeather:S.value,getDate:a(q)(2)},null,8,["loading","threeDaysWeather","getDate"])]),_:1})):V("",!0),a(e).timePeriod===2?(c(),N(E,{key:2,style:{margin:"40px 50px","border-radius":"20px"}},{default:n(()=>[t(M,{class:"tag"},{default:n(()=>[rt,ut,ct,t(H,{style:{"margin-top":"10px"}},{dropdown:n(()=>[t(I,{style:{padding:"0"}},{default:n(()=>[t(E,{style:{background:"pink"}},{default:n(()=>[l("div",pt,[ht,t(F,{size:"small",modelValue:a(e).keyWord,"onUpdate:modelValue":o[15]||(o[15]=i=>a(e).keyWord=i),placeholder:"請輸入縣市名稱",style:{width:"300px"}},null,8,["modelValue"]),t(r,{style:{border:"2px gray solid",padding:"5px"},class:"icon"},{default:n(()=>[t(P,{style:{color:"red"}})]),_:1})]),l("div",_t,[yt,gt,t(x,{modelValue:a(e).north,"onUpdate:modelValue":o[16]||(o[16]=i=>a(e).north=i),size:"small"},null,8,["modelValue"]),ft,t(x,{modelValue:a(e).mid,"onUpdate:modelValue":o[17]||(o[17]=i=>a(e).mid=i),size:"small"},null,8,["modelValue"]),xt,t(x,{modelValue:a(e).south,"onUpdate:modelValue":o[18]||(o[18]=i=>a(e).south=i),size:"small"},null,8,["modelValue"]),bt,t(x,{modelValue:a(e).east,"onUpdate:modelValue":o[19]||(o[19]=i=>a(e).east=i),size:"small"},null,8,["modelValue"]),vt,t(x,{modelValue:a(e).out,"onUpdate:modelValue":o[20]||(o[20]=i=>a(e).out=i),size:"small"},null,8,["modelValue"]),t(C,{style:{"margin-left":"10px"},type:"primary",size:"small",onClick:a(e).resetFilter},{default:n(()=>[W("重置篩選")]),_:1},8,["onClick"])])]),_:1})]),_:1})]),default:n(()=>[t(C,{class:"toolBtn",type:"warning"},{default:n(()=>[mt,t(r,{style:{"margin-left":"10px"}},{default:n(()=>[t(m)]),_:1})]),_:1})]),_:1})]),_:1}),t(A,{loading:f.value,threeDaysWeather:S.value,getDate:a(q)(3)},null,8,["loading","threeDaysWeather","getDate"])]),_:1})):V("",!0)])}}}),zt=K(wt,[["__scopeId","data-v-c2c0d519"]]);export{zt as default};
