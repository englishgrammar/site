import{r as m,c as j,u as ye,e as a,b as N,d as M,B as W,f as Ee,g as X,h as G,i as J,k as K,l as re,m as _}from"./index-43c9diRZ.js";function z(e){const o=m.useRef(e);return m.useEffect(()=>{o.current=e}),m.useMemo(()=>(...t)=>{var r;return(r=o.current)==null?void 0:r.call(o,...t)},[])}function F(e,o){const t=z(e),r=m.useRef(0);return m.useEffect(()=>()=>window.clearTimeout(r.current),[]),m.useCallback(()=>{window.clearTimeout(r.current),r.current=window.setTimeout(t,o)},[t,o])}const[Ce,y]=j("ScrollArea.Root component was not found in tree");function k(e,o){const t=z(o);ye(()=>{let r=0;if(e){const n=new ResizeObserver(()=>{cancelAnimationFrame(r),r=window.requestAnimationFrame(t)});return n.observe(e),()=>{window.cancelAnimationFrame(r),n.unobserve(e)}}},[e,t])}const Te=a.forwardRef((e,o)=>{const{style:t,...r}=e,n=y(),[s,l]=a.useState(0),[c,f]=a.useState(0),u=!!(s&&c);return k(n.scrollbarX,()=>{var d;const i=((d=n.scrollbarX)==null?void 0:d.offsetHeight)||0;n.onCornerHeightChange(i),f(i)}),k(n.scrollbarY,()=>{var d;const i=((d=n.scrollbarY)==null?void 0:d.offsetWidth)||0;n.onCornerWidthChange(i),l(i)}),u?a.createElement("div",{...r,ref:o,style:{...t,width:s,height:c}}):null}),Pe=a.forwardRef((e,o)=>{const t=y(),r=!!(t.scrollbarX&&t.scrollbarY);return t.type!=="scroll"&&r?a.createElement(Te,{...e,ref:o}):null}),Re={scrollHideDelay:1e3,type:"hover"},ae=m.forwardRef((e,o)=>{const t=N("ScrollAreaRoot",Re,e),{type:r,scrollHideDelay:n,scrollbars:s,...l}=t,[c,f]=m.useState(null),[u,i]=m.useState(null),[d,b]=m.useState(null),[h,p]=m.useState(null),[R,g]=m.useState(null),[v,x]=m.useState(0),[D,T]=m.useState(0),[w,P]=m.useState(!1),[B,S]=m.useState(!1),E=M(o,A=>f(A));return a.createElement(Ce,{value:{type:r,scrollHideDelay:n,scrollArea:c,viewport:u,onViewportChange:i,content:d,onContentChange:b,scrollbarX:h,onScrollbarXChange:p,scrollbarXEnabled:w,onScrollbarXEnabledChange:P,scrollbarY:R,onScrollbarYChange:g,scrollbarYEnabled:B,onScrollbarYEnabledChange:S,onCornerWidthChange:x,onCornerHeightChange:T}},a.createElement(W,{...l,ref:E,__vars:{"--sa-corner-width":s!=="xy"?"0px":`${v}px`,"--sa-corner-height":s!=="xy"?"0px":`${D}px`}}))});ae.displayName="@mantine/core/ScrollAreaRoot";function ce(e,o){const t=e/o;return Number.isNaN(t)?0:t}function I(e){const o=ce(e.viewport,e.content),t=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,r=(e.scrollbar.size-t)*o;return Math.max(r,18)}function ie(e,o){return t=>{if(e[0]===e[1]||o[0]===o[1])return o[0];const r=(o[1]-o[0])/(e[1]-e[0]);return o[0]+r*(t-e[0])}}function xe(e,[o,t]){return Math.min(t,Math.max(o,e))}function ne(e,o,t="ltr"){const r=I(o),n=o.scrollbar.paddingStart+o.scrollbar.paddingEnd,s=o.scrollbar.size-n,l=o.content-o.viewport,c=s-r,f=t==="ltr"?[0,l]:[l*-1,0],u=xe(e,f);return ie([0,l],[0,c])(u)}function Ae(e,o,t,r="ltr"){const n=I(t),s=n/2,l=o||s,c=n-l,f=t.scrollbar.paddingStart+l,u=t.scrollbar.size-t.scrollbar.paddingEnd-c,i=t.content-t.viewport,d=r==="ltr"?[0,i]:[i*-1,0];return ie([f,u],d)(e)}function ue(e,o){return e>0&&e<o}function O(e){return e?parseInt(e,10):0}function H(e,o,{checkForDefaultPrevented:t=!0}={}){return r=>{e==null||e(r),(t===!1||!r.defaultPrevented)&&(o==null||o(r))}}const[De,de]=j("ScrollAreaScrollbar was not found in tree"),fe=m.forwardRef((e,o)=>{const{sizes:t,hasThumb:r,onThumbChange:n,onThumbPointerUp:s,onThumbPointerDown:l,onThumbPositionChange:c,onDragScroll:f,onWheelScroll:u,onResize:i,...d}=e,b=y(),[h,p]=a.useState(null),R=M(o,S=>p(S)),g=a.useRef(null),v=a.useRef(""),{viewport:x}=b,D=t.content-t.viewport,T=z(u),w=z(c),P=F(i,10),B=S=>{if(g.current){const E=S.clientX-g.current.left,A=S.clientY-g.current.top;f({x:E,y:A})}};return m.useEffect(()=>{const S=E=>{const A=E.target;(h==null?void 0:h.contains(A))&&T(E,D)};return document.addEventListener("wheel",S,{passive:!1}),()=>document.removeEventListener("wheel",S,{passive:!1})},[x,h,D,T]),m.useEffect(w,[t,w]),k(h,P),k(b.content,P),a.createElement(De,{value:{scrollbar:h,hasThumb:r,onThumbChange:z(n),onThumbPointerUp:z(s),onThumbPositionChange:w,onThumbPointerDown:z(l)}},a.createElement("div",{...d,ref:R,style:{position:"absolute",...d.style},onPointerDown:H(e.onPointerDown,S=>{S.button===0&&(S.target.setPointerCapture(S.pointerId),g.current=h.getBoundingClientRect(),v.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",B(S))}),onPointerMove:H(e.onPointerMove,B),onPointerUp:H(e.onPointerUp,S=>{const E=S.target;E.hasPointerCapture(S.pointerId)&&E.releasePointerCapture(S.pointerId),document.body.style.webkitUserSelect=v.current,g.current=null})}))}),ze=m.forwardRef((e,o)=>{const{sizes:t,onSizesChange:r,style:n,...s}=e,l=y(),[c,f]=m.useState(),u=m.useRef(null),i=M(o,u,l.onScrollbarXChange);return m.useEffect(()=>{u.current&&f(getComputedStyle(u.current))},[u]),a.createElement(fe,{"data-orientation":"horizontal",...s,ref:i,sizes:t,style:{...n,"--sa-thumb-width":`${I(t)}px`},onThumbPointerDown:d=>e.onThumbPointerDown(d.x),onDragScroll:d=>e.onDragScroll(d.x),onWheelScroll:(d,b)=>{if(l.viewport){const h=l.viewport.scrollLeft+d.deltaX;e.onWheelScroll(h),ue(h,b)&&d.preventDefault()}},onResize:()=>{u.current&&l.viewport&&c&&r({content:l.viewport.scrollWidth,viewport:l.viewport.offsetWidth,scrollbar:{size:u.current.clientWidth,paddingStart:O(c.paddingLeft),paddingEnd:O(c.paddingRight)}})}})}),He=m.forwardRef((e,o)=>{const{sizes:t,onSizesChange:r,style:n,...s}=e,l=y(),[c,f]=a.useState(),u=m.useRef(null),i=M(o,u,l.onScrollbarYChange);return m.useEffect(()=>{u.current&&f(getComputedStyle(u.current))},[u]),a.createElement(fe,{...s,"data-orientation":"vertical",ref:i,sizes:t,style:{"--sa-thumb-height":`${I(t)}px`,...n},onThumbPointerDown:d=>e.onThumbPointerDown(d.y),onDragScroll:d=>e.onDragScroll(d.y),onWheelScroll:(d,b)=>{if(l.viewport){const h=l.viewport.scrollTop+d.deltaY;e.onWheelScroll(h),ue(h,b)&&d.preventDefault()}},onResize:()=>{u.current&&l.viewport&&c&&r({content:l.viewport.scrollHeight,viewport:l.viewport.offsetHeight,scrollbar:{size:u.current.clientHeight,paddingStart:O(c.paddingTop),paddingEnd:O(c.paddingBottom)}})}})}),Q=m.forwardRef((e,o)=>{const{orientation:t="vertical",...r}=e,{dir:n}=Ee(),s=y(),l=m.useRef(null),c=m.useRef(0),[f,u]=m.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),i=ce(f.viewport,f.content),d={...r,sizes:f,onSizesChange:u,hasThumb:i>0&&i<1,onThumbChange:h=>{l.current=h},onThumbPointerUp:()=>{c.current=0},onThumbPointerDown:h=>{c.current=h}},b=(h,p)=>Ae(h,c.current,f,p);return t==="horizontal"?a.createElement(ze,{...d,ref:o,onThumbPositionChange:()=>{if(s.viewport&&l.current){const h=s.viewport.scrollLeft,p=ne(h,f,n);l.current.style.transform=`translate3d(${p}px, 0, 0)`}},onWheelScroll:h=>{s.viewport&&(s.viewport.scrollLeft=h)},onDragScroll:h=>{s.viewport&&(s.viewport.scrollLeft=b(h,n))}}):t==="vertical"?a.createElement(He,{...d,ref:o,onThumbPositionChange:()=>{if(s.viewport&&l.current){const h=s.viewport.scrollTop,p=ne(h,f);l.current.style.transform=`translate3d(0, ${p}px, 0)`}},onWheelScroll:h=>{s.viewport&&(s.viewport.scrollTop=h)},onDragScroll:h=>{s.viewport&&(s.viewport.scrollTop=b(h))}}):null}),he=m.forwardRef((e,o)=>{const t=y(),{forceMount:r,...n}=e,[s,l]=m.useState(!1),c=e.orientation==="horizontal",f=F(()=>{if(t.viewport){const u=t.viewport.offsetWidth<t.viewport.scrollWidth,i=t.viewport.offsetHeight<t.viewport.scrollHeight;l(c?u:i)}},10);return k(t.viewport,f),k(t.content,f),r||s?a.createElement(Q,{"data-state":s?"visible":"hidden",...n,ref:o}):null}),We=m.forwardRef((e,o)=>{const{forceMount:t,...r}=e,n=y(),[s,l]=m.useState(!1);return m.useEffect(()=>{const{scrollArea:c}=n;let f=0;if(c){const u=()=>{window.clearTimeout(f),l(!0)},i=()=>{f=window.setTimeout(()=>l(!1),n.scrollHideDelay)};return c.addEventListener("pointerenter",u),c.addEventListener("pointerleave",i),()=>{window.clearTimeout(f),c.removeEventListener("pointerenter",u),c.removeEventListener("pointerleave",i)}}},[n.scrollArea,n.scrollHideDelay]),t||s?a.createElement(he,{"data-state":s?"visible":"hidden",...r,ref:o}):null}),Le=m.forwardRef((e,o)=>{const{forceMount:t,...r}=e,n=y(),s=e.orientation==="horizontal",[l,c]=m.useState("hidden"),f=F(()=>c("idle"),100);return m.useEffect(()=>{if(l==="idle"){const u=window.setTimeout(()=>c("hidden"),n.scrollHideDelay);return()=>window.clearTimeout(u)}},[l,n.scrollHideDelay]),m.useEffect(()=>{const{viewport:u}=n,i=s?"scrollLeft":"scrollTop";if(u){let d=u[i];const b=()=>{const h=u[i];d!==h&&(c("scrolling"),f()),d=h};return u.addEventListener("scroll",b),()=>u.removeEventListener("scroll",b)}},[n.viewport,s,f]),t||l!=="hidden"?a.createElement(Q,{"data-state":l==="hidden"?"hidden":"visible",...r,ref:o,onPointerEnter:H(e.onPointerEnter,()=>c("interacting")),onPointerLeave:H(e.onPointerLeave,()=>c("idle"))}):null}),le=a.forwardRef((e,o)=>{const{forceMount:t,...r}=e,n=y(),{onScrollbarXEnabledChange:s,onScrollbarYEnabledChange:l}=n,c=e.orientation==="horizontal";return a.useEffect(()=>(c?s(!0):l(!0),()=>{c?s(!1):l(!1)}),[c,s,l]),n.type==="hover"?a.createElement(We,{...r,ref:o,forceMount:t}):n.type==="scroll"?a.createElement(Le,{...r,ref:o,forceMount:t}):n.type==="auto"?a.createElement(he,{...r,ref:o,forceMount:t}):n.type==="always"?a.createElement(Q,{...r,ref:o}):null});function Be(e,o=()=>{}){let t={left:e.scrollLeft,top:e.scrollTop},r=0;return function n(){const s={left:e.scrollLeft,top:e.scrollTop},l=t.left!==s.left,c=t.top!==s.top;(l||c)&&o(),t=s,r=window.requestAnimationFrame(n)}(),()=>window.cancelAnimationFrame(r)}const ke=m.forwardRef((e,o)=>{const{style:t,...r}=e,n=y(),s=de(),{onThumbPositionChange:l}=s,c=M(o,i=>s.onThumbChange(i)),f=m.useRef(),u=F(()=>{f.current&&(f.current(),f.current=void 0)},100);return m.useEffect(()=>{const{viewport:i}=n;if(i){const d=()=>{if(u(),!f.current){const b=Be(i,l);f.current=b,l()}};return l(),i.addEventListener("scroll",d),()=>i.removeEventListener("scroll",d)}},[n.viewport,u,l]),a.createElement("div",{"data-state":s.hasThumb?"visible":"hidden",...r,ref:c,style:{width:"var(--sa-thumb-width)",height:"var(--sa-thumb-height)",...t},onPointerDownCapture:H(e.onPointerDownCapture,i=>{const b=i.target.getBoundingClientRect(),h=i.clientX-b.left,p=i.clientY-b.top;s.onThumbPointerDown({x:h,y:p})}),onPointerUp:H(e.onPointerUp,s.onThumbPointerUp)})}),se=a.forwardRef((e,o)=>{const{forceMount:t,...r}=e,n=de();return t||n.hasThumb?a.createElement(ke,{ref:o,...r}):null}),me=m.forwardRef(({children:e,style:o,...t},r)=>{const n=y(),s=M(r,n.onViewportChange);return a.createElement(W,{...t,ref:s,style:{overflowX:n.scrollbarXEnabled?"scroll":"hidden",overflowY:n.scrollbarYEnabled?"scroll":"hidden",...o}},a.createElement("div",{style:{minWidth:"100%",display:"table"},ref:n.onContentChange},e))});me.displayName="@mantine/core/ScrollAreaViewport";var Z={root:"m-d57069b5",viewport:"m-c0783ff9",viewportInner:"m-f8f631dd",scrollbar:"m-c44ba933",thumb:"m-d8b5e363",corner:"m-21657268"};const be={scrollHideDelay:1e3,type:"hover",scrollbars:"xy"},Ne=J((e,{scrollbarSize:o})=>({root:{"--scrollarea-scrollbar-size":K(o)}})),Y=X((e,o)=>{const t=N("ScrollArea",be,e),{classNames:r,className:n,style:s,styles:l,unstyled:c,scrollbarSize:f,vars:u,type:i,scrollHideDelay:d,viewportProps:b,viewportRef:h,onScrollPositionChange:p,children:R,offsetScrollbars:g,scrollbars:v,...x}=t,[D,T]=m.useState(!1),w=G({name:"ScrollArea",props:t,classes:Z,className:n,style:s,classNames:r,styles:l,unstyled:c,vars:u,varsResolver:Ne});return a.createElement(ae,{type:i==="never"?"always":i,scrollHideDelay:d,ref:o,scrollbars:v,...w("root"),...x},a.createElement(me,{...b,...w("viewport"),ref:h,"data-offset-scrollbars":g===!0?"xy":g||void 0,"data-scrollbars":v||void 0,onScroll:typeof p=="function"?({currentTarget:P})=>p({x:P.scrollLeft,y:P.scrollTop}):void 0},R),(v==="xy"||v==="x")&&a.createElement(le,{...w("scrollbar"),orientation:"horizontal","data-hidden":i==="never"||void 0,forceMount:!0,onMouseEnter:()=>T(!0),onMouseLeave:()=>T(!1)},a.createElement(se,{...w("thumb")})),(v==="xy"||v==="y")&&a.createElement(le,{...w("scrollbar"),orientation:"vertical","data-hidden":i==="never"||void 0,forceMount:!0,onMouseEnter:()=>T(!0),onMouseLeave:()=>T(!1)},a.createElement(se,{...w("thumb")})),a.createElement(Pe,{...w("corner"),"data-hovered":D||void 0,"data-hidden":i==="never"||void 0}))});Y.displayName="@mantine/core/ScrollArea";const ee=X((e,o)=>{const{children:t,classNames:r,styles:n,scrollbarSize:s,scrollHideDelay:l,type:c,dir:f,offsetScrollbars:u,viewportRef:i,onScrollPositionChange:d,unstyled:b,variant:h,viewportProps:p,scrollbars:R,style:g,vars:v,...x}=N("ScrollAreaAutosize",be,e);return a.createElement(W,{...x,ref:o,style:[{display:"flex"},g]},a.createElement(W,{style:{display:"flex",flexDirection:"column",flex:1}},a.createElement(Y,{classNames:r,styles:n,scrollHideDelay:l,scrollbarSize:s,type:c,dir:f,offsetScrollbars:u,viewportRef:i,onScrollPositionChange:d,unstyled:b,variant:h,viewportProps:p,vars:v,scrollbars:R},t)))});Y.classes=Z;ee.displayName="@mantine/core/ScrollAreaAutosize";ee.classes=Z;Y.Autosize=ee;const[Me,Xe]=j("Table component was not found in the tree");var U={table:"m-b23fa0ef",th:"m-4e7aa4f3",tr:"m-4e7aa4fd",td:"m-4e7aa4ef",tbody:"m-b2404537",thead:"m-b242d975",caption:"m-9e5a3ac7",scrollContainer:"m-a100c15",scrollContainerInner:"m-62259741"};function Ye(e,o){if(!o)return;const t={};return o.columnBorder&&e.withColumnBorders&&(t["data-with-column-border"]=!0),o.rowBorder&&e.withRowBorders&&(t["data-with-row-border"]=!0),o.striped&&e.striped&&(t["data-striped"]=e.striped),o.highlightOnHover&&e.highlightOnHover&&(t["data-hover"]=!0),o.captionSide&&e.captionSide&&(t["data-side"]=e.captionSide),o.stickyHeader&&e.stickyHeader&&(t["data-sticky"]=!0),t}function L(e,o){const t=`Table${e.charAt(0).toUpperCase()}${e.slice(1)}`,r=X((n,s)=>{const l=N(t,{},n),{classNames:c,className:f,style:u,styles:i,...d}=l,b=Xe();return a.createElement(W,{component:e,ref:s,...Ye(b,o),...b.getStyles(e,{className:f,classNames:c,style:u,styles:i,props:l}),...d})});return r.displayName=`@mantine/core/${t}`,r.classes=U,r}const q=L("th",{columnBorder:!0}),pe=L("td",{columnBorder:!0}),$=L("tr",{rowBorder:!0,striped:!0,highlightOnHover:!0}),Se=L("thead",{stickyHeader:!0}),ve=L("tbody"),we=L("tfoot"),ge=L("caption",{captionSide:!0});function te({data:e}){return a.createElement(a.Fragment,null,e.caption&&a.createElement(ge,null,e.caption),e.head&&a.createElement(Se,null,a.createElement($,null,e.head.map((o,t)=>a.createElement(q,{key:t},o)))),e.body&&a.createElement(ve,null,e.body.map((o,t)=>a.createElement($,{key:t},o.map((r,n)=>a.createElement(pe,{key:n},r))))),e.foot&&a.createElement(we,null,a.createElement($,null,e.foot.map((o,t)=>a.createElement(q,{key:t},o)))))}te.displayName="@mantine/core/TableDataRenderer";const Ue={type:"scrollarea"},$e=J((e,{minWidth:o,type:t})=>({scrollContainer:{"--table-min-width":K(o),"--table-overflow":t==="native"?"auto":void 0}})),oe=X((e,o)=>{const t=N("TableScrollContainer",Ue,e),{classNames:r,className:n,style:s,styles:l,unstyled:c,vars:f,children:u,minWidth:i,type:d,...b}=t,h=G({name:"TableScrollContainer",classes:U,props:t,className:n,style:s,classNames:r,styles:l,unstyled:c,vars:f,varsResolver:$e,rootSelector:"scrollContainer"});return a.createElement(W,{component:d==="scrollarea"?Y:"div",...d==="scrollarea"?{offsetScrollbars:"x"}:{},ref:o,...h("scrollContainer"),...b},a.createElement("div",{...h("scrollContainerInner")},u))});oe.classes=U;oe.displayName="@mantine/core/TableScrollContainer";const Oe={withRowBorders:!0,verticalSpacing:7},Fe=J((e,{layout:o,captionSide:t,horizontalSpacing:r,verticalSpacing:n,borderColor:s,stripedColor:l,highlightOnHoverColor:c,striped:f,highlightOnHover:u,stickyHeaderOffset:i,stickyHeader:d})=>({table:{"--table-layout":o,"--table-caption-side":t,"--table-horizontal-spacing":re(r),"--table-vertical-spacing":re(n),"--table-border-color":s?_(s,e):void 0,"--table-striped-color":f&&l?_(l,e):void 0,"--table-highlight-on-hover-color":u&&c?_(c,e):void 0,"--table-sticky-header-offset":d?K(i):void 0}})),C=X((e,o)=>{const t=N("Table",Oe,e),{classNames:r,className:n,style:s,styles:l,unstyled:c,vars:f,horizontalSpacing:u,verticalSpacing:i,captionSide:d,stripedColor:b,highlightOnHoverColor:h,striped:p,highlightOnHover:R,withColumnBorders:g,withRowBorders:v,withTableBorder:x,borderColor:D,layout:T,variant:w,data:P,children:B,stickyHeader:S,stickyHeaderOffset:E,...A}=t,V=G({name:"Table",props:t,className:n,style:s,classes:U,classNames:r,styles:l,unstyled:c,rootSelector:"table",vars:f,varsResolver:Fe});return a.createElement(Me,{value:{getStyles:V,stickyHeader:S,striped:p===!0?"odd":p||void 0,highlightOnHover:R,withColumnBorders:g,withRowBorders:v,captionSide:d||"bottom"}},a.createElement(W,{component:"table",variant:w,ref:o,mod:{"data-with-table-border":x},...V("table"),...A},B||!!P&&a.createElement(te,{data:P})))});C.classes=U;C.displayName="@mantine/core/Table";C.Td=pe;C.Th=q;C.Tr=$;C.Thead=Se;C.Tbody=ve;C.Tfoot=we;C.Caption=ge;C.ScrollContainer=oe;C.DataRenderer=te;export{C as T};
