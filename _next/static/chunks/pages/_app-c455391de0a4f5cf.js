(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6363:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(8449)}])},1551:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(u){i=!0,l=u}finally{try{o||null==n.return||n.return()}finally{if(i)throw l}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,o=(a=n(7294))&&a.__esModule?a:{default:a},i=n(1003),u=n(880),s=n(9246);var c={};function f(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var l=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;c[t+"%"+n+(l?"%"+l:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,r=u.useRouter(),a=o.default.useMemo((function(){var t=l(i.resolveHref(r,e.href,!0),2),n=t[0],a=t[1];return{href:n,as:e.as?i.resolveHref(r,e.as):a||n}}),[r,e.href,e.as]),d=a.href,p=a.as,m=o.default.useRef(d),g=o.default.useRef(p),h=e.children,v=e.replace,b=e.shallow,y=e.scroll,x=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var j=(t=o.default.Children.only(h))&&"object"===typeof t&&t.ref,w=l(s.useIntersection({rootMargin:"200px"}),3),N=w[0],_=w[1],M=w[2],C=o.default.useCallback((function(e){g.current===p&&m.current===d||(M(),g.current=p,m.current=d),N(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[p,j,d,M,N]);o.default.useEffect((function(){var e=_&&n&&i.isLocalURL(d),t="undefined"!==typeof x?x:r&&r.locale,l=c[d+"%"+p+(t?"%"+t:"")];e&&!l&&f(r,d,p,{locale:t})}),[p,d,_,x,n,r]);var O={ref:C,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,l,a,o,u){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),t[l?"replace":"push"](n,r,{shallow:a,locale:u,scroll:o}))}(e,r,d,p,v,b,y,x)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),i.isLocalURL(d)&&f(r,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof x?x:r&&r.locale,k=r&&r.isLocaleDomain&&i.getDomainLocale(p,E,r&&r.locales,r&&r.domainLocales);O.href=k||i.addBasePath(i.addLocale(p,E,r&&r.defaultLocale))}return o.default.cloneElement(t,O)};t.default=d,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(u){i=!0,l=u}finally{try{o||null==n.return||n.return()}finally{if(i)throw l}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!i,c=a.useRef(),f=l(a.useState(!1),2),d=f[0],p=f[1],m=l(a.useState(t?t.current:null),2),g=m[0],h=m[1],v=a.useCallback((function(e){c.current&&(c.current(),c.current=void 0),r||d||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=s.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=u.get(r):(t=u.get(n),s.push(n));if(t)return t;var l=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=l.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return u.set(n,t={id:n,observer:a,elements:l}),t}(n),l=r.id,a=r.observer,o=r.elements;return o.set(e,t),a.observe(e),function(){if(o.delete(e),a.unobserve(e),0===o.size){a.disconnect(),u.delete(l);var t=s.findIndex((function(e){return e.root===l.root&&e.margin===l.margin}));t>-1&&s.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:g,rootMargin:n}))}),[r,g,n,d]),b=a.useCallback((function(){p(!1)}),[]);return a.useEffect((function(){if(!i&&!d){var e=o.requestIdleCallback((function(){return p(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){t&&h(t.current)}),[t]),[v,d,b]};var a=n(7294),o=n(4686),i="undefined"!==typeof IntersectionObserver;var u=new Map,s=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},8449:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(5893),l=(n(6774),n(7294)),a="/_next/static/media/icon-menu.a12a9fae.svg",o="/_next/static/media/icon-close-menu.7a75d930.svg",i=n(1664),u=n.n(i),s="/_next/static/media/icon-arrow-up.8dd62a90.svg",c="/_next/static/media/icon-arrow-down.df65724e.svg",f=function(e){var t=e.title,n=e.subMenu,a=(0,l.useState)(!1),o=a[0],i=a[1];return(0,r.jsxs)("li",{className:"list-none lg:relative",children:[n&&(0,r.jsxs)("button",{className:"flex items-center lg:relative",onClick:function(){return i(!o)},children:[t,(0,r.jsx)("img",{className:"ml-2",alt:"",src:"".concat(o?s:c)})]}),o&&(0,r.jsx)("ul",{className:"flex max-w-sm flex-col gap-4 rounded-md p-4 lg:absolute lg:right-0 lg:w-32 lg:bg-white lg:shadow-[0_4px_8px_4px_rgba(0,0,0,0.3)]",children:null===n||void 0===n?void 0:n.map((function(e){return(0,r.jsx)(u(),{href:"#",children:(0,r.jsxs)("a",{className:"flex items-center",children:[e.imgUrl&&(0,r.jsx)("img",{className:"mr-2",src:e.imgUrl}),e.title]})})}))}),!n&&(0,r.jsx)(u(),{href:"#",children:(0,r.jsx)("a",{children:t})})]})};var d=[{title:"Features",subMenu:[{title:"Todo List",imgUrl:"../images/icon-todo.svg"},{title:"Calendar",imgUrl:"../images/icon-calendar.svg"},{title:"Reminders",imgUrl:"../images/icon-reminders.svg"},{title:"Planning",imgUrl:"../images/icon-planning.svg"}]},{title:"Company",subMenu:[{title:"History"},{title:"Our Team"},{title:"blog"}]},{title:"Careers"},{title:"About"}],p=[{title:"login"},{title:"register",classNames:"border-2 border-black"}],m=function(){var e=(0,l.useState)(!1),t=e[0],n=e[1],i=(0,l.useRef)(null);return(0,r.jsxs)("nav",{className:"flex items-center justify-between gap-x-4 p-4 lg:justify-start",children:[(0,r.jsx)("h2",{className:"text-xl font-bold",children:"snap"}),(0,r.jsxs)("div",{className:"flex items-center justify-between lg:flex-grow",children:[(0,r.jsx)("div",{className:"hidden items-center gap-x-12 lg:ml-5 lg:flex",children:d.map((function(e){return e.subMenu?(0,r.jsx)(f,{title:e.title,subMenu:e.subMenu}):(0,r.jsx)(u(),{href:"#",children:(0,r.jsx)("a",{children:e.title})},e.title)}))}),(0,r.jsx)("div",{className:"hidden lg:flex",children:p.map((function(e){return(0,r.jsx)(u(),{href:"#",children:(0,r.jsx)("a",{className:e.classNames+" rounded-md px-4 py-2",children:e.title})},e.title)}))}),(0,r.jsxs)("div",{className:"overflow-x-hidden lg:hidden",children:[(0,r.jsxs)("button",{onClick:function(){return n(!t)},children:[(0,r.jsx)("span",{className:"sr-only",children:"Open menu"}),(0,r.jsx)("img",{src:"".concat(t?o:a)})]}),(0,r.jsx)("div",{className:"fixed inset-0 flex justify-end bg-gray-700 bg-opacity-70 transition-transform "+(t?"-translate-x-0":"translate-x-full"),onClick:function(e){return function(e){i.current&&i.current&&!i.current.contains(e.target)&&n(!1)}(e)},children:(0,r.jsxs)("div",{className:"flex h-full w-3/5 flex-col bg-white p-4",ref:i,children:[(0,r.jsxs)("button",{className:"self-end",onClick:function(){return n(!t)},children:[(0,r.jsx)("span",{className:"sr-only",children:"Close Menu"}),(0,r.jsx)("img",{src:o})]}),(0,r.jsx)("ul",{className:"flex flex-col gap-4",children:d.map((function(e){return(0,r.jsx)(f,{title:e.title,subMenu:e.subMenu})}))})]})})]})]})]})};function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){g(e,t,n[t])}))}return e}var v=function(e){var t=e.Component,n=e.pageProps;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m,{}),(0,r.jsx)(t,h({},n))]})}},6774:function(){},1664:function(e,t,n){e.exports=n(1551)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6363),t(880)}));var n=e.O();_N_E=n}]);