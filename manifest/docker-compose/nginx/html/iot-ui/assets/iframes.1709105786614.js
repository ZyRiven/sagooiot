import{d as a,a1 as e,l as s,k as r,i,aa as t,T as n,a as o,b as l,Z as m,O as f,aC as d,n as u,ar as c,o as g,aA as p,aB as h}from"./vue.1709105786614.js";import{_ as v,u as w}from"./index.1709105786614.js";const b=a({name:"layoutIfameView",setup(){const a=d(),n=w(),o=e({iframeLoading:!0,iframeUrl:""}),l=()=>{var e;o.iframeUrl=null==(e=a.meta)?void 0:e.linkUrl,u((()=>{o.iframeLoading=!0;const a=document.getElementById("iframe");if(!a)return!1;a.onload=()=>{o.iframeLoading=!1}}))},m=s((()=>{let{isTagsview:a}=n.state.themeConfig.themeConfig,{isTagsViewCurrenFull:e}=n.state.tagsViewRoutes;return e?"1px":a?"86px":"52px"}));return r((()=>{l()})),i((()=>a.path),(()=>{l()})),{jump:()=>{window.open(o.iframeUrl)},setIframeHeight:m,...t(o)}}}),j=[(a=>(p("data-v-6ccb2d9f"),a=a(),h(),a))((()=>l("img",{src:"/assets/open.1709105786614.svg"},null,-1)))],x=["src"];var C=v(b,[["render",function(a,e,s,r,i,t){const d=c("loading");return n((g(),o("div",{"class":"layout-view-bg-white flex mt1",style:f({height:`calc(100vh - ${a.setIframeHeight}`,border:"none"})},[l("div",{"class":"jump",onClick:e[0]||(e[0]=(...e)=>a.jump&&a.jump(...e))},j),n(l("iframe",{allowfullscreen:"true",src:a.iframeUrl,frameborder:"0",height:"100%",width:"100%",id:"iframe"},null,8,x),[[m,!a.iframeLoading]])],4)),[[d,a.iframeLoading]])}],["__scopeId","data-v-6ccb2d9f"]]);export{C as default};