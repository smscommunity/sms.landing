(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(876)}])},1551:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,l=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);a=!0);}catch(u){i=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(i)throw o}}return l}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,a=(l=r(7294))&&l.__esModule?l:{default:l},i=r(1003),u=r(880),c=r(9246);function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var f={};function d(e,t,r,n){if(e&&i.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;f[t+"%"+r+(o?"%"+o:"")]=!0}}var p=a.default.forwardRef((function(e,t){var r,n=e.legacyBehavior,l=void 0===n?!0!==Boolean(!1):n,p=e.href,h=e.as,m=e.children,y=e.prefetch,v=e.passHref,b=e.replace,x=e.shallow,g=e.scroll,j=e.locale,w=e.onClick,S=e.onMouseEnter,E=s(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);r=m,l&&"string"===typeof r&&(r=a.default.createElement("a",null,r));var O,_=!1!==y,k=u.useRouter(),C=a.default.useMemo((function(){var e=o(i.resolveHref(k,p,!0),2),t=e[0],r=e[1];return{href:t,as:h?i.resolveHref(k,h):r||t}}),[k,p,h]),M=C.href,I=C.as,L=a.default.useRef(M),N=a.default.useRef(I);l&&(O=a.default.Children.only(r));var A=l?O&&"object"===typeof O&&O.ref:t,R=o(c.useIntersection({rootMargin:"200px"}),3),P=R[0],T=R[1],U=R[2],B=a.default.useCallback((function(e){N.current===I&&L.current===M||(U(),N.current=I,L.current=M),P(e),A&&("function"===typeof A?A(e):"object"===typeof A&&(A.current=e))}),[I,A,M,U,P]);a.default.useEffect((function(){var e=T&&_&&i.isLocalURL(M),t="undefined"!==typeof j?j:k&&k.locale,r=f[M+"%"+I+(t?"%"+t:"")];e&&!r&&d(k,M,I,{locale:t})}),[I,M,T,j,_,k]);var D={ref:B,onClick:function(e){l||"function"!==typeof w||w(e),l&&O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,l,a,u){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:l,locale:u,scroll:a}))}(e,k,M,I,b,x,g,j)},onMouseEnter:function(e){l||"function"!==typeof S||S(e),l&&O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),i.isLocalURL(M)&&d(k,M,I,{priority:!0})}};if(!l||v||"a"===O.type&&!("href"in O.props)){var H="undefined"!==typeof j?j:k&&k.locale,K=k&&k.isLocaleDomain&&i.getDomainLocale(I,H,k&&k.locales,k&&k.domainLocales);D.href=K||i.addBasePath(i.addLocale(I,H,k&&k.defaultLocale))}return l?a.default.cloneElement(O,D):a.default.createElement("a",Object.assign({},E,D),r)}));t.default=p,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,l=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);a=!0);}catch(u){i=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(i)throw o}}return l}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!i,s=l.useRef(),f=o(l.useState(!1),2),d=f[0],p=f[1],h=o(l.useState(t?t.current:null),2),m=h[0],y=h[1],v=l.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=u.get(n):(t=u.get(r),c.push(r));if(t)return t;var o=new Map,l=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return u.set(r,t={id:r,observer:l,elements:o}),t}(r),o=n.id,l=n.observer,a=n.elements;return a.set(e,t),l.observe(e),function(){if(a.delete(e),l.unobserve(e),0===a.size){l.disconnect(),u.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:m,rootMargin:r}))}),[n,m,r,d]),b=l.useCallback((function(){p(!1)}),[]);return l.useEffect((function(){if(!i&&!d){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),l.useEffect((function(){t&&y(t.current)}),[t]),[v,d,b]};var l=r(7294),a=r(4686),i="undefined"!==typeof IntersectionObserver;var u=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},876:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r(5893),o=r(9008),l=r.n(o),a=(r(7294),r(1664)),i=r.n(a);function u(e){return(0,n.jsx)(i(),{href:e.href,children:(0,n.jsx)("div",{className:"cursor-pointer transition-colors bg-yellow-300 hover:bg-yellow-500 rounded-md text-black font-bold m-2 p-2 text-2xl w-72",children:e.label})})}function c(){return(0,n.jsxs)("div",{children:[(0,n.jsxs)(l(),{children:[(0,n.jsx)("title",{children:"Super Mario Sunshine Speedrunning Community"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)("div",{className:"fixed min-h-full min-w-full bg-tile-background bg-repeat",children:[(0,n.jsx)("video",{className:"fixed min-h-full min-w-full object-cover",autoPlay:!0,muted:!0,loop:!0,id:"bgvideo",children:(0,n.jsx)("source",{src:"/sms_landing_background.mp4",type:"video/mp4"})}),(0,n.jsx)("div",{className:"fixed min-h-full min-w-full bg-black opacity-60"})]}),(0,n.jsx)("div",{className:"fixed min-h-screen min-w-full",children:(0,n.jsxs)("main",{className:"min-h-screen flex flex-col justify-center text-center z-20 w-3/4 mx-auto",children:[(0,n.jsx)("div",{children:(0,n.jsx)("div",{className:"h-auto text-5xl font-bold text-white mb-10",children:"Super Mario Sunshine Speedrunning Community"})}),(0,n.jsxs)("div",{className:"flex flex-wrap flex-row justify-center max-w-5xl mx-auto",children:[(0,n.jsx)(u,{href:"https://speedrun.com/sms",label:"Leaderboard"}),(0,n.jsx)(u,{href:"https://discord.gg/jX38aXCv9y",label:"Discord Server"}),(0,n.jsx)(u,{href:"https://twitch.tv/sunshinecommunity",label:"Twitch"}),(0,n.jsx)(u,{href:"https://sunmar.io/il",label:"IL Spreadsheet"}),(0,n.jsx)(u,{href:"https://ilview.sumar.io",label:"IL Leaderboard Viewer"}),(0,n.jsx)(u,{href:"https://sms.bingo",label:"Bingo"}),(0,n.jsx)(u,{href:"https://twitter.com/sunshinecommunity",label:"Twitter"}),(0,n.jsx)(u,{href:"https://www.youtube.com/user/SMSCommunity",label:"Youtube"}),(0,n.jsx)(u,{href:"https://smscommunity.github.io/sms-guide/tutorials",label:"Tutorials and Guides"})]}),(0,n.jsx)("div",{className:"flex flex-row justify-center"}),(0,n.jsx)("div",{className:"flex flex-row justify-center"})]})})]})}},9008:function(e,t,r){e.exports=r(3121)},1664:function(e,t,r){e.exports=r(1551)}},function(e){e.O(0,[774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);