"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[783],{6783:function(e,s,n){n.r(s),n.d(s,{default:function(){return y}});var a=n(2807),i=(n(2791),"Dialogs_dialogs__-er-F"),d="Dialogs_dialogsItems__HkM4k",r="Dialogs_messages__FbgSR",t="Dialogs_dialog__VTszD",o="Dialogs_active__IFRI+",c=n(3504),l=n(184),u=function(e){var s="/dialogs/"+e.id;return(0,l.jsx)("div",{className:t,children:(0,l.jsx)(c.OL,{to:s,className:function(e){return e.isActive?o:""},children:e.name})})},m=function(e){return(0,l.jsx)("div",{className:t,children:e.message})},g=n(6871),f=n(6139),h=n(704),j=n(9086),x=n(5304),_=(0,x.DT)(50),p=(0,h.Z)({form:"dialog-add-message-form"})((function(e){return(0,l.jsxs)("form",{onSubmit:e.handleSubmit,children:[(0,l.jsx)("div",{children:(0,l.jsx)(f.Z,{component:j.gx,validate:[x.C1,_,x.JE],name:"newMessageBody",placeholder:"Enter your message"})}),(0,l.jsx)("div",{children:(0,l.jsx)("button",{type:"submit",children:"Send"})})]})})),v=n(2381),b=function(e){var s=e.path.dialogs.map((function(e){return(0,l.jsx)(u,{name:e.name,id:e.id})})),n=e.path.messages.map((function(e){return(0,l.jsx)(m,{message:e.message})}));return!1===e.isAuth?(0,l.jsx)(g.Fg,{to:"/Login"}):(0,l.jsxs)("div",{className:i,children:[(0,l.jsx)("div",{className:d,children:s}),(0,l.jsxs)("div",{className:r,children:[(0,l.jsx)("div",{children:n}),(0,l.jsx)(p,{onSubmit:function(s,n){e.sendMessage(s.newMessageBody),n((0,v.mc)("dialog-add-message-form"))}})]})]})},D=n(8687),k=n(1548),y=(0,n(7781).qC)(k.D,(0,D.$j)((function(e){return{path:e.dialogsReducer}}),(function(e){return{sendMessage:function(s){e((0,a.X)(s))}}})))(b)}}]);
//# sourceMappingURL=783.aa625c2a.chunk.js.map