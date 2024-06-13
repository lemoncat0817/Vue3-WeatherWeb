import{b as Q}from"./index-TXLhPUiL.js";import{b as X,u as Y,a as Z}from"./week-BKlI4aoh.js";import{d as ee,A as te,m as g,C as W,D as $,n as oe,c as x,a as r,w as d,k as le,r as c,B as se,o as u,i as e,j as p,E as re,e as ne,f as ae,t as i,F as de,b as ie,h as ce,q as pe,s as _e,_ as ue}from"./index-Cl83UQQJ.js";import"./request-DkDDhs02.js";const s=y=>(pe("data-v-08c99543"),y=y(),_e(),y),he=s(()=>e("div",{class:"title",style:{color:"salmon","font-weight":"bold"}},"未來一週天氣預報",-1)),me=s(()=>e("div",{style:{color:"red",margin:"5px 0px"}},"此資料約每六小時更新一次",-1)),xe=s(()=>e("div",{class:"folder"},"資料內容包含(天氣、降雨機率、溫度、平均溫度、體感溫度、平均相對濕度、最小及最大舒適度指數、最大風速、風向，平均露點溫度)",-1)),ye=s(()=>e("div",{class:"rwdDiv"},"資料內容包含(天氣、降雨機率、溫度、平均溫度、體感溫度、",-1)),ve=s(()=>e("div",{class:"rwdDiv"},"平均相對濕度、最小及最大舒適度指數、最大風速、風向，平均露點溫度)",-1)),fe=s(()=>e("div",{style:{color:"yellow"}},"選擇或搜尋你想查看縣市",-1)),be={class:"search"},ge=s(()=>e("span",{style:{"margin-right":"5px",color:"red","font-weight":"bold"}},"搜尋縣市:",-1)),we={class:"filter"},Ve=s(()=>e("span",{style:{color:"red","font-weight":"bold"}},"依照縣市所在區域篩選:",-1)),ze=s(()=>e("span",null,"北部:",-1)),ke=s(()=>e("span",null,"中部:",-1)),Ee=s(()=>e("span",null,"南部:",-1)),Ce=s(()=>e("span",null,"東部:",-1)),Se=s(()=>e("span",null,"離島:",-1)),We={class:"locationNameTitle",style:{color:"brown","font-weight":"bold"}},$e=["onClick"],Ne=["onClick"],De={key:0,class:"text-center"},Te={style:{color:"palevioletred","font-size":"14px","font-weight":"bold",border:"1px solid gray"}},Be={style:{"font-size":"14px",border:"1px solid gray",color:"royalblue"}},Fe={class:"text-center"},Ue=s(()=>e("div",{style:{color:"palevioletred","font-size":"14px","font-weight":"bold",border:"1px solid gray","border-right":"0px"}}," 天氣:",-1)),Ie={style:{"font-size":"14px",border:"1px solid gray",color:"royalblue","border-left":"0px"}},He={class:"text-center"},qe=s(()=>e("div",{style:{color:"palevioletred","font-size":"14px","font-weight":"bold",border:"1px solid gray","border-right":"0px"}}," 降雨機率:",-1)),Ae={key:0,style:{"font-size":"14px",border:"1px solid gray",color:"royalblue","border-left":"0px"}},Le={key:1,style:{"font-size":"14px",border:"1px solid gray",color:"royalblue","border-left":"0px"}},Me={class:"text-center"},Re=s(()=>e("div",{style:{color:"palevioletred","font-size":"14px","font-weight":"bold",border:"1px solid gray","border-right":"0px"}}," 溫度:",-1)),je={style:{"font-size":"14px",border:"1px solid gray",color:"royalblue","border-left":"0px"}},Ge={class:"text-center"},Je=s(()=>e("div",{style:{color:"palevioletred","font-size":"14px","font-weight":"bold",border:"1px solid gray","border-right":"0px"}}," 平均溫度:",-1)),Ke={style:{"font-size":"14px",border:"1px solid gray",color:"royalblue","border-left":"0px"}},Oe={class:"text-center"},Pe=s(()=>e("div",{style:{color:"palevioletred","font-size":"14px","font-weight":"bold",border:"1px solid gray","border-right":"0px"}}," 體感溫度:",-1)),Qe={style:{"font-size":"14px",border:"1px solid gray",color:"royalblue","border-left":"0px"}},Xe={class:"text-center"},Ye=s(()=>e("div",{style:{color:"palevioletred","font-size":"14px","font-weight":"bold",border:"1px solid gray","border-right":"0px"}}," 平均相對濕度:",-1)),Ze={style:{"font-size":"14px",border:"1px solid gray",color:"royalblue","border-left":"0px"}},et={class:"text-center"},tt=s(()=>e("div",{style:{color:"palevioletred","font-size":"14px","font-weight":"bold",border:"1px solid gray","border-right":"0px"}}," 最小舒適度指數:",-1)),ot={style:{"font-size":"14px",border:"1px solid gray",color:"royalblue","border-left":"0px"}},lt={class:"text-center"},st=s(()=>e("div",{style:{color:"palevioletred","font-size":"14px","font-weight":"bold",border:"1px solid gray","border-right":"0px"}}," 最大舒適度指數:",-1)),rt={style:{"font-size":"14px",border:"1px solid gray",color:"royalblue","border-left":"0px"}},nt={class:"text-center"},at=s(()=>e("div",{style:{color:"palevioletred","font-size":"14px","font-weight":"bold",border:"1px solid gray","border-right":"0px"}}," 最大風速:",-1)),dt={style:{"font-size":"14px",border:"1px solid gray",color:"royalblue","border-left":"0px"}},it={class:"text-center"},ct=s(()=>e("div",{style:{color:"palevioletred","font-size":"14px","font-weight":"bold",border:"1px solid gray","border-right":"0px"}}," 風向:",-1)),pt={style:{"font-size":"14px",border:"1px solid gray",color:"royalblue","border-left":"0px"}},_t={class:"text-center"},ut=s(()=>e("div",{style:{color:"palevioletred","font-size":"14px","font-weight":"bold",border:"1px solid gray","border-right":"0px"}}," 平均露點溫度:",-1)),ht={style:{"font-size":"14px",border:"1px solid gray",color:"royalblue","border-left":"0px"}},mt=ee({__name:"index",setup(y){const t=X(),N=Y(),D=Z(),w=le(),T=a=>{w.push("/weatherForecast/thirtySixHours"),N.keyWord=a},B=a=>{w.push("/weatherForecast/threeDays"),D.keyWord=a};te((a,l,h)=>{t.keyWord="",t.resetFilter(),h()});const _=g([]),F=["臺北市","新北市","基隆市","新竹市","桃園市","新竹縣","宜蘭縣"],U=["臺中市","苗栗縣","彰化縣","南投縣","雲林縣"],I=["高雄市","臺南市","嘉義市","嘉義縣","屏東縣"],H=["花蓮縣","臺東縣"],q=["金門縣","連江縣","澎湖縣"],V=W(()=>{const a=h=>_.value.filter(v=>h.includes(v.locationName));let l=[];return t.east&&(l=l.concat(a(H))),t.south&&(l=l.concat(a(I))),t.mid&&(l=l.concat(a(U))),t.north&&(l=l.concat(a(F))),t.out&&(l=l.concat(a(q))),!t.east&&!t.south&&!t.mid&&!t.north&&!t.out?_.value:l});$(async()=>[t.east,t.south,t.mid,t.north,t.out],()=>{_.value=V.value,f()});const A=W(()=>_.value.filter(a=>t.keyWord!==""?a.locationName.match(t.keyWord):a)),L=g("F-D0047-065");$(L,()=>{f()});const z=g(!0),f=async()=>{const a=await Q();_.value=a.data.records.locations[0].location,(t.east||t.south||t.mid||t.north||t.out)&&(_.value=V.value),z.value=!1};return oe(()=>{f()}),(a,l)=>{const h=c("arrow-down"),v=c("el-icon"),b=c("el-button"),M=c("el-input"),R=c("Search"),m=c("el-switch"),k=c("el-card"),j=c("el-dropdown-menu"),G=c("el-dropdown"),J=c("el-tag"),K=c("el-popover"),E=c("el-table-column"),O=c("el-table"),P=se("loading");return u(),x("div",null,[r(k,{style:{margin:"40px 50px","border-radius":"20px"}},{default:d(()=>[r(J,{class:"tag"},{default:d(()=>[he,me,xe,ye,ve,e("div",null,[r(G,{style:{"margin-top":"10px"}},{dropdown:d(()=>[r(j,{style:{padding:"0"}},{default:d(()=>[r(k,{class:"card",style:{width:"100%",background:"pink"}},{default:d(()=>[e("div",be,[ge,r(M,{size:"small",modelValue:p(t).keyWord,"onUpdate:modelValue":l[0]||(l[0]=o=>p(t).keyWord=o),placeholder:"請輸入縣市名稱",style:{width:"300px"}},null,8,["modelValue"]),r(v,{style:{border:"2px gray solid",padding:"5px"},class:"icon"},{default:d(()=>[r(R,{style:{color:"red"}})]),_:1})]),e("div",we,[Ve,ze,r(m,{modelValue:p(t).north,"onUpdate:modelValue":l[1]||(l[1]=o=>p(t).north=o),size:"small"},null,8,["modelValue"]),ke,r(m,{modelValue:p(t).mid,"onUpdate:modelValue":l[2]||(l[2]=o=>p(t).mid=o),size:"small"},null,8,["modelValue"]),Ee,r(m,{modelValue:p(t).south,"onUpdate:modelValue":l[3]||(l[3]=o=>p(t).south=o),size:"small"},null,8,["modelValue"]),Ce,r(m,{modelValue:p(t).east,"onUpdate:modelValue":l[4]||(l[4]=o=>p(t).east=o),size:"small"},null,8,["modelValue"]),Se,r(m,{modelValue:p(t).out,"onUpdate:modelValue":l[5]||(l[5]=o=>p(t).out=o),size:"small"},null,8,["modelValue"]),r(b,{style:{"margin-left":"10px"},type:"primary",size:"small",onClick:p(t).resetFilter},{default:d(()=>[re("重置篩選")]),_:1},8,["onClick"])])]),_:1})]),_:1})]),default:d(()=>[r(b,{class:"toolBtn",type:"warning"},{default:d(()=>[fe,r(v,{style:{"margin-left":"10px"}},{default:d(()=>[r(h)]),_:1})]),_:1})]),_:1})])]),_:1}),ne((u(),ae(O,{data:A.value,border:"","max-height":"calc(100vh - 385px)",style:{width:"90%",margin:"20px auto"}},{default:d(()=>[r(E,{fixed:"left",align:"center","min-width":"95",label:"縣市名稱"},{default:d(({row:o})=>[e("span",We,i(o.locationName),1),r(K,{placement:"right",width:150,trigger:"click"},{reference:d(()=>[r(b,{class:"checkBtn",type:"danger",icon:"More",style:{width:"30px",height:"30px","border-radius":"50%"}})]),default:d(()=>[e("div",{onClick:n=>T(o.locationName),class:"locationName",style:{color:"gray","font-size":"12px"}},"查看36小時內預報",8,$e),e("div",{onClick:n=>B(o.locationName),class:"locationName",style:{color:"gray","font-size":"12px"}}," 查看未來三天預報",8,Ne)]),_:2},1024)]),_:1}),(u(),x(de,null,ie(14,o=>r(E,{key:o,align:"center",width:"425"},{header:d(()=>{var n,C,S;return[_.value.length>0&&_.value[0].weatherElement[1].time[o-1].startTime?(u(),x("div",De,[e("div",Te,i(`日期: ${(n=_.value[0].weatherElement[1].time[o-1].startTime)==null?void 0:n.slice(5,7)}
                  /${(C=_.value[0].weatherElement[1].time[o-1].startTime)==null?void 0:C.slice(8,10)}`),1),e("div",Be,i(`時間: ${(S=_.value[0].weatherElement[1].time[o-1].startTime)==null?void 0:S.slice(11,16)}`),1)])):ce("",!0)]}),default:d(({row:n})=>[e("div",Fe,[Ue,e("div",Ie,i(n.weatherElement[6].time[o-1].elementValue[0].value),1)]),e("div",He,[qe,n.weatherElement[0].time[o-1].elementValue[0].value!==" "?(u(),x("div",Ae,i(`${n.weatherElement[0].time[o-1].elementValue[0].value}%`),1)):(u(),x("div",Le," 暫無資料 "))]),e("div",Me,[Re,e("div",je,i(`${n.weatherElement[8].time[o-1].elementValue[0].value}°C -
                  ${n.weatherElement[12].time[o-1].elementValue[0].value}°C `),1)]),e("div",Ge,[Je,e("div",Ke,i(`${n.weatherElement[1].time[o-1].elementValue[0].value}°C `),1)]),e("div",Oe,[Pe,e("div",Qe,i(`${n.weatherElement[11].time[o-1].elementValue[0].value}°C -
                  ${n.weatherElement[5].time[o-1].elementValue[0].value}°C`),1)]),e("div",Xe,[Ye,e("div",Ze,i(`${n.weatherElement[2].time[o-1].elementValue[0].value}% `),1)]),e("div",et,[tt,e("div",ot,i(n.weatherElement[3].time[o-1].elementValue[1].value),1)]),e("div",lt,[st,e("div",rt,i(n.weatherElement[7].time[o-1].elementValue[1].value),1)]),e("div",nt,[at,e("div",dt,i(`${n.weatherElement[4].time[o-1].elementValue[0].value} m/s `),1)]),e("div",it,[ct,e("div",pt,i(`${n.weatherElement[13].time[o-1].elementValue[0].value} `),1)]),e("div",_t,[ut,e("div",ht,i(`${n.weatherElement[14].time[o-1].elementValue[0].value}°C `),1)])]),_:2},1024)),64))]),_:1},8,["data"])),[[P,z.value]])]),_:1})])}}}),bt=ue(mt,[["__scopeId","data-v-08c99543"]]);export{bt as default};
