(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(e,a,t){e.exports={container:"Profile_container__3c3QK",avatar:"Profile_avatar__3_Uec",name:"Profile_name__1bDWY",tag:"Profile_tag__nSzdZ",location:"Profile_location__3OmA0",stats:"Profile_stats__JaUwF",stats_item:"Profile_stats_item__3MxXD",label:"Profile_label__3fAea",quantity:"Profile_quantity__2dhaY"}},function(e,a,t){e.exports={transaction_history:"TransactionHistory_transaction_history__2CwBD",label:"TransactionHistory_label__2BKgY",item_name:"TransactionHistory_item_name__22qkA",item:"TransactionHistory_item__2FCEc",table_item:"TransactionHistory_table_item__3WaQo"}},function(e,a,t){e.exports={friend_list:"FriendListItem_friend_list__3enM0",item:"FriendListItem_item__fK8Gj",userOnline:"FriendListItem_userOnline__1gVN7",userOffline:"FriendListItem_userOffline__94LpS",avatar:"FriendListItem_avatar__R4BZC",name:"FriendListItem_name__66JbI"}},function(e,a,t){e.exports={container:"Statistics_container__3P6qb",title:"Statistics_title__2jytr",stat_list:"Statistics_stat_list__38DIc",item:"Statistics_item__1OYa9",label:"Statistics_label__3sgqi",percentage:"Statistics_percentage__31Bzg"}},,,,function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(e){e.exports=JSON.parse('[{"avatar":"https://www.flaticon.com/svg/static/icons/svg/763/763704.svg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998671.svg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1623/1623681.svg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/2977/2977285.svg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998749.svg","name":"Poly","isOnline":false,"id":1284}]')},,,,,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var s=t(5),c=t.n(s),i=t(7),n=t.n(i),r=(t(16),t(8)),l=t(9),d=t(10),o=t(11),b=t(3),m=t.n(b),_=t(0),j=function(e){var a=e.friends;return Object(_.jsx)(_.Fragment,{children:a.map((function(e){var a=e.id,t=e.name,s=e.avatar,c=e.isOnline;return Object(_.jsxs)("li",{className:m.a.item,children:[Object(_.jsx)("span",{className:c?m.a.userOnline:m.a.userOffline}),Object(_.jsx)("img",{className:m.a.avatar,src:s,alt:"",width:"100"}),Object(_.jsx)("p",{className:m.a.name,children:t})]},a)}))})},u=function(e){var a=e.friends;return Object(_.jsx)("ul",{className:m.a.friend_list,children:Object(_.jsx)(j,{friends:a})})},f=t(4),p=t.n(f),h=function(e){var a=e.stats,t=e.title;return Object(_.jsx)("section",{className:p.a.statistics,children:Object(_.jsxs)("div",{className:p.a.container,children:[t&&Object(_.jsx)("h2",{className:p.a.title,children:t}),Object(_.jsx)("ul",{className:p.a.stat_list,children:a.map((function(e){var a=e.id,t=e.label,s=e.percentage;return Object(_.jsxs)("li",{className:p.a.item,children:[Object(_.jsxs)("span",{className:p.a.label,children:[t," "]}),Object(_.jsxs)("span",{className:p.a.percentage,children:[s,"% "]})]},a)}))})," "]})})},O=t(2),y=t.n(O),x=function(e){var a=e.transactions;return Object(_.jsxs)("table",{className:y.a.transaction_history,children:[Object(_.jsx)("thead",{className:y.a.table_head,children:Object(_.jsxs)("tr",{children:[Object(_.jsx)("th",{className:y.a.label,children:"Type"}),Object(_.jsx)("th",{className:y.a.label,children:"Amount"}),Object(_.jsx)("th",{className:y.a.label,children:"Currency"})]})}),Object(_.jsx)("tbody",{className:y.a.table_body,children:a.map((function(e){var a=e.id,t=e.type,s=e.amount,c=e.currency;return Object(_.jsxs)("tr",{className:y.a.table_item,children:[Object(_.jsx)("td",{className:y.a.item_name,children:t}),Object(_.jsx)("td",{className:y.a.item,children:s}),Object(_.jsx)("td",{className:y.a.item,children:c})]},a)}))})]})},v=t(1),g=t.n(v),N=function(e){var a=e.data,t=a.name,s=a.tag,c=a.location,i=a.avatar,n=a.stats;n.followers,n.likes,n.views;return Object(_.jsxs)("div",{className:g.a.container,children:[Object(_.jsxs)("div",{className:g.a.description,children:[Object(_.jsx)("img",{src:i,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",className:g.a.avatar}),Object(_.jsx)("p",{className:g.a.name,children:t}),Object(_.jsxs)("p",{className:g.a.tag,children:["@",s]}),Object(_.jsx)("p",{className:g.a.location,children:c})]}),Object(_.jsxs)("ul",{className:g.a.stats,children:[Object(_.jsxs)("li",{className:g.a.stats_item,children:[Object(_.jsx)("span",{className:g.a.label,children:"Followers "}),Object(_.jsx)("span",{className:g.a.quantity,children:"1000"})]}),Object(_.jsxs)("li",{className:g.a.stats_item,children:[Object(_.jsx)("span",{className:g.a.label,children:"Views "}),Object(_.jsx)("span",{className:g.a.quantity,children:"2000"})]}),Object(_.jsxs)("li",{className:g.a.stats_item,children:[Object(_.jsx)("span",{className:g.a.label,children:"Likes "}),Object(_.jsx)("span",{className:g.a.quantity,children:"3000"})]})]})]})};var w=function(){return Object(_.jsxs)("div",{className:"App",children:[Object(_.jsx)(N,{data:d}),Object(_.jsx)(h,{title:"Upload stats",stats:r}),Object(_.jsx)(u,{friends:o}),Object(_.jsx)(x,{transactions:l})]})},P=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,19)).then((function(a){var t=a.getCLS,s=a.getFID,c=a.getFCP,i=a.getLCP,n=a.getTTFB;t(e),s(e),c(e),i(e),n(e)}))};n.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(w,{})}),document.getElementById("root")),P()}],[[18,1,2]]]);
//# sourceMappingURL=main.a98090fc.chunk.js.map