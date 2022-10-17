(window["webpackJsonpconference-details-widget"]=window["webpackJsonpconference-details-widget"]||[]).push([[0],{67:function(e){e.exports=JSON.parse('{"error":{"dataLoading":"Error during server connection"},"common":{"widgetName":"Details about \'{{widgetNamePlaceholder}}\'","name":"Name","value":"Value","loading":"Loading...","notAuthenticated":"User is not authenticated."},"entities":{"conference":{"id":"entities.conference.id","name":"entities.conference.name","description":"entities.conference.description","note":"entities.conference.note","number":"entities.conference.number","date":"entities.conference.date"}}}')},76:function(e,t,n){e.exports=n(95)},95:function(e,t,n){"use strict";n.r(t);var a=n(29),r=n(30),c=n(37),i=n(21),o=n(31),l=n(69),s=n(25),u=n(0),d=n.n(u),f=n(12),m=n.n(f),p=n(56),b=n.n(p),h=n(128),v=n(133),E=n(126),O=n(68),y=n(6),g=d.a.createContext(null),k=n(17),w=n.n(k),j=n(33),P=n(39),D=n(24),C=n(3),S=n.n(C),N=(S.a.shape({initialized:S.a.bool,authenticated:S.a.bool}),n(70));S.a.oneOfType([S.a.func,S.a.shape({current:S.a.elementType}),S.a.shape(null)]);var x=function(e){var t=e.children,n=e.keycloak;return n.initialized&&n.authenticated?t:null},F=function(e){var t=e.children,n=e.keycloak;return n.initialized&&n.authenticated?null:t},z=n(127),A=(S.a.shape({id:S.a.number,name:S.a.string,description:S.a.string,note:S.a.string,number:S.a.number,date:S.a.string}),n(120)),R=n(124),T=n(123),H=n(121),L=n(122),U=function(e){var t=e.t,n=e.i18n.language,a=e.conference;return d.a.createElement(A.a,null,d.a.createElement(H.a,null,d.a.createElement(L.a,null,d.a.createElement(T.a,null,t("common.name")),d.a.createElement(T.a,null,t("common.value")))),d.a.createElement(R.a,null,d.a.createElement(L.a,null,d.a.createElement(T.a,null,d.a.createElement("span",null,t("entities.conference.id"))),d.a.createElement(T.a,null,d.a.createElement("span",null,a.id))),d.a.createElement(L.a,null,d.a.createElement(T.a,null,d.a.createElement("span",null,t("entities.conference.name"))),d.a.createElement(T.a,null,d.a.createElement("span",null,a.name))),d.a.createElement(L.a,null,d.a.createElement(T.a,null,d.a.createElement("span",null,t("entities.conference.description"))),d.a.createElement(T.a,null,d.a.createElement("span",null,a.description))),d.a.createElement(L.a,null,d.a.createElement(T.a,null,d.a.createElement("span",null,t("entities.conference.note"))),d.a.createElement(T.a,null,d.a.createElement("span",null,a.note))),d.a.createElement(L.a,null,d.a.createElement(T.a,null,d.a.createElement("span",null,t("entities.conference.number"))),d.a.createElement(T.a,null,d.a.createElement("span",null,a.number))),d.a.createElement(L.a,null,d.a.createElement(T.a,null,d.a.createElement("span",null,t("entities.conference.date"))),d.a.createElement(T.a,null,d.a.createElement("span",null,a.date&&new Date(a.date).toLocaleDateString(n))))))};U.defaultProps={conference:[]};var W=Object(D.b)()(U),M=function(e){var t=e.t,n=e.conference;return d.a.createElement(z.a,null,d.a.createElement("h3",{"data-testid":"details_title"},t("common.widgetName",{widgetNamePlaceholder:"Conference"})),d.a.createElement(W,{conference:n}))};M.defaultProps={conference:{}};var K=Object(D.b)()(M),I=n(4),J=n(129),V=n(132),B=n(125),G=n(5),_=n(130),q=n(64),Q=n.n(q),X=n(65),Y=n.n(X),Z=n(63),$=n.n(Z),ee=n(66),te=n.n(ee),ne={success:$.a,error:Q.a,info:Y.a},ae={success:3e3,error:null,info:5e3},re=function e(t){var n=t.className,a=t.classes,r=t.status,c=t.message,i=t.onClose,o=!!c,l=r||e.INFO,s=ne[l],u=ae[l],f=d.a.createElement("span",{className:a.message},d.a.createElement(s,{className:Object(I.a)(a.icon,a.iconStatus)}),c);return d.a.createElement(J.a,{open:o,onClose:i,autoHideDuration:u},d.a.createElement(V.a,{className:Object(I.a)(a[l],n),message:f,action:[d.a.createElement(_.a,{key:"close","aria-label":"close",color:"inherit",onClick:i},d.a.createElement(te.a,{className:a.icon}))]}))};re.SUCCESS="success",re.ERROR="error",re.defaultProps={message:null,className:"",status:re.INFO="info",onClose:function(){}};var ce=Object(G.a)((function(e){return{message:{display:"flex",alignItems:"center"},icon:{fontSize:20},iconStatus:{opacity:.9,marginRight:e.spacing(1)},success:{backgroundColor:B.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.main}}}),{withTheme:!0})(re),ie=function(){var e=Object(j.a)(w.a.mark((function e(t,n){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,n);case 2:if(204!==(a=e.sent).status){e.next=5;break}return e.abrupt("return",{});case 5:return e.abrupt("return",a.status>=200&&a.status<300?a.json():Promise.reject(new Error(a.statusText||a.status)));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function oe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function le(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?oe(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oe(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var se=function(){var e=Object(j.a)(w.a.mark((function e(t,n){var a,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat("api/conferences","/").concat(n),r=le({},{headers:new Headers({Authorization:"Bearer ".concat(window&&window.entando&&window.entando.keycloak&&window.entando.keycloak.authenticated?window.entando.keycloak.token:""),"Content-Type":"application/json"})},{method:"GET"}),e.abrupt("return",ie(a,r));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ue=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(c.a)(this,Object(i.a)(t).call(this,e))).state={conference:{},notificationStatus:null,notificationMessage:null},n.theme=Object(O.a)(),n.closeNotification=n.closeNotification.bind(Object(P.a)(n)),n.fetchData=n.fetchData.bind(Object(P.a)(n)),n}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.keycloak;e.initialized&&e.authenticated&&this.fetchData()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.keycloak,a=t.id,r=n.initialized&&n.authenticated,c=e.keycloak.authenticated!==r,i=a&&a!==e.id;r&&(i||c)&&this.fetchData()}},{key:"fetchData",value:function(){var e=Object(j.a)(w.a.mark((function e(){var t,n,a,r,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.keycloak,a=t.id,r=t.serviceUrl,!(n.initialized&&n.authenticated)||!a){e.next=13;break}return e.prev=3,e.next=6,se(r,a);case 6:c=e.sent,this.setState((function(){return{conference:c}})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),this.handleError(e.t0);case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"handleError",value:function(e){var t=this.props,n=t.t;(0,t.onError)(e),this.setState((function(){return{notificationMessage:n("error.dataLoading"),notificationStatus:ce.ERROR}}))}},{key:"closeNotification",value:function(){this.setState({notificationMessage:null})}},{key:"render",value:function(){var e=this.state,t=e.conference,n=e.notificationStatus,a=e.notificationMessage,r=this.props,c=r.t,i=r.keycloak;return d.a.createElement(E.a,{theme:this.theme},d.a.createElement(F,{keycloak:i},c("common.notAuthenticated")),d.a.createElement(x,{keycloak:i},d.a.createElement(K,{conference:t})),d.a.createElement(ce,{status:n,message:a,onClose:this.closeNotification}))}}]),t}(d.a.Component);ue.defaultProps={onError:function(){},serviceUrl:""};var de=function(e){var t=function(t){function n(){var t,r;Object(a.a)(this,n);for(var o=arguments.length,l=new Array(o),s=0;s<o;s++)l[s]=arguments[s];return(r=Object(c.a)(this,(t=Object(i.a)(n)).call.apply(t,[this].concat(l)))).renderWrappedComponent=function(t){var n=r.props,a=n.forwardedRef,c=Object(N.a)(n,["forwardedRef"]);return d.a.createElement(e,Object.assign({},c,{ref:a,keycloak:t}))},r}return Object(o.a)(n,t),Object(r.a)(n,[{key:"render",value:function(){return d.a.createElement(g.Consumer,null,this.renderWrappedComponent)}}]),n}(u.Component);return t.defaultProps={forwardedRef:function(){}},Object(u.forwardRef)((function(e,n){return d.a.createElement(t,Object.assign({},e,{forwardedRef:n}))}))}(Object(D.b)()(ue)),fe=n(52),me={en:n(67)};function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var be=Object.keys(me).reduce((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pe(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,Object(s.a)({},t,Object(s.a)({},"translation",me[t])))}),{}),he=(fe.a.t,function(e){!function(e,t){fe.a.use(D.a).init({defaultNs:"translation",interpolation:{escapeValue:!1},resources:be,lng:e||t,fallbackLng:t,react:{useSuspense:!1}})}(e,"en")}),ve=function(e){return function(t){return function(e,t){var n=new CustomEvent(e,{detail:{payload:t}});window.dispatchEvent(n)}(e,t)}},Ee={tableSelect:"conference.table.select"},Oe={error:"conference.details.error"};function ye(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ge(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ye(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ye(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ke=function(){return window&&window.entando&&window.entando.keycloak&&ge({},window.entando.keycloak,{initialized:!0})||{initialized:!1}},we={id:"id",hidden:"hidden",locale:"locale",disableDefaultEventHandler:"disable-default-event-handler",serviceUrl:"service-url"},je=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(n=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).keycloak=ke(),n.onError=ve(Oe.error),n}return Object(o.a)(t,e),Object(r.a)(t,[{key:"attributeChangedCallback",value:function(e,t,n){if(this.container&&t!==n){if(!Object.values(we).includes(e))throw new Error("Untracked changed attribute: ".concat(e));e===we.disableDefaultEventHandler&&this.onToggleDisableDefaultEvent(),this.render()}}},{key:"connectedCallback",value:function(){var e=this;this.container=document.createElement("div"),this.mountPoint=document.createElement("div"),this.container.appendChild(this.mountPoint);var t,n,a=this.attachShadow({mode:"open"});a.appendChild(this.container),this.jss=Object(y.b)(ge({},Object(h.a)(),{insertionPoint:this.container})),this.muiTheme=Object(O.a)({props:{MuiDialog:{container:this.mountPoint},MuiPopover:{container:this.mountPoint}}}),this.keycloak=ge({},ke(),{initialized:!0}),this.unsubscribeFromKeycloakEvent=(t="keycloak",n=function(){e.keycloak=ge({},ke(),{initialized:!0}),e.render()},window.addEventListener(t,n),function(){window.removeEventListener(t,n)}),this.onToggleDisableDefaultEvent(),this.render(),b()(a)}},{key:"disconnectedCallback",value:function(){this.unsubscribeFromWidgetEvents&&this.unsubscribeFromWidgetEvents(),this.unsubscribeFromKeycloakEvent&&this.unsubscribeFromKeycloakEvent()}},{key:"defaultWidgetEventHandler",value:function(){var e=this;return function(t){var n=Ee.tableSelect,a=we.id;switch(t.type){case n:e.setAttribute(a,t.detail.payload.id);break;default:throw new Error("Unsupported event: ".concat(t.type))}}}},{key:"onToggleDisableDefaultEvent",value:function(){var e,t,n="true"===this.getAttribute(we.disableDefaultEventHandler);if(n!==this.defaultEventHandlerDisabled){if(n)this.unsubscribeFromWidgetEvents&&this.unsubscribeFromWidgetEvents(),this.unsubscribeFromKeycloakEvent&&this.unsubscribeFromKeycloakEvent();else{var a=this.defaultWidgetEventHandler();this.unsubscribeFromWidgetEvents=(e=Object.values(Ee),t=a,e.forEach((function(e){return window.addEventListener(e,t)})),function(){e.forEach((function(e){return window.removeEventListener(e,t)}))})}this.defaultEventHandlerDisabled=n}}},{key:"render",value:function(){var e=this.getAttribute(we.serviceUrl)||"";if("true"===this.getAttribute(we.hidden))m.a.render(d.a.createElement(d.a.Fragment,null));else{var t=this.getAttribute(we.locale);he(t);var n=this.getAttribute(we.id);m.a.render(d.a.createElement(g.Provider,{value:this.keycloak},d.a.createElement(v.b,{jss:this.jss},d.a.createElement(E.a,{theme:this.muiTheme},d.a.createElement(de,{id:n,onError:this.onError,serviceUrl:e})))),this.mountPoint)}}}],[{key:"observedAttributes",get:function(){return Object.values(we)}}]),t}(Object(l.a)(HTMLElement));customElements.define("conference-details",je)}},[[76,1,2]]]);
//# sourceMappingURL=main.dddd6702.chunk.js.map