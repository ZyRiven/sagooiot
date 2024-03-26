import{u as t,a as e,b as a,c as i,e as n,d as o,S as r,f as s,Z as l,g as d,h as f,r as u,j as h,k as c,l as m,m as g,n as w,o as v}from"./echarts.1709626208081.js";t([e,a]),t(i),n({type:"series.wordCloud",visualStyleAccessPath:"textStyle",visualStyleMapper:function(t){return{fill:t.get("color")}},visualDrawType:"fill",optionUpdated:function(){var t=this.option;t.gridSize=Math.max(Math.floor(t.gridSize),4)},getInitialData:function(t,e){var a=o(t.data,{coordDimensions:["value"]}),i=new r(a,this);return i.initData(t.data),i},defaultOption:{maskImage:null,shape:"circle",keepAspect:!1,left:"center",top:"center",width:"70%",height:"80%",sizeRange:[12,60],rotationRange:[-90,90],rotationStep:45,gridSize:8,drawOutOfBound:!1,shrinkToFit:!1,textStyle:{fontWeight:"normal"}}}),s({type:"wordCloud",render:function(t,e,a){var i=this.group;i.removeAll();var n=t.getData(),o=t.get("gridSize");t.layoutInstance.ondraw=function(e,a,r,s){var u=n.getItemModel(r),h=u.getModel("textStyle"),c=new l({style:d(h),scaleX:1/s.info.mu,scaleY:1/s.info.mu,x:(s.gx+s.info.gw/2)*o,y:(s.gy+s.info.gh/2)*o,rotation:s.rot});c.setStyle({x:s.info.fillTextOffsetX,y:s.info.fillTextOffsetY+.5*a,text:e,verticalAlign:"middle",fill:n.getItemVisual(r,"style").fill,fontSize:a}),i.add(c),n.setItemGraphicEl(r,c),c.ensureState("emphasis").style=d(u.getModel(["emphasis","textStyle"]),{state:"emphasis"}),c.ensureState("blur").style=d(u.getModel(["blur","textStyle"]),{state:"blur"}),f(c,u.get(["emphasis","focus"]),u.get(["emphasis","blurScope"])),c.stateTransition={duration:t.get("animation")?t.get(["stateAnimation","duration"]):0,easing:t.get(["stateAnimation","easing"])},c.__highDownDispatcher=!0},this._model=t},remove:function(){this.group.removeAll(),this._model.layoutInstance.dispose()},dispose:function(){this._model.layoutInstance.dispose()}}),
/*!
* wordcloud2.js
* http://timdream.org/wordcloud2.js/
*
* Copyright 2011 - 2019 Tim Guan-tin Chien and contributors.
* Released under the MIT license
*/
window.setImmediate||(window.setImmediate=window.msSetImmediate||window.webkitSetImmediate||window.mozSetImmediate||window.oSetImmediate||function(){if(!window.postMessage||!window.addEventListener)return null;var t=[void 0],e="zero-timeout-message";return window.addEventListener("message",(function(a){if("string"==typeof a.data&&a.data.substr(0,e.length)===e){a.stopImmediatePropagation();var i=parseInt(a.data.substr(e.length),36);t[i]&&(t[i](),t[i]=void 0)}}),!0),window.clearImmediate=function(e){t[e]&&(t[e]=void 0)},function(a){var i=t.length;return t.push(a),window.postMessage(e+i.toString(36),"*"),i}}()||function(t){window.setTimeout(t,0)}),window.clearImmediate||(window.clearImmediate=window.msClearImmediate||window.webkitClearImmediate||window.mozClearImmediate||window.oClearImmediate||function(t){window.clearTimeout(t)});var p=function(){var t=document.createElement("canvas");if(!t||!t.getContext)return!1;var e=t.getContext("2d");return!!e&&(!!e.getImageData&&(!!e.fillText&&(!!Array.prototype.some&&!!Array.prototype.push)))}(),y=function(){if(p){for(var t,e,a=document.createElement("canvas").getContext("2d"),i=20;i;){if(a.font=i.toString(10)+"px sans-serif",a.measureText("Ｗ").width===t&&a.measureText("m").width===e)return i+1;t=a.measureText("Ｗ").width,e=a.measureText("m").width,i--}return 0}}(),M=function(t){for(var e,a,i=t.length;i;)e=Math.floor(Math.random()*i),a=t[--i],t[i]=t[e],t[e]=a;return t},x={},S=function(t,e){if(p){var a=Math.floor(Math.random()*Date.now());Array.isArray(t)||(t=[t]),t.forEach((function(e,a){if("string"==typeof e){if(t[a]=document.getElementById(e),!t[a])throw new Error("The element id specified is not found.")}else if(!e.tagName&&!e.appendChild)throw new Error("You must pass valid HTML elements, or ID of the element.")}));var i={list:[],fontFamily:'"Trebuchet MS", "Heiti TC", "微軟正黑體", "Arial Unicode MS", "Droid Fallback Sans", sans-serif',fontWeight:"normal",color:"random-dark",minSize:0,weightFactor:1,clearCanvas:!0,backgroundColor:"#fff",gridSize:8,drawOutOfBound:!1,shrinkToFit:!1,origin:null,drawMask:!1,maskColor:"rgba(255,0,0,0.3)",maskGapWidth:.3,layoutAnimation:!0,wait:0,abortThreshold:0,abort:function(){},minRotation:-Math.PI/2,maxRotation:Math.PI/2,rotationStep:.1,shuffle:!0,rotateRatio:.1,shape:"circle",ellipticity:.65,classes:null,hover:null,click:null};if(e)for(var n in e)n in i&&(i[n]=e[n]);if("function"!=typeof i.weightFactor){var o=i.weightFactor;i.weightFactor=function(t){return t*o}}if("function"!=typeof i.shape)switch(i.shape){case"circle":default:i.shape="circle";break;case"cardioid":i.shape=function(t){return 1-Math.sin(t)};break;case"diamond":i.shape=function(t){var e=t%(2*Math.PI/4);return 1/(Math.cos(e)+Math.sin(e))};break;case"square":i.shape=function(t){return Math.min(1/Math.abs(Math.cos(t)),1/Math.abs(Math.sin(t)))};break;case"triangle-forward":i.shape=function(t){var e=t%(2*Math.PI/3);return 1/(Math.cos(e)+Math.sqrt(3)*Math.sin(e))};break;case"triangle":case"triangle-upright":i.shape=function(t){var e=(t+3*Math.PI/2)%(2*Math.PI/3);return 1/(Math.cos(e)+Math.sqrt(3)*Math.sin(e))};break;case"pentagon":i.shape=function(t){var e=(t+.955)%(2*Math.PI/5);return 1/(Math.cos(e)+.726543*Math.sin(e))};break;case"star":i.shape=function(t){var e=(t+.955)%(2*Math.PI/10);return(t+.955)%(2*Math.PI/5)-2*Math.PI/10>=0?1/(Math.cos(2*Math.PI/10-e)+3.07768*Math.sin(2*Math.PI/10-e)):1/(Math.cos(e)+3.07768*Math.sin(e))}}i.gridSize=Math.max(Math.floor(i.gridSize),4);var r,s,l,d,f,u,h,c,m=i.gridSize,g=m-i.maskGapWidth,w=Math.abs(i.maxRotation-i.minRotation),v=Math.min(i.maxRotation,i.minRotation),S=i.rotationStep;switch(i.color){case"random-dark":h=function(){return L(10,50)};break;case"random-light":h=function(){return L(50,90)};break;default:"function"==typeof i.color&&(h=i.color)}"function"==typeof i.fontWeight&&(c=i.fontWeight);var I=null;"function"==typeof i.classes&&(I=i.classes);var b,T=!1,k=[],C=function(t){var e,a,i=t.currentTarget,n=i.getBoundingClientRect();t.touches?(e=t.touches[0].clientX,a=t.touches[0].clientY):(e=t.clientX,a=t.clientY);var o=e-n.left,r=a-n.top,s=Math.floor(o*(i.width/n.width||1)/m),l=Math.floor(r*(i.height/n.height||1)/m);return k[s]?k[s][l]:null},E=function(t){var e=C(t);b!==e&&(b=e,e?i.hover(e.item,e.dimension,t):i.hover(void 0,void 0,t))},A=function(t){var e=C(t);e&&(i.click(e.item,e.dimension,t),t.preventDefault())},O=[],F=function(t){if(O[t])return O[t];var e=8*t,a=e,n=[];for(0===t&&n.push([d[0],d[1],0]);a--;){var o=1;"circle"!==i.shape&&(o=i.shape(a/e*2*Math.PI)),n.push([d[0]+t*o*Math.cos(-a/e*2*Math.PI),d[1]+t*o*Math.sin(-a/e*2*Math.PI)*i.ellipticity,a/e*2*Math.PI])}return O[t]=n,n},D=function(){return i.abortThreshold>0&&(new Date).getTime()-u>i.abortThreshold},R=function(e,a,i,n,o){if(!(e>=s||a>=l||e<0||a<0)){if(r[e][a]=!1,i)t[0].getContext("2d").fillRect(e*m,a*m,g,g);T&&(k[e][a]={item:o,dimension:n})}},z=function p(e,a){if(a>20)return null;var n,o,d;Array.isArray(e)?(n=e[0],o=e[1]):(n=e.word,o=e.weight,d=e.attributes);var u=0===i.rotateRatio||Math.random()>i.rotateRatio?0:0===w?v:v+Math.round(Math.random()*w/S)*S,g=function(t){if(Array.isArray(t)){var e=t.slice();return e.splice(0,2),e}return[]}(e),x=function(t,e,a,n){var o=i.weightFactor(e);if(o<=i.minSize)return!1;var r,s=1;o<y&&(s=function(){for(var t=2;t*o<y;)t+=2;return t}()),r=c?c(t,e,o,n):i.fontWeight;var l=document.createElement("canvas"),d=l.getContext("2d",{willReadFrequently:!0});d.font=r+" "+(o*s).toString(10)+"px "+i.fontFamily;var f=d.measureText(t).width/s,u=Math.max(o*s,d.measureText("m").width,d.measureText("Ｗ").width)/s,h=f+2*u,g=3*u,w=Math.ceil(h/m),v=Math.ceil(g/m);h=w*m,g=v*m;var p=-f/2,M=.4*-u,x=Math.ceil((h*Math.abs(Math.sin(a))+g*Math.abs(Math.cos(a)))/m),S=Math.ceil((h*Math.abs(Math.cos(a))+g*Math.abs(Math.sin(a)))/m),I=S*m,b=x*m;l.setAttribute("width",I),l.setAttribute("height",b),d.scale(1/s,1/s),d.translate(I*s/2,b*s/2),d.rotate(-a),d.font=r+" "+(o*s).toString(10)+"px "+i.fontFamily,d.fillStyle="#000",d.textBaseline="middle",d.fillText(t,p*s,(M+.5*o)*s);var T=d.getImageData(0,0,I,b).data;if(D())return!1;for(var k,C,E,A=[],O=S,F=[x/2,S/2,x/2,S/2];O--;)for(k=x;k--;){E=m;t:for(;E--;)for(C=m;C--;)if(T[4*((k*m+E)*I+(O*m+C))+3]){A.push([O,k]),O<F[3]&&(F[3]=O),O>F[1]&&(F[1]=O),k<F[0]&&(F[0]=k),k>F[2]&&(F[2]=k);break t}}return{mu:s,occupied:A,bounds:F,gw:S,gh:x,fillTextOffsetX:p,fillTextOffsetY:M,fillTextWidth:f,fillTextHeight:u,fontSize:o}}(n,o,u,g);if(!x)return!1;if(D())return!1;if(!i.drawOutOfBound&&!i.shrinkToFit){var b=x.bounds;if(b[1]-b[3]+1>s||b[2]-b[0]+1>l)return!1}for(var k=f+1,C=function(a){var w=Math.floor(a[0]-x.gw/2),v=Math.floor(a[1]-x.gh/2);x.gw,x.gh;return!!function(t,e,a,n,o){for(var d=o.length;d--;){var f=t+o[d][0],u=e+o[d][1];if(f>=s||u>=l||f<0||u<0){if(!i.drawOutOfBound)return!1}else if(!r[f][u])return!1}return!0}(w,v,0,0,x.occupied)&&(function(e,a,n,o,r,s,l,d,f,u){var g,w,v,p=n.fontSize;g=h?h(o,r,p,s,l,u):i.color,w=c?c(o,r,p,u):i.fontWeight,v=I?I(o,r,p,u):i.classes,t.forEach((function(t){if(t.getContext){var r=t.getContext("2d"),s=n.mu;r.save(),r.scale(1/s,1/s),r.font=w+" "+(p*s).toString(10)+"px "+i.fontFamily,r.fillStyle=g,r.translate((e+n.gw/2)*m*s,(a+n.gh/2)*m*s),0!==d&&r.rotate(-d),r.textBaseline="middle",r.fillText(o,n.fillTextOffsetX*s,(n.fillTextOffsetY+.5*p)*s),r.restore()}else{var l=document.createElement("span"),u="";u="rotate("+-d/Math.PI*180+"deg) ",1!==n.mu&&(u+="translateX(-"+n.fillTextWidth/4+"px) scale("+1/n.mu+")");var h={position:"absolute",display:"block",font:w+" "+p*n.mu+"px "+i.fontFamily,left:(e+n.gw/2)*m+n.fillTextOffsetX+"px",top:(a+n.gh/2)*m+n.fillTextOffsetY+"px",width:n.fillTextWidth+"px",height:n.fillTextHeight+"px",lineHeight:p+"px",whiteSpace:"nowrap",transform:u,webkitTransform:u,msTransform:u,transformOrigin:"50% 40%",webkitTransformOrigin:"50% 40%",msTransformOrigin:"50% 40%"};for(var c in g&&(h.color=g),l.textContent=o,h)l.style[c]=h[c];if(f)for(var y in f)l.setAttribute(y,f[y]);v&&(l.className+=v),t.appendChild(l)}}))}(w,v,x,n,o,f-k,a[2],u,d,g),function(e,a,n,o,r,d){var f,u,h=r.occupied,c=i.drawMask;if(c&&((f=t[0].getContext("2d")).save(),f.fillStyle=i.maskColor),T){var g=r.bounds;u={x:(e+g[3])*m,y:(a+g[0])*m,w:(g[1]-g[3]+1)*m,h:(g[2]-g[0]+1)*m}}for(var w=h.length;w--;){var v=e+h[w][0],p=a+h[w][1];v>=s||p>=l||v<0||p<0||R(v,p,c,u,d)}c&&f.restore()}(w,v,0,0,x,e),{gx:w,gy:v,rot:u,info:x})};k--;){var E=F(f-k);i.shuffle&&(E=[].concat(E),M(E));for(var A=0;A<E.length;A++){var O=C(E[A]);if(O)return O}}return i.shrinkToFit?(Array.isArray(e)?e[1]=3*e[1]/4:e.weight=3*e.weight/4,p(e,a+1)):null},P=function(e,a,i){if(a)return!t.some((function(t){var a=new CustomEvent(e,{detail:i||{}});return!t.dispatchEvent(a)}),this);t.forEach((function(t){var a=new CustomEvent(e,{detail:i||{}});t.dispatchEvent(a)}),this)};!function(){var e=t[0];if(e.getContext)s=Math.ceil(e.width/m),l=Math.ceil(e.height/m);else{var n=e.getBoundingClientRect();s=Math.ceil(n.width/m),l=Math.ceil(n.height/m)}if(P("wordcloudstart",!0)){var o,h,c,g,w;if(d=i.origin?[i.origin[0]/m,i.origin[1]/m]:[s/2,l/2],f=Math.floor(Math.sqrt(s*s+l*l)),r=[],!e.getContext||i.clearCanvas)for(t.forEach((function(t){if(t.getContext){var e=t.getContext("2d");e.fillStyle=i.backgroundColor,e.clearRect(0,0,s*(m+1),l*(m+1)),e.fillRect(0,0,s*(m+1),l*(m+1))}else t.textContent="",t.style.backgroundColor=i.backgroundColor,t.style.position="relative"})),o=s;o--;)for(r[o]=[],h=l;h--;)r[o][h]=!0;else{var v=document.createElement("canvas").getContext("2d");v.fillStyle=i.backgroundColor,v.fillRect(0,0,1,1);var p,y,M=v.getImageData(0,0,1,1).data,S=e.getContext("2d").getImageData(0,0,s*m,l*m).data;for(o=s;o--;)for(r[o]=[],h=l;h--;){y=m;t:for(;y--;)for(p=m;p--;)for(c=4;c--;)if(S[4*((h*m+y)*s*m+(o*m+p))+c]!==M[c]){r[o][h]=!1;break t}!1!==r[o][h]&&(r[o][h]=!0)}S=v=M=void 0}if(i.hover||i.click){for(T=!0,o=s+1;o--;)k[o]=[];i.hover&&e.addEventListener("mousemove",E),i.click&&(e.addEventListener("click",A),e.addEventListener("touchstart",A),e.addEventListener("touchend",(function(t){t.preventDefault()})),e.style.webkitTapHighlightColor="rgba(0, 0, 0, 0)"),e.addEventListener("wordcloudstart",(function t(){e.removeEventListener("wordcloudstart",t),e.removeEventListener("mousemove",E),e.removeEventListener("click",A),b=void 0}))}c=0;var I=!0;i.layoutAnimation?0!==i.wait?(g=window.setTimeout,w=window.clearTimeout):(g=window.setImmediate,w=window.clearImmediate):(g=function(t){t()},w=function(){I=!1});var C=function(e,a){t.forEach((function(t){t.removeEventListener(e,a)}),this)},O=function n(){C("wordcloudstart",n),w(x[a])};!function(e,a){t.forEach((function(t){t.addEventListener(e,a)}),this)}("wordcloudstart",O),x[a]=(i.layoutAnimation?g:setTimeout)((function F(){if(I){if(c>=i.list.length)return w(x[a]),P("wordcloudstop",!1),C("wordcloudstart",O),void delete x[a];u=(new Date).getTime();var t=z(i.list[c],0),e=!P("wordclouddrawn",!0,{item:i.list[c],drawn:t});if(D()||e)return w(x[a]),i.abort(),P("wordcloudabort",!1),P("wordcloudstop",!1),void C("wordcloudstart",O);c++,x[a]=g(F,i.wait)}}),i.wait)}}()}function L(t,e){return"hsl("+(360*Math.random()).toFixed()+","+(30*Math.random()+70).toFixed()+"%,"+(Math.random()*(e-t)+t).toFixed()+"%)"}};if(S.isSupported=p,S.minFontSize=y,!S.isSupported)throw new Error("Sorry your browser not support wordCloud");u((function(t,e){t.eachSeriesByType("wordCloud",(function(a){var i=g(a.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()}),n=a.get("keepAspect"),o=a.get("maskImage"),r=o?o.width/o.height:1;n&&function(t,e){var a=t.width,i=t.height;a>i*e?(t.x+=(a-i*e)/2,t.width=i*e):(t.y+=(i-a/e)/2,t.height=a/e)}(i,r);var s=a.getData(),l=document.createElement("canvas");l.width=i.width,l.height=i.height;var d=l.getContext("2d");if(o)try{d.drawImage(o,0,0,l.width,l.height),function(t){for(var e=t.getContext("2d"),a=e.getImageData(0,0,t.width,t.height),i=e.createImageData(a),n=0,o=0,r=0;r<a.data.length;r+=4)a.data[r+3]>128&&(n+=l=a.data[r]+a.data[r+1]+a.data[r+2],++o);var s=n/o;for(r=0;r<a.data.length;r+=4){var l=a.data[r]+a.data[r+1]+a.data[r+2];a.data[r+3]<128||l>s?(i.data[r]=0,i.data[r+1]=0,i.data[r+2]=0,i.data[r+3]=0):(i.data[r]=255,i.data[r+1]=255,i.data[r+2]=255,i.data[r+3]=255)}e.putImageData(i,0,0)}(l)}catch(p){}var f=a.get("sizeRange"),u=a.get("rotationRange"),h=s.getDataExtent("value"),c=Math.PI/180,m=a.get("gridSize");function v(t){var e=t.detail.item;t.detail.drawn&&a.layoutInstance.ondraw&&(t.detail.drawn.gx+=i.x/m,t.detail.drawn.gy+=i.y/m,a.layoutInstance.ondraw(e[0],e[1],e[2],t.detail.drawn))}S(l,{list:s.mapArray("value",(function(t,e){var a=s.getItemModel(e);return[s.getName(e),a.get("textStyle.fontSize",!0)||w(t,h,f),e]})).sort((function(t,e){return e[1]-t[1]})),fontFamily:a.get("textStyle.fontFamily")||a.get("emphasis.textStyle.fontFamily")||t.get("textStyle.fontFamily"),fontWeight:a.get("textStyle.fontWeight")||a.get("emphasis.textStyle.fontWeight")||t.get("textStyle.fontWeight"),gridSize:m,ellipticity:i.height/i.width,minRotation:u[0]*c,maxRotation:u[1]*c,clearCanvas:!o,rotateRatio:1,rotationStep:a.get("rotationStep")*c,drawOutOfBound:a.get("drawOutOfBound"),shrinkToFit:a.get("shrinkToFit"),layoutAnimation:a.get("layoutAnimation"),shuffle:!1,shape:a.get("shape")}),l.addEventListener("wordclouddrawn",v),a.layoutInstance&&a.layoutInstance.dispose(),a.layoutInstance={ondraw:null,dispose:function(){l.removeEventListener("wordclouddrawn",v),l.addEventListener("wordclouddrawn",(function(t){t.preventDefault()}))}}}))})),h((function(t){var e=(t||{}).series;!c(e)&&(e=e?[e]:[]);var a=["shadowColor","shadowBlur","shadowOffsetX","shadowOffsetY"];function i(t){t&&m(a,(function(e){t.hasOwnProperty(e)&&(t["text"+v(e)]=t[e])}))}m(e,(function(t){if(t&&"wordCloud"===t.type){var e=t.textStyle||{};i(e.normal),i(e.emphasis)}}))}));