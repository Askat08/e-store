(this.webpackJsonpecommerce=this.webpackJsonpecommerce||[]).push([[0],{25:function(e,t,a){e.exports=a.p+"static/media/logo.5eea29e8.svg"},29:function(e,t,a){e.exports=a.p+"static/media/404.82a7ff75.png"},33:function(e,t,a){e.exports=a(47)},38:function(e,t,a){},39:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(9),l=a.n(r),o=(a(38),a(12)),s=a(23),m=a(24),i=a(30),u=a(32),d=a(11),f=a(10),E=(a(39),a(40),a(25)),p=a.n(E);function h(){return c.a.createElement("nav",{className:"navbar navbar-expand-sm bg-dark   navbar-dark"},c.a.createElement(f.b,{to:"/"},c.a.createElement("img",{src:p.a,alt:"store-bag-logo",className:"navbar-brand"})),c.a.createElement("ul",{className:"navbar-nav align-items-center"},c.a.createElement("li",{className:"nav-item ml-5"},c.a.createElement(f.b,{to:"/",className:"nav-link text-info"},c.a.createElement("h4",null,"comics")))),c.a.createElement(f.b,{to:"/cart",className:"ml-auto"},c.a.createElement("button",{className:"btn btn-info"},c.a.createElement("i",{className:"fas fa-cart-arrow-down"}),"             ","My Cart")))}var g=a(31),v=a(14),N=a(20),b=a(19);function x(e){var t=e.title,a=e.path,r=e.ext,l=e.handleAddtoCart,o=e.id,s=e.price,m=e.description,i=e.items,u=e.cart,d=Array.from(a);d.splice(4,0,"s");var f=Object(n.useState)(!1),E=Object(g.a)(f,2),p=E[0],h=E[1];return c.a.createElement("div",{className:"figure col-sm-4 col-md-3 col-lg-2 p-0 my-3 mx-3"}," ",c.a.createElement("img",{name:"product-img",onClick:function(){return h(!0)},src:d.join("")+"."+r,className:"figure-img img-fluid rounded",alt:t}),c.a.createElement("button",{type:"button",className:"btn-cart text-info shadow-none w-100",onClick:function(){return l(o,u,i)}},c.a.createElement("span",{className:"mr-3"},"add to "),c.a.createElement("i",{className:"fas fa-cart-plus"})),c.a.createElement("p",{className:"figure-caption mt-2 text-dark"},c.a.createElement("strong",null,"".concat(s)<=0?"free":"$ ".concat(s))),c.a.createElement("p",{className:"figure-footer text-dark"},t),c.a.createElement(v.a,{show:p,onHide:function(){return h(!1)},className:"text-dark"},c.a.createElement("div",{className:"bg-info"}," ",c.a.createElement(b.a,null,c.a.createElement(N.a,null,c.a.createElement(v.a.Body,null,c.a.createElement("img",{src:d.join("")+"."+r,alt:t,style:{width:"100%"}})))),c.a.createElement(b.a,null," ",c.a.createElement(N.a,null,c.a.createElement(v.a.Header,{className:"bg-warning",closeButton:!0},c.a.createElement(v.a.Title,null,t)),c.a.createElement("p",{className:"lead m-5 px-3"},c.a.createElement("small",{className:"bg-warning"},m)))))))}function C(e){var t=e.onSearchClick,a=e.onSearchChange,n=e.searchField;return c.a.createElement("div",{className:"input-group col-sm-9 mx-auto"},c.a.createElement("input",{className:"form-control py-2 shadow-none",type:"search",value:n,placeholder:"Search comic book...",id:"example-search-input",onChange:function(e){return a(e)},onKeyPress:t}),c.a.createElement("span",{className:"input-group-append"},c.a.createElement("button",{className:"btn btn-outline-info shadow-none",type:"button",onClick:t},c.a.createElement("i",{className:"fa fa-search"}))))}var y=function(e){var t=e.items,a=e.cart,n=e.handleAddtoCart,r=e.messageAlert,l=e.isError,o=e.onSearchChange,s=e.onSearchClick,m=e.searchfield,i=t.map((function(e,l){return c.a.createElement(x,{key:e.id,id:e.id,price:e.prices[0].price,title:e.title,path:e.thumbnail.path,ext:e.thumbnail.extension,description:e.description,handleAddtoCart:n,messageAlert:r,cart:a,items:t})})).slice(0,15);return 0!==t.length||l?l?c.a.createElement("div",null,c.a.createElement("p",{className:"lead text-center"},"Data not found"),c.a.createElement(C,{onSearchChange:o,searchField:m})):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"jumbotron m-0"},c.a.createElement("div",{className:""},c.a.createElement(C,{onSearchChange:o,searchField:m,onSearchClick:s})),c.a.createElement("div",{className:"row m-5 justify-content-center"},i))):c.a.createElement("div",{className:"d-flex align-items-center justify-content-center"},c.a.createElement("div",{className:""},c.a.createElement(C,{onSearchChange:o,searchField:m,onSearchClick:s})),c.a.createElement("strong",null,"Loading..."),c.a.createElement("div",{className:"spinner-border m-5",role:"status","aria-hidden":"true"}))};function S(){return c.a.createElement("div",{className:"container-fluid text-center d-none d-lg-block"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},c.a.createElement("p",{className:"text-uppercase"},"comics")),c.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},c.a.createElement("p",{className:"text-uppercase"},"name")),c.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},c.a.createElement("p",{className:"text-uppercase"},"price")),c.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},c.a.createElement("p",{className:"text-uppercase"},"quantity")),c.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},c.a.createElement("p",{className:"text-uppercase"},"remove")),c.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},c.a.createElement("p",{className:"text-uppercase"},"total"))))}function k(){return c.a.createElement("div",{className:"conainer m-5"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-10 mx-auto text-center"},c.a.createElement("h1",null,"Cart is empty"))))}function w(e){var t=e.props,a=e.item,n=a.id,r=a.title,l=a.thumbnail,o=l.path,s=l.extension,m=a.prices[0].price,i=a.count,u=Array.from(o);return u.splice(4,0,"s"),c.a.createElement("div",{className:"row my-2 text-capitilize text-center"},c.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},c.a.createElement("img",{src:u.join("")+"."+s,alt:r,className:"img-fluid",style:{width:"5rem",height:"5rem"}})),c.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},c.a.createElement("span",{className:"d-lg-none"},"Comic : ")," ",r),c.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},c.a.createElement("span",{className:"d-lg-none"},"Price : "),c.a.createElement("strong",null,"$".concat(m.toFixed(2)))),c.a.createElement("div",{className:"col-10 mx-auto col-lg-2 my-2 my-lg-0"},c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement("div",{className:""},c.a.createElement("span",{className:"btn btn-cart mx-1",onClick:function(){return t.decrementCount(n)}},"-"),c.a.createElement("span",{className:"btn btn-cart mx-1"},i),c.a.createElement("span",{className:"btn btn-cart mx-1",onClick:function(){return t.incrementCount(n)}},"+")))),c.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},c.a.createElement("div",{style:{cursor:"pointer"},onClick:function(){t.removeItemFromCart(n,t.cart)}},c.a.createElement("i",{className:"fas fa-trash text-danger"}))),c.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},c.a.createElement("strong",null,"Item total : $ ",(m*i).toFixed(2))))}function T(e){var t=e.cart,a=e.props;return c.a.createElement("div",{className:"container-fluid"},t.map((function(e){return c.a.createElement(w,{key:e.id,item:e,props:a})})))}function O(e){var t=e.props,a=t.cartTax,n=t.cartTotal,r=t.cartSubTotal,l=t.handleClearCart;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-right text-capitilize"},c.a.createElement(f.b,{to:"/"},c.a.createElement("button",{className:"btn btn-outline-danger text-uppercase mb-3 px-5",type:"button",onClick:function(){return l()}},"clear cart")),c.a.createElement("h5",null,c.a.createElement("span",{className:"text-info"},"subtotal : "),c.a.createElement("strong",null,"$ ",r)),c.a.createElement("h5",null,c.a.createElement("span",{className:"text-info"},"tax* : "),c.a.createElement("strong",null,"$ ",a)),c.a.createElement("h5",null,c.a.createElement("span",{className:"text-info"},"total : "),c.a.createElement("strong",null,"$ ",n)),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("p",null,"*New York State Sales Tax 8.875%")))))}var j=function(e){if(e.cart.length>0){var t=e.cart;return c.a.createElement("div",null,c.a.createElement("h3",{className:"m-5 text-center"},"Comics in cart"),c.a.createElement(S,null),c.a.createElement(T,{cart:t,props:e}),c.a.createElement(O,{props:e}))}return c.a.createElement(k,null)},A=a(29),F=a.n(A);function I(){return c.a.createElement("div",{className:"container-fluid p-0"},c.a.createElement("img",{className:"img-fluid not-found",src:F.a,alt:"ERROR 404: NOT FOUND"}))}a(46);var H=function(e,t,a,n){var c=Object(o.a)(e),r=c.indexOf(function(e,t){return t.find((function(t){return t.id===e}))}(t,c)),l=c[r];return"dec"===a&&l.count>1?l.count-=1:"inc"===a&&l.count<10?l.count+=1:"add"===a&&(void 0===l.count?l.count=1:l.count<10&&void 0!==l.count&&(l.count+=1)),Object(o.a)(n.concat(l).filter((function(e,t,a){return a.indexOf(e)===t})))};function M(e){var t=e.props;return c.a.createElement("div",{className:"sticky-bottom"},c.a.createElement("div",{className:"card-footer bg-dark text-light"},c.a.createElement("div",{className:"row"},c.a.createElement("h3",{className:"col-6 my-3"},"Marvel Comic Books"),c.a.createElement("h4",{className:"card-text my-3 col-6 text-right"},"Get your superhero today.")),c.a.createElement("div",{className:"row"},c.a.createElement("h5",{className:"col-6 my-3 ",dangerouslySetInnerHTML:{__html:t}}),c.a.createElement("h5",{className:"col-6 my-3 text-right"},"Coded with ",c.a.createElement("i",{className:"fas fa-laptop-code text-info"})," by"," ",c.a.createElement("a",{href:"https://askatb.com",className:"text-danger",target:"_blank"},"me"),".")),c.a.createElement("button",{type:"button",className:"btn btn-outline-info shadow-none",onClick:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}},"top")))}var P={msg:{position:"fixed",top:"10px",right:"",fontSize:"2rem",background:"lightgreen",width:"100%",zIndex:"100",textAlign:"center",opacity:"0.9",transition:"opacity 0.1s ease-out"}};function D(){return c.a.createElement("div",{style:P.msg},c.a.createElement("h3",{className:"lead"},"Hooray! Comic book in your cart."))}var L=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;Object(s.a)(this,a),(n=t.call(this,e)).flashAlert=function(){n.setState((function(){return{flashAlert:!n.state.flashAlert}}),(function(){setTimeout((function(){n.setState({flashAlert:!n.state.flashAlert})}),500)}))},n.fetchData=function(e){return fetch(e).then((function(e){return e.json()})).then((function(e){return n.setState((function(){return{items:e.data.results.concat(n.state.items),attributionHTML:e.attributionHTML}}))})).catch((function(e){return n.setState({isError:!n.state.isError})}))},n.onSearchChange=function(e){n.setState({searchfield:e.target.value})},n.onSearchClick=function(e){if(("Enter"===e.key||1===e.detail)&&n.state.searchfield){var t="https://gateway.marvel.com/v1/public/comics?titleStartsWith=".concat(n.state.searchfield,"&limit=15&ts=1&apikey=0860ac3aed33051450d554be9f0d84d2&hash=c209f33ace43013413284d09f7e06b6e");n.fetchData(t)}},n.countTotalPrice=function(e){var t=Object(o.a)(e),a=t.filter((function(e,a){return t.indexOf(e)===a})).reduce((function(e,t){return t.count*t.prices[0].price+e}),0).toFixed(2),c=(.08875*a).toFixed(2),r=(parseFloat(a)+parseFloat(c)).toFixed(2);n.setState((function(){return{cartSubTotal:a,cartTax:c,cartTotal:r}}))},n.decrementCount=function(e){var t=H(n.state.cart,e,"dec",n.state.cart);n.setState((function(){return{cart:t}})),n.countTotalPrice(n.state.cart)},n.incrementCount=function(e){var t=H(n.state.cart,e,"inc",n.state.cart);n.setState((function(){return{cart:t}})),n.countTotalPrice(n.state.cart)},n.removeItemFromCart=function(e,t){var a=Object(o.a)(t);a.filter((function(t){return t.id===e}))[0].count=0,n.setState((function(){return{cart:a.filter((function(t){return t.id!==e}))}}),(function(){n.countTotalPrice(n.state.cart)}))},n.handleAddtoCart=function(e,t,a){var c=H(a,e,"add",t);n.setState((function(){return{cart:c}}),(function(){n.countTotalPrice(n.state.cart),function(e){var t=JSON.parse(window.localStorage.getItem("cart-items"))||[],a=e.reduce((function(e,a){return-1===t.findIndex((function(e){return e.id===a.id}))&&e.push(a),e}),Object(o.a)(t));localStorage.setItem("cart-items",JSON.stringify(a))}(n.state.cart)})),n.flashAlert()},n.handleClearCart=function(e){n.setState((function(){return{cart:[]}}),(function(){localStorage.clear()}))};var c=JSON.parse(localStorage.getItem("cart-items"));return n.state={items:[],isError:!1,searchfield:"",cart:c||[],cartSubTotal:0,cartTotal:0,cartTax:0,flashAlert:!1,attributionHTML:""},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.fetchData("https://gateway.marvel.com/v1/public/comics?orderBy=modified&ts=1&apikey=0860ac3aed33051450d554be9f0d84d2&hash=c209f33ace43013413284d09f7e06b6e"),this.countTotalPrice(this.state.cart)}},{key:"render",value:function(){var e=this;return c.a.createElement(f.a,{basename:"/e-store"},c.a.createElement(h,null),this.state.flashAlert?c.a.createElement(D,null):null,c.a.createElement(d.c,null,c.a.createElement(d.a,{path:"/",exact:!0,render:function(t){return c.a.createElement(y,Object.assign({},e.state,{onSearchChange:e.onSearchChange,onSearchClick:e.onSearchClick,handleAddtoCart:e.handleAddtoCart}))}}),c.a.createElement(d.a,{path:"/cart",render:function(t){return c.a.createElement(j,Object.assign({},e.state,{decrementCount:e.decrementCount,incrementCount:e.incrementCount,removeItemFromCart:e.removeItemFromCart,handleClearCart:e.handleClearCart}))}}),c.a.createElement(d.a,{component:I})),c.a.createElement(M,{props:this.state.attributionHTML}))}}]),a}(n.Component);l.a.render(c.a.createElement(L,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.81144eb2.chunk.js.map