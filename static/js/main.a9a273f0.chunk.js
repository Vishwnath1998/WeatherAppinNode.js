(this.webpackJsonpclone=this.webpackJsonpclone||[]).push([[0],{104:function(e,t,c){},111:function(e,t,c){},112:function(e,t,c){},113:function(e,t,c){},114:function(e,t,c){},115:function(e,t,c){},117:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),i=c(39),n=c.n(i),r=(c(96),c.p,c(97),c(13)),j=(c(98),c(132)),l=c(35),o=c(5),d=Object(a.createContext)(),m=function(e){var t=e.reducer,c=e.initialState,s=e.children;return Object(o.jsx)(d.Provider,{value:Object(a.useReducer)(t,c),children:s})},h=function(){return Object(a.useContext)(d)},b=c(89),O=c.n(b),u=c(84),x=c.n(u),g=c(88),p=c.n(g),_=c(72),v=(c(101),c(118),_.a.initializeApp({apiKey:"AIzaSyB_7YBQOCNx_g1gYCgekuIh7uQdSQcUtQ4",authDomain:"clone-f2461.firebaseapp.com",projectId:"clone-f2461",storageBucket:"clone-f2461.appspot.com",messagingSenderId:"500603561429",appId:"1:500603561429:web:67b6460a06b6a3b8e5495c",measurementId:"G-EB4NLC6DY5"}),{db:_.a.firestore(),auth:_.a.auth()}),f=(c(104),c(24));var N=function(){var e=Object(f.f)(),t=Object(a.useState)(""),c=Object(r.a)(t,2),s=c[0],i=c[1],n=Object(a.useState)(""),j=Object(r.a)(n,2),d=j[0],m=j[1];return Object(o.jsxs)("div",{className:"login",children:[Object(o.jsx)(l.b,{to:"/",children:Object(o.jsx)("img",{className:"login_logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"})}),Object(o.jsxs)("div",{className:"login_container",children:[Object(o.jsx)("h2",{children:"Sign-In"}),Object(o.jsxs)("form",{children:[Object(o.jsx)("h5",{children:"E-mail"}),Object(o.jsx)("input",{type:"text",value:s,onChange:function(e){return i(e.target.value)}}),Object(o.jsx)("h5",{children:"Password"}),Object(o.jsx)("input",{type:"password",value:d,onChange:function(e){return m(e.target.value)}}),Object(o.jsx)("button",{className:"sign_in",type:"submit",onClick:function(t){t.preventDefault(),v.auth.signInWithEmailAndPassword(s,d).then((function(t){e.push("/")})).catch((function(e){return console.log(e.message)}))},children:"Sign-In"})]}),Object(o.jsx)("p",{children:" By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."}),Object(o.jsx)("button",{className:"log_in",type:"submit",onClick:function(t){t.preventDefault(),v.auth.createUserWithEmailAndPassword(s,d).then((function(t){t&&e.push("/")})).catch((function(e){return alert(e.message)}))},children:"Create Your Account"})]})]})};function C(){var e,t=h(),c=Object(r.a)(t,2),a=c[0];c[1];return Object(o.jsxs)("div",{className:"header",children:[Object(o.jsx)(l.b,{to:"/",children:Object(o.jsx)("img",{className:"header_logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png"})}),Object(o.jsxs)("div",{className:"header_text",children:[Object(o.jsx)("div",{children:Object(o.jsx)(x.a,{})}),Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{children:"Hello"}),Object(o.jsx)("span",{children:"Select Your Address"})]})]}),Object(o.jsx)("div",{className:"search_box",children:Object(o.jsxs)("div",{className:"header_search",children:[Object(o.jsx)("div",{className:"all",children:Object(o.jsx)("div",{className:"Dropdown",children:Object(o.jsxs)(j.a,{children:[Object(o.jsx)(j.a.Toggle,{variant:"secondary",id:"dropdown-basic",children:"All"}),Object(o.jsxs)(j.a.Menu,{children:[Object(o.jsx)(j.a.Item,{href:"#/action-1",id:"drop",children:"All Categories"}),Object(o.jsx)(j.a.Item,{href:"#/action-2",id:"drop",children:"Deals"}),Object(o.jsx)(j.a.Item,{href:"#/action-3",id:"drop",children:"Alexa skill"}),Object(o.jsx)(j.a.Item,{href:"#/action-4",id:"drop",children:"Amazon Devices"}),Object(o.jsx)(j.a.Item,{href:"#/action-5",id:"drop",children:"Amazon fashion"}),Object(o.jsx)(j.a.Item,{href:"#/action-6",id:"drop",children:"Appliances"}),Object(o.jsx)(j.a.Item,{href:"#/action-7",id:"drop",children:"Electronic"}),Object(o.jsx)(j.a.Item,{href:"#/action-8",id:"drop",children:"car & motorbike"}),Object(o.jsx)(j.a.Item,{href:"#/action-9",id:"drop",children:"clothing"}),Object(o.jsx)(j.a.Item,{href:"#/action-10",id:"drop",children:"furniture"}),Object(o.jsx)(j.a.Item,{href:"#/action-11",id:"drop",children:"Gifts & Gardens"}),Object(o.jsx)(j.a.Item,{href:"#/action-12",id:"drop",children:"Video Games"})]})]})})}),Object(o.jsx)("input",{className:"header_input",type:"text"}),Object(o.jsx)("div",{className:"search-bar",children:Object(o.jsx)(p.a,{})})]})}),Object(o.jsxs)("div",{className:"header_nav",children:[Object(o.jsx)(l.b,{to:!a.user&&"/login",style:{textDecoration:"none"},children:Object(o.jsxs)("div",{className:"navigate",onClick:function(){a.user&&v.auth.signOut()},children:[Object(o.jsx)("span",{className:"navigate_one",children:a.user?a.user.email:"Hello,Sign in"}),Object(o.jsxs)("span",{className:"navigate_two",children:[" ",a.user?"sign Out":"Account & List"]})]})}),Object(o.jsx)(l.b,{to:"/Order",children:Object(o.jsxs)("div",{className:"navigate",children:[Object(o.jsx)("span",{className:"navigate_three",children:"Return"}),Object(o.jsx)("span",{className:"navigate_four",children:"& Order"})]})}),Object(o.jsx)(l.b,{to:"/checkout",children:Object(o.jsxs)("div",{className:"navigate",children:[Object(o.jsxs)("span",{className:"navigate_five",children:[Object(o.jsx)(O.a,{}),Object(o.jsx)("span",{className:"header_count",children:null===(e=a.basket)||void 0===e?void 0:e.length})]}),Object(o.jsx)("span",{className:"navigate_six",children:"Cart"})]})})]})]})}c(110),c(111);function k(){return Object(o.jsxs)("div",{className:"Home_navbar",children:[Object(o.jsx)("a",{href:"#",className:"nav_index",children:"Mobiles"}),Object(o.jsx)("a",{href:"#",className:"nav_index",children:"Best Seller"}),Object(o.jsx)("a",{href:"#",className:"nav_index",children:"Fashion"}),Object(o.jsx)("a",{href:"#",className:"nav_index",children:"Electronics"}),Object(o.jsx)("a",{href:"#",className:"nav_index",children:"Customer Service"}),Object(o.jsx)("a",{href:"#",className:"nav_index",children:"Today's Deals"}),Object(o.jsx)("a",{href:"#",className:"nav_index",children:"Prime"}),Object(o.jsx)("a",{href:"#",className:"nav_index",children:"Amazon pay"}),Object(o.jsx)("a",{href:"#",className:"nav_index",children:"Home & Kitchen"}),Object(o.jsx)("a",{href:"#",className:"nav_index",children:"Books"})]})}c(112);var A=c(50),S=c(69),I=c(42),E=c(70),P=(c(113),c(47));var B=function(e){var t=e.id,c=e.title,a=e.image,s=e.price,i=e.rating,n=h(),j=Object(r.a)(n,2)[1];return Object(o.jsxs)("div",{className:"product",children:[Object(o.jsxs)("div",{className:"product_info",children:[Object(o.jsx)("p",{children:c}),Object(o.jsx)("div",{className:"product__price",children:Object(o.jsxs)("strong",{children:[" $",s]})}),Object(o.jsx)("div",{className:"product__rating",children:Array(i).fill().map((function(e,t){return Object(o.jsx)("p",{children:"\ud83c\udf1f"})}))})]}),Object(o.jsx)("img",{src:a,alt:""}),Object(o.jsx)(P.a,{onClick:function(){j({type:"ADD TO CART",item:{id:t,title:c,image:a,price:s,rating:i}})},variant:"outline-warning",children:"Add to Cart"})," "]})};function w(){return Object(o.jsx)("div",{className:"main",children:Object(o.jsx)("div",{className:"main_cursol",children:Object(o.jsx)(S.a,{fluid:"md",className:"main",children:Object(o.jsxs)(E.a,{children:[Object(o.jsx)(I.a,{md:1}),Object(o.jsxs)(I.a,{md:10,children:[Object(o.jsxs)(A.a,{children:[Object(o.jsx)(A.a.Item,{interval:700,children:Object(o.jsx)("img",{className:"image",src:"https://m.media-amazon.com/images/I/61FuWeCuGCL._SX3000_.jpg",alt:""})}),Object(o.jsx)(A.a.Item,{interval:500,children:Object(o.jsx)("img",{className:"image",src:"https://m.media-amazon.com/images/I/51jKifqW4XL._SX3000_.jpg",alt:""})}),Object(o.jsx)(A.a.Item,{interval:400,children:Object(o.jsx)("img",{className:"image",src:"https://m.media-amazon.com/images/I/61O2X1ai1ML._SX3000_.jpg",alt:""})}),Object(o.jsx)(A.a.Item,{interval:300,children:Object(o.jsx)("img",{className:"image",src:"https://m.media-amazon.com/images/I/614ULQXgE4L._SX3000_.jpg",alt:""})})]}),Object(o.jsxs)("div",{className:"home__row",children:[Object(o.jsx)(B,{id:"1",title:"Great INDIAN Festival 10% HDFC BANK",price:0,rating:5,image:"https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/JupiterT1/Eng_1x._SY304_CB640989812_.jpg",alt:""}),Object(o.jsx)(B,{id:"2",title:"Up to 70% off | Electronics clearance store",price:12.96,rating:4,image:"https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/V238940049_IN_PC_BAU_Edit_Creation_Laptops1x._SY304_CB667377205_.jpg",alt:""}),Object(o.jsx)(B,{id:"3",title:"Shop from small businesses | Get rewards",price:11.96,rating:3,image:"https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/Jupiter21/Teaser3-cc_1x1._SY304_CB639696076_.jpg",alt:""}),Object(o.jsx)(B,{id:"4",title:" $ Welcome Offers $  Terms & Condition",price:0,rating:5,image:"https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GW/JUP21/T2/PC_CC_NTA_1X_english._SY304_CB641485549_.jpg",alt:""})]}),Object(o.jsx)("div",{className:"home__row",children:Object(o.jsxs)("div",{className:"cards",children:[Object(o.jsx)(B,{id:"5",title:"Men's Go Focus Running Shoes Sparx",price:100,rating:5,image:"\thttps://images-na.ssl-images-amazon.com/images/I/71ki1tnypwL._AC_UX500_.jpg",alt:""}),Object(o.jsx)(B,{id:"6",title:"boAt Wireless Bluetooth in Ear Earbuds  Mic",price:10,rating:4,image:"https://images-eu.ssl-images-amazon.com/images/G/31/img21/Audio/Jupiter21/GW/Audio_Desktop_CC_1x._SY304_CB640008131_.jpg",alt:""}),Object(o.jsx)(B,{id:"7",title:"Canon PowerShot SX430 IS 20MP Lumix",price:99,rating:3,image:"https://images-eu.ssl-images-amazon.com/images/G/31/Cameras/MSO/379x304_pc_card_1._SY304_CB643056800_.jpg",alt:""}),Object(o.jsx)(B,{id:"8",title:"Mobile & Headphone Speaker Phone",price:196,rating:2,image:"https://i.insider.com/5a7380ae10729096118b49fb?width=600&format=jpeg&auto=webp",alt:""})]})})]}),Object(o.jsx)(I.a,{md:1,children:"  "})]})})})})}c(114),c(115);var y=function(e){var t=e.id,c=e.image,a=e.title,s=e.price,i=e.rating,n=h(),j=Object(r.a)(n,2),l=(j[0].basket,j[1]);return Object(o.jsxs)("div",{className:"CheckoutProduct",children:[Object(o.jsx)("img",{className:"CheckoutProduct_img",src:c}),Object(o.jsxs)("div",{className:"CheckoutProduct_info",children:[Object(o.jsx)("p",{className:"CheckoutProduct_title",children:a}),Object(o.jsxs)("p",{className:"CheckoutProduct_price",children:[Object(o.jsx)("small",{children:"$"}),Object(o.jsx)("strong",{children:s})]}),Object(o.jsx)("div",{className:"CheckoutProduct_rating",children:Array(i).fill().map((function(e,t){}))}),Object(o.jsx)(P.a,{onClick:function(){l({type:"REMOVE FROM BASKET",id:t})},variant:"outline-warning",children:"Remove Item"})," "]})]})};function z(){var e=h(),t=Object(r.a)(e,2),c=t[0].basket;t[1];return Object(o.jsx)("div",{className:"checkout",children:Object(o.jsx)(S.a,{children:Object(o.jsxs)(E.a,{children:[Object(o.jsx)(I.a,{xl:8,children:Object(o.jsxs)("div",{className:"Checkout_left",children:[Object(o.jsx)("img",{className:"check_image",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""}),Object(o.jsxs)("div",{className:"title",children:[Object(o.jsx)("h3",{className:"checkout_title",children:"Check Your Shopping Basket"}),c.map((function(e){return Object(o.jsx)(y,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})]})}),Object(o.jsx)(I.a,{xl:4,children:Object(o.jsx)("div",{className:"Checkout_right"})})]})})})}var T=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"Your Order"})})};var G=function(){return Object(o.jsx)(l.a,{children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(C,{}),Object(o.jsxs)(f.c,{children:[Object(o.jsx)(f.a,{path:"/Checkout",children:Object(o.jsx)(z,{})}),Object(o.jsx)(f.a,{path:"/login",children:Object(o.jsx)(N,{})}),Object(o.jsx)(f.a,{path:"/Order",children:Object(o.jsx)(T,{})}),Object(o.jsxs)(f.a,{path:"/",children:[Object(o.jsx)(k,{}),Object(o.jsx)(w,{})]})]})]})})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,133)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,n=t.getTTFB;c(e),a(e),s(e),i(e),n(e)}))},D=c(18),Y=c(15),L=function(e,t){switch(console.log(t),t.type){case"ADD TO CART":return Object(Y.a)(Object(Y.a)({},e),{},{basket:[].concat(Object(D.a)(e.basket),[t.item])});case"EMPTY BASKET":return Object(Y.a)(Object(Y.a)({},e),{},{basket:[]});case"REMOVE FROM BASKET":var c=e.basket.findIndex((function(e){return e.id===t.id})),a=Object(D.a)(e.basket);return c>=0?a.splice(c,1):console.warn("can remove product (id: ".concat(t.id,")as its not in basket!")),Object(Y.a)(Object(Y.a)({},e),{},{basket:a});case"SET USER":return Object(Y.a)(Object(Y.a)({},e),{},{user:t.user});default:return e}};n.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(m,{initialState:{basket:[],user:null},reducer:L,children:Object(o.jsx)(G,{})})}),document.getElementById("root")),M()},96:function(e,t,c){},97:function(e,t,c){},98:function(e,t,c){}},[[117,1,2]]]);
//# sourceMappingURL=main.a9a273f0.chunk.js.map