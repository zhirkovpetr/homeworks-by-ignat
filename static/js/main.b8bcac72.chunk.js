(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports={dropbtn:"header_dropbtn__2RIt1",dropdown:"header_dropdown__HVES0",dropdownContent:"header_dropdownContent__32-Re",activeLink:"header_activeLink__3nDeL",error:"header_error__1s7Hd"}},function(e,t,n){e.exports={item:"Message_item__3_Mcl",avatar:"Message_avatar__2VGp4",blockMessage:"Message_blockMessage__2T9Rt",name:"Message_name__362et",message:"Message_message__3FrRE",blockNameMessage:"Message_blockNameMessage__2RtHP",time:"Message_time__2a6q1"}},,function(e,t,n){e.exports={someClass:"Greeting_someClass__2RYqb",errorName:"Greeting_errorName__2nS8w",error:"Greeting_error__2LSl8",name:"Greeting_name__3B66q",errorButtonName:"Greeting_errorButtonName__pENrZ"}},,,,function(e,t,n){e.exports={superInput:"SuperInputText_superInput__2n1gf",errorInput:"SuperInputText_errorInput__33Fs4",error:"SuperInputText_error__16rT_"}},,,function(e,t,n){e.exports={blue:"HW4_blue__27yfY",column:"HW4_column__1uy2q",testSpanError:"HW4_testSpanError__2RLw5"}},function(e,t,n){e.exports={default:"SuperButton_default__zCqpX",red:"SuperButton_red__jqCRA"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__2eWy6",spanClassName:"SuperCheckbox_spanClassName__S-7LH"}},function(e,t,n){e.exports={select:"superSelect_select__1z2In",option:"superSelect_option__1XVFi"}},,,,,function(e,t,n){e.exports={App:"App_App__t31ZO"}},function(e,t,n){e.exports={someClass:"Affairs_someClass__1TQk-"}},function(e,t,n){e.exports={beautifulSpan:"SuperEditableSpan_beautifulSpan__2d-VP"}},function(e,t,n){e.exports={radio:"superRadio_radio__2_TcP"}},,,,,,,function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(28),s=n.n(c),o=(n(39),n(29)),i=n.n(o),j=n(10),l=n(11),u=n.n(l),b=n(2),d=n(12),O=n.n(d),h=n(0);var x=function(e){return Object(h.jsxs)("div",{className:O.a.item,children:[Object(h.jsx)("div",{className:O.a.avatar,children:Object(h.jsx)("img",{alt:"avatar",src:e.avatar})}),Object(h.jsxs)("div",{className:O.a.blockMessage,children:[Object(h.jsxs)("div",{className:O.a.blockNameMessage,children:[Object(h.jsx)("div",{className:O.a.name,children:e.name}),Object(h.jsx)("div",{className:O.a.message,children:e.message})]}),Object(h.jsx)("div",{className:O.a.time,children:e.time})]})]})},m="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",p="Some Name",_="some text",v="22:00";var f=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),"homeworks 1",Object(h.jsx)(x,{avatar:m,name:p,message:_,time:v}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})},g=n(4);var C=function(e){return Object(h.jsxs)("div",{children:[e.affair.name,Object(h.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var N=function(e){var t=e.data.map((function(t){return Object(h.jsx)(C,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(h.jsxs)("div",{children:[t,Object(h.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(h.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(h.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(h.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})},k=n(30),S=n.n(k),w=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var y=function(){var e=Object(r.useState)(w),t=Object(g.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)("all"),s=Object(g.a)(c,2),o=s[0],i=s[1],j=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,o);return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),"homeworks 2",Object(h.jsx)("div",{className:S.a.someClass,children:Object(h.jsx)(N,{data:j,setFilter:i,deleteAffairCallback:function(e){return a(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}})}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})},T=n(34),M=n(14),I=n.n(M),E=function(e){var t=e.name,n=e.setNameCallback,r=e.addUser,a=e.error,c=e.totalUsers,s=a?I.a.error:I.a.name,o=a?Object(h.jsx)("div",{className:I.a.errorName,children:a}):"";return Object(h.jsxs)("div",{className:I.a.someClass,children:[Object(h.jsx)("input",{value:t,onChange:n,className:s}),Object(h.jsx)("button",{onClick:function(){r(t)},className:a?I.a.errorButtonName:"",children:"add"}),Object(h.jsx)("span",{children:c}),o]})},F=function(e){var t=e.users,n=e.addUserCallback,a=Object(r.useState)(""),c=Object(g.a)(a,2),s=c[0],o=c[1],i=Object(r.useState)(!1),j=Object(g.a)(i,2),l=j[0],u=j[1],b=t.length;return Object(h.jsx)(E,{name:s,setNameCallback:function(e){""!==e.currentTarget.value?(o(e.currentTarget.value),u(!1)):u(!0)},addUser:function(e){var t=e.trim();t?(alert("Hello "+t+"!"),n(t)):u("name is require!"),o("")},error:l,totalUsers:b})},A=n(48);var B=function(){var e=Object(r.useState)([]),t=Object(g.a)(e,2),n=t[0],a=t[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),"homeworks 3",Object(h.jsx)(F,{users:n,addUserCallback:function(e){a([{_id:Object(A.a)(),name:e}].concat(Object(T.a)(n)))}}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})},H=n(6),J=n(5),P=n(18),q=n.n(P),L=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,a=e.onEnter,c=e.error,s=e.className,o=e.spanClassName,i=Object(J.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(q.a.error," ").concat(o||""),l="".concat(c?q.a.errorInput:q.a.superInput," ").concat(s);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("input",Object(H.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),a&&"Enter"===e.key&&a()},className:l},i)),c&&Object(h.jsx)("span",{className:j,children:c})]})},R=n(21),W=n.n(R),U=n(22),G=n.n(U),Q=function(e){var t=e.red,n=e.className,r=Object(J.a)(e,["red","className"]),a="".concat(t?G.a.red:G.a.default," ").concat(n);return Object(h.jsx)("button",Object(H.a)({className:a},r))},X=n(23),Z=n.n(X),D=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,a=(e.spanClassName,e.children),c=Object(J.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(Z.a.checkbox," ").concat(r||"");return Object(h.jsxs)("label",{children:[Object(h.jsx)("input",Object(H.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),a&&Object(h.jsx)("span",{className:Z.a.spanClassName,children:a})]})};var V=function(){var e=Object(r.useState)(""),t=Object(g.a)(e,2),n=t[0],a=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},o=Object(r.useState)(!1),i=Object(g.a)(o,2),j=i[0],l=i[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),"homeworks 4",Object(h.jsxs)("div",{className:W.a.column,children:[Object(h.jsx)(L,{value:n,onChangeText:a,onEnter:s,error:c}),Object(h.jsx)(L,{className:W.a.blue}),Object(h.jsx)(Q,{children:"default"}),Object(h.jsx)(Q,{red:!0,onClick:s,children:"delete "}),Object(h.jsx)(Q,{disabled:!0,children:"disabled"}),Object(h.jsx)(D,{checked:j,onChangeChecked:l,children:"some text "}),Object(h.jsx)(D,{checked:j,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})},Y=n(31),K=n.n(Y),z=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,a=e.spanProps,c=Object(J.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(r.useState)(!1),o=Object(g.a)(s,2),i=o[0],j=o[1],l=a||{},u=l.children,b=l.onDoubleClick,d=l.className,O=Object(J.a)(l,["children","onDoubleClick","className"]),x="".concat(K.a.beautifulSpan," ").concat(d||"");return Object(h.jsx)(h.Fragment,{children:i?Object(h.jsx)(L,Object(H.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},c)):Object(h.jsxs)("span",Object(H.a)(Object(H.a)({onDoubleClick:function(e){j(!0),b&&b(e)},className:x},O),{},{children:["\u270e ",u||c.value]}))})};var $=function(){var e=Object(r.useState)(""),t=Object(g.a)(e,2),n=t[0],a=t[1],c=n?"":"error";return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),"homeworks 6",Object(h.jsx)("div",{children:Object(h.jsx)(z,{value:n,onChangeText:a,spanProps:{children:n?"":"enter text..."},error:c})}),Object(h.jsx)(Q,{disabled:""===n,onClick:function(){!function(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}("editable-span-value",n)},children:"save"}),Object(h.jsx)(Q,{disabled:""===n,onClick:function(){var e=function(e,t){var n=t,r=localStorage.getItem(e);return null!==r&&(n=JSON.parse(r)),n}("editable-span-value",n);a(e)},children:"restore"}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})};var ee=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(f,{}),Object(h.jsx)(y,{}),Object(h.jsx)(B,{}),Object(h.jsx)(V,{}),Object(h.jsx)($,{})]})};var te=function(){return Object(h.jsx)("div",{className:u.a.error,children:Object(h.jsx)("img",{alt:"404 Not Found",src:"https://lh3.googleusercontent.com/proxy/wZrAb_ui0cJT_3tgZt0hWAwniuSwaegfBNQXtQnIjVkK5omMx8ZCp59UJ-sTIADv0rT-IQtWlXi7FqudIYqh1JLsGd4CMJUwvQ6PYMlWybMw2CsO0gNHeRU44nTEHQrjlqExjTkvdi8"})})},ne=n(24),re=n.n(ne),ae=function(e){var t=e.options,n=e.onChange,r=e.onChangeOption,a=Object(J.a)(e,["options","onChange","onChangeOption"]),c=t?t.map((function(e,t){return Object(h.jsx)("option",{className:re.a.option,value:e,children:e},e+"-"+t)})):[];return Object(h.jsx)("select",Object(H.a)(Object(H.a)({className:re.a.select,onChange:function(e){n&&n(e),r&&r(e.currentTarget.value)}},a),{},{children:c}))},ce=n(32),se=n.n(ce),oe=function(e){e.type;var t=e.name,n=e.options,r=e.value,a=e.onChange,c=e.onChangeOption,s=(Object(J.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){a&&a(e),c&&c(e.currentTarget.value)}),o=n?n.map((function(e,n){return Object(h.jsxs)("label",{children:[Object(h.jsx)("input",{className:se.a.radio,type:"radio",name:t,checked:e===r,value:e,onChange:s}),e]},t+"-"+n)})):[];return Object(h.jsx)(h.Fragment,{children:o})},ie=["x","y","z"];var je=function(){var e=Object(r.useState)(ie[1]),t=Object(g.a)(e,2),n=t[0],a=t[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),"homeworks 7",Object(h.jsx)("div",{children:Object(h.jsx)(ae,{options:ie,value:n,onChangeOption:a})}),Object(h.jsx)("div",{children:Object(h.jsx)(oe,{name:"radio",options:ie,value:n,onChangeOption:a})}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})};var le=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(je,{})})};var ue=function(){return Object(h.jsx)("div",{})},be="/pre-junior",de="/junior",Oe="/juniorplus";var he=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)(b.d,{children:[Object(h.jsx)(b.b,{path:"/",exact:!0,render:function(){return Object(h.jsx)(b.a,{to:be})}}),Object(h.jsx)(b.b,{path:be,render:function(){return Object(h.jsx)(ee,{})}}),Object(h.jsx)(b.b,{path:de,render:function(){return Object(h.jsx)(le,{})}}),Object(h.jsx)(b.b,{path:Oe,render:function(){return Object(h.jsx)(ue,{})}}),Object(h.jsx)(b.b,{render:function(){return Object(h.jsx)(te,{})}})]})})};var xe=function(){return Object(h.jsxs)("div",{className:u.a.dropdown,children:[Object(h.jsx)("button",{className:u.a.dropbtn}),Object(h.jsxs)("nav",{className:u.a.dropdownContent,children:[Object(h.jsx)(j.b,{to:be,activeClassName:u.a.activeLink,children:" PreJunior "}),Object(h.jsx)(j.b,{to:de,activeClassName:u.a.activeLink,children:" Junior "}),Object(h.jsx)(j.b,{to:Oe,activeClassName:u.a.activeLink,children:" Junior+ "})]})]})};var me=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)(j.a,{children:[Object(h.jsx)(xe,{}),Object(h.jsx)(he,{})]})})};var pe=function(){return Object(h.jsxs)("div",{className:i.a.App,children:[Object(h.jsx)("div",{children:"react homeworks:"}),Object(h.jsx)(me,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(pe,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[46,1,2]]]);
//# sourceMappingURL=main.b8bcac72.chunk.js.map