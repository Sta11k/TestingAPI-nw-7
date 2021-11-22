(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{11:function(e,t,n){e.exports={radio__btn:"Form_radio__btn__3A1-6",title:"Form_title__3lDgA"}},14:function(e,t,n){e.exports={contacts__list:"Todolist_contacts__list__F1yAi",item:"Todolist_item__19Awj"}},19:function(e,t,n){e.exports={label:"Filter_label__3sSmo",input:"Filter_input__1vAsL"}},29:function(e,t,n){},30:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(15),s=n.n(r),i=(n(28),n(29),n(30),n(13)),o=n(8),u=n(11),l=n.n(u),d=n(20),b=n(21),j=n(6),O=Object(b.a)({reducerPath:"contactsApi",tagTypes:["Contacts"],baseQuery:Object(j.d)({baseUrl:"https://61935e66d3ae6d0017da850e.mockapi.io/"}),endpoints:function(e){return{fetchContact:e.query({query:function(){return"/contacts"},providesTags:function(e){return e?[].concat(Object(i.a)(e.map((function(e){return{type:"Contacts",id:e.id}}))),[{type:"Contacts",id:"LIST"}]):[{type:"Contacts",id:"LIST"}]}}),addContacts:e.mutation({query:function(e){return{url:"/contacts",method:"POST",body:Object(d.a)({},e)}},invalidatesTags:[{type:"Contacts",id:"LIST"}]}),deleteContacts:e.mutation({query:function(e){return{url:"contacts/".concat(e),method:"DELETE"}},invalidatesTags:[{type:"Contacts",id:"LIST"}]})}}}),m=O.useFetchContactQuery,h=O.useAddContactsMutation,p=O.useDeleteContactsMutation,f=n(2);var x=function(e){var t=e.contact,n=h(),c=Object(o.a)(n,1)[0],r=Object(a.useState)(""),s=Object(o.a)(r,2),u=s[0],d=s[1],b=Object(a.useState)(""),j=Object(o.a)(b,2),O=j[0],m=j[1],p=Object(a.useState)("Other"),x=Object(o.a)(p,2),_=x[0],v=x[1];return Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=t.reduce((function(e,t){return[].concat(Object(i.a)(e),[t.name])}),[]),a=t.reduce((function(e,t){return[].concat(Object(i.a)(e),[t.phone])}),[]);n.includes(u)||a.includes(O)?alert("".concat(u,"  ").concat(O," is already ")):n.includes(u)?alert("".concat(u,"  is already ")):""!==u&&""!==O?(c({name:u,phone:O,association:_}),d(""),m(""),v("Other")):alert("Enter data")},className:l.a.m,children:[Object(f.jsx)("h2",{className:l.a.title,children:"Phonebook"}),Object(f.jsxs)("label",{className:l.a.form__name,children:["Name",Object(f.jsx)("input",{onChange:function(e){return d(e.currentTarget.value)},type:"text",value:u,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(f.jsxs)("label",{className:l.a.form__number,children:["Number",Object(f.jsx)("input",{onChange:function(e){return m(e.currentTarget.value)},type:"tel",value:O,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(f.jsxs)("div",{className:l.a.radio__btn,children:[Object(f.jsxs)("label",{children:[Object(f.jsx)("input",{type:"radio",name:"association",value:"Work",onChange:function(e){return v(e.currentTarget.value)},checked:"Work"===_}),"Work"]}),Object(f.jsxs)("label",{children:[Object(f.jsx)("input",{type:"radio",name:"association",value:"Family",onChange:function(e){return v(e.currentTarget.value)},checked:"Family"===_}),"Family"]}),Object(f.jsxs)("label",{children:[Object(f.jsx)("input",{type:"radio",name:"association",value:"Friends",onChange:function(e){return v(e.currentTarget.value)},checked:"Friends"===_}),"Friends"]}),Object(f.jsxs)("label",{children:[Object(f.jsx)("input",{type:"radio",name:"association",value:"Other",onChange:function(e){return v(e.currentTarget.value)},checked:"Other"===_}),"Other"]})]}),Object(f.jsx)("button",{type:"submit",children:"Add contacts"})]})},_=n(14),v=n.n(_),y=n(5),g=function(e){return e.getFilter.filter};var C=function(e){var t=e.contact,n=p(),c=Object(o.a)(n,2),r=c[0],s=c[1].isLoading,i=Object(y.e)(g),u=Object(a.useState)([]),l=Object(o.a)(u,2),d=l[0],b=l[1];return Object(a.useEffect)((function(){var e=i.toLowerCase();try{b(t.filter((function(t){return t.name.toLowerCase().includes(e)})))}catch(n){return n}}),[t,i]),Object(f.jsx)("ul",{className:v.a.contacts__list,children:d.map((function(e){var t=e.id,n=e.name,a=e.phone,c=e.association;return Object(f.jsxs)("li",{className:v.a.item,children:[" ",Object(f.jsxs)("p",{className:v.a.name__contact,children:["Association: ",c," | ",Object(f.jsxs)("span",{children:[" name: ",n," | "]}),Object(f.jsxs)("span",{children:["number: ",a," |"]})]}),Object(f.jsxs)("button",{className:v.a.btn,type:"button",onClick:function(){return r(t)},children:[" ",s?"Deleting...":"Delete"]})]},t)}))})},T=n(19),A=n.n(T),k=n(1),F=Object(k.createAction)("filter/value");var N=function(){var e=Object(y.d)(),t=Object(y.e)(g);return Object(f.jsxs)("label",{className:A.a.label,children:["Find contacts by name",Object(f.jsx)("input",{className:A.a.input,type:"text",value:t,onChange:function(t){return e(F(t.target.value))}})]})};function S(){var e=m().data;return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(x,{contact:e}),Object(f.jsx)(N,{contact:e})," ",e&&Object(f.jsx)(C,{contact:e})]})}var L,w=n(9),q=n(23),D=n(10),E=n(4),z=Object(k.createReducer)("",Object(w.a)({},F,(function(e,t){return t.payload}))),I=Object(E.combineReducers)({filter:z}),M=Object(k.configureStore)({reducer:(L={},Object(w.a)(L,O.reducerPath,O.reducer),Object(w.a)(L,"getFilter",I),L),middleware:function(e){return e({serializableCheck:{ignoredActions:[D.a,D.f,D.b,D.c,D.d,D.e]}}).concat(O.middleware)},devTools:!1});Object(q.setupListeners)(M.dispatch),s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(y.a,{store:M,children:Object(f.jsx)(S,{})})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.20d1ba13.chunk.js.map