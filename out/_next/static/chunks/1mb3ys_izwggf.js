(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,52683,e=>{"use strict";var t,n,a,r,s,i,o,l=e.i(43476),c=e.i(71645),d=e.i(63178),u=e.i(91918),m=e.i(25913),f=e.i(75157);let p=(0,m.cva)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function x({className:e,variant:t,size:n,asChild:a=!1,...r}){let s=a?u.Slot:"button";return(0,l.jsx)(s,{"data-slot":"button",className:(0,f.cn)(p({variant:t,size:n,className:e})),...r})}function g({className:e,type:t,...n}){return(0,l.jsx)("input",{type:t,"data-slot":"input",className:(0,f.cn)("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",e),...n})}function h({className:e,...t}){return(0,l.jsx)("textarea",{"data-slot":"textarea",className:(0,f.cn)("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),...t})}let b=(0,m.cva)("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",secondary:"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",destructive:"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"}},defaultVariants:{variant:"default"}});function v({className:e,variant:t,asChild:n=!1,...a}){let r=n?u.Slot:"span";return(0,l.jsx)(r,{"data-slot":"badge",className:(0,f.cn)(b({variant:t}),e),...a})}function j({className:e,...t}){return(0,l.jsx)("div",{"data-slot":"card",className:(0,f.cn)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",e),...t})}function w({className:e,...t}){return(0,l.jsx)("div",{"data-slot":"card-header",className:(0,f.cn)("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",e),...t})}function y({className:e,...t}){return(0,l.jsx)("div",{"data-slot":"card-title",className:(0,f.cn)("leading-none font-semibold",e),...t})}function N({className:e,...t}){return(0,l.jsx)("div",{"data-slot":"card-description",className:(0,f.cn)("text-muted-foreground text-sm",e),...t})}function k({className:e,...t}){return(0,l.jsx)("div",{"data-slot":"card-content",className:(0,f.cn)("px-6",e),...t})}function I({className:e,...t}){return(0,l.jsx)("div",{"data-slot":"card-footer",className:(0,f.cn)("flex items-center px-6 [.border-t]:pt-6",e),...t})}var C=e.i(48425),E=Object.defineProperty,M=(e,t)=>E(e,"name",{value:t,configurable:!0}),S="horizontal",A=["horizontal","vertical"],D=c.forwardRef(M(function(e,t){let{decorative:n,orientation:a=S,...r}=e,s=R(a)?a:S;return(0,l.jsx)(C.Primitive.div,{"data-orientation":s,...n?{role:"none"}:{"aria-orientation":"vertical"===s?s:void 0,role:"separator"},...r,ref:t})},"Separator"));function R(e){return A.includes(e)}function _({className:e,orientation:t="horizontal",decorative:n=!0,...a}){return(0,l.jsx)(D,{"data-slot":"separator",decorative:n,orientation:t,className:(0,f.cn)("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",e),...a})}M(R,"isValidOrientation");var P=e.i(81140),T=e.i(20783),O=e.i(30030),F=e.i(34620),L=Object.defineProperty,$=c[" useId ".trim().toString()]||(()=>void 0),B=0;function U(e){let[t,n]=c.useState($());return(0,F.useLayoutEffect)(()=>{e||n(e=>e??String(B++))},[e]),e||(t?`radix-${t}`:"")}L(U,"name",{value:"useId",configurable:!0});var W=e.i(69340),q=e.i(26330),z=e.i(30207),H=Object.defineProperty,G=(e,t)=>H(e,"name",{value:t,configurable:!0}),K="focusScope.autoFocusOnMount",V="focusScope.autoFocusOnUnmount",Y={bubbles:!1,cancelable:!0},X=c.forwardRef(G(function(e,t){let{loop:n=!1,trapped:a=!1,onMountAutoFocus:r,onUnmountAutoFocus:s,...i}=e,[o,d]=c.useState(null),u=(0,z.useCallbackRef)(r),m=(0,z.useCallbackRef)(s),f=c.useRef(null),p=(0,T.useComposedRefs)(t,d),x=c.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;c.useEffect(()=>{if(a){let e=function(e){if(x.paused||!o)return;let t=e.target;o.contains(t)?f.current=t:ea(f.current,{select:!0})},t=function(e){if(x.paused||!o)return;let t=e.relatedTarget;null!==t&&(o.contains(t)||ea(f.current,{select:!0}))},n=function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&ea(o)};G(e,"handleFocusIn"),G(t,"handleFocusOut"),G(n,"handleMutations"),document.addEventListener("focusin",e),document.addEventListener("focusout",t);let a=new MutationObserver(n);return o&&a.observe(o,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),a.disconnect()}}},[a,o,x.paused]),c.useEffect(()=>{if(o){er.add(x);let e=document.activeElement;if(!o.contains(e)){let t=new CustomEvent(K,Y);o.addEventListener(K,u),o.dispatchEvent(t),t.defaultPrevented||(J(eo(Z(o)),{select:!0}),document.activeElement===e&&ea(o))}return()=>{o.removeEventListener(K,u),setTimeout(()=>{let t=new CustomEvent(V,Y);o.addEventListener(V,m),o.dispatchEvent(t),t.defaultPrevented||ea(e??document.body,{select:!0}),o.removeEventListener(V,m),er.remove(x)},0)}}},[o,u,m,x]);let g=c.useCallback(e=>{if(!n&&!a||x.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,r=document.activeElement;if(t&&r){let t=e.currentTarget,[a,s]=Q(t);a&&s?e.shiftKey||r!==s?e.shiftKey&&r===a&&(e.preventDefault(),n&&ea(s,{select:!0})):(e.preventDefault(),n&&ea(a,{select:!0})):r===t&&e.preventDefault()}},[n,a,x.paused]);return(0,l.jsx)(C.Primitive.div,{tabIndex:-1,...i,ref:p,onKeyDown:g})},"FocusScope"));function J(e,{select:t=!1}={}){let n=document.activeElement;for(let a of e)if(ea(a,{select:t}),document.activeElement!==n)return}function Q(e){let t=Z(e);return[ee(t,e),ee(t.reverse(),e)]}function Z(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:G(e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP},"acceptNode")});for(;n.nextNode();)t.push(n.currentNode);return t}function ee(e,t){let n="function"==typeof t.checkVisibility&&t.checkVisibility({checkVisibilityCSS:!0});for(let a of e)if(!(n?!a.checkVisibility({checkVisibilityCSS:!0}):et(a,{upTo:t})))return a}function et(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}function en(e){return e instanceof HTMLInputElement&&"select"in e}function ea(e,{select:t=!1}={}){if(e&&e.focus){let n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&en(e)&&t&&e.select()}}G(J,"focusFirst"),G(Q,"getTabbableEdges"),G(Z,"getTabbableCandidates"),G(ee,"findVisible"),G(et,"isHidden"),G(en,"isSelectableInput"),G(ea,"focus");var er=es();function es(){let e=[];return{add(t){let n=e[0];t!==n&&n?.pause(),(e=ei(e,t)).unshift(t)},remove(t){e=ei(e,t),e[0]?.resume()}}}function ei(e,t){let n=[...e],a=n.indexOf(t);return -1!==a&&n.splice(a,1),n}function eo(e){return e.filter(e=>"A"!==e.tagName)}G(es,"createFocusScopesStack"),G(ei,"arrayRemove"),G(eo,"removeLinks");var el=e.i(74606),ec=e.i(96626),ed=Object.defineProperty,eu=(e,t)=>ed(e,"name",{value:t,configurable:!0}),em=0,ef=null;function ep(){c.useEffect(()=>{ef||(ef={start:ex(),end:ex()});let{start:e,end:t}=ef;return document.body.firstElementChild!==e&&document.body.insertAdjacentElement("afterbegin",e),document.body.lastElementChild!==t&&document.body.insertAdjacentElement("beforeend",t),em++,()=>{1===em&&(ef?.start.remove(),ef?.end.remove(),ef=null),em=Math.max(0,em-1)}},[])}function ex(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}eu(function(e){return ep(),e.children},"FocusGuards"),eu(ep,"useFocusGuards"),eu(ex,"createFocusGuard");var eg=function(){return(eg=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function eh(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n}var eb=("function"==typeof SuppressedError&&SuppressedError,"right-scroll-bar-position"),ev="width-before-scroll-bar";function ej(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var ew="u">typeof window?c.useLayoutEffect:c.useEffect,ey=new WeakMap,eN=(void 0===t&&(t={}),(void 0===n&&(n=function(e){return e}),a=[],r=!1,s={read:function(){if(r)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return a.length?a[a.length-1]:null},useMedium:function(e){var t=n(e,r);return a.push(t),function(){a=a.filter(function(e){return e!==t})}},assignSyncMedium:function(e){for(r=!0;a.length;){var t=a;a=[],t.forEach(e)}a={push:function(t){return e(t)},filter:function(){return a}}},assignMedium:function(e){r=!0;var t=[];if(a.length){var n=a;a=[],n.forEach(e),t=a}var s=function(){var n=t;t=[],n.forEach(e)},i=function(){return Promise.resolve().then(s)};i(),a={push:function(e){t.push(e),i()},filter:function(e){return t=t.filter(e),a}}}}).options=eg({async:!0,ssr:!1},t),s),ek=function(){},eI=c.forwardRef(function(e,t){var n,a,r,s,i=c.useRef(null),o=c.useState({onScrollCapture:ek,onWheelCapture:ek,onTouchMoveCapture:ek}),l=o[0],d=o[1],u=e.forwardProps,m=e.children,f=e.className,p=e.removeScrollBar,x=e.enabled,g=e.shards,h=e.sideCar,b=e.noRelative,v=e.noIsolation,j=e.inert,w=e.allowPinchZoom,y=e.as,N=e.gapMode,k=eh(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),I=(n=[i,t],a=function(e){return n.forEach(function(t){return ej(t,e)})},(r=(0,c.useState)(function(){return{value:null,callback:a,facade:{get current(){return r.value},set current(value){var e=r.value;e!==value&&(r.value=value,r.callback(value,e))}}}})[0]).callback=a,s=r.facade,ew(function(){var e=ey.get(s);if(e){var t=new Set(e),a=new Set(n),r=s.current;t.forEach(function(e){a.has(e)||ej(e,null)}),a.forEach(function(e){t.has(e)||ej(e,r)})}ey.set(s,n)},[n]),s),C=eg(eg({},k),l);return c.createElement(c.Fragment,null,x&&c.createElement(h,{sideCar:eN,removeScrollBar:p,shards:g,noRelative:b,noIsolation:v,inert:j,setCallbacks:d,allowPinchZoom:!!w,lockRef:i,gapMode:N}),u?c.cloneElement(c.Children.only(m),eg(eg({},C),{ref:I})):c.createElement(void 0===y?"div":y,eg({},C,{className:f,ref:I}),m))});eI.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},eI.classNames={fullWidth:ev,zeroRight:eb};var eC=function(e){var t=e.sideCar,n=eh(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var a=t.read();if(!a)throw Error("Sidecar medium not found");return c.createElement(a,eg({},n))};eC.isSideCarExport=!0;var eE=function(){var e=0,t=null;return{add:function(n){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=o||("u">typeof __webpack_nonce__?__webpack_nonce__:void 0);return t&&e.setAttribute("nonce",t),e}())){var a,r;(a=t).styleSheet?a.styleSheet.cssText=n:a.appendChild(document.createTextNode(n)),r=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(r)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},eM=function(){var e=eE();return function(t,n){c.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},eS=function(){var e=eM();return function(t){return e(t.styles,t.dynamic),null}},eA={left:0,top:0,right:0,gap:0},eD=function(e){return parseInt(e||"",10)||0},eR=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],a=t["padding"===e?"paddingTop":"marginTop"],r=t["padding"===e?"paddingRight":"marginRight"];return[eD(n),eD(a),eD(r)]},e_=function(e){if(void 0===e&&(e="margin"),"u"<typeof window)return eA;var t=eR(e),n=document.documentElement.clientWidth,a=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,a-n+t[2]-t[0])}},eP=eS(),eT="data-scroll-locked",eO=function(e,t,n,a){var r=e.left,s=e.top,i=e.right,o=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(a,";\n   padding-right: ").concat(o,"px ").concat(a,";\n  }\n  body[").concat(eT,"] {\n    overflow: hidden ").concat(a,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(a,";"),"margin"===n&&"\n    padding-left: ".concat(r,"px;\n    padding-top: ").concat(s,"px;\n    padding-right: ").concat(i,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(o,"px ").concat(a,";\n    "),"padding"===n&&"padding-right: ".concat(o,"px ").concat(a,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(eb," {\n    right: ").concat(o,"px ").concat(a,";\n  }\n  \n  .").concat(ev," {\n    margin-right: ").concat(o,"px ").concat(a,";\n  }\n  \n  .").concat(eb," .").concat(eb," {\n    right: 0 ").concat(a,";\n  }\n  \n  .").concat(ev," .").concat(ev," {\n    margin-right: 0 ").concat(a,";\n  }\n  \n  body[").concat(eT,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(o,"px;\n  }\n")},eF=function(){var e=parseInt(document.body.getAttribute(eT)||"0",10);return isFinite(e)?e:0},eL=function(){c.useEffect(function(){return document.body.setAttribute(eT,(eF()+1).toString()),function(){var e=eF()-1;e<=0?document.body.removeAttribute(eT):document.body.setAttribute(eT,e.toString())}},[])},e$=function(e){var t=e.noRelative,n=e.noImportant,a=e.gapMode,r=void 0===a?"margin":a;eL();var s=c.useMemo(function(){return e_(r)},[r]);return c.createElement(eP,{styles:eO(s,!t,r,n?"":"!important")})},eB=!1;if("u">typeof window)try{var eU=Object.defineProperty({},"passive",{get:function(){return eB=!0,!0}});window.addEventListener("test",eU,eU),window.removeEventListener("test",eU,eU)}catch(e){eB=!1}var eW=!!eB&&{passive:!1},eq=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return"hidden"!==n[t]&&(n.overflowY!==n.overflowX||"TEXTAREA"===e.tagName||"visible"!==n[t])},ez=function(e,t){var n=t.ownerDocument,a=t;do{if("u">typeof ShadowRoot&&a instanceof ShadowRoot&&(a=a.host),eH(e,a)){var r=eG(e,a);if(r[1]>r[2])return!0}a=a.parentNode}while(a&&a!==n.body)return!1},eH=function(e,t){return"v"===e?eq(t,"overflowY"):eq(t,"overflowX")},eG=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},eK=function(e,t,n,a,r){var s,i=(s=window.getComputedStyle(t).direction,"h"===e&&"rtl"===s?-1:1),o=i*a,l=n.target,c=t.contains(l),d=!1,u=o>0,m=0,f=0;do{if(!l)break;var p=eG(e,l),x=p[0],g=p[1]-p[2]-i*x;(x||g)&&eH(e,l)&&(m+=g,f+=x);var h=l.parentNode;l=h&&h.nodeType===Node.DOCUMENT_FRAGMENT_NODE?h.host:h}while(!c&&l!==document.body||c&&(t.contains(l)||t===l))return u&&(r&&1>Math.abs(m)||!r&&o>m)?d=!0:!u&&(r&&1>Math.abs(f)||!r&&-o>f)&&(d=!0),d},eV=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},eY=function(e){return[e.deltaX,e.deltaY]},eX=function(e){return e&&"current"in e?e.current:e},eJ=0,eQ=[];let eZ=(i=function(e){var t=c.useRef([]),n=c.useRef([0,0]),a=c.useRef(),r=c.useState(eJ++)[0],s=c.useState(eS)[0],i=c.useRef(e);c.useEffect(function(){i.current=e},[e]),c.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(r));var t=(function(e,t,n){if(n||2==arguments.length)for(var a,r=0,s=t.length;r<s;r++)!a&&r in t||(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))})([e.lockRef.current],(e.shards||[]).map(eX),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(r))}),function(){document.body.classList.remove("block-interactivity-".concat(r)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(r))})}}},[e.inert,e.lockRef.current,e.shards]);var o=c.useCallback(function(e,t){if("touches"in e&&2===e.touches.length||"wheel"===e.type&&e.ctrlKey)return!i.current.allowPinchZoom;var r,s=eV(e),o=n.current,l="deltaX"in e?e.deltaX:o[0]-s[0],c="deltaY"in e?e.deltaY:o[1]-s[1],d=e.target,u=Math.abs(l)>Math.abs(c)?"h":"v";if("touches"in e&&"h"===u&&"range"===d.type)return!1;var m=window.getSelection(),f=m&&m.anchorNode;if(f&&(f===d||f.contains(d)))return!1;var p=ez(u,d);if(!p)return!0;if(p?r=u:(r="v"===u?"h":"v",p=ez(u,d)),!p)return!1;if(!a.current&&"changedTouches"in e&&(l||c)&&(a.current=r),!r)return!0;var x=a.current||r;return eK(x,t,e,"h"===x?l:c,!0)},[]),l=c.useCallback(function(e){if(eQ.length&&eQ[eQ.length-1]===s){var n="deltaY"in e?eY(e):eV(e),a=t.current.filter(function(t){var a;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(a=t.delta,a[0]===n[0]&&a[1]===n[1])})[0];if(a&&a.should){e.cancelable&&e.preventDefault();return}if(!a){var r=(i.current.shards||[]).map(eX).filter(Boolean).filter(function(t){return t.contains(e.target)});(r.length>0?o(e,r[0]):!i.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),d=c.useCallback(function(e,n,a,r){var s={name:e,delta:n,target:a,should:r,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(a)};t.current.push(s),setTimeout(function(){t.current=t.current.filter(function(e){return e!==s})},1)},[]),u=c.useCallback(function(e){n.current=eV(e),a.current=void 0},[]),m=c.useCallback(function(t){d(t.type,eY(t),t.target,o(t,e.lockRef.current))},[]),f=c.useCallback(function(t){d(t.type,eV(t),t.target,o(t,e.lockRef.current))},[]);c.useEffect(function(){return eQ.push(s),e.setCallbacks({onScrollCapture:m,onWheelCapture:m,onTouchMoveCapture:f}),document.addEventListener("wheel",l,eW),document.addEventListener("touchmove",l,eW),document.addEventListener("touchstart",u,eW),function(){eQ=eQ.filter(function(e){return e!==s}),document.removeEventListener("wheel",l,eW),document.removeEventListener("touchmove",l,eW),document.removeEventListener("touchstart",u,eW)}},[]);var p=e.removeScrollBar,x=e.inert;return c.createElement(c.Fragment,null,x?c.createElement(s,{styles:"\n  .block-interactivity-".concat(r," {pointer-events: none;}\n  .allow-interactivity-").concat(r," {pointer-events: all;}\n")}):null,p?c.createElement(e$,{noRelative:e.noRelative,gapMode:e.gapMode}):null)},eN.useMedium(i),eC);var e0=c.forwardRef(function(e,t){return c.createElement(eI,eg({},e,{ref:t,sideCar:eZ}))});e0.classNames=eI.classNames;var e1=new WeakMap,e2=new WeakMap,e4={},e3=0,e6=function(e){return e&&(e.host||e6(e.parentNode))},e5=function(e,t,n,a){var r=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=e6(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});e4[n]||(e4[n]=new WeakMap);var s=e4[n],i=[],o=new Set,l=new Set(r),c=function(e){!e||o.has(e)||(o.add(e),c(e.parentNode))};r.forEach(c);var d=function(e){!e||l.has(e)||Array.prototype.forEach.call(e.children,function(e){if(o.has(e))d(e);else try{var t=e.getAttribute(a),r=null!==t&&"false"!==t,l=(e1.get(e)||0)+1,c=(s.get(e)||0)+1;e1.set(e,l),s.set(e,c),i.push(e),1===l&&r&&e2.set(e,!0),1===c&&e.setAttribute(n,"true"),r||e.setAttribute(a,"true")}catch(t){console.error("aria-hidden: cannot operate on ",e,t)}})};return d(t),o.clear(),e3++,function(){i.forEach(function(e){var t=e1.get(e)-1,r=s.get(e)-1;e1.set(e,t),s.set(e,r),t||(e2.has(e)||e.removeAttribute(a),e2.delete(e)),r||e.removeAttribute(n)}),--e3||(e1=new WeakMap,e1=new WeakMap,e2=new WeakMap,e4={})}},e8=function(e,t,n){void 0===n&&(n="data-aria-hidden");var a=Array.from(Array.isArray(e)?e:[e]),r=t||("u"<typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return r?(a.push.apply(a,Array.from(r.querySelectorAll("[aria-live], script"))),e5(a,r,n,"aria-hidden")):function(){return null}},e9=Object.defineProperty,e7=(e,t)=>e9(e,"name",{value:t,configurable:!0}),te="Dialog",[tt,tn]=(0,O.createContextScope)(te),[ta,tr]=tt(te),ts=e7(e=>{let{__scopeDialog:t,children:n,open:a,defaultOpen:r,onOpenChange:s,modal:i=!0}=e,o=c.useRef(null),d=c.useRef(null),[u,m]=(0,W.useControllableState)({prop:a,defaultProp:r??!1,onChange:s,caller:te}),[f,p]=c.useState(0),[x,g]=c.useState(0);return(0,l.jsx)(ta,{scope:t,triggerRef:o,contentRef:d,contentId:U(),titleId:U(),descriptionId:U(),titlePresent:f>0,descriptionPresent:x>0,setTitleCount:p,setDescriptionCount:g,open:u,onOpenChange:m,onOpenToggle:c.useCallback(()=>m(e=>!e),[m]),modal:i,children:n})},"Dialog"),ti="DialogPortal",[to,tl]=tt(ti,{forceMount:void 0}),tc=e7(e=>{let{__scopeDialog:t,forceMount:n,children:a,container:r}=e,s=tr(ti,t);return(0,l.jsx)(to,{scope:t,forceMount:n,children:c.Children.map(a,e=>(0,l.jsx)(ec.Presence,{present:n||s.open,children:(0,l.jsx)(el.Portal,{asChild:!0,container:r,children:e})}))})},"DialogPortal"),td="DialogOverlay",tu=c.forwardRef(e7(function(e,t){let n=tl(td,e.__scopeDialog),{forceMount:a=n.forceMount,...r}=e,s=tr(td,e.__scopeDialog);return s.modal?(0,l.jsx)(ec.Presence,{present:a||s.open,children:(0,l.jsx)(tf,{...r,ref:t})}):null},"DialogOverlay")),tm=(0,u.createSlot)("DialogOverlay.RemoveScroll"),tf=c.forwardRef(e7(function(e,t){let{__scopeDialog:n,...a}=e,r=tr(td,n),s=(0,q.useDismissableLayerSurface)(),i=(0,T.useComposedRefs)(t,s);return(0,l.jsx)(e0,{as:tm,allowPinchZoom:!0,shards:[r.contentRef],children:(0,l.jsx)(C.Primitive.div,{"data-state":ty(r.open),...a,ref:i,style:{pointerEvents:"auto",...a.style}})})},"DialogOverlayImpl")),tp="DialogContent",tx=c.forwardRef(e7(function(e,t){let n=tl(tp,e.__scopeDialog),{forceMount:a=n.forceMount,...r}=e,s=tr(tp,e.__scopeDialog);return(0,l.jsx)(ec.Presence,{present:a||s.open,children:s.modal?(0,l.jsx)(tg,{...r,ref:t}):(0,l.jsx)(th,{...r,ref:t})})},"DialogContent")),tg=c.forwardRef(e7(function(e,t){let n=tr(tp,e.__scopeDialog),a=c.useRef(null),r=(0,T.useComposedRefs)(t,n.contentRef,a);return c.useEffect(()=>{let e=a.current;if(e)return e8(e)},[]),(0,l.jsx)(tb,{...e,ref:r,trapFocus:n.open,disableOutsidePointerEvents:n.open,onCloseAutoFocus:(0,P.composeEventHandlers)(e.onCloseAutoFocus,e=>{e.preventDefault(),n.triggerRef.current?.focus()}),onPointerDownOutside:(0,P.composeEventHandlers)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()}),onFocusOutside:(0,P.composeEventHandlers)(e.onFocusOutside,e=>e.preventDefault())})},"DialogContentModal")),th=c.forwardRef(e7(function(e,t){let n=tr(tp,e.__scopeDialog),a=c.useRef(!1),r=c.useRef(!1);return(0,l.jsx)(tb,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{e.onCloseAutoFocus?.(t),t.defaultPrevented||(a.current||n.triggerRef.current?.focus(),t.preventDefault()),a.current=!1,r.current=!1},onInteractOutside:t=>{e.onInteractOutside?.(t),t.defaultPrevented||(a.current=!0,"pointerdown"===t.detail.originalEvent.type&&(r.current=!0));let s=t.target;n.triggerRef.current?.contains(s)&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&r.current&&t.preventDefault()}})},"DialogContentNonModal")),tb=c.forwardRef(e7(function(e,t){let{__scopeDialog:n,trapFocus:a,onOpenAutoFocus:r,onCloseAutoFocus:s,...i}=e,o=tr(tp,n);return ep(),(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(X,{asChild:!0,loop:!0,trapped:a,onMountAutoFocus:r,onUnmountAutoFocus:s,children:(0,l.jsx)(q.DismissableLayer,{role:"dialog",id:o.contentId,"aria-describedby":o.descriptionPresent?o.descriptionId:void 0,"aria-labelledby":o.titlePresent?o.titleId:void 0,"data-state":ty(o.open),...i,ref:t,deferPointerDownOutside:!0,onDismiss:()=>o.onOpenChange(!1)})})})},"DialogContentImpl")),tv=c.forwardRef(e7(function(e,t){let{__scopeDialog:n,...a}=e,r=tr("DialogTitle",n),{setTitleCount:s}=r;return(0,F.useLayoutEffect)(()=>(s(e=>e+1),()=>s(e=>e-1)),[s]),(0,l.jsx)(C.Primitive.h2,{id:r.titleId,...a,ref:t})},"DialogTitle")),tj=c.forwardRef(e7(function(e,t){let{__scopeDialog:n,...a}=e,r=tr("DialogDescription",n),{setDescriptionCount:s}=r;return(0,F.useLayoutEffect)(()=>(s(e=>e+1),()=>s(e=>e-1)),[s]),(0,l.jsx)(C.Primitive.p,{id:r.descriptionId,...a,ref:t})},"DialogDescription")),tw=c.forwardRef(e7(function(e,t){let{__scopeDialog:n,...a}=e,r=tr("DialogClose",n);return(0,l.jsx)(C.Primitive.button,{type:"button",...a,ref:t,onClick:(0,P.composeEventHandlers)(e.onClick,()=>r.onOpenChange(!1))})},"DialogClose"));function ty(e){return e?"open":"closed"}function tN(){return(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,l.jsx)("path",{d:"M18 6 6 18"}),(0,l.jsx)("path",{d:"m6 6 12 12"})]})}function tk({...e}){return(0,l.jsx)(ts,{"data-slot":"dialog",...e})}function tI({...e}){return(0,l.jsx)(tc,{"data-slot":"dialog-portal",...e})}function tC({...e}){return(0,l.jsx)(tw,{"data-slot":"dialog-close",...e})}function tE({className:e,...t}){return(0,l.jsx)(tu,{"data-slot":"dialog-overlay",className:(0,f.cn)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",e),...t})}function tM({className:e,children:t,showCloseButton:n=!0,...a}){return(0,l.jsxs)(tI,{"data-slot":"dialog-portal",children:[(0,l.jsx)(tE,{}),(0,l.jsxs)(tx,{"data-slot":"dialog-content",className:(0,f.cn)("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",e),...a,children:[t,n&&(0,l.jsxs)(tw,{"data-slot":"dialog-close",className:"ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",children:[(0,l.jsx)(tN,{}),(0,l.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})}function tS({className:e,...t}){return(0,l.jsx)("div",{"data-slot":"dialog-header",className:(0,f.cn)("flex flex-col gap-2 text-center sm:text-left",e),...t})}function tA({className:e,...t}){return(0,l.jsx)("div",{"data-slot":"dialog-footer",className:(0,f.cn)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",e),...t})}function tD({className:e,...t}){return(0,l.jsx)(tv,{"data-slot":"dialog-title",className:(0,f.cn)("text-lg leading-none font-semibold",e),...t})}function tR({className:e,...t}){return(0,l.jsx)(tj,{"data-slot":"dialog-description",className:(0,f.cn)("text-muted-foreground text-sm",e),...t})}e7(ty,"getState");var t_=e.i(75830),tP=Object.defineProperty,tT=(e,t)=>tP(e,"name",{value:t,configurable:!0}),tO="Collapsible",[tF,tL]=(0,O.createContextScope)(tO),[t$,tB]=tF(tO),tU=c.forwardRef(tT(function(e,t){let{__scopeCollapsible:n,open:a,defaultOpen:r,disabled:s,onOpenChange:i,...o}=e,[d,u]=(0,W.useControllableState)({prop:a,defaultProp:r??!1,onChange:i,caller:tO});return(0,l.jsx)(t$,{scope:n,disabled:s,contentId:U(),open:d,onOpenToggle:c.useCallback(()=>u(e=>!e),[u]),children:(0,l.jsx)(C.Primitive.div,{"data-state":tG(d),"data-disabled":s?"":void 0,...o,ref:t})})},"Collapsible")),tW=c.forwardRef(tT(function(e,t){let{__scopeCollapsible:n,...a}=e,r=tB("CollapsibleTrigger",n);return(0,l.jsx)(C.Primitive.button,{type:"button","aria-controls":r.open?r.contentId:void 0,"aria-expanded":r.open||!1,"data-state":tG(r.open),"data-disabled":r.disabled?"":void 0,disabled:r.disabled,...a,ref:t,onClick:(0,P.composeEventHandlers)(e.onClick,r.onOpenToggle)})},"CollapsibleTrigger")),tq="CollapsibleContent",tz=c.forwardRef(tT(function(e,t){let{forceMount:n,...a}=e,r=tB(tq,e.__scopeCollapsible);return(0,l.jsx)(ec.Presence,{present:n||r.open,children:({present:e})=>(0,l.jsx)(tH,{...a,ref:t,present:e})})},"CollapsibleContent")),tH=c.forwardRef(tT(function(e,t){let{__scopeCollapsible:n,present:a,children:r,...s}=e,i=tB(tq,n),[o,d]=c.useState(a),u=c.useRef(null),m=(0,T.useComposedRefs)(t,u),f=c.useRef(0),p=f.current,x=c.useRef(0),g=x.current,h=i.open||o,b=c.useRef(h),v=c.useRef(void 0);return c.useEffect(()=>{let e=requestAnimationFrame(()=>b.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,F.useLayoutEffect)(()=>{let e=u.current;if(e){v.current=v.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let t=e.getBoundingClientRect();f.current=t.height,x.current=t.width,b.current||(e.style.transitionDuration=v.current.transitionDuration,e.style.animationName=v.current.animationName),d(a)}},[i.open,a]),(0,l.jsx)(C.Primitive.div,{"data-state":tG(i.open),"data-disabled":i.disabled?"":void 0,id:i.contentId,hidden:!h,...s,ref:m,style:{"--radix-collapsible-content-height":p?`${p}px`:void 0,"--radix-collapsible-content-width":g?`${g}px`:void 0,...e.style},children:h&&r})},"CollapsibleContentImpl"));function tG(e){return e?"open":"closed"}tT(tG,"getState");var tK=Object.defineProperty,tV=c.createContext(void 0);function tY(e){let t=c.useContext(tV);return e||t||"ltr"}tK(tY,"name",{value:"useDirection",configurable:!0});var tX=Object.defineProperty,tJ=(e,t)=>tX(e,"name",{value:t,configurable:!0}),tQ="Accordion",tZ=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[t0,t1,t2]=(0,t_.createCollection)(tQ),[t4,t3]=(0,O.createContextScope)(tQ,[t2,tL]),t6=tL(),t5=c.forwardRef(tJ(function(e,t){let{type:n,...a}=e;return(0,l.jsx)(t0.Provider,{scope:e.__scopeAccordion,children:"multiple"===n?(0,l.jsx)(nn,{...a,ref:t}):(0,l.jsx)(nt,{...a,ref:t})})},"Accordion")),[t8,t9]=t4(tQ),[t7,ne]=t4(tQ,{collapsible:!1}),nt=c.forwardRef(tJ(function(e,t){let{value:n,defaultValue:a,onValueChange:r=tJ(()=>{},"onValueChange"),collapsible:s=!1,...i}=e,[o,d]=(0,W.useControllableState)({prop:n,defaultProp:a??"",onChange:r,caller:tQ});return(0,l.jsx)(t8,{scope:e.__scopeAccordion,value:c.useMemo(()=>o?[o]:[],[o]),onItemOpen:d,onItemClose:c.useCallback(()=>s&&d(""),[s,d]),children:(0,l.jsx)(t7,{scope:e.__scopeAccordion,collapsible:s,children:(0,l.jsx)(ns,{...i,ref:t})})})},"AccordionImplSingle")),nn=c.forwardRef(tJ(function(e,t){let{value:n,defaultValue:a,onValueChange:r=tJ(()=>{},"onValueChange"),...s}=e,[i,o]=(0,W.useControllableState)({prop:n,defaultProp:a??[],onChange:r,caller:tQ}),d=c.useCallback(e=>o((t=[])=>[...t,e]),[o]),u=c.useCallback(e=>o((t=[])=>t.filter(t=>t!==e)),[o]);return(0,l.jsx)(t8,{scope:e.__scopeAccordion,value:i,onItemOpen:d,onItemClose:u,children:(0,l.jsx)(t7,{scope:e.__scopeAccordion,collapsible:!0,children:(0,l.jsx)(ns,{...s,ref:t})})})},"AccordionImplMultiple")),[na,nr]=t4(tQ),ns=c.forwardRef(tJ(function(e,t){let{__scopeAccordion:n,disabled:a,dir:r,orientation:s="vertical",...i}=e,o=c.useRef(null),d=(0,T.useComposedRefs)(o,t),u=t1(n),m="ltr"===tY(r),f=(0,P.composeEventHandlers)(e.onKeyDown,e=>{if(!tZ.includes(e.key))return;let t=e.target,n=u().filter(e=>!e.ref.current?.disabled),a=n.findIndex(e=>e.ref.current===t),r=n.length;if(-1===a)return;e.preventDefault();let i=a,o=r-1,l=tJ(()=>{(i=a+1)>o&&(i=0)},"moveNext"),c=tJ(()=>{(i=a-1)<0&&(i=o)},"movePrev");switch(e.key){case"Home":i=0;break;case"End":i=o;break;case"ArrowRight":"horizontal"===s&&(m?l():c());break;case"ArrowDown":"vertical"===s&&l();break;case"ArrowLeft":"horizontal"===s&&(m?c():l());break;case"ArrowUp":"vertical"===s&&c()}let d=i%r;n[d].ref.current?.focus()});return(0,l.jsx)(na,{scope:n,disabled:a,direction:r,orientation:s,children:(0,l.jsx)(t0.Slot,{scope:n,children:(0,l.jsx)(C.Primitive.div,{...i,"data-orientation":s,ref:d,onKeyDown:a?void 0:f})})})},"AccordionImpl")),ni="AccordionItem",[no,nl]=t4(ni),nc=c.forwardRef(tJ(function(e,t){let{__scopeAccordion:n,value:a,...r}=e,s=nr(ni,n),i=t9(ni,n),o=t6(n),c=U(),d=a&&i.value.includes(a)||!1,u=s.disabled||e.disabled;return(0,l.jsx)(no,{scope:n,open:d,disabled:u,triggerId:c,children:(0,l.jsx)(tU,{"data-orientation":s.orientation,"data-state":np(d),...o,...r,ref:t,disabled:u,open:d,onOpenChange:e=>{e?i.onItemOpen(a):i.onItemClose(a)}})})},"AccordionItem")),nd=c.forwardRef(tJ(function(e,t){let{__scopeAccordion:n,...a}=e,r=nr(tQ,n),s=nl("AccordionHeader",n);return(0,l.jsx)(C.Primitive.h3,{"data-orientation":r.orientation,"data-state":np(s.open),"data-disabled":s.disabled?"":void 0,...a,ref:t})},"AccordionHeader")),nu="AccordionTrigger",nm=c.forwardRef(tJ(function(e,t){let{__scopeAccordion:n,...a}=e,r=nr(tQ,n),s=nl(nu,n),i=ne(nu,n),o=t6(n);return(0,l.jsx)(t0.ItemSlot,{scope:n,children:(0,l.jsx)(tW,{"aria-disabled":s.open&&!i.collapsible||void 0,"data-orientation":r.orientation,id:s.triggerId,...o,...a,ref:t})})},"AccordionTrigger")),nf=c.forwardRef(tJ(function(e,t){let{__scopeAccordion:n,...a}=e,r=nr(tQ,n),s=nl("AccordionContent",n),i=t6(n);return(0,l.jsx)(tz,{role:"region","aria-labelledby":s.triggerId,"data-orientation":r.orientation,...i,...a,ref:t,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}})},"AccordionContent"));function np(e){return e?"open":"closed"}function nx({className:e}){return(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:(0,l.jsx)("path",{d:"m6 9 6 6 6-6"})})}function ng({...e}){return(0,l.jsx)(t5,{"data-slot":"accordion",...e})}function nh({className:e,...t}){return(0,l.jsx)(nc,{"data-slot":"accordion-item",className:(0,f.cn)("border-b last:border-b-0",e),...t})}function nb({className:e,children:t,...n}){return(0,l.jsx)(nd,{className:"flex",children:(0,l.jsxs)(nm,{"data-slot":"accordion-trigger",className:(0,f.cn)("focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",e),...n,children:[t,(0,l.jsx)(nx,{className:"text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"})]})})}function nv({className:e,children:t,...n}){return(0,l.jsx)(nf,{"data-slot":"accordion-content",className:"data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",...n,children:(0,l.jsx)("div",{className:(0,f.cn)("pt-0 pb-4",e),children:t})})}tJ(np,"getState");var nj=Object.defineProperty,nw=(e,t)=>nj(e,"name",{value:t,configurable:!0}),ny=!1;function nN(){let[e,t]=c.useState(ny);return c.useEffect(()=>{ny||(ny=!0,t(!0))},[]),e}nw(nN,"useIsHydrated");var nk=c[" useSyncExternalStore ".trim().toString()];function nI(){return()=>{}}function nC(){return nk(nI,()=>!0,()=>!1)}nw(nI,"subscribe"),nw(nC,"useIsHydratedModern");var nE="function"==typeof nk?nC:nN,nM=Object.defineProperty,nS=(e,t)=>nM(e,"name",{value:t,configurable:!0}),nA="rovingFocusGroup.onEntryFocus",nD={bubbles:!1,cancelable:!0},nR="RovingFocusGroup",[n_,nP,nT]=(0,t_.createCollection)(nR),[nO,nF]=(0,O.createContextScope)(nR,[nT]),[nL,n$]=nO(nR),nB=c.forwardRef(nS(function(e,t){return(0,l.jsx)(n_.Provider,{scope:e.__scopeRovingFocusGroup,children:(0,l.jsx)(n_.Slot,{scope:e.__scopeRovingFocusGroup,children:(0,l.jsx)(nU,{...e,ref:t})})})},"RovingFocusGroup")),nU=c.forwardRef(nS(function(e,t){let{__scopeRovingFocusGroup:n,orientation:a,loop:r=!1,dir:s,currentTabStopId:i,defaultCurrentTabStopId:o,onCurrentTabStopIdChange:d,onEntryFocus:u,preventScrollOnEntryFocus:m=!1,...f}=e,p=c.useRef(null),x=(0,T.useComposedRefs)(t,p),g=tY(s),[h,b]=(0,W.useControllableState)({prop:i,defaultProp:o??null,onChange:d,caller:nR}),[v,j]=c.useState(!1),w=(0,z.useCallbackRef)(u),y=nP(n),N=c.useRef(!1),[k,I]=c.useState(0);return c.useEffect(()=>{let e=p.current;if(e)return e.addEventListener(nA,w),()=>e.removeEventListener(nA,w)},[w]),(0,l.jsx)(nL,{scope:n,orientation:a,dir:g,loop:r,currentTabStopId:h,onItemFocus:c.useCallback(e=>b(e),[b]),onItemShiftTab:c.useCallback(()=>j(!0),[]),onFocusableItemAdd:c.useCallback(()=>I(e=>e+1),[]),onFocusableItemRemove:c.useCallback(()=>I(e=>e-1),[]),children:(0,l.jsx)(C.Primitive.div,{tabIndex:v||0===k?-1:0,"data-orientation":a,...f,ref:x,style:{outline:"none",...e.style},onMouseDown:(0,P.composeEventHandlers)(e.onMouseDown,()=>{N.current=!0}),onFocus:(0,P.composeEventHandlers)(e.onFocus,e=>{let t=!N.current;if(e.target===e.currentTarget&&t&&!v){let t=new CustomEvent(nA,nD);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=y().filter(e=>e.focusable);nG([e.find(e=>e.active),e.find(e=>e.id===h),...e].filter(Boolean).map(e=>e.ref.current),m)}}N.current=!1}),onBlur:(0,P.composeEventHandlers)(e.onBlur,()=>j(!1))})})},"RovingFocusGroupImpl")),nW=c.forwardRef(nS(function(e,t){let{__scopeRovingFocusGroup:n,focusable:a=!0,active:r=!1,tabStopId:s,children:i,...o}=e,d=U(),u=s||d,m=n$("RovingFocusGroupItem",n),f=m.currentTabStopId===u,p=nP(n),{onFocusableItemAdd:x,onFocusableItemRemove:g,currentTabStopId:h}=m,b=nE();return(0,F.useLayoutEffect)(()=>{if(b&&a)return x(),()=>g()},[b,a,x,g]),c.useEffect(()=>{if(!b&&a)return x(),()=>g()},[b,a,x,g]),(0,l.jsx)(n_.ItemSlot,{scope:n,id:u,focusable:a,active:r,children:(0,l.jsx)(C.Primitive.span,{tabIndex:f?0:-1,"data-orientation":m.orientation,...o,ref:t,onMouseDown:(0,P.composeEventHandlers)(e.onMouseDown,e=>{a?m.onItemFocus(u):e.preventDefault()}),onFocus:(0,P.composeEventHandlers)(e.onFocus,()=>m.onItemFocus(u)),onKeyDown:(0,P.composeEventHandlers)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey)return void m.onItemShiftTab();if(e.target!==e.currentTarget)return;let t=nH(e,m.orientation,m.dir);if(void 0!==t){if(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return;e.preventDefault();let n=p().filter(e=>e.focusable).map(e=>e.ref.current);if("last"===t)n.reverse();else if("prev"===t||"next"===t){"prev"===t&&n.reverse();let a=n.indexOf(e.currentTarget);n=m.loop?nK(n,a+1):n.slice(a+1)}setTimeout(()=>nG(n))}}),children:"function"==typeof i?i({isCurrentTabStop:f,hasTabStop:null!=h}):i})})},"RovingFocusGroupItem")),nq={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function nz(e,t){return"rtl"!==t?e:"ArrowLeft"===e?"ArrowRight":"ArrowRight"===e?"ArrowLeft":e}function nH(e,t,n){let a=nz(e.key,n);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(a))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(a)))return nq[a]}function nG(e,t=!1){let n=document.activeElement;for(let a of e)if(a===n||(a.focus({preventScroll:t}),document.activeElement!==n))return}function nK(e,t){return e.map((n,a)=>e[(t+a)%e.length])}nS(nz,"getDirectionAwareKey"),nS(nH,"getFocusIntent"),nS(nG,"focusFirst"),nS(nK,"wrapArray");var nV=Object.defineProperty,nY=(e,t)=>nV(e,"name",{value:t,configurable:!0}),nX="Tabs",[nJ,nQ]=(0,O.createContextScope)(nX,[nF]),nZ=nF(),[n0,n1]=nJ(nX),n2=c.forwardRef(nY(function(e,t){let{__scopeTabs:n,value:a,onValueChange:r,defaultValue:s,orientation:i="horizontal",dir:o,activationMode:c="automatic",...d}=e,u=tY(o),[m,f]=(0,W.useControllableState)({prop:a,onChange:r,defaultProp:s??"",caller:nX});return(0,l.jsx)(n0,{scope:n,baseId:U(),value:m,onValueChange:f,orientation:i,dir:u,activationMode:c,children:(0,l.jsx)(C.Primitive.div,{dir:u,"data-orientation":i,...d,ref:t})})},"Tabs")),n4=c.forwardRef(nY(function(e,t){let{__scopeTabs:n,loop:a=!0,...r}=e,s=n1("TabsList",n),i=nZ(n);return(0,l.jsx)(nB,{asChild:!0,...i,orientation:s.orientation,dir:s.dir,loop:a,children:(0,l.jsx)(C.Primitive.div,{role:"tablist","aria-orientation":s.orientation,...r,ref:t})})},"TabsList")),n3=c.forwardRef(nY(function(e,t){let{__scopeTabs:n,value:a,disabled:r=!1,...s}=e,i=n1("TabsTrigger",n),o=nZ(n),c=n5(i.baseId,a),d=n8(i.baseId,a),u=a===i.value;return(0,l.jsx)(nW,{asChild:!0,...o,focusable:!r,active:u,children:(0,l.jsx)(C.Primitive.button,{type:"button",role:"tab","aria-selected":u,"aria-controls":d,"data-state":u?"active":"inactive","data-disabled":r?"":void 0,disabled:r,id:c,...s,ref:t,onMouseDown:(0,P.composeEventHandlers)(e.onMouseDown,e=>{r||0!==e.button||!1!==e.ctrlKey?e.preventDefault():i.onValueChange(a)}),onKeyDown:(0,P.composeEventHandlers)(e.onKeyDown,e=>{!r&&e.target===e.currentTarget&&[" ","Enter"].includes(e.key)&&i.onValueChange(a)}),onFocus:(0,P.composeEventHandlers)(e.onFocus,()=>{let e="manual"!==i.activationMode;u||r||!e||i.onValueChange(a)})})})},"TabsTrigger")),n6=c.forwardRef(nY(function(e,t){let{__scopeTabs:n,value:a,forceMount:r,children:s,...i}=e,o=n1("TabsContent",n),d=n5(o.baseId,a),u=n8(o.baseId,a),m=a===o.value,f=c.useRef(m);return c.useEffect(()=>{let e=requestAnimationFrame(()=>f.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,l.jsx)(ec.Presence,{present:r||m,children:({present:n})=>(0,l.jsx)(C.Primitive.div,{"data-state":m?"active":"inactive","data-orientation":o.orientation,role:"tabpanel","aria-labelledby":d,hidden:!n,id:u,tabIndex:0,...i,ref:t,style:{...e.style,animationDuration:f.current?"0s":void 0},children:n&&s})})},"TabsContent"));function n5(e,t){return`${e}-trigger-${t}`}function n8(e,t){return`${e}-content-${t}`}function n9({className:e,...t}){return(0,l.jsx)(n2,{"data-slot":"tabs",className:(0,f.cn)("flex flex-col gap-2",e),...t})}function n7({className:e,...t}){return(0,l.jsx)(n4,{"data-slot":"tabs-list",className:(0,f.cn)("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",e),...t})}function ae({className:e,...t}){return(0,l.jsx)(n3,{"data-slot":"tabs-trigger",className:(0,f.cn)("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",e),...t})}function at({className:e,...t}){return(0,l.jsx)(n6,{"data-slot":"tabs-content",className:(0,f.cn)("flex-1 outline-none",e),...t})}nY(n5,"makeTriggerId"),nY(n8,"makeContentId");var an=e.i(8406);let aa=[{id:"blank",type:"echo",defaultConfig:{},name:"খালি বট",icon:"bi-file-earmark-code",description:"সম্পূর্ণ খালি টেমপ্লেট। নিজের মতো সবকিছ লিখুন।",category:"বেসিক",code:`module.exports = async function(update, api) {
  const text = update.message?.text || '';
  const chatId = update.message?.chat?.id;

  if (text === '/start') {
    await api.sendMessage(chatId, 'বট চালু হয়েছে! ✅');
  }
};`},{id:"welcome",type:"echo",defaultConfig:{welcomeMessage:"স্বাগতম! 👋"},name:"ওয়েলকাম বট",icon:"bi-emoji-smile",description:"/start, /help কমান্ড এবং ইউজার গ্রিটিং সহ সম্পূর্ণ ওয়েলকাম বট।",category:"বেসিক",code:`module.exports = async function(update, api) {
  const text = update.message?.text || '';
  const chatId = update.message?.chat?.id;
  const firstName = update.message?.from?.first_name || 'বন্ধু';

  if (text === '/start') {
    await api.sendMessage(chatId,
      'স্বাগতম, ' + firstName + '! 👋\\n\\n' +
      'আমি আপনার সহকারী বট। নিচের কমান্ডগুলো ব্যবহার করুন:\\n\\n' +
      '/help - সাহায্য দেখুন\\n' +
      '/about - আমার সম্পর্কে জানুন\\n' +
      '/ping - সংযোগ পরীক্ষা করুন'
    );
  } else if (text === '/help') {
    await api.sendMessage(chatId,
      '📖 *সাহায্য তালিকা*\\n\\n' +
      '/start - বট শুরু করুন\\n' +
      '/help - এই মেসেজ দেখুন\\n' +
      '/about - বট সম্পর্কে\\n' +
      '/ping - সংযোগ যাচাই',
      { parse_mode: 'Markdown' }
    );
  } else if (text === '/about') {
    await api.sendMessage(chatId,
      '🤖 *আমার সম্পর্কে*\\n\\n' +
      'আমি BotForge প্ল্যাটফর্মে তৈরি একটি Telegram বট।\\n' +
      'সম্পূর্ণ ফ্রি, কোনো সীমাবদ্ধতা নেই।',
      { parse_mode: 'Markdown' }
    );
  } else if (text === '/ping') {
    const start = Date.now();
    await api.sendMessage(chatId, 'pong! 🏓');
    const ms = Date.now() - start;
    await api.sendMessage(chatId, 'রেসপন্স টাইম: ' + ms + 'ms');
  }
};`},{id:"echo",type:"echo",defaultConfig:{prefix:"🔁 "},name:"ইকো বট",icon:"bi-arrow-repeat",description:"প্রাপ্ত মেসেজ, ছবি, ফাইল সব ফিরিয়ে পাঠায়। টেস্টিং এর জন্য পারফেক্ট।",category:"বেসিক",code:`module.exports = async function(update, api) {
  const message = update.message;
  if (!message) return;

  const chatId = message.chat.id;
  const text = message.text || '';

  if (text === '/start') {
    await api.sendMessage(chatId, 'ইকো বট চালু! যেকোনো মেসেজ পাঠান, আমি ফিরিয়ে পাঠাবো 🔁');
    return;
  }

  // টেক্সট মেসেজ ইকো
  if (text) {
    await api.sendMessage(chatId, '🔁 ' + text);
    return;
  }

  // ফটো ইকো
  if (message.photo) {
    const photo = message.photo[message.photo.length - 1];
    await api.sendPhoto(chatId, photo.file_id, {
      caption: '📷 আপনার ছবি ফিরিয়ে পাঠালাম!'
    });
    return;
  }

  // ডকুমেন্ট ইকো
  if (message.document) {
    await api.sendDocument(chatId, message.document.file_id, {
      caption: '📎 আপনার ফাইল ফিরিয়ে পাঠালাম!'
    });
  }
};`},{id:"faq",type:"command-router",defaultConfig:{defaultResponse:"আমি FAQ বট। /help দেখুন।"},name:"FAQ বট",icon:"bi-question-circle",description:"প্রি-ডিফাইন্ড প্রশ্ন-উত্তর বট। নতুন কর্মী, কাস্টমার সাপোর্ট এর জন্য আদর্শ।",category:"ব্যবসা",code:`const faqs = [
  { q: 'আপনাদের কাজের সময় কত?', a: 'শনি-বৃহস্পতি, সকাল ৯টা - সন্ধ্যা ৬টা।' },
  { q: 'ডেলিভারি কত দিনে হয়?', a: 'ঢাকায় ১-২ দিন, ঢাকার বাইরে ৩-৫ দিন।' },
  { q: 'পেমেন্ট কীভাবে করবো?', a: 'বিকাশ, নগদ, রকেট এবং ক্যাশ অন ডেলিভারি।' },
  { q: 'রিটার্ন পলিসি কী?', a: 'পণ্য হাতে পাওয়ার ৭ দিনের মধ্যে রিটার্ন করতে পারবেন।' },
  { q: ' wholesale রেট পাবো?', a: 'হ্যাঁ! প্রচুর অর্ডারে স্পেশাল দাম দেওয়া হয়।' },
];

module.exports = async function(update, api) {
  const text = (update.message?.text || '').trim();
  const chatId = update.message?.chat?.id;

  if (text === '/start' || text === '/help') {
    let msg = '🤖 *FAQ বট*\\n\\nপ্রশ্ন লিখুন অথবা নম্বর দিন:\\n\\n';
    faqs.forEach((f, i) => {
      msg += (i + 1) + '. ' + f.q + '\\n';
    });
    msg += '\\nঅথবা সরাসরি আপনার প্রশ্ন লিখুন!';
    await api.sendMessage(chatId, msg, { parse_mode: 'Markdown' });
    return;
  }

  // নম্বর দিয়ে প্রশ্ন খুঁজুন
  const num = parseInt(text);
  if (num >= 1 && num <= faqs.length) {
    const faq = faqs[num - 1];
    await api.sendMessage(chatId, '*Q: ' + faq.q + '*\\n\\nA: ' + faq.a, { parse_mode: 'Markdown' });
    return;
  }

  // কীওয়ার্ড ম্যাচিং
  const found = faqs.find(f => text.includes(f.q) || f.q.includes(text));
  if (found) {
    await api.sendMessage(chatId, '*Q: ' + found.q + '*\\n\\nA: ' + found.a, { parse_mode: 'Markdown' });
    return;
  }

  // ম্যাচ না পাওয়া গেলে
  await api.sendMessage(chatId, 'দুঃখিত, আমি এই প্রশ্নের উত্তর জানি না। /help দেখুন।');
};`},{id:"poll",type:"echo",defaultConfig:{},name:"পোল বট",icon:"bi-bar-chart",description:"ইনলাইন পোল তৈরি করুন এবং ভোট সংগ্রহ করুন। গ্রুপ এবং চ্যানেলের জন্য।",category:"ব্যবসা",code:`const polls = {};

module.exports = async function(update, api) {
  const text = (update.message?.text || '').trim();
  const chatId = update.message?.chat?.id;

  if (text === '/start' || text === '/help') {
    await api.sendMessage(chatId,
      '📊 *পোল বট*\\n\\n' +
      'কমান্ডসমূহ:\\n' +
      '/newpoll প্রশ্ন | বিকল্প১ | বিকল্প২ | বিকল্প৩\\n' +
      '/mypolls - আপনার পোল দেখুন\\n\\n' +
      'উদাহরণ:\\n' +
      '/newpoll আপনার পছন্দের ফল কী? | আম | কাঁঠাল | লিচু | আনারস',
      { parse_mode: 'Markdown' }
    );
    return;
  }

  if (text.startsWith('/newpoll ')) {
    const parts = text.substring(9).split('|').map(s => s.trim());
    if (parts.length < 3) {
      await api.sendMessage(chatId, '❌ কমপক্ষে ২টি বিকল্প দিন।
ফরম্যাট: /newpoll প্রশ্ন | বিকল্প১ | বিকল্প২');
      return;
    }
    const question = parts[0];
    const options = parts.slice(1);
    const pollId = 'p_' + Date.now();
    polls[pollId] = { question, options, votes: options.map(() => 0), totalVoters: new Set() };

    let msg = '📊 *' + question + '*\\n\\n';
    options.forEach((o, i) => {
      msg += String.fromCharCode(65 + i) + ') ' + o + '\\n';
    });
    msg += '\\nভোট দিতে বিকল্পের অক্ষর পাঠান (A, B, C...)';
    await api.sendMessage(chatId, msg, { parse_mode: 'Markdown' });
    return;
  }

  if (text.startsWith('/mypolls')) {
    const keys = Object.keys(polls);
    if (keys.length === 0) {
      await api.sendMessage(chatId, 'কোনো পোল নেই। /newpoll দিয়ে তৈরি করুন।');
      return;
    }
    let msg = '📋 *আপনার পোলসমূহ*:\\n\\n';
    keys.forEach(k => { msg += '- ' + polls[k].question + '\\n'; });
    await api.sendMessage(chatId, msg, { parse_mode: 'Markdown' });
    return;
  }
};`},{id:"notification",type:"echo",defaultConfig:{prefix:"📢 "},name:"নোটিফিকেশন বট",icon:"bi-bell",description:"আপডেট, রিমাইন্ডার বা কাস্টম নোটিফিকেশন পাঠায়। টীম ও কমিউনিটি ম্যানেজমেন্টের জন্য।",category:"ব্যবসা",code:`module.exports = async function(update, api) {
  const text = (update.message?.text || '').trim();
  const chatId = update.message?.chat?.id;

  if (text === '/start' || text === '/help') {
    await api.sendMessage(chatId,
      '🔔 *নোটিফিকেশন বট*\\n\\n' +
      'কমান্ডসমূহ:\\n' +
      '/notify মেসেজ - সবাইকে নোটিফিকেশন পাঠান\\n' +
      '/announce শিরোনাম | বডি - ঘোষণা করুন\\n' +
      '/status - বটের অবস্থা দেখুন',
      { parse_mode: 'Markdown' }
    );
    return;
  }

  if (text.startsWith('/notify ')) {
    const msg = text.substring(8);
    const now = new Date().toLocaleString('bn-BD');
    await api.sendMessage(chatId,
      '🔔 *নোটিফিকেশন*\\n\\n' + msg + '\\n\\n⏰ ' + now,
      { parse_mode: 'Markdown' }
    );
    return;
  }

  if (text.startsWith('/announce ')) {
    const parts = text.substring(10).split('|').map(s => s.trim());
    const title = parts[0] || 'ঘোষণা';
    const body = parts[1] || '';
    const now = new Date().toLocaleString('bn-BD');
    await api.sendMessage(chatId,
      '📢 *' + title + '*\\n\\n' + body + '\\n\\n📅 ' + now,
      { parse_mode: 'Markdown' }
    );
    return;
  }

  if (text === '/status') {
    await api.sendMessage(chatId,
      '✅ *বট সচল*\\n\\n' +
      '🕐 ' + new Date().toLocaleString('bn-BD') + '\\n' +
      '📡 Cloudflare Pages',
      { parse_mode: 'Markdown' }
    );
  }
};`},{id:"api-handler",type:"echo",defaultConfig:{},name:"API হ্যান্ডলার বট",icon:"bi-plug",description:"প্ল্যাটফর্ম ম্যানেজড ক্রেডেনশিয়াল, telegramApi() ফাংশন, ADMIN_ID, error handling সহ সম্পূর্ণ প্রোডাকশন বট।",category:"বেসিক",code:`// ─── কনফিগারেশন (শুধুমাত্র এই অংশ পরিবর্তন করুন) ───
const ADMIN_ID = 123456789; // আপনার Telegram User ID দিন
const BOT_NAME = 'MyBot';

// ─── Telegram API ফাংশন (পরিবর্তন করবেন না) ───
async function telegramApi(token, method, data = {}) {
  const url = 'https://api.telegram.org/bot' + token + '/' + method;
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    return await res.json();
  } catch (err) {
    console.error('telegramApi ত্রুটি (' + method + '):', err.message);
    return { ok: false, description: err.message };
  }
}

// ─── মূল হ্যান্ডলার ───
module.exports = async function(update, api) {
  const message = update.message;
  if (!message || !message.chat) return;

  const chatId = message.chat.id;
  const text = (message.text || '').trim();
  const fromId = message.from?.id;
  const fromName = message.from?.first_name || 'বন্ধু';
  const isPrivate = message.chat.type === 'private';
  const isGroup = message.chat.type === 'group' || message.chat.type === 'supergroup';
  const isAdmin = fromId === ADMIN_ID;

  // /start কমান্ড (বট username সহও কাজ করবে)
  if (/^/start(@w+)?(s|$)/i.test(text)) {
    await api.sendMessage(chatId,
      'স্বাগতম, ' + fromName + '! \\n\\n' +
      'প্ল্যাটফর্ম ম্যানেজড ক্রেডেনশিয়াল সহ বট চলছে। \\n\\n' +
      'কমান্ডসমূহ:\\n' +
      '/status - বটের অবস্থা\\n' +
      '/info - চ্যাট তথ্য\\n' +
      '/admin - অ্যাডমিন প্যানেল (শুধু অ্যাডমিন)\\n' +
      '/ping - সংযোগ পরীক্ষা'
    );
    return;
  }

  // /ping - রেসপন্স টাইম টেস্ট
  if (/^/ping(@w+)?(s|$)/i.test(text)) {
    const start = Date.now();
    await api.sendMessage(chatId, 'pong!');
    const ms = Date.now() - start;
    await api.sendMessage(chatId, 'রেসপন্স টাইম: ' + ms + 'ms');
    return;
  }

  // /status - বট স্ট্যাটাস
  if (/^/status(@w+)?(s|$)/i.test(text)) {
    const now = new Date().toLocaleString('bn-BD');
    await api.sendMessage(chatId,
      '*বট স্ট্যাটাস*\\n\\n' +
      'নাম: ' + BOT_NAME + '\\n' +
      'স্ট্যাটাস: সচল \\u2705\\n' +
      'সময়: ' + now + '\\n' +
      'হোস্টিং: Cloudflare Pages',
      { parse_mode: 'Markdown' }
    );
    return;
  }

  // /info - চ্যাট তথ্য
  if (/^/info(@w+)?(s|$)/i.test(text)) {
    await api.sendMessage(chatId,
      '*চ্যাট তথ্য*\\n\\n' +
      'চ্যাট ID: ' + chatId + '\\n' +
      'ধরন: ' + message.chat.type + '\\n' +
      'ব্যবহারকারী: ' + fromName + ' (' + fromId + ')\\n' +
      'গ্রুপ: ' + (isGroup ? 'হ্যাঁ' : 'না') + '\\n' +
      'অ্যাডমিন: ' + (isAdmin ? 'হ্যাঁ' : 'না'),
      { parse_mode: 'Markdown' }
    );
    return;
  }

  // /admin - অ্যাডমিন প্যানেল (শুধু ADMIN_ID)
  if (/^/admin(@w+)?(s|$)/i.test(text)) {
    if (!isAdmin) {
      await api.sendMessage(chatId, 'দুঃখিত, এই কমান্ড শুধুমাত্র অ্যাডমিনের জন্য।');
      return;
    }
    await api.sendMessage(chatId,
      '*অ্যাডমিন প্যানেল*\\n\\n' +
      'আপনি অ্যাডমিন হিসেবে যা করতে পারবেন:\\n' +
      '1. সব কমান্ড ব্যবহার করা\\n' +
      '2. বট রিস্টার্ট দেওয়া\\n' +
      '3. ব্রডকাস্ট মেসেজ পাঠানো\\n\\n' +
      'আপনার ID: ' + ADMIN_ID,
      { parse_mode: 'Markdown' }
    );
    return;
  }

  // অজানা কমান্ড
  if (text.startsWith('/')) {
    await api.sendMessage(chatId, 'কমান্ড চিনতে পারিনি। /start দেখুন।');
  }
};`},{id:"user-management",type:"command-router",defaultConfig:{welcomeMessage:"স্বাগতম! ইউজার ম্যানেজমেন্ট বট।"},name:"ইউজার ম্যানেজমেন্ট বট",icon:"bi-people",description:"ইউজার রেজিস্ট্রেশন, প্রোফাইল, অ্যাডমিন ব্যান/আনব্যান, ব্রডকাস্ট, স্ট্যাটিসটিকস সহ সম্পূর্ণ ইউজার ম্যানেজমেন্ট বট।",category:"ব্যবসা",code:`// ─── কনফিগারেশন ───
const ADMIN_ID = 123456789;
const BOT_NAME = 'UserManagerBot';

// ─── ইন-মেমোরি স্টোরেজ (রিস্টার্টে রিসেট হবে) ───
const users = {};       // { chatId: { name, username, joinedAt, banned, messageCount } }
const warnings = {};    // { chatId: count }
const MAX_WARNINGS = 3;

function getUser(chatId, from) {
  if (!users[chatId]) {
    users[chatId] = {
      name: from?.first_name || 'Unknown',
      username: from?.username || '',
      joinedAt: new Date().toLocaleString('bn-BD'),
      banned: false,
      messageCount: 0,
    };
  }
  users[chatId].messageCount++;
  return users[chatId];
}

function getUserCount() { return Object.keys(users).length; }
function getActiveUsers() { return Object.values(users).filter(u => !u.banned).length; }

// ─── মূল হ্যান্ডলার ───
module.exports = async function(update, api) {
  const message = update.message;
  if (!message || !message.chat) return;

  const chatId = String(message.chat.id);
  const text = (message.text || '').trim();
  const from = message.from || {};
  const fromId = from.id;
  const fromName = from.first_name || 'বন্ধু';
  const isAdmin = fromId === ADMIN_ID;
  const isPrivate = message.chat.type === 'private';

  // ইউজার ট্র্যাকিং
  const user = getUser(chatId, from);

  // ব্যান চেক
  if (user.banned && !isAdmin) {
    if (text === '/appeal') {
      await api.sendMessage(chatId,
        'আপনি ব্যানড। আনব্যানের জন্য অ্যাডমিনকে যোগাযোগ করুন।'
      );
    }
    return;
  }

  // ═══ /start - রেজিস্ট্রেশন ═══
  if (/^/start(@w+)?(s|$)/i.test(text)) {
    await api.sendMessage(chatId,
      'স্বাগতম, ' + fromName + '! \\n\\n' +
      'আপনি সফলভাবে নিবন্ধিত হয়েছেন। \\n\\n' +
      'কমান্ডসমূহ:\\n' +
      '/me - আপনার প্রোফাইল দেখুন\\n' +
      '/stats - বট পরিসংখ্যান\\n' +
      '/help - সাহায্য দেখুন',
      { parse_mode: 'Markdown' }
    );
    return;
  }

  // ═══ /me - প্রোফাইল ═══
  if (/^/me(@w+)?(s|$)/i.test(text)) {
    const u = users[chatId] || {};
    await api.sendMessage(chatId,
      '*প্রোফাইল*\\n\\n' +
      'নাম: ' + u.name + '\\n' +
      'ইউজারনেম: ' + (u.username || 'নেই') + '\\n' +
      'যোগদান: ' + u.joinedAt + '\\n' +
      'মেসেজ: ' + u.messageCount + '\\n' +
      'স্ট্যাটাস: ' + (u.banned ? 'ব্যানড' : 'সক্রিয়'),
      { parse_mode: 'Markdown' }
    );
    return;
  }

  // ═══ /help - সাহায্য ═══
  if (/^/help(@w+)?(s|$)/i.test(text)) {
    let help = '*সাহায্য*\\n\\n' +
      '/me - প্রোফাইল দেখুন\\n' +
      '/stats - পরিসংখ্যান\\n';
    if (isAdmin) {
      help += '\\n*অ্যাডমিন কমান্ড:*\\n' +
        '/broadcast মেসেজ - সবাইকে পাঠান\\n' +
        '/ban ID - ইউজার ব্যান\\n' +
        '/unban ID - ব্যান তুলুন\\n' +
        '/warn ID - সতর্কতা দিন\\n' +
        '/users - ইউজার তালিকা\\n' +
        '/stats - বিস্তারিত পরিসংখ্যান';
    }
    await api.sendMessage(chatId, help, { parse_mode: 'Markdown' });
    return;
  }

  // ═══ /stats - পরিসংখ্যান ═══
  if (/^/stats(@w+)?(s|$)/i.test(text)) {
    const total = getUserCount();
    const active = getActiveUsers();
    const banned = total - active;
    const totalMsg = Object.values(users).reduce((a, u) => a + u.messageCount, 0);
    await api.sendMessage(chatId,
      '*বট পরিসংখ্যান*\\n\\n' +
      'মোট ইউজার: ' + total + '\\n' +
      'সক্রিয়: ' + active + '\\n' +
      'ব্যানড: ' + banned + '\\n' +
      'মোট মেসেজ: ' + totalMsg,
      { parse_mode: 'Markdown' }
    );
    return;
  }

  // ═══ অ্যাডমিন কমান্ড (শুধু ADMIN_ID) ═══
  if (!isAdmin) return;

  // /broadcast
  if (text.startsWith('/broadcast ')) {
    const msg = text.substring(10);
    if (!msg) {
      await api.sendMessage(chatId, 'ব্রডকাস্ট মেসেজ দিন: /broadcast আপনার মেসেজ');
      return;
    }
    let sent = 0, failed = 0;
    for (const [uid, u] of Object.entries(users)) {
      if (u.banned) continue;
      try {
        await api.sendMessage(uid, '📢 *ব্রডকাস্ট*\\n\\n' + msg, { parse_mode: 'Markdown' });
        sent++;
      } catch { failed++; }
    }
    await api.sendMessage(chatId, 'ব্রডকাস্ট সম্পন্ন! পাঠানো: ' + sent + ', ব্যর্থ: ' + failed);
    return;
  }

  // /ban
  if (text.startsWith('/ban ')) {
    const targetId = text.substring(5).trim();
    if (users[targetId]) {
      users[targetId].banned = true;
      await api.sendMessage(chatId, users[targetId].name + ' ব্যান করা হয়েছে।');
      try { await api.sendMessage(targetId, 'আপনি ব্যান করা হয়েছে।'); } catch {}
    } else {
      await api.sendMessage(chatId, 'ইউজার পাওয়া যায়নি।');
    }
    return;
  }

  // /unban
  if (text.startsWith('/unban ')) {
    const targetId = text.substring(7).trim();
    if (users[targetId]) {
      users[targetId].banned = false;
      await api.sendMessage(chatId, users[targetId].name + ' এর ব্যান তুলে নেওয়া হয়েছে।');
    } else {
      await api.sendMessage(chatId, 'ইউজার পাওয়া যায়নি।');
    }
    return;
  }

  // /warn
  if (text.startsWith('/warn ')) {
    const targetId = text.substring(6).trim();
    if (users[targetId]) {
      warnings[targetId] = (warnings[targetId] || 0) + 1;
      const wc = warnings[targetId];
      if (wc >= MAX_WARNINGS) {
        users[targetId].banned = true;
        await api.sendMessage(chatId, users[targetId].name + ' ' + MAX_WARNINGS + ' বার সতর্কতা পেয়ে অটো-ব্যান।');
      } else {
        await api.sendMessage(chatId, users[targetId].name + ' কে সতর্কতা দেওয়া হয়েছে (' + wc + '/' + MAX_WARNINGS + ')');
      }
    } else {
      await api.sendMessage(chatId, 'ইউজার পাওয়া যায়নি।');
    }
    return;
  }

  // /users - ইউজার লিস্ট
  if (/^/users(@w+)?(s|$)/i.test(text)) {
    const list = Object.entries(users).map(([id, u]) =>
      (u.banned ? '⛔' : '✅') + ' ' + u.name + ' (' + id + ') - ' + u.messageCount + ' msg'
    );
    const chunk = list.join('\\n');
    await api.sendMessage(chatId,
      '*ইউজার তালিকা (' + getUserCount() + ')*\\n\\n' +
      (chunk || 'কোনো ইউজার নেই'),
      { parse_mode: 'Markdown' }
    );
    return;
  }
};`},{id:"ai-assistant",type:"ai-assistant",defaultConfig:{apiKey:"",apiUrl:"https://inference.poolside.ai/v1/chat/completions",model:"poolside/laguna-s-2.1",imageUrl:"https://image.pollinations.ai/prompt/",systemPrompt:"তুমি একজন সাহায্যকারী AI সহকারী। বাংলা ও ইংরেজি উভয় ভাষায় উত্তর দাও।"},name:"AI সহকারী বট",icon:"bi-stars",description:"প্রশ্নের উত্তর, ছবি তৈরি ও ভিডিও তৈরি — AI চালিত সহকারী বট",category:"এআই",code:`
// ─── কনফিগারেশন ───
const CONFIG = {
  API_KEY: 'YOUR_API_KEY_HERE',
  API_URL: 'https://inference.poolside.ai/v1/chat/completions',
  MODEL: 'poolside/laguna-s-2.1',
  IMG_URL: 'https://image.pollinations.ai/prompt/',
};

// ─── ইনটেন্ট ডিটেকশন ───
const IMG_KW = ['ছবি তৈরি','ইমেজ তৈরি','ছবি','ইমেজ','photo','image','draw','paint','picture','/img','/image','illustration','design'];
const VID_KW = ['ভিডিও তৈরি','ভিডিও','/vid','/video','video','animation','অ্যানিমেশন'];

function detect(t) {
  const l = t.toLowerCase();
  if (/^/(img|image)s/i.test(l)) return 'image';
  if (/^/(vid|video)s/i.test(l)) return 'video';
  for (const k of IMG_KW) { if (l.includes(k)) return 'image'; }
  for (const k of VID_KW) { if (l.includes(k)) return 'video'; }
  return 'question';
}

function getPrompt(t) { return t.replace(/^/(img|image|vid|video|ask|q)s*/i, '').trim(); }

// ─── AI চ্যাট (Poolside) ───
async function askAI(prompt) {
  const res = await fetch(CONFIG.API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + CONFIG.API_KEY },
    body: JSON.stringify({ model: CONFIG.MODEL, messages: [
      { role: 'system', content: 'তুমি একজন সাহায্যকারী AI সহকারী। বাংলা ও ইংরেজি উভয় ভাষায় উত্তর দাও। সংক্ষিপ্ত ও সুন্দর উত্তর দাও।' },
      { role: 'user', content: prompt }
    ], max_tokens: 2048, temperature: 0.7 }),
  });
  const data = await res.json();
  return data.choices?.[0]?.message?.content || 'দুঃখিত, উত্তর পাওয়া যায়নি।';
}

// ─── ছবি তৈরি (Pollinations AI - ফ্রি, কোনো Key লাগবে না) ───
function generateImage(prompt) {
  return CONFIG.IMG_URL + encodeURIComponent(prompt + ', high quality, detailed, 4k') + '?width=1024&height=1024&nologo=true';
}

// ─── মূল হ্যান্ডলার ───
module.exports = async function(update, api) {
  const text = update.message?.text || '';
  const chatId = update.message?.chat?.id;
  const name = update.message?.from?.first_name || 'বন্ধু';
  if (!text) return;

  if (text === '/start') {
    await api.sendMessage(chatId,
      'স্বাগতম, ' + name + '! AI সহকারী বটে স্বাগতম! 🤖✨

' +
      'আমি তিনটি কাজ করতে পারি:
' +
      '💬 *প্রশ্নের উত্তর* — যেকোনো প্রশ্ন করুন
' +
      '🖼 *ছবি তৈরি* — "/img একটি সূর্যোদয়" লিখুন
' +
      '🎬 *ভিডিও স্ক্রিপ্ট* — "/vid একটি বৃষ্টির দৃশ্য" লিখুন

' +
      'সরাসরি মেসেজ করুন, আমি বুঝে নেবো! 🧠',
      { parse_mode: 'Markdown' }
    );
    return;
  }

  if (text === '/help') {
    await api.sendMessage(chatId,
      '*কমান্ড*

/start, /help, /ask [প্রশ্ন], /img [বর্ণনা], /vid [বর্ণনা]',
      { parse_mode: 'Markdown' }
    );
    return;
  }

  const intent = detect(text);
  const prompt = getPrompt(text) || text.replace(/^/w+s*/i, '').trim();
  if (!prompt) { await api.sendMessage(chatId, 'অনুগ্রহ করে একটি প্রশ্ন বা বর্ণনা দিন।'); return; }

  try {
    if (intent === 'image') {
      await api.sendMessage(chatId, '🖼 ছবি তৈরি হচ্ছে...');
      await api.sendPhoto(chatId, generateImage(prompt), { caption: prompt });
    } else if (intent === 'video') {
      await api.sendMessage(chatId, '🎬 ভিডিও স্ক্রিপ্ট তৈরি হচ্ছে...');
      const r = await askAI('এই ভিডিওর জন্য একটি স্ক্রিপ্ট লিখো: ' + prompt);
      await api.sendMessage(chatId, r);
    } else {
      await api.sendMessage(chatId, '🤔 ভাবছি...');
      const answer = await askAI(prompt);
      await api.sendMessage(chatId, '🤖 ' + answer);
    }
  } catch (err) {
    await api.sendMessage(chatId, '❌ ' + (err.message || 'Error'));
  }
};
`}];function ar(){let{theme:e,setTheme:t}=(0,d.useTheme)(),[n,a]=(0,c.useState)(!1);return((0,c.useEffect)(()=>{a(!0)},[]),n)?(0,l.jsx)("button",{onClick:()=>t("dark"===e?"light":"dark"),className:"w-9 h-9 rounded-xl flex items-center justify-center border border-border hover:bg-muted transition-all duration-300 hover:scale-105","aria-label":"ডার্ক মোড টগল",children:(0,l.jsx)("i",{className:`bi ${"dark"===e?"bi-sun-fill text-amber-400":"bi-moon-fill text-indigo-400"} text-base`})}):(0,l.jsx)("div",{className:"w-9 h-9"})}function as({onNavigate:e,currentSection:t}){let[n,a]=(0,c.useState)(!1),r=[{id:"home",label:"হোম"},{id:"features",label:"ফিচার"},{id:"templates",label:"টেমপ্লেট"},{id:"how-it-works",label:"কীভাবে কাজ করে"},{id:"dashboard",label:"ড্যাশবোর্ড"},{id:"faq",label:"প্রশ্ন"},{id:"docs",label:"ডকুমেন্টেশন",href:"/docs"}],s=(t,n)=>{if(n){window.location.href=n,a(!1);return}e(t),a(!1)};return(0,l.jsx)("nav",{className:"fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0f111a]/80 backdrop-blur-lg border-b border-border",children:(0,l.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[(0,l.jsxs)("div",{className:"flex items-center justify-between h-16",children:[(0,l.jsxs)("button",{onClick:()=>s("home"),className:"flex items-center gap-2 group",children:[(0,l.jsx)("div",{className:"w-9 h-9 rounded-xl gradient-tg flex items-center justify-center text-white text-lg",children:(0,l.jsx)("i",{className:"bi bi-robot"})}),(0,l.jsx)("span",{className:"text-xl font-bold text-gradient",children:"BotForge"})]}),(0,l.jsx)("div",{className:"hidden md:flex items-center gap-1",children:r.map(e=>(0,l.jsx)("button",{onClick:()=>s(e.id,e.href),className:`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${t===e.id?"text-[var(--color-telegram)] bg-[var(--color-telegram)]/10":"text-muted-foreground hover:text-foreground hover:bg-muted"}`,children:e.label},e.id))}),(0,l.jsxs)("div",{className:"hidden md:flex items-center gap-3",children:[(0,l.jsx)(ar,{}),(0,l.jsxs)(x,{size:"sm",className:"gradient-tg text-white border-0 cursor-pointer hover:opacity-90",onClick:()=>s("dashboard"),children:[(0,l.jsx)("i",{className:"bi bi-rocket-takeoff me-1"}),"শুরু করুন"]})]}),(0,l.jsxs)("div",{className:"md:hidden flex items-center gap-2",children:[(0,l.jsx)(ar,{}),(0,l.jsx)("button",{onClick:()=>a(!n),className:"p-2 rounded-lg hover:bg-muted transition-colors","aria-label":"Toggle menu",children:(0,l.jsx)("i",{className:`bi ${n?"bi-x-lg":"bi-list"} text-xl`})})]})]}),n&&(0,l.jsx)("div",{className:"md:hidden pb-4 border-t border-border mt-2 pt-4",children:(0,l.jsxs)("div",{className:"flex flex-col gap-1",children:[r.map(e=>(0,l.jsx)("button",{onClick:()=>s(e.id,e.href),className:`px-4 py-3 rounded-lg text-sm font-medium text-left transition-colors ${t===e.id?"text-[var(--color-telegram)] bg-[var(--color-telegram)]/10":"text-muted-foreground hover:text-foreground hover:bg-muted"}`,children:e.label},e.id)),(0,l.jsx)(_,{className:"my-2"}),(0,l.jsx)(x,{size:"sm",className:"w-full gradient-tg text-white border-0 cursor-pointer",onClick:()=>s("dashboard"),children:"শুরু করুন"})]})})]})})}function ai({onNavigate:e}){return(0,l.jsxs)("section",{id:"home",className:"relative min-h-screen flex items-center justify-center overflow-hidden pt-16",children:[(0,l.jsxs)("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[(0,l.jsx)("div",{className:"absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[var(--color-telegram)]/5 blur-3xl animate-pulse-slow"}),(0,l.jsx)("div",{className:"absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[var(--color-telegram)]/5 blur-3xl animate-pulse-slow",style:{animationDelay:"1.5s"}}),(0,l.jsx)("div",{className:"absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-[var(--color-telegram)]/30 animate-float"}),(0,l.jsx)("div",{className:"absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-[var(--color-tg-blue)]/20 animate-float",style:{animationDelay:"2s"}}),(0,l.jsx)("div",{className:"absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-[var(--color-telegram)]/25 animate-float",style:{animationDelay:"4s"}})]}),(0,l.jsxs)("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[(0,l.jsxs)("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-telegram)]/10 text-[var(--color-telegram)] text-sm font-medium mb-8",children:[(0,l.jsx)("i",{className:"bi bi-infinity"}),"সম্পূর্ণ ফ্রি ও আনলিমিটেড"]}),(0,l.jsxs)("h1",{className:"text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight",children:[(0,l.jsx)("span",{className:"block",children:"Telegram বট হোস্ট করুন"}),(0,l.jsx)("span",{className:"block mt-2",children:(0,l.jsx)("span",{className:"text-gradient",children:"কোনো সীমাবদ্ধতা ছাড়াই"})})]}),(0,l.jsx)("p",{className:"text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed",children:"GitHub রিপোতে কোড আপলোড করুন, Cloudflare Pages-এ এক ক্লিকে ডিপ্লয় করুন। কোনো ডাটাবেস সেটআপ লাগবে না, কোনো সার্ভার খরচ নেই, কোনো হিডেন চার্জ নেই। আনলিমিটেড বট, আনলিমিটেড রিকোয়েস্ট — সবকিছ চিরকাল ফ্রি।"}),(0,l.jsxs)("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4 mb-16",children:[(0,l.jsxs)(x,{size:"lg",className:"gradient-tg text-white border-0 px-8 py-6 text-lg cursor-pointer hover:opacity-90 shadow-lg shadow-[var(--color-telegram)]/25",onClick:()=>e("dashboard"),children:[(0,l.jsx)("i",{className:"bi bi-rocket-takeoff me-2 text-xl"}),"এখনই শুরু করুন"]}),(0,l.jsxs)(x,{variant:"outline",size:"lg",className:"px-8 py-6 text-lg cursor-pointer",onClick:()=>e("templates"),children:[(0,l.jsx)("i",{className:"bi bi-grid me-2"}),"টেমপ্লেট দেখুন"]})]}),(0,l.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto",children:[{icon:"bi-infinity",value:"আনলিমিটেড",label:"বট ও রিকোয়েস্ট"},{icon:"bi-lightning",value:"<50ms",label:"রেসপন্স টাইম"},{icon:"bi-shield-check",value:"99.9%",label:"আপটাইম"},{icon:"bi-currency-dollar",value:"$0",label:"চিরতালে ফ্রি"}].map(e=>(0,l.jsxs)("div",{className:"flex flex-col items-center gap-1",children:[(0,l.jsx)("i",{className:`bi ${e.icon} text-2xl text-[var(--color-telegram)]`}),(0,l.jsx)("div",{className:"text-2xl sm:text-3xl font-bold",children:e.value}),(0,l.jsx)("div",{className:"text-sm text-muted-foreground",children:e.label})]},e.label))})]})]})}function ao(){return(0,l.jsx)("section",{id:"features",className:"py-20 sm:py-28 bg-muted/30",children:(0,l.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[(0,l.jsxs)("div",{className:"text-center mb-16",children:[(0,l.jsxs)(v,{variant:"secondary",className:"mb-4",children:[(0,l.jsx)("i",{className:"bi bi-stars me-1"}),"ফিচার সমূহ"]}),(0,l.jsx)("h2",{className:"text-3xl sm:text-4xl font-bold mb-4",children:"কেন আমাদের প্ল্যাটফর্ম বেছে নেবেন?"}),(0,l.jsx)("p",{className:"text-muted-foreground max-w-2xl mx-auto text-lg",children:"অত্যাধুনিক ক্লাউড টেকনোলজি দিয়ে তৈরি, ব্যবহারের জন্য অত্যন্ত সহজ। সার্ভার ম্যানেজমেন্টের ঝামেলা ছাড়াই শুধু কোড লিখুন, বাকিটা আমরা সামলাবো।"})]}),(0,l.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[{icon:"bi-infinity",title:"সম্পূর্ণ আনলিমিটেড",description:"কোনো বট সীমা নেই, কোনো রিকোয়েস্ট সীমা নেই, কোনো ট্রাফিক সীমা নেই। আপনি যত খুশি বট তৈরি করতে পারবেন, প্রতিটি বট যত খুশি মেসেজ প্রসেস করবে — কোনো বাধা নেই, কোনো অতিরিক্ত খরচ নেই।"},{icon:"bi-database-slash",title:"কোনো ডাটাবেস লাগবে না",description:"আলাদা করে কোনো ডাটাবেস সার্ভার সেটআপ করতে হবে না, কোনো মাইগ্রেশন রান করতে হবে না। ব্রাউজারের localStorage এবং Cloudflare-এর অনবোর্ড টুলস দিয়েই সবকিছ ম্যানেজ হয়।"},{icon:"bi-code-slash",title:"JavaScript/TypeScript সাপোর্ট",description:"আপনার পছন্দের প্রোগ্রামিং ভাষায় বট লিখুন। আধুনিক ES6+ সিনট্যাক্স, async/await, ডিস্ট্রাকচারিং — সবকিছ সমর্থিত। ইন-ব্রাউজার কোড এডিটরে সহজেই কোড লিখুন ও টেস্ট করুন।"},{icon:"bi-globe2",title:"গ্লোবাল CDN নেটওয়ার্ক",description:"Cloudflare-এর ৩০০+ এজ ডাটা সেন্টারে আপনার বট ডিপ্লয় হবে। বাংলাদেশ, ভারত, মধ্যপ্রাচ্য সহ সারাবিশ্বে ব্যবহারকারীরা সুপার-ফাস্ট রেসপন্স পাবে। গড় রেসপন্স টাইম ৫০ মিলিসেকেন্ডেরও কম।"},{icon:"bi-shield-lock",title:"সুরক্ষিত V8 স্যান্ডবক্স",description:"প্রতিটি বট আলাদা V8 Isolate-এ চলে, যার মানে একটি বটের কোড অন্য বটকে কোনোভাবেই প্রভাবিত করতে পারবে না। মেমরি লিমিট, CPU লিমিট সব অটোমেটিক্যালি কন্ট্রোল হয়।"},{icon:"bi-github",title:"GitHub অটো ডিপ্লয়",description:"আপনার কোড GitHub রিপোতে পুশ করুন, Cloudflare Pages অটোমেটিক্যালি বিল্ড ও ডিপ্লয় করবে। আলাদা CI/CD পাইপলাইন কনফিগার করার কোনো দরকার নেই। ভার্সন কন্ট্রোলও পাশাপাশি চলবে।"}].map(e=>(0,l.jsxs)(j,{className:"hover-lift border-border/50",children:[(0,l.jsxs)(w,{children:[(0,l.jsx)("div",{className:"w-12 h-12 rounded-xl gradient-tg flex items-center justify-center text-white text-xl mb-2",children:(0,l.jsx)("i",{className:`bi ${e.icon}`})}),(0,l.jsx)(y,{className:"text-lg",children:e.title})]}),(0,l.jsx)(k,{children:(0,l.jsx)("p",{className:"text-muted-foreground leading-relaxed",children:e.description})})]},e.title))})]})})}function al({onApplyTemplate:e}){let t=[...new Set(aa.map(e=>e.category))],[n,a]=(0,c.useState)(t[0]);return(0,l.jsx)("section",{id:"templates",className:"py-20 sm:py-28",children:(0,l.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[(0,l.jsxs)("div",{className:"text-center mb-12",children:[(0,l.jsxs)(v,{variant:"secondary",className:"mb-4",children:[(0,l.jsx)("i",{className:"bi bi-grid-3x3-gap me-1"}),"টেম্পলেট"]}),(0,l.jsx)("h2",{className:"text-3xl sm:text-4xl font-bold mb-4",children:"প্রস্তুত বট টেম্পলেট"}),(0,l.jsx)("p",{className:"text-muted-foreground max-w-2xl mx-auto text-lg",children:"জিরো থেকে শুরু করার দরকার নেই। প্রস্তুত টেম্পলেট বেছে নিন, কাস্টমাইজ করুন, ডিপ্লয় করুন।"})]}),(0,l.jsx)("div",{className:"flex justify-center gap-2 mb-8",children:t.map(e=>(0,l.jsx)("button",{onClick:()=>a(e),className:`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${n===e?"gradient-tg text-white":"bg-muted text-muted-foreground hover:text-foreground"}`,children:e},e))}),(0,l.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:aa.filter(e=>e.category===n).map(t=>(0,l.jsxs)(j,{className:"hover-lift border-border/50",children:[(0,l.jsx)(w,{children:(0,l.jsxs)("div",{className:"flex items-center gap-3 mb-1",children:[(0,l.jsx)("div",{className:"w-11 h-11 rounded-xl bg-[var(--color-telegram)]/10 flex items-center justify-center text-[var(--color-telegram)] text-xl",children:(0,l.jsx)("i",{className:`bi ${t.icon}`})}),(0,l.jsxs)("div",{children:[(0,l.jsx)(y,{className:"text-base",children:t.name}),(0,l.jsx)(v,{variant:"outline",className:"text-xs mt-1",children:t.category})]})]})}),(0,l.jsxs)(k,{children:[(0,l.jsx)("p",{className:"text-sm text-muted-foreground leading-relaxed mb-4",children:t.description}),(0,l.jsx)("div",{className:"bg-muted rounded-lg p-3 max-h-32 overflow-y-auto scrollbar-hide",children:(0,l.jsxs)("pre",{className:"text-xs font-mono text-muted-foreground whitespace-pre-wrap break-all",children:[t.code.substring(0,200),"..."]})})]}),(0,l.jsx)(I,{children:(0,l.jsxs)(x,{className:"w-full gradient-tg text-white border-0 cursor-pointer hover:opacity-90",onClick:()=>e(t),children:[(0,l.jsx)("i",{className:"bi bi-plus-circle me-1"}),"এই টেম্পলেট ব্যবহার করুন"]})})]},t.id))})]})})}function ac(){return(0,l.jsx)("section",{id:"how-it-works",className:"py-20 sm:py-28 bg-muted/30",children:(0,l.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[(0,l.jsxs)("div",{className:"text-center mb-16",children:[(0,l.jsxs)(v,{variant:"secondary",className:"mb-4",children:[(0,l.jsx)("i",{className:"bi bi-diagram-3 me-1"}),"কার্যপ্রণালী"]}),(0,l.jsx)("h2",{className:"text-3xl sm:text-4xl font-bold mb-4",children:"মাত্র ৪টি ধাপে শুরু করুন"}),(0,l.jsx)("p",{className:"text-muted-foreground max-w-2xl mx-auto text-lg",children:"জটিল কোনো প্রক্রিয়া নেই। মাত্র কয়েক মিনিটে আপনার প্রথম টেলিগ্রাম বট লাইভ করুন। কোনো প্রোগ্রামিং জ্ঞান থাকাও আবশ্যক নয়, আমাদের প্রস্তুত টেমপলেট ব্যবহার করুন।"})]}),(0,l.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:[{step:"01",icon:"bi-person-plus",title:"অ্যাকাউন্ট তৈরি",description:"GitHub অ্যাকাউন্ট দিয়ে লগইন করুন। কোনো ক্রেডিট কার্ড লাগবে না।"},{step:"02",icon:"bi-robot",title:"টেম্পলেট বেছে নিন",description:"প্রস্তুত টেম্পলেট থেকে বেছে নিন অথবা নিজে কোড লিখুন। Bot Token দিন, বট তৈরি হয়ে যাবে।"},{step:"03",icon:"bi-cloud-upload",title:"GitHub এ পুশ করুন",description:"কোড সহ GitHub রিপোতে পুশ করুন। Cloudflare Pages অটোমেটিক্যালি ডিপ্লয় করবে।"},{step:"04",icon:"bi-check-circle",title:"বট লাইভ!",description:"বট এখনই চলছে। Telegram থেকে মেসেজ পাঠান, রিপ্লাই পান, ড্যাশবোর্ড থেকে মনিটর করুন।"}].map(e=>(0,l.jsxs)("div",{className:"relative text-center group",children:["04"!==e.step&&(0,l.jsx)("div",{className:"hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[var(--color-telegram)]/30 to-transparent"}),(0,l.jsx)("div",{className:"relative z-10 w-20 h-20 rounded-2xl gradient-tg flex items-center justify-center text-white text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform",children:(0,l.jsx)("i",{className:`bi ${e.icon}`})}),(0,l.jsxs)("div",{className:"text-xs font-bold text-[var(--color-telegram)] tracking-widest mb-2",children:["ধাপ ",e.step]}),(0,l.jsx)("h3",{className:"text-lg font-bold mb-2",children:e.title}),(0,l.jsx)("p",{className:"text-muted-foreground text-sm leading-relaxed",children:e.description})]},e.step))})]})})}function ad({pendingTemplate:e,onTemplateConsumed:t}){let{toast:n}=(0,an.useToast)(),[a,r]=(0,c.useState)(()=>(function(){try{let e=localStorage.getItem("botforge_bots");return e?JSON.parse(e):[]}catch{return[]}})()),[s,i]=(0,c.useState)(!1),[o,d]=(0,c.useState)(null),[u,m]=(0,c.useState)("list"),[f,p]=(0,c.useState)(""),[b,C]=(0,c.useState)(""),[E,M]=(0,c.useState)(""),[S,A]=(0,c.useState)(""),[D,R]=(0,c.useState)("blank");(0,c.useEffect)(()=>{e&&(P(),A(e.code),R(e.id),p(e.name),i(!0),t())},[e,t]);let _=(0,c.useCallback)(e=>{r(e),localStorage.setItem("botforge_bots",JSON.stringify(e))},[]),P=()=>{p(""),C(""),M(""),A(aa[0].code),R("blank"),d(null)},T=e=>{P(),e&&(A(e.code),R(e.id),p(e.name)),i(!0)},O=a.reduce((e,t)=>e+t.messagesReceived+t.messagesSent,0),F=a.filter(e=>"active"===e.status).length;return(0,l.jsx)("section",{id:"dashboard",className:"py-20 sm:py-28",children:(0,l.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[(0,l.jsxs)("div",{className:"text-center mb-12",children:[(0,l.jsxs)(v,{variant:"secondary",className:"mb-4",children:[(0,l.jsx)("i",{className:"bi bi-speedometer2 me-1"}),"ড্যাশবোর্ড"]}),(0,l.jsx)("h2",{className:"text-3xl sm:text-4xl font-bold mb-4",children:"আপনার বট ম্যানেজ করুন"}),(0,l.jsx)("p",{className:"text-muted-foreground max-w-2xl mx-auto text-lg",children:"সব বট এক জায়গায় ম্যানেজ করুন। টেম্পলেট থেকে শুরু করুন বা নিজের কোড লিখুন।"})]}),(0,l.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-4 mb-8",children:[{icon:"bi-robot",value:a.length,label:"মোট বট",color:"text-[var(--color-telegram)]"},{icon:"bi-check-circle",value:F,label:"সচল বট",color:"text-green-500"},{icon:"bi-envelope",value:O,label:"মোট মেসেজ",color:"text-purple-500"}].map(e=>(0,l.jsx)(j,{children:(0,l.jsxs)(k,{className:"p-4 flex items-center gap-3",children:[(0,l.jsx)("i",{className:`bi ${e.icon} text-2xl ${e.color}`}),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"text-2xl font-bold",children:e.value}),(0,l.jsx)("div",{className:"text-xs text-muted-foreground",children:e.label})]})]})},e.label))}),(0,l.jsxs)(n9,{value:u,onValueChange:m,children:[(0,l.jsxs)("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6",children:[(0,l.jsxs)(n7,{children:[(0,l.jsxs)(ae,{value:"list",children:[(0,l.jsx)("i",{className:"bi bi-list-ul me-1"}),"বট লিস্ট"]}),(0,l.jsxs)(ae,{value:"code",children:[(0,l.jsx)("i",{className:"bi bi-code-slash me-1"}),"কোড এডিটর"]})]}),(0,l.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,l.jsxs)(x,{className:"gradient-tg text-white border-0 cursor-pointer hover:opacity-90",onClick:()=>T(),children:[(0,l.jsx)("i",{className:"bi bi-plus-lg me-1"}),"নতুন বট"]}),a.length>0&&(0,l.jsxs)(x,{variant:"outline",className:"cursor-pointer border-amber-400 text-amber-600 hover:bg-amber-50",onClick:()=>{let e={};a.forEach(t=>{let n=aa.find(e=>e.id===t.templateId);e[t.id]={name:t.name,token:t.token,username:t.username,status:t.status,type:t.type||n?.type||"echo",config:t.config||n?.defaultConfig||{}}});let t=new Blob([JSON.stringify({bots:e},null,2)],{type:"application/json"}),r=URL.createObjectURL(t),s=document.createElement("a");s.href=r,s.download="bot-config.json",s.click(),URL.revokeObjectURL(r),n({title:"✅ ডাউনলোড হয়েছে!",description:"এখন নিচের ধাপগুলো অনুসরণ করুন।"})},children:[(0,l.jsx)("i",{className:"bi bi-cloud-download me-1"}),"bot-config.json ডাউনলোড করুন"]})]})]}),(0,l.jsxs)(at,{value:"list",children:[a.length>0&&(0,l.jsx)("div",{className:"mb-6 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800",children:(0,l.jsxs)("div",{className:"flex items-start gap-3",children:[(0,l.jsx)("div",{className:"w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center shrink-0 mt-0.5",children:(0,l.jsx)("i",{className:"bi bi-exclamation-triangle text-amber-600 dark:text-amber-400 text-lg"})}),(0,l.jsxs)("div",{className:"flex-1",children:[(0,l.jsx)("h4",{className:"font-semibold text-amber-800 dark:text-amber-300 mb-1",children:"বট লাইভ করতে ৩টি ধাপ অনুসরণ করুন:"}),(0,l.jsxs)("ol",{className:"text-sm text-amber-700 dark:text-amber-400 space-y-2 mt-2 list-decimal list-inside",children:[(0,l.jsxs)("li",{children:[(0,l.jsx)("strong",{children:'"bot-config.json ডাউনলোড করুন"'})," বাটনে ক্লিক করুন (উপরে ডানদিকে)"]}),(0,l.jsxs)("li",{children:["ডাউনলোড করা ",(0,l.jsx)("code",{className:"bg-amber-100 dark:bg-amber-900 px-1 rounded text-xs",children:"bot-config.json"})," ফাইলটি আপনার GitHub রিপোর ",(0,l.jsx)("code",{className:"bg-amber-100 dark:bg-amber-900 px-1 rounded text-xs",children:"public/"})," ফোল্ডারে রাখুন (পুরাতনটি রিপ্লেস করুন) এবং ",(0,l.jsx)("strong",{children:"GitHub এ পুশ করুন"})]}),(0,l.jsxs)("li",{children:["প্রতিটি বটের কার্ডে ",(0,l.jsx)("strong",{children:'"Webhook সেট করুন"'})," বাটনে ক্লিক করুন — Telegram অটোমেটিক্যালি webhook সেট করবে"]})]}),(0,l.jsx)("p",{className:"text-xs text-amber-600 dark:text-amber-500 mt-2",children:"💡 Cloudflare Pages অটো-ডিপ্লয় হবে। ১-২ মিনিট পর বট সচল হবে। বট পরিবর্তন করলে আবার ডাউনলোড ও পুশ করুন।"})]})]})}),0===a.length?(0,l.jsx)(j,{children:(0,l.jsxs)(k,{className:"flex flex-col items-center justify-center py-16 text-center",children:[(0,l.jsx)("div",{className:"w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-4",children:(0,l.jsx)("i",{className:"bi bi-robot text-4xl text-muted-foreground"})}),(0,l.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"কোনো বট নেই"}),(0,l.jsx)("p",{className:"text-muted-foreground mb-6",children:"টেম্পলেট থেকে শুরু করুন বা নতুন বট তৈরি করুন।"}),(0,l.jsxs)("div",{className:"flex flex-wrap justify-center gap-2",children:[(0,l.jsxs)(x,{className:"gradient-tg text-white border-0 cursor-pointer",onClick:()=>T(),children:[(0,l.jsx)("i",{className:"bi bi-plus-lg me-1"}),"খালি বট"]}),aa.filter(e=>"blank"!==e.id).slice(0,3).map(e=>(0,l.jsxs)(x,{variant:"outline",className:"cursor-pointer",onClick:()=>T(e),children:[(0,l.jsx)("i",{className:`bi ${e.icon} me-1`}),e.name]},e.id))]})]})}):(0,l.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4",children:a.map(e=>{let t=aa.find(t=>t.id===e.templateId);return(0,l.jsxs)(j,{className:"hover-lift",children:[(0,l.jsxs)(w,{className:"pb-3",children:[(0,l.jsxs)("div",{className:"flex items-start justify-between",children:[(0,l.jsxs)("div",{className:"flex items-center gap-3",children:[(0,l.jsx)("div",{className:`w-10 h-10 rounded-xl flex items-center justify-center text-white ${"active"===e.status?"bg-green-500":"error"===e.status?"bg-red-500":"bg-gray-400"}`,children:(0,l.jsx)("i",{className:`bi ${t?.icon||"bi-robot"}`})}),(0,l.jsxs)("div",{children:[(0,l.jsx)(y,{className:"text-base",children:e.name}),(0,l.jsx)(N,{className:"text-xs",children:e.username})]})]}),(0,l.jsxs)(v,{variant:"active"===e.status?"default":"secondary",children:[(0,l.jsx)("span",{className:`inline-block w-2 h-2 rounded-full mr-1 ${"active"===e.status?"bg-green-400 animate-pulse":"error"===e.status?"bg-red-400":"bg-gray-400"}`}),"active"===e.status?"সচল":"error"===e.status?"ত্রুটি":"বন্ধ"]})]}),t&&(0,l.jsx)(v,{variant:"outline",className:"text-xs mt-2 w-fit",children:t.name})]}),(0,l.jsx)(k,{className:"pb-3",children:(0,l.jsxs)("div",{className:"space-y-2 text-sm",children:[(0,l.jsxs)("div",{className:"flex items-center gap-2 text-muted-foreground",children:[(0,l.jsx)("i",{className:"bi bi-link-45deg shrink-0"}),(0,l.jsx)("span",{className:"truncate text-xs font-mono",children:e.webhookUrl}),(0,l.jsx)("button",{onClick:()=>{var t;return t=e.webhookUrl,void(navigator.clipboard.writeText(t),n({title:"কপি করা হয়েছে",description:"ওয়েবহুক URL ক্লিপবোর্ডে কপি হয়েছে।"}))},className:"ml-auto shrink-0 hover:text-[var(--color-telegram)] transition-colors",title:"কপি করুন",children:(0,l.jsx)("i",{className:"bi bi-clipboard"})})]}),(0,l.jsxs)("div",{className:"flex items-center gap-2",children:[(0,l.jsxs)(x,{variant:"outline",size:"sm",className:"flex-1 text-xs cursor-pointer text-[var(--color-telegram)] border-[var(--color-telegram)]/30 hover:bg-[var(--color-telegram)]/10",onClick:()=>{let t;return t=`https://api.telegram.org/bot${e.token}/setWebhook?url=${encodeURIComponent(e.webhookUrl)}`,void(window.open(t,"_blank"),n({title:"Webhook সেট হচ্ছে",description:"Telegram এর রেসপন্স দেখুন।"}))},children:[(0,l.jsx)("i",{className:"bi bi-lightning-charge me-1"}),"Webhook সেট করুন"]}),(0,l.jsx)(x,{variant:"outline",size:"sm",className:"text-xs cursor-pointer",onClick:()=>window.open(e.webhookUrl,"_blank"),title:"Webhook পরীক্ষা করুন",children:(0,l.jsx)("i",{className:"bi bi-box-arrow-up-right"})})]}),(0,l.jsxs)("div",{className:"flex items-center gap-4 text-xs text-muted-foreground",children:[(0,l.jsxs)("span",{children:[(0,l.jsx)("i",{className:"bi bi-calendar3 me-1"}),new Date(e.createdAt).toLocaleDateString("bn-BD",{year:"numeric",month:"short",day:"numeric"})]}),(0,l.jsxs)("span",{children:[(0,l.jsx)("i",{className:"bi bi-arrow-down me-1"}),e.messagesReceived]}),(0,l.jsxs)("span",{children:[(0,l.jsx)("i",{className:"bi bi-arrow-up me-1"}),e.messagesSent]})]})]})}),(0,l.jsxs)(I,{className:"pt-3 border-t border-border/50 gap-2",children:[(0,l.jsxs)(x,{variant:"outline",size:"sm",className:"flex-1 cursor-pointer",onClick:()=>{d(e),p(e.name),C(e.token),M(e.username),A(e.code),R(e.templateId||"blank"),i(!0)},children:[(0,l.jsx)("i",{className:"bi bi-pencil me-1"}),"এডিট"]}),(0,l.jsxs)(x,{variant:"outline",size:"sm",className:`flex-1 cursor-pointer ${"active"===e.status?"border-amber-300 text-amber-600":""}`,onClick:()=>{var t;let r;return t=e.id,_(a.map(e=>e.id===t?{...e,status:"active"===e.status?"inactive":"active"}:e)),r=a.find(e=>e.id===t),void n({title:r?.status==="active"?"বট বন্ধ":"বট সচল",description:`"${r?.name}"`})},children:[(0,l.jsx)("i",{className:`bi ${"active"===e.status?"bi-pause-circle":"bi-play-circle"} me-1`}),"active"===e.status?"বন্ধ":"সচল"]}),(0,l.jsx)(x,{variant:"outline",size:"sm",className:"cursor-pointer text-red-500 hover:text-red-600 hover:bg-red-50",onClick:()=>{var t;let r;return t=e.id,r=a.find(e=>e.id===t),void(_(a.filter(e=>e.id!==t)),n({title:"মুছে ফেলা হয়েছে",description:`"${r?.name}" বট ডিলিট করা হয়েছে।`,variant:"destructive"}))},children:(0,l.jsx)("i",{className:"bi bi-trash3"})})]})]},e.id)})})]}),(0,l.jsx)(at,{value:"code",children:0===a.length?(0,l.jsx)(j,{children:(0,l.jsxs)(k,{className:"flex flex-col items-center justify-center py-16 text-center",children:[(0,l.jsx)("i",{className:"bi bi-code-slash text-4xl text-muted-foreground mb-4"}),(0,l.jsx)("p",{className:"text-muted-foreground",children:"কোড এডিট করতে প্রথমে একটি বট তৈরি করুন।"})]})}):(0,l.jsxs)("div",{className:"space-y-4",children:[(0,l.jsxs)("div",{className:"flex items-center gap-3",children:[(0,l.jsx)("select",{className:"flex-1 rounded-lg border border-input bg-background px-3 py-2 text-sm",value:a[0]?.id||"",onChange:e=>{let t=a.find(t=>t.id===e.target.value);t&&(A(t.code),d(t))},children:a.map(e=>(0,l.jsx)("option",{value:e.id,children:e.name},e.id))}),(0,l.jsxs)(x,{className:"gradient-tg text-white border-0 cursor-pointer",onClick:()=>{o&&(_(a.map(e=>e.id===o.id?{...e,code:S}:e)),n({title:"সফল",description:"কোড সেভ করা হয়েছে।"}))},children:[(0,l.jsx)("i",{className:"bi bi-save me-1"}),"সেভ"]})]}),(0,l.jsxs)(j,{children:[(0,l.jsx)(w,{className:"pb-2",children:(0,l.jsxs)("div",{className:"flex items-center justify-between",children:[(0,l.jsxs)(y,{className:"text-sm font-medium",children:[(0,l.jsx)("i",{className:"bi bi-filetype-js me-1 text-amber-500"}),"handler.js"]}),(0,l.jsx)(v,{variant:"outline",className:"text-xs font-mono",children:"JavaScript"})]})}),(0,l.jsx)(k,{children:(0,l.jsx)(h,{value:S,onChange:e=>A(e.target.value),className:"min-h-[400px] font-mono text-sm resize-y",placeholder:"আপনার বট কোড এখানে লিখুন..."})})]})]})})]}),(0,l.jsx)(tk,{open:s,onOpenChange:i,children:(0,l.jsxs)(tM,{className:"max-w-2xl max-h-[90vh] overflow-y-auto",children:[(0,l.jsxs)(tS,{children:[(0,l.jsxs)(tD,{children:[(0,l.jsx)("i",{className:"bi bi-robot me-2 text-[var(--color-telegram)]"}),o?"বট এডিট করুন":"নতুন বট তৈরি করুন"]}),(0,l.jsx)(tR,{children:o?"বটের তথ্য ও কোড আপডেট করুন।":"টেম্পলেট বেছে নিন বা নিজে কোড লিখুন।"})]}),(0,l.jsxs)("div",{className:"space-y-5 py-2",children:[!o&&(0,l.jsxs)("div",{className:"space-y-2",children:[(0,l.jsxs)("label",{className:"text-sm font-medium",children:[(0,l.jsx)("i",{className:"bi bi-grid-3x3-gap me-1"}),"টেম্পলেট বেছে নিন"]}),(0,l.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-2",children:aa.map(e=>(0,l.jsxs)("button",{onClick:()=>{var t;let n;return R(t=e.id),void((n=aa.find(e=>e.id===t))&&!o&&A(n.code))},className:`p-3 rounded-xl border-2 text-left transition-all ${D===e.id?"border-[var(--color-telegram)] bg-[var(--color-telegram)]/5":"border-border hover:border-[var(--color-telegram)]/50"}`,children:[(0,l.jsx)("i",{className:`bi ${e.icon} text-lg ${D===e.id?"text-[var(--color-telegram)]":"text-muted-foreground"}`}),(0,l.jsx)("div",{className:"text-sm font-medium mt-1",children:e.name}),(0,l.jsx)("div",{className:"text-xs text-muted-foreground line-clamp-1",children:e.description})]},e.id))})]}),(0,l.jsxs)("div",{className:"space-y-2",children:[(0,l.jsxs)("label",{className:"text-sm font-medium",children:[(0,l.jsx)("i",{className:"bi bi-tag me-1"}),"বটের নাম ",(0,l.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,l.jsx)(g,{placeholder:"যেমন: MyAwesomeBot",value:f,onChange:e=>p(e.target.value)})]}),(0,l.jsxs)("div",{className:"space-y-2",children:[(0,l.jsxs)("label",{className:"text-sm font-medium",children:[(0,l.jsx)("i",{className:"bi bi-key me-1"}),"বট Token ",(0,l.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,l.jsx)(g,{type:"password",placeholder:"123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11",value:b,onChange:e=>C(e.target.value)}),(0,l.jsxs)("p",{className:"text-xs text-muted-foreground",children:[(0,l.jsx)("i",{className:"bi bi-info-circle me-1"}),"@BotFather থেকে Token নিন। গোপন রাখুন।"]})]}),(0,l.jsxs)("div",{className:"space-y-2",children:[(0,l.jsxs)("label",{className:"text-sm font-medium",children:[(0,l.jsx)("i",{className:"bi bi-at me-1"}),"বট ইউজারনেম"]}),(0,l.jsx)(g,{placeholder:"@my_awesome_bot",value:E,onChange:e=>M(e.target.value)})]}),(0,l.jsxs)("div",{className:"space-y-2",children:[(0,l.jsxs)("label",{className:"text-sm font-medium",children:[(0,l.jsx)("i",{className:"bi bi-code-slash me-1"}),"বট কোড"]}),(0,l.jsx)(h,{value:S,onChange:e=>A(e.target.value),className:"min-h-[250px] font-mono text-xs resize-y"})]})]}),(0,l.jsxs)(tA,{className:"gap-2 sm:gap-0",children:[(0,l.jsx)(tC,{asChild:!0,children:(0,l.jsx)(x,{variant:"outline",className:"cursor-pointer",children:"বাতিল"})}),(0,l.jsxs)(x,{className:"gradient-tg text-white border-0 cursor-pointer hover:opacity-90",onClick:()=>{if(!f.trim()||!b.trim())return void n({title:"ত্রুটি",description:"বটের নাম এবং Token আবশ্যক।",variant:"destructive"});let e=aa.find(e=>e.id===D),t=e?.type||"echo",r=e?.defaultConfig||{};if(o)_(a.map(e=>e.id===o.id?{...e,name:f,token:b,username:E,code:S,templateId:D,type:e.type||t,config:e.config||r}:e)),n({title:"সফল",description:`"${f}" বট আপডেট হয়েছে।`});else{let e="bot_"+Math.random().toString(36).substring(2,10);_([{id:e,name:f,token:b,username:E||"@"+f.toLowerCase().replace(/\s+/g,"_"),status:"active",code:S,templateId:D,type:t,config:r,createdAt:new Date().toISOString(),webhookUrl:`${window.location.origin}/webhook/${e}`,lastPing:new Date().toISOString(),messagesReceived:0,messagesSent:0},...a]),n({title:"সফল",description:`"${f}" বট তৈরি হয়েছে।`})}i(!1),P()},children:[(0,l.jsx)("i",{className:`bi ${o?"bi-check-lg":"bi-plus-lg"} me-1`}),o?"আপডেট":"তৈরি"]})]})]})})]})})}function au(){return(0,l.jsx)("section",{className:"py-20 sm:py-28 bg-muted/30",children:(0,l.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[(0,l.jsxs)("div",{className:"text-center mb-16",children:[(0,l.jsxs)(v,{className:"gradient-tg text-white border-0 mb-4",children:[(0,l.jsx)("i",{className:"bi bi-gift me-1"}),"সম্পূর্ণ ফ্রি"]}),(0,l.jsx)("h2",{className:"text-3xl sm:text-4xl font-bold mb-4",children:"কোনো পেমেন্ট নেই, কোনো সীমা নেই"}),(0,l.jsx)("p",{className:"text-muted-foreground max-w-2xl mx-auto text-lg",children:"BotForge সম্পূর্ণ ফ্রি এবং চিরকাল ফ্রি থাকবে। কোনো হিডেন চার্জ, কোনো আপগ্রেড প্রেসার।"})]}),(0,l.jsx)("div",{className:"max-w-lg mx-auto",children:(0,l.jsxs)(j,{className:"border-[var(--color-telegram)] border-2 shadow-xl shadow-[var(--color-telegram)]/10",children:[(0,l.jsxs)(w,{className:"text-center pt-10",children:[(0,l.jsx)("div",{className:"w-16 h-16 rounded-2xl gradient-tg flex items-center justify-center text-white text-3xl mx-auto mb-4",children:(0,l.jsx)("i",{className:"bi bi-infinity"})}),(0,l.jsx)(y,{className:"text-2xl",children:"সম্পূর্ণ ফ্রি প্ল্যান"}),(0,l.jsxs)("div",{className:"mt-3",children:[(0,l.jsx)("span",{className:"text-5xl font-extrabold text-gradient",children:"$0"}),(0,l.jsx)("span",{className:"text-muted-foreground",children:" /চিরকাল"})]})]}),(0,l.jsx)(k,{className:"pb-6",children:(0,l.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[{icon:"bi-infinity",title:"আনলিমিটেড বট",desc:"যত খুশি বট তৈরি করুন, কোনো সীমা নেই।"},{icon:"bi-lightning-charge",title:"আনলিমিটেড রিকোয়েস্ট",desc:"রিকোয়েস্ট সীমা নেই, ট্রাফিক সীমা নেই।"},{icon:"bi-hdd",title:"আনলিমিটেড স্টোরেজ",desc:"D1 ডাটাবেস ও KV স্টোরেজ সীমাহীন।"},{icon:"bi-globe",title:"কাস্টম ডোমেইন",desc:"আপনার নিজস্ব ডোমেইন কানেক্ট করুন।"},{icon:"bi-github",title:"GitHub ইন্টিগ্রেশন",desc:"অটো ডিপ্লয়, ভার্সন কন্ট্রোল, CI/CD।"},{icon:"bi-palette",title:"টেম্পলেট লাইব্রেরি",desc:"প্রস্তুত টেম্পলেট থেকে দ্রুত শুরু করুন।"},{icon:"bi-shield-check",title:"SSL/HTTPS",desc:"Cloudflare-এর ফ্রি SSL সার্টিফিকেট।"},{icon:"bi-people",title:"কমিউনিটি সাপোর্ট",desc:"সাহায্য ও গাইডলাইন সব ফ্রি।"}].map(e=>(0,l.jsxs)("div",{className:"flex items-start gap-3 p-2",children:[(0,l.jsx)("i",{className:`bi ${e.icon} text-lg text-green-500 mt-0.5 shrink-0`}),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"text-sm font-medium",children:e.title}),(0,l.jsx)("div",{className:"text-xs text-muted-foreground",children:e.desc})]})]},e.title))})}),(0,l.jsx)(I,{children:(0,l.jsxs)(x,{className:"w-full gradient-tg text-white border-0 cursor-pointer hover:opacity-90 text-lg py-6",onClick:()=>document.getElementById("dashboard")?.scrollIntoView({behavior:"smooth"}),children:[(0,l.jsx)("i",{className:"bi bi-rocket-takeoff me-2"}),"এখনই ফ্রিতে শুরু করুন"]})})]})})]})})}function am(){return(0,l.jsx)("section",{id:"faq",className:"py-20 sm:py-28",children:(0,l.jsxs)("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8",children:[(0,l.jsxs)("div",{className:"text-center mb-12",children:[(0,l.jsxs)(v,{variant:"secondary",className:"mb-4",children:[(0,l.jsx)("i",{className:"bi bi-question-circle me-1"}),"FAQ"]}),(0,l.jsx)("h2",{className:"text-3xl sm:text-4xl font-bold mb-4",children:"সাধারণ জিজ্ঞাসা"}),(0,l.jsx)("p",{className:"text-muted-foreground text-lg",children:"সবচেয়ে জনপ্রিয় প্রশ্নগুলোর বিস্তারিত উত্তর এখানে পাবেন। আপনার প্রশ্নের উত্তর না পেলে আমাদের সাথে যোগাযোগ করুন।"})]}),(0,l.jsx)(ng,{type:"single",collapsible:!0,className:"space-y-3",children:[{q:"BotForge কি সত্যিই সম্পূর্ণ ফ্রি?",a:"হ্যাঁ, ১০০% ফ্রি। কোনো প্রো প্ল্যান নেই, কোনো আপগ্রেড নেই। সব ফিচার সবার জন্য উন্মুক্ত। Cloudflare Pages-এর ফ্রি টায়ার দিয়ে চলে, তাই কোনো সার্ভার খরচ নেই।"},{q:"কতগুলি বট তৈরি করা যাবে?",a:"আনলিমিটেড! যত খুশি বট তৈরি করুন। কোনো সীমাবদ্ধতা নেই। প্রতিটি বট আলাদা ওয়েবহুক URL পাবে এবং স্বাধীনভাবে চলবে।"},{q:"PHP বট হোস্ট করা যাবে কি?",a:"দুঃখিত, বর্তমানে শুধুমাত্র JavaScript এবং TypeScript বট সাপোর্ট করে। Cloudflare Workers V8 Isolate-এ চলে যেখানে PHP রানটাইম নেই।"},{q:"টেম্পলেট কীভাবে ব্যবহার করবো?",a:"নতুন বট তৈরির সময় ডায়ালগে টেম্পলেট গ্রিড দেখবেন। যেকোনো টেম্পলেটে ক্লিক করলে কোড অটো-ফিল হবে। তারপর নিজের মতো কাস্টমাইজ করে সেভ করুন।"},{q:"ওয়েবহুক URL কীভাবে সেট করবো?",a:"বট তৈরির পর ওয়েবহুক URL অটোমেটিক্যালি তৈরি হয়। কপি বাটনে ক্লিক করে @BotFather-এ বা Telegram API-তে setWebhook কল করে সেট করুন।"},{q:"ডাটাবেস ছাড়া কি নিরাপদ?",a:"বেশ নিরাপদ! আপনার কোনো ডাটাবেস সার্ভার সেটআপ করতে হবে না। Cloudflare-এর অনবোর্ড D1 (SQLite) এবং KV স্টোরেজ ব্যবহৃত হয়। এটি সম্পূর্ণ ম্যানেজড সার্ভিস।"}].map((e,t)=>(0,l.jsxs)(nh,{value:`faq-${t}`,className:"bg-card border border-border/50 rounded-xl px-6 data-[state=open]:shadow-md transition-shadow",children:[(0,l.jsx)(nb,{className:"text-left text-base font-medium hover:no-underline py-4",children:e.q}),(0,l.jsx)(nv,{className:"text-muted-foreground leading-relaxed pb-4",children:e.a})]},t))})]})})}function af(){return(0,l.jsx)("footer",{className:"border-t border-border bg-card",children:(0,l.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[(0,l.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8",children:[(0,l.jsxs)("div",{className:"sm:col-span-2 lg:col-span-1",children:[(0,l.jsxs)("div",{className:"flex items-center gap-2 mb-4",children:[(0,l.jsx)("div",{className:"w-9 h-9 rounded-xl gradient-tg flex items-center justify-center text-white text-lg",children:(0,l.jsx)("i",{className:"bi bi-robot"})}),(0,l.jsx)("span",{className:"text-xl font-bold text-gradient",children:"BotForge"})]}),(0,l.jsx)("p",{className:"text-sm text-muted-foreground leading-relaxed",children:"Cloudflare Pages-এ সম্পূর্ণ ফ্রিতে Telegram বট হোস্ট করুন। আনলিমিটেড, কোনো সীমাবদ্ধতা নেই।"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h4",{className:"font-semibold mb-4",children:"প্রোডাক্ট"}),(0,l.jsxs)("ul",{className:"space-y-2 text-sm text-muted-foreground",children:[(0,l.jsx)("li",{children:(0,l.jsx)("span",{className:"hover:text-[var(--color-telegram)] cursor-pointer transition-colors",children:"ফিচার"})}),(0,l.jsx)("li",{children:(0,l.jsx)("span",{className:"hover:text-[var(--color-telegram)] cursor-pointer transition-colors",children:"টেম্পলেট"})}),(0,l.jsx)("li",{children:(0,l.jsx)("span",{className:"hover:text-[var(--color-telegram)] cursor-pointer transition-colors",children:"ডকুমেন্টেশন"})})]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h4",{className:"font-semibold mb-4",children:"রিসোর্স"}),(0,l.jsxs)("ul",{className:"space-y-2 text-sm text-muted-foreground",children:[(0,l.jsx)("li",{children:(0,l.jsx)("span",{className:"hover:text-[var(--color-telegram)] cursor-pointer transition-colors",children:"গিটহাব"})}),(0,l.jsx)("li",{children:(0,l.jsx)("span",{className:"hover:text-[var(--color-telegram)] cursor-pointer transition-colors",children:"এপিআই রেফারেন্স"})}),(0,l.jsx)("li",{children:(0,l.jsx)("span",{className:"hover:text-[var(--color-telegram)] cursor-pointer transition-colors",children:"কমিউনিটি"})})]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h4",{className:"font-semibold mb-4",children:"কম্পানি"}),(0,l.jsxs)("ul",{className:"space-y-2 text-sm text-muted-foreground",children:[(0,l.jsx)("li",{children:(0,l.jsx)("span",{className:"hover:text-[var(--color-telegram)] cursor-pointer transition-colors",children:"আমাদের সম্পর্কে"})}),(0,l.jsx)("li",{children:(0,l.jsx)("span",{className:"hover:text-[var(--color-telegram)] cursor-pointer transition-colors",children:"গোপনীয়তা নীতি"})}),(0,l.jsx)("li",{children:(0,l.jsx)("span",{className:"hover:text-[var(--color-telegram)] cursor-pointer transition-colors",children:"সার্ভিস শর্ত"})})]})]})]}),(0,l.jsx)(_,{className:"my-8"}),(0,l.jsxs)("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-4",children:[(0,l.jsxs)("p",{className:"text-sm text-muted-foreground",children:["© ",new Date().getFullYear()," BotForge. সর্বস্বত্ব সংরক্ষিত। সম্পূর্ণ ফ্রি ও ওপেন সোর্স।"]}),(0,l.jsxs)("div",{className:"flex items-center gap-4",children:[(0,l.jsx)("span",{className:"text-muted-foreground hover:text-[var(--color-telegram)] cursor-pointer transition-colors",children:(0,l.jsx)("i",{className:"bi bi-github text-xl"})}),(0,l.jsx)("span",{className:"text-muted-foreground hover:text-[var(--color-telegram)] cursor-pointer transition-colors",children:(0,l.jsx)("i",{className:"bi bi-twitter-x text-xl"})}),(0,l.jsx)("span",{className:"text-muted-foreground hover:text-[var(--color-telegram)] cursor-pointer transition-colors",children:(0,l.jsx)("i",{className:"bi bi-telegram text-xl"})})]})]})]})})}e.s(["default",0,function(){let[e,t]=(0,c.useState)("home"),[n,a]=(0,c.useState)(null),r=(0,c.useCallback)(e=>{let t=document.getElementById(e);if(t){let e=t.getBoundingClientRect().top+window.scrollY-64;window.scrollTo({top:e,behavior:"smooth"})}},[]),s=(0,c.useCallback)(e=>{t(e),r(e)},[r]),i=(0,c.useCallback)(e=>{a(e),r("dashboard")},[r]),o=(0,c.useCallback)(()=>a(null),[]);return(0,c.useEffect)(()=>{let e=["home","features","templates","how-it-works","dashboard","faq"],n=new IntersectionObserver(e=>{for(let n of e)n.isIntersecting&&t(n.target.id)},{rootMargin:"-40% 0px -60% 0px"}),a=setTimeout(()=>{e.forEach(e=>{let t=document.getElementById(e);t&&n.observe(t)})},100);return()=>{clearTimeout(a),n.disconnect()}},[]),(0,l.jsxs)("div",{className:"min-h-screen flex flex-col",children:[(0,l.jsx)(as,{onNavigate:s,currentSection:e}),(0,l.jsxs)("main",{className:"flex-1",children:[(0,l.jsx)(ai,{onNavigate:s}),(0,l.jsx)(ao,{}),(0,l.jsx)(al,{onApplyTemplate:i}),(0,l.jsx)(ac,{}),(0,l.jsx)(ad,{pendingTemplate:n,onTemplateConsumed:o}),(0,l.jsx)(au,{}),(0,l.jsx)(am,{})]}),(0,l.jsx)(af,{})]})}],52683)}]);