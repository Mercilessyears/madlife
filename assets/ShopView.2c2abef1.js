var se=Object.defineProperty;var oe=(e,i,r)=>i in e?se(e,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[i]=r;var b=(e,i,r)=>(oe(e,typeof i!="symbol"?i+"":i,r),r);import{h as ae,L as le,M as ce,O as W,P as h,Q as E,g as z,d as B,k as t,R as Q,S as Z,T as J,W as ee,U as te,X as L,u as ie,Y as T,Z as ue,$ as re,a0 as X,a1 as de,j as he,a2 as pe,a3 as ge,a4 as fe,a5 as me,o as _,c as A,b as g,_ as ve,r as N,x as we,D as xe,E as ye,y as j,z as F,A as w,a6 as be,B as H,F as V,C as D,H as O,a7 as Ce,J as M,a8 as _e,a9 as Be,p as Se,a as $e,K as G,N as ke,aa as Ee}from"./index.bb923f84.js";import{C as ze,O as Fe,W as De,b as Ae,P as Pe,S as Re,R as Ie,E as Le,G as Ne,f as We,L as Me}from"./GLTFLoader.c06454b8.js";function Oe(){const e=ae(le,null);return e===null&&ce("use-message","No outer <n-message-provider /> founded. See prerequisite in https://www.naiveui.com/en-US/os-theme/components/message for more details. If you want to use `useMessage` outside setup, please check https://www.naiveui.com/zh-CN/os-theme/components/message#Q-&-A."),e}var Te=W([h("progress",{display:"inline-block"},[h("progress-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),E("line",`
 width: 100%;
 display: block;
 `,[h("progress-content",`
 display: flex;
 align-items: center;
 `,[h("progress-graph",{flex:1})]),h("progress-custom-content",{marginLeft:"14px"}),h("progress-icon",`
 width: 30px;
 padding-left: 14px;
 height: var(--n-icon-size-line);
 line-height: var(--n-icon-size-line);
 font-size: var(--n-icon-size-line);
 `,[E("as-text",`
 color: var(--n-text-color-line-outer);
 text-align: center;
 width: 40px;
 font-size: var(--n-font-size);
 padding-left: 4px;
 transition: color .3s var(--n-bezier);
 `)])]),E("circle, dashboard",{width:"120px"},[h("progress-custom-content",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `),h("progress-text",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: inherit;
 font-size: var(--n-font-size-circle);
 color: var(--n-text-color-circle);
 font-weight: var(--n-font-weight-circle);
 transition: color .3s var(--n-bezier);
 white-space: nowrap;
 `),h("progress-icon",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: var(--n-icon-color);
 font-size: var(--n-icon-size-circle);
 `)]),E("multiple-circle",`
 width: 200px;
 color: inherit;
 `,[h("progress-text",`
 font-weight: var(--n-font-weight-circle);
 color: var(--n-text-color-circle);
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `)]),h("progress-content",{position:"relative"}),h("progress-graph",{position:"relative"},[h("progress-graph-circle",[W("svg",{verticalAlign:"bottom"}),h("progress-graph-circle-fill",`
 stroke: var(--n-fill-color);
 transition:
 opacity .3s var(--n-bezier),
 stroke .3s var(--n-bezier),
 stroke-dasharray .3s var(--n-bezier);
 `,[E("empty",{opacity:0})]),h("progress-graph-circle-rail",`
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]),h("progress-graph-line",[E("indicator-inside",[h("progress-graph-line-rail",`
 height: 16px;
 line-height: 16px;
 border-radius: 10px;
 `,[h("progress-graph-line-fill",`
 height: inherit;
 border-radius: 10px;
 `),h("progress-graph-line-indicator",`
 background: #0000;
 white-space: nowrap;
 text-align: right;
 margin-left: 14px;
 margin-right: 14px;
 height: inherit;
 font-size: 12px;
 color: var(--n-text-color-line-inner);
 transition: color .3s var(--n-bezier);
 `)])]),E("indicator-inside-label",`
 height: 16px;
 display: flex;
 align-items: center;
 `,[h("progress-graph-line-rail",`
 flex: 1;
 transition: background-color .3s var(--n-bezier);
 `),h("progress-graph-line-indicator",`
 background: var(--n-fill-color);
 font-size: 12px;
 transform: translateZ(0);
 display: flex;
 vertical-align: middle;
 height: 16px;
 line-height: 16px;
 padding: 0 10px;
 border-radius: 10px;
 position: absolute;
 white-space: nowrap;
 color: var(--n-text-color-line-inner);
 transition:
 right .2s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),h("progress-graph-line-rail",`
 position: relative;
 overflow: hidden;
 height: var(--n-rail-height);
 border-radius: 5px;
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 `,[h("progress-graph-line-fill",`
 background: var(--n-fill-color);
 position: relative;
 border-radius: 5px;
 height: inherit;
 width: 100%;
 max-width: 0%;
 transition:
 background-color .3s var(--n-bezier),
 max-width .2s var(--n-bezier);
 `,[E("processing",[W("&::after",`
 content: "";
 background-image: var(--n-line-bg-processing);
 animation: progress-processing-animation 2s var(--n-bezier) infinite;
 `)])])])])])]),W("@keyframes progress-processing-animation",`
 0% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 100%;
 opacity: 1;
 }
 66% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 100% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 `)]);const qe={success:t(Z,null),error:t(J,null),warning:t(ee,null),info:t(te,null)};var je=z({name:"ProgressLine",props:{clsPrefix:{type:String,required:!0},percentage:{type:Number,default:0},railColor:String,railStyle:[String,Object],fillColor:String,status:{type:String,required:!0},indicatorPlacement:{type:String,required:!0},indicatorTextColor:String,unit:{type:String,default:"%"},processing:{type:Boolean,required:!0},showIndicator:{type:Boolean,required:!0},height:[String,Number],railBorderRadius:[String,Number],fillBorderRadius:[String,Number]},setup(e,{slots:i}){const r=B(()=>L(e.height)),s=B(()=>e.railBorderRadius!==void 0?L(e.railBorderRadius):e.height!==void 0?L(e.height,{c:.5}):""),a=B(()=>e.fillBorderRadius!==void 0?L(e.fillBorderRadius):e.railBorderRadius!==void 0?L(e.railBorderRadius):e.height!==void 0?L(e.height,{c:.5}):"");return()=>{const{indicatorPlacement:n,railColor:c,railStyle:u,percentage:d,unit:o,indicatorTextColor:y,status:f,showIndicator:x,fillColor:l,processing:S,clsPrefix:m}=e;return t("div",{class:`${m}-progress-content`,role:"none"},t("div",{class:`${m}-progress-graph`,"aria-hidden":!0},t("div",{class:[`${m}-progress-graph-line`,{[`${m}-progress-graph-line--indicator-${n}`]:!0}]},t("div",{class:`${m}-progress-graph-line-rail`,style:[{backgroundColor:c,height:r.value,borderRadius:s.value},u]},t("div",{class:[`${m}-progress-graph-line-fill`,S&&`${m}-progress-graph-line-fill--processing`],style:{maxWidth:`${e.percentage}%`,backgroundColor:l,height:r.value,lineHeight:r.value,borderRadius:a.value}},n==="inside"?t("div",{class:`${m}-progress-graph-line-indicator`},d,o):null)))),x&&n==="outside"?t("div",null,i.default?t("div",{class:`${m}-progress-custom-content`,style:{color:y},role:"none"},i.default()):f==="default"?t("div",{role:"none",class:`${m}-progress-icon ${m}-progress-icon--as-text`,style:{color:y}},d,o):t("div",{class:`${m}-progress-icon`,"aria-hidden":!0},t(Q,{clsPrefix:m},{default:()=>qe[f]}))):null)}}});const He={success:t(Z,null),error:t(J,null),warning:t(ee,null),info:t(te,null)};var Ve=z({name:"ProgressCircle",props:{clsPrefix:{type:String,required:!0},status:{type:String,required:!0},strokeWidth:{type:Number,required:!0},fillColor:String,railColor:String,railStyle:[String,Object],percentage:{type:Number,default:0},offsetDegree:{type:Number,default:0},showIndicator:{type:Boolean,required:!0},indicatorTextColor:String,unit:String,viewBoxWidth:{type:Number,required:!0},gapDegree:{type:Number,required:!0},gapOffsetDegree:{type:Number,default:0}},setup(e,{slots:i}){function r(s,a,n){const{gapDegree:c,viewBoxWidth:u}=e,d=50,o=0,y=d,f=0,x=2*d,l=`M 55,55 m ${o},${y}
      a ${d},${d} 0 1 1 ${f},${-x}
      a ${d},${d} 0 1 1 ${-f},${x}`,S=Math.PI*2*d,m={stroke:n,strokeDasharray:`${s/100*(S-c)}px ${u*8}px`,strokeDashoffset:`-${c/2+Math.PI/3.6*a}px`};return{pathString:l,pathStyle:m}}return()=>{const{fillColor:s,railColor:a,strokeWidth:n,offsetDegree:c,status:u,percentage:d,showIndicator:o,indicatorTextColor:y,unit:f,gapOffsetDegree:x,clsPrefix:l}=e,{pathString:S,pathStyle:m}=r(100,0,a),{pathString:P,pathStyle:R}=r(d,c,s);return t("div",{class:`${l}-progress-content`,role:"none"},t("div",{class:`${l}-progress-graph`,"aria-hidden":!0},t("div",{class:`${l}-progress-graph-circle`,style:{transform:x?`rotate(${x}deg)`:void 0}},t("svg",{viewBox:"0 0 110 110"},t("g",null,t("path",{class:`${l}-progress-graph-circle-rail`,d:S,"stroke-width":n,"stroke-linecap":"round",fill:"none",style:m})),t("g",null,t("path",{class:[`${l}-progress-graph-circle-fill`,d===0&&`${l}-progress-graph-circle-fill--empty`],d:P,"stroke-width":n,"stroke-linecap":"round",fill:"none",style:R}))))),o?t("div",null,i.default?t("div",{class:`${l}-progress-custom-content`,role:"none"},i.default()):u!=="default"?t("div",{class:`${l}-progress-icon`,"aria-hidden":!0},t(Q,{clsPrefix:l},{default:()=>He[u]})):t("div",{class:`${l}-progress-text`,style:{color:y},role:"none"},t("span",{class:`${l}-progress-text__percentage`},d),t("span",{class:`${l}-progress-text__unit`},f))):null)}}});function U(e,i,r=100){return`m ${r/2} ${r/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`}var Ge=z({name:"ProgressMultipleCircle",props:{clsPrefix:{type:String,required:!0},viewBoxWidth:{type:Number,required:!0},percentage:{type:Array,default:[0]},strokeWidth:{type:Number,required:!0},circleGap:{type:Number,required:!0},showIndicator:{type:Boolean,required:!0},fillColor:{type:Array,default:()=>[]},railColor:{type:Array,default:()=>[]},railStyle:{type:Array,default:()=>[]}},setup(e,{slots:i}){const r=B(()=>e.percentage.map((a,n)=>`${Math.PI*a/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*n)-e.circleGap*n)*2}, ${e.viewBoxWidth*8}`));return()=>{const{viewBoxWidth:s,strokeWidth:a,circleGap:n,showIndicator:c,fillColor:u,railColor:d,railStyle:o,percentage:y,clsPrefix:f}=e;return t("div",{class:`${f}-progress-content`,role:"none"},t("div",{class:`${f}-progress-graph`,"aria-hidden":!0},t("div",{class:`${f}-progress-graph-circle`},t("svg",{viewBox:`0 0 ${s} ${s}`},y.map((x,l)=>t("g",{key:l},t("path",{class:`${f}-progress-graph-circle-rail`,d:U(s/2-a/2*(1+2*l)-n*l,a,s),"stroke-width":a,"stroke-linecap":"round",fill:"none",style:[{strokeDashoffset:0,stroke:d[l]},o[l]]}),t("path",{class:[`${f}-progress-graph-circle-fill`,x===0&&`${f}-progress-graph-circle-fill--empty`],d:U(s/2-a/2*(1+2*l)-n*l,a,s),"stroke-width":a,"stroke-linecap":"round",fill:"none",style:{strokeDasharray:r.value[l],strokeDashoffset:0,stroke:u[l]}})))))),c&&i.default?t("div",null,t("div",{class:`${f}-progress-text`},i.default())):null)}}});const Ye=Object.assign(Object.assign({},T.props),{processing:Boolean,type:{type:String,default:"line"},gapDegree:Number,gapOffsetDegree:Number,status:{type:String,default:"default"},railColor:[String,Array],railStyle:[String,Array],color:[String,Array],viewBoxWidth:{type:Number,default:100},strokeWidth:{type:Number,default:7},percentage:[Number,Array],unit:{type:String,default:"%"},showIndicator:{type:Boolean,default:!0},indicatorPosition:{type:String,default:"outside"},indicatorPlacement:{type:String,default:"outside"},indicatorTextColor:String,circleGap:{type:Number,default:1},height:Number,borderRadius:[String,Number],fillBorderRadius:[String,Number],offsetDegree:Number});var Xe=z({name:"Progress",props:Ye,setup(e){const i=B(()=>e.indicatorPlacement||e.indicatorPosition),r=B(()=>{if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type==="dashboard")return 75}),{mergedClsPrefixRef:s,inlineThemeDisabled:a}=ie(e),n=T("Progress","-progress",Te,ue,e,s),c=B(()=>{const{status:d}=e,{common:{cubicBezierEaseInOut:o},self:{fontSize:y,fontSizeCircle:f,railColor:x,railHeight:l,iconSizeCircle:S,iconSizeLine:m,textColorCircle:P,textColorLineInner:R,textColorLineOuter:k,lineBgProcessing:I,fontWeightCircle:v,[X("iconColor",d)]:C,[X("fillColor",d)]:p}}=n.value;return{"--n-bezier":o,"--n-fill-color":p,"--n-font-size":y,"--n-font-size-circle":f,"--n-font-weight-circle":v,"--n-icon-color":C,"--n-icon-size-circle":S,"--n-icon-size-line":m,"--n-line-bg-processing":I,"--n-rail-color":x,"--n-rail-height":l,"--n-text-color-circle":P,"--n-text-color-line-inner":R,"--n-text-color-line-outer":k}}),u=a?re("progress",B(()=>e.status[0]),c,e):void 0;return{mergedClsPrefix:s,mergedIndicatorPlacement:i,gapDeg:r,cssVars:a?void 0:c,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender}},render(){const{type:e,cssVars:i,indicatorTextColor:r,showIndicator:s,status:a,railColor:n,railStyle:c,color:u,percentage:d,viewBoxWidth:o,strokeWidth:y,mergedIndicatorPlacement:f,unit:x,borderRadius:l,fillBorderRadius:S,height:m,processing:P,circleGap:R,mergedClsPrefix:k,gapDeg:I,gapOffsetDegree:v,themeClass:C,$slots:p,onRender:$}=this;return $==null||$(),t("div",{class:[C,`${k}-progress`,`${k}-progress--${e}`,`${k}-progress--${a}`],style:i,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":d,role:e==="circle"||e==="line"||e==="dashboard"?"progressbar":"none"},e==="circle"||e==="dashboard"?t(Ve,{clsPrefix:k,status:a,showIndicator:s,indicatorTextColor:r,railColor:n,fillColor:u,railStyle:c,offsetDegree:this.offsetDegree,percentage:d,viewBoxWidth:o,strokeWidth:y,gapDegree:I===void 0?e==="dashboard"?75:0:I,gapOffsetDegree:v,unit:x},p):e==="line"?t(je,{clsPrefix:k,status:a,showIndicator:s,indicatorTextColor:r,railColor:n,fillColor:u,railStyle:c,percentage:d,processing:P,indicatorPlacement:f,unit:x,fillBorderRadius:S,railBorderRadius:l,height:m},p):e==="multiple-circle"?t(Ge,{clsPrefix:k,strokeWidth:y,railColor:n,fillColor:u,railStyle:c,viewBoxWidth:o,percentage:d,showIndicator:s,circleGap:R},p):null)}}),Ue=W([W("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),h("spin-container",{position:"relative"},[h("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[de()])]),h("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),h("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[E("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),h("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),h("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[E("spinning",`
 user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]);const Ke={small:20,medium:18,large:16},Qe=Object.assign(Object.assign({},T.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0}});var Ze=z({name:"Spin",props:Qe,setup(e){const{mergedClsPrefixRef:i,inlineThemeDisabled:r}=ie(e),s=T("Spin","-spin",Ue,me,e,i),a=B(()=>{const{size:c}=e,{common:{cubicBezierEaseInOut:u},self:d}=s.value,{opacitySpinning:o,color:y,textColor:f}=d,x=typeof c=="number"?he(c):d[X("size",c)];return{"--n-bezier":u,"--n-opacity-spinning":o,"--n-size":x,"--n-color":y,"--n-text-color":f}}),n=r?re("spin",B(()=>{const{size:c}=e;return typeof c=="number"?String(c):c[0]}),a,e):void 0;return{mergedClsPrefix:i,compitableShow:pe(e,["spinning","show"]),mergedStrokeWidth:B(()=>{const{strokeWidth:c}=e;if(c!==void 0)return c;const{size:u}=e;return Ke[typeof u=="number"?"medium":u]}),cssVars:r?void 0:a,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var e,i;const{$slots:r,mergedClsPrefix:s,description:a}=this,n=r.icon&&this.rotate,c=(a||r.description)&&t("div",{class:`${s}-spin-description`},a||((e=r.description)===null||e===void 0?void 0:e.call(r))),u=r.icon?t("div",{class:[`${s}-spin-body`,this.themeClass]},t("div",{class:[`${s}-spin`,n&&`${s}-spin--rotate`],style:r.default?"":this.cssVars},r.icon()),c):t("div",{class:[`${s}-spin-body`,this.themeClass]},t(ge,{clsPrefix:s,style:r.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${s}-spin`}),c);return(i=this.onRender)===null||i===void 0||i.call(this),r.default?t("div",{class:[`${s}-spin-container`,this.themeClass],style:this.cssVars},t("div",{class:[`${s}-spin-content`,this.compitableShow&&`${s}-spin-content--spinning`]},r),t(fe,{name:"fade-in-transition"},{default:()=>this.compitableShow?u:null})):u}});const Je={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},et=g("path",{d:"M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0 0 48.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z",fill:"currentColor"},null,-1),tt=[et];var it=z({name:"ArrowDownOutlined",render:function(i,r){return _(),A("svg",Je,tt)}});const rt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},nt=g("path",{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z",fill:"currentColor"},null,-1),st=[nt];var ot=z({name:"ArrowLeftOutlined",render:function(i,r){return _(),A("svg",rt,st)}});const at={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},lt=g("path",{d:"M868 545.5L536.1 163a31.96 31.96 0 0 0-48.3 0L156 545.5a7.97 7.97 0 0 0 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z",fill:"currentColor"},null,-1),ct=[lt];var ut=z({name:"ArrowUpOutlined",render:function(i,r){return _(),A("svg",at,ct)}});const dt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},ht=g("path",{d:"M922.9 701.9H327.4l29.9-60.9l496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1l-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3l-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9l-56.4 315.8l-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6c0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6c0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z",fill:"currentColor"},null,-1),pt=[ht];var gt=z({name:"ShoppingCartOutlined",render:function(i,r){return _(),A("svg",dt,pt)}});class ft{constructor(i,r){b(this,"container");b(this,"scene");b(this,"camera");b(this,"renderer");b(this,"controls");b(this,"model");b(this,"panzi",null);b(this,"mixer");b(this,"progressFn");b(this,"onFinish");b(this,"animateAction");b(this,"spotlight1");b(this,"spotlight2");b(this,"spotlight3");b(this,"clock");b(this,"timeoutId",null);this.container=document.getElementById(i),this.init(),this.animate(),this.onFinish=r,this.clock=new ze}init(){this.initScene(),this.initCamera(),this.initRenderer(),this.addMesh(),this.onResize(),window.addEventListener("wheel",this.onMouseWheel.bind(this))}onProgress(i){this.progressFn=i}async addMesh(){let i=await this.setModel("bag2.glb");this.onFinish(i)}initControls(){this.controls=new Fe(this.camera,this.renderer.domElement)}initRenderer(){var i;this.renderer=new De({antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.toneMapping=Ae,this.renderer.toneMappingExposure=3,(i=this.container)==null||i.appendChild(this.renderer.domElement),this.render()}initCamera(){this.camera=new Pe(45,window.innerWidth/window.innerHeight,.25,200),this.camera.position.set(-1.8,.6,2.7)}initScene(){this.scene=new Re,this.setEnvMap("000")}setEnvMap(i){new Ie().setPath("./files/hdr/").load(i+".hdr",r=>{r.mapping=Le,this.scene.background=r,this.scene.environment=r})}render(){let i=this.clock&&this.clock.getDelta();this.mixer&&this.mixer.update(i),this.renderer.render(this.scene,this.camera)}animate(){this.renderer.setAnimationLoop(this.render.bind(this))}onResize(){window.addEventListener("resize",this.resize.bind(this))}unResize(){window.removeEventListener("resize",this.resize.bind(this))}resize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}setModel(i){const r=this;return new Promise(s=>{new Ne().setPath("./files/gltf/").load(i,n=>{this.model&&this.model.removeFromParent(),this.model=n.scene.children[0],i=="bag2.glb"&&!this.panzi&&(this.panzi=n.scene.children[5],this.camera=n.cameras[0],this.mixer=new We(n.scene.children[1]),this.animateAction=this.mixer.clipAction(n.animations[0]),this.animateAction.setDuration(20).setLoop(Me,1),this.animateAction.clampWhenFinished=!0),i=="bag2.glb"&&(this.spotlight1=n.scene.children[2].children[0],this.spotlight1.intensity=1,this.spotlight2=n.scene.children[3].children[0],this.spotlight2.intensity=1,this.spotlight3=n.scene.children[4].children[0],this.spotlight3.intensity=1),this.scene.add(n.scene),s(i+"\u6A21\u578B\u6DFB\u52A0\u6210\u529F")},n=>{r.progressFn(n)})})}onMouseWheel(i){let r=i.deltaY>0?1:-1;this.animateAction.setEffectiveTimeScale(r),this.animateAction.paused=!1,this.animateAction.play(),this.timeoutId&&clearTimeout(this.timeoutId),this.timeoutId=setTimeout(()=>{this.animateAction.halt(.5)},300)}}const Y=[{id:7589,title:"GUCCI \u53E4\u9A70\u65B0\u6B3E\u5973\u5305",imgsrc:"./imgs/bag.png",price:17899,modelPath:"./files/gltf/",modelName:"bag2.glb",desc:[{title:"\u4E0E\u4E00\u6B3E\u5168\u65B0\u7684\u90AE\u5DEE\u5305\u8BBE\u8BA1\u3002",content:"\u8BE5\u7CFB\u5217\u624B\u888B\u540C\u65F6\u63A8\u51FA\u6469\u767B\u5ED3\u5F62\u7684\u6C34\u6876\u5305\u6B3E\u5F0F"},{title:"\u541160\u5E74\u524D\u53E4\u9A70\u7684\u7ECF\u5178\u624B\u888B\u81F4\u656C\u3002",content:"Gucci 1955\u9A6C\u8854\u6263\u7CFB\u5217\u624B\u888B\u5EF6\u7EED\u7ECF\u5178\u624B\u888B\u7EBF\u6761\u4E0E\u9020\u578B"},{title:"\u624B\u888B\u7ED3\u6784\u8BBE\u8BA1\u7CBE\u5DE7",content:"\u642D\u914D\u53EF\u8C03\u8282\u957F\u5EA6\u7684\u80A9\u5E26\uFF0C\u80A9\u80CC\u6216\u659C\u630E\u7686\u5B9C\u3002"},{title:"GUCCI 1955\u9A6C\u8854\u6263\u7CFB\u5217\u624B\u888B",content:"\u6807\u5FD7\u6027\u7684\u9A6C\u8854\u6263\u8BBE\u8BA1\u6E90\u4E8E\u9A6C\u672F\u8FD0\u52A8\uFF0C\u7531\u91D1\u5C5E\u53CC\u73AF\u548C\u4E00\u6761\u8854\u94FE\u7EC4\u5408\u800C\u6210\u3002"}]},{id:7591,title:"\u6C34\u6676\u51C9\u978B\u5973\u7EC6\u8DDF",imgsrc:"./imgs/womenshoes.jpg",price:17899,modelPath:"./files/gltf/",modelName:"shoes.glb",desc:[{title:"\u767D\u53D8\u5973\u795E\u5B63",content:"\u6027\u611F\u6F6E\u54C1\u3001\u4F18\u96C5\u8F7B\u6DD1\u8303\uFF01"},{title:"\u8212\u9002\u3001\u7115\u65B0",content:"\u624B\u611F\u5149\u6ED1\u3001\u5BCC\u6709\u5F39\u6027\u3001\u8212\u9002\u4E00\u6574\u5929"},{title:"\u4E2A\u6027\u3001\u9B45\u529B",content:"\u6C34\u6676\u642D\u914D\u91D1\u5C5E\uFF0C\u51F8\u663E\u67D4\u7F8E\u6C14\u8D28"},{title:"\u5168\u900F\u3001\u9AD8\u7AEF\u6C34\u6676",content:"\u6BCF\u4E00\u5904\u7684\u7EC6\u8282\uFF0C\u90FD\u5F88\u5230\u4F4D!"}]}],K=["000","080","079","077","076","067"];const q=e=>(Se("data-v-3c02584b"),e=e(),$e(),e),mt={class:"flex items-center w-52"},vt=q(()=>g("span",{class:"w-20"}," \u52A0\u8F7D\u4E2D\uFF1A",-1)),wt={class:"text-lg font-semibold title"},xt={class:"content"},yt={id:"shopScene",ref:"shopRef"},bt={class:"flex items-center p-2 text-xl"},Ct={class:"flex back"},_t=q(()=>g("div",{class:"flex-1 text-center title"},"\u4EA7\u54C1\u5217\u8868",-1)),Bt={class:"card-wrapper"},St=["src"],$t={class:"flex items-center flex-1"},kt={class:"truncate"},Et=["onClick"],zt=q(()=>g("div",{class:"text-xl text-center"}," \u5207\u6362\u573A\u666F ",-1)),Ft={class:"items-center card-wrapper"},Dt=["onClick"],At=["src"],Pt={class:"tip"},Rt=q(()=>g("span",null," \u4E0A\u4E0B\u6EDA\u52A8\u9F20\u6807\u6EDA\u8F6E ",-1)),It=z({setup(e){const i=N(Y),r=N(K),s=N(0),a=N(""),n=we(),c=Oe(),u=N(0),d=N(!0),o=xe({loading:!1,progress:0,basic3d:{},descIndex:0,isFullScreen:!1}),y=B(()=>{var C;return((C=(Y.filter(p=>p.id===s.value)||[])[0])==null?void 0:C.desc)||[]});function f(v){o.loading=!0,s.value=v.id,o.basic3d.setModel(v.modelName).then(()=>{o.loading=!1}),o.basic3d.onProgress(P)}function x(){n.push({name:"project"})}function l(){c.success("\u6DFB\u52A0\u6210\u529F")}function S(v,C){a.value=v,o.basic3d.setEnvMap(v)}function m(){const v=Y[0];s.value=v.id;const C=K[0];a.value=C}function P(v){let C=Date.now();if(C-u.value>150){const p=v.loaded/v.total*100;o.progress=parseFloat(p.toFixed(2)),u.value=C}}function R(){o.loading=!0,m(),o.basic3d=new ft("shopScene",k),o.basic3d.onProgress(P),I()}function k(v){o.loading=!1,o.progress=0}function I(){window.addEventListener("wheel",v=>{let C=o.basic3d.animateAction._clip.duration,p=o.basic3d.animateAction.time,$=Math.floor(p/C*4);o.descIndex=$,d.value=!1,v.deltaY>0&&(o.isFullScreen=!0),v.deltaY<0&&(o.isFullScreen=!1)})}return ye(R),(v,C)=>(_(),j(w(Ze),{show:w(o).loading},{description:F(()=>[g("div",mt,[vt,w(o).progress?(_(),j(w(Xe),{key:0,percentage:w(o).progress},null,8,["percentage"])):be("",!0)])]),default:F(()=>[(_(!0),A(V,null,H(w(y),(p,$)=>(_(),A("div",{class:M(["absolute px-3 py-2 bg-gray-200 bg-opacity-75 desc-wrapper w-80 top-10 left-96",{active:$===w(o).descIndex}]),key:$},[g("div",wt,G(p.title),1),g("div",xt,G(p.content),1)],2))),128)),g("div",yt,null,512),g("div",{class:M(["left-pro",{hidden:w(o).isFullScreen}])},[g("div",bt,[g("div",Ct,[D(w(Ce),{text:"",style:{"font-size":"24px"},onClick:x},{default:F(()=>[D(w(O),null,{default:F(()=>[D(w(ot))]),_:1})]),_:1})]),_t]),g("div",Bt,[(_(!0),A(V,null,H(i.value,(p,$)=>(_(),j(w(ke),{class:M(["cursor-pointer",s.value===p.id?"is-active":""]),onClick:ne=>f(p),key:p.id,hoverable:""},{cover:F(()=>[g("img",{src:p.imgsrc,style:{height:"200px"}},null,8,St)]),default:F(()=>[g("div",$t,[g("div",kt,G(p.title),1),g("div",{class:"flex ml-auto text-lg transition-all duration-300 hover:scale-150",onClick:Ee(l,["stop"])},[D(w(O),null,{default:F(()=>[D(w(gt))]),_:1})],8,Et)])]),_:2},1032,["onClick","class"]))),128))])],2),g("div",{class:M(["bg-gray-300 right-scene w-300px",{hidden:w(o).isFullScreen}])},[zt,g("div",Ft,[(_(!0),A(V,null,H(r.value,(p,$)=>(_(),A("div",{class:"m-3 cursor-pointer item",onClick:ne=>S(p),key:$},[g("img",{class:M(a.value===p?"active":""),src:`./files/hdr/${p}.jpg`,style:{height:"125px"}},null,10,At)],8,Dt))),128))])],2),_e(g("div",Pt,[Rt,D(w(O),null,{default:F(()=>[D(w(ut))]),_:1}),D(w(O),null,{default:F(()=>[D(w(it))]),_:1})],512),[[Be,d.value]])]),_:1},8,["show"]))}});var Mt=ve(It,[["__scopeId","data-v-3c02584b"]]);export{Mt as default};
