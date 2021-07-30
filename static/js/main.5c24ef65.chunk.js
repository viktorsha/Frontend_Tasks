(this["webpackJsonpnotes-app"]=this["webpackJsonpnotes-app"]||[]).push([[0],{156:function(e,t,n){},157:function(e,t,n){},166:function(e,t,n){"use strict";n.r(t);var i=n(0),s=n.n(i),a=n(15),c=n.n(a),o=(n(156),n(157),n(60)),r=n(18),l=n(117),d={tableGrid:{display:"flex",justifyContent:"center"},cardName:{display:"flex",justifyContent:"center"},container:{display:"flex",justifyContent:"space-between"},saveChangesBtn:{marginLeft:"7px"},descriptionField:{marginLeft:"10px",width:"300px",font:"inherit"},EditBtn:{display:"flex"},ul:{display:"flex",justifyContent:"flex-end",listStyleType:"none"},li:{marginLeft:"20px"},a:{textDecoration:"none",padding:"5px 5px 5px 5px",borderStyle:"solid",borderWidth:"2px",borderRadius:"8px",borderColor:"#4f953f"},lastLi:{marginLeft:"20px",marginRight:"30px"},motoText:{display:"flex",justifyContent:"center"},motoDescriptionText:{display:"flex",justifyContent:"center"},notesAppPicture:{display:"flex",justifyContent:"center",width:"800px",height:"600px"},siteDescription:{display:"flex",justifyContent:"flex-end"},mainContainer:{display:"flex",justifyContent:"center",flexDirection:"row"},NotFoundPicContainer:{width:"100%",display:"flex",justifyContent:"center"},SpacePic:{position:"absolute",top:55,left:0,right:0,bottom:0,opacity:.5,width:"100%",height:"100%"},NotFoundPic:{position:"absolute",top:"80px",left:"400px"},nav:{marginBottom:"40px"},dialogContainer:{display:"flex",justifyContent:"space-between"},dialogContainer__text:{margin:0},dialogContainer__closeButton:{width:"20px",height:"40px"}},j=Object(l.a)((function(e){return{root:{"& .MuiFormControl-root":{width:"80%",margin:e.spacing(1)}}}})),p=n(4),h=function(){return Object(p.jsx)("div",{children:Object(p.jsx)("nav",{style:d.nav,children:Object(p.jsxs)("ul",{style:d.ul,children:[Object(p.jsx)("li",{style:d.li,children:Object(p.jsx)(o.b,{to:"/Frontend_Tasks/my-notes",style:d.a,children:"My Notes"})}),Object(p.jsx)("li",{style:d.li,children:Object(p.jsx)(o.b,{to:"/Frontend_Tasks/shared-notes",style:d.a,children:"Shared Notes"})}),Object(p.jsx)("li",{style:d.lastLi,children:Object(p.jsx)(o.b,{to:"/Frontend_Tasks/about",style:d.a,children:"About"})})]})})})},u=n(7),b=n(82),x=n.n(b),O=[{field:"id",headerName:"ID",width:100},{field:"title",headerName:"Title",width:140},{field:"description",headerName:"Description",width:164},{field:"date",headerName:"Creation date",width:120}],m=[{id:1,title:"JS learning",description:"JavaScript (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but it's used in many non-browser environments as well. ",date:x()(new Date,"dd.mm.yyyy")},{id:2,title:"React learning",description:"React is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time",date:x()(new Date,"dd.mm.yyyy")},{id:3,title:"HTML+CSS learning",description:"HTML (the Hypertext Markup Language) and CSS (Cascading Style Sheets) are two of the core technologies for building Web pages. HTML provides the structure of the page, CSS the (visual and aural) layout, for a variety of devices.",date:x()(new Date,"dd.mm.yyyy")}],f=n(210),y=n(215),g=n(216),C=n(128),N=n(57),v=n(124),_=n(218),w=n(208),T=n(209),S=function(e){var t=e.title,n=e.children,i=e.openPopup,s=e.setOpenPopup;return Object(p.jsxs)(_.a,{open:i,children:[Object(p.jsx)(w.a,{children:Object(p.jsxs)("div",{className:"dialogContainer",style:d.dialogContainer,children:[Object(p.jsx)("h4",{className:"dialogContainer__text",style:d.dialogContainer__text,children:t}),Object(p.jsx)(N.a,{className:"dialogContainer__closeButton",variant:"outlined",color:"primary",style:d.dialogContainer__closeButton,onClick:function(){return s(!1)},children:"X"})]})}),Object(p.jsx)(T.a,{children:n})]})},P=n(42),F=n(69),k=n(122),D=n.n(k),E=n(105),M=n(172),B=n(23),I=n(217),L=n(126),R=function(e){var t=e.onChange,n=e.setOpenPopup,i=e.onDateChange,s=e.handleInputChange,a=e.noteValues,c=j();return Object(p.jsx)("div",{children:Object(p.jsx)("form",{className:c.root,children:Object(p.jsx)(f.a,{container:!0,children:Object(p.jsxs)(f.a,{item:!0,xs:6,children:[Object(p.jsx)(E.a,{variant:"outlined",label:"Title",value:a.title,name:"title",onChange:s}),Object(p.jsx)(M.a,{className:"descriptionField",variant:"outlined",label:"Description",name:"description",value:a.description,style:d.descriptionField,onChange:s}),Object(p.jsx)(B.a,{utils:L.a,children:Object(p.jsx)(I.a,{variant:"inline",format:"dd.MM.yyyy",inputValue:a.date,name:"date",onChange:i,KeyboardButtonProps:{"aria-label":"change date"}})}),Object(p.jsx)(N.a,{variant:"outlined",color:"primary",className:"saveChangesBtn",style:d.saveChangesBtn,onClick:function(){t(a),n(!1)},children:"Save changes"})]})})})})},H=function(e){var t=e.id,n=e.onChange,s=e.setOpenPopup,a=m.find((function(e){return e.id===t})),c={id:t,title:a.title,description:a.description,date:a.date},o=Object(i.useState)(c),r=Object(u.a)(o,2),l=r[0],d=r[1],j=Object(i.useState)(D()().format("dd.MM.yyyy")),h=Object(u.a)(j,2),b=h[0],x=h[1];return Object(p.jsx)(R,{noteValues:l,handleInputChange:function(e){var t=e.target,n=t.name,i=t.value;d(Object(F.a)(Object(F.a)({},l),{},Object(P.a)({},n,i)))},onDateChange:function(e,t){x(t),d(Object(F.a)(Object(F.a)({},l),{},Object(P.a)({},"date",b)))},onChange:n,setOpenPopup:s})},A=function(e){var t=e.selectedNote,n=e.setNote,i=e.openPopup,s=e.setOpenPopup,a=e.changeNote,c=e.tableData,o=c.find((function(e){return e.id===t}));return Object(p.jsx)("div",{children:Object(p.jsxs)(f.a,{container:!0,spacing:10,children:[Object(p.jsx)(f.a,{container:!0,item:!0,xs:6,spacing:3,children:Object(p.jsx)(v.a,{rows:c,columns:O,pageSize:3,autoHeight:!0,onRowClick:function(e){return n(e.row.id)}})}),Object(p.jsxs)(f.a,{container:!0,item:!0,xs:6,spacing:3,children:[Object(p.jsx)(y.a,{variant:"outlined",style:d.cardName,children:Object(p.jsxs)(g.a,{children:[Object(p.jsx)(C.a,{color:"textPrimary",variant:"h4",children:o.title}),Object(p.jsx)(C.a,{children:o.description}),Object(p.jsx)(C.a,{children:Object(p.jsx)("b",{children:o.date})}),Object(p.jsx)("hr",{}),o.title&&Object(p.jsx)(N.a,{className:"EditBtn",variant:"contained",color:"primary",style:d.EditBtn,onClick:function(){return s(!0)},children:"Edit note"})]})}),Object(p.jsx)(S,{title:"Edit form",openPopup:i,setOpenPopup:s,children:Object(p.jsx)(H,{id:o.id,onChange:a,setOpenPopup:s})})]})]})})},J=function(){var e=Object(i.useState)(m[0].id),t=Object(u.a)(e,2),n=t[0],s=t[1],a=Object(i.useState)(!1),c=Object(u.a)(a,2),o=c[0],r=c[1],l=Object(i.useState)(m),d=Object(u.a)(l,2),j=d[0],h=d[1];Object(i.useEffect)((function(){localStorage.setItem("Notes",JSON.stringify(j))}),[j]);return Object(p.jsx)(A,{selectedNote:n,setNote:function(e){s(e)},openPopup:o,setOpenPopup:r,changeNote:function(e){var t=j.map((function(t){return t.id===e.id?e:t}));h(t)},tableData:j})},W=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{style:d.motoText,children:"Shared notes"}),Object(p.jsx)(J,{})]})},G=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{className:"motoText",style:d.motoText,children:"IT'S TIME YOU MAKE YOUR LIFE NOTICEABLE"}),Object(p.jsx)("h3",{className:"motoDescriptionText",style:d.motoDescriptionText,children:"Remember everything and tackle any project with your notes, tasks, and schedule all in one place."}),Object(p.jsx)("main",{children:Object(p.jsxs)("div",{className:"mainContainer",style:d.mainContainer,children:[Object(p.jsx)("img",{src:"https://evernote.com/c/assets/homepage-repackaging/task_hero_image@2x__en.png?465752cfb86f86f4",alt:"Main picture",style:d.notesAppPicture}),Object(p.jsx)("div",{className:"siteDescription",style:d.siteDescription,children:Object(p.jsxs)("ul",{children:[Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{className:"site-description__name",children:"WORK ANYWHERE"}),Object(p.jsx)("p",{className:"site-description__text",children:"Keep important info handy\u2014your notes sync automatically to all your devices."})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{className:"site-description__name",children:"REMEMBER EVERYTHING"}),Object(p.jsx)("p",{className:"site-description__text",children:"Make notes more useful by adding text, images, audio, scans, PDFs, and documents."})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{className:"site-description__name",children:"TURN TO-DO INTO DONE"}),Object(p.jsx)("p",{className:"site-description__text",children:"Bring your notes, tasks, and schedules together to get things done more easily."})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{className:"site-description__name",children:"FIND THINGS FAST"}),Object(p.jsx)("p",{className:"site-description__text",children:"Get what you need, when you need it with powerful, flexible search capabilities."})]})]})})]})})]})},K=function(){return Object(p.jsxs)("div",{className:"NotFoundPicContainer",style:d.NotFoundPicContainer,children:[Object(p.jsx)("img",{className:"SpacePic",src:"https://wallpaperchat.com/walls/full/e/a/d/953387.jpg",alt:"Not found",style:d.SpacePic}),Object(p.jsx)("img",{className:"NotFoundPic",src:"https://www.artzstudio.com/wp-content/uploads/2020/05/404-error-not-found-page-lost-1024x788.png",alt:"Not found",style:d.NotFoundPic})]})},U=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{style:d.motoText,children:"Personal notes"}),Object(p.jsx)(J,{})]})},V=function(){return Object(p.jsx)("div",{children:Object(p.jsxs)(o.a,{children:[Object(p.jsx)(h,{}),Object(p.jsxs)(r.d,{children:[Object(p.jsx)(r.b,{path:"/Frontend_Tasks/shared-notes",children:Object(p.jsx)(W,{})}),Object(p.jsx)(r.b,{path:"/Frontend_Tasks/about",children:Object(p.jsx)(G,{})}),Object(p.jsx)(r.b,{path:"/Frontend_Tasks/my-notes",children:Object(p.jsx)(U,{})}),Object(p.jsx)(r.b,{exact:!0,path:"/Frontend_Tasks/",children:Object(p.jsx)(G,{})}),Object(p.jsx)(r.b,{path:"/Frontend_Tasks/not-found",children:Object(p.jsx)(K,{})}),Object(p.jsx)(r.a,{from:"/",to:"/Frontend_tasks/not-found"})]})]})})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,221)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),i(e),s(e),a(e),c(e)}))};c.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(V,{})}),document.getElementById("root")),Y()}},[[166,1,2]]]);
//# sourceMappingURL=main.5c24ef65.chunk.js.map