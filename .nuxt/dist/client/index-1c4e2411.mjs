import{_ as x,o as _,c as p,r as L,m as te,a as e,t as m,p as S,b as I,u as w,d as se,e as C,f as oe,g as f,F as D,h as A,w as g,i as y,j as $,n as ne,k as Y,l as ae,v as re,q as K,s as E,x as V,y as ce,z as le,A as ie,B as de,C as ue,D as _e}from"./entry-abd68c38.mjs";const pe={__name:"CustomButton",props:{btnBg:{type:String,required:!1},textColor:{type:String,default:"#fff",required:!1},lg:{type:String,required:!1},sm:{type:String,required:!1},disabled:{type:Boolean,required:!1}},setup(t,{expose:n}){n();const o=t,s={["btn-bg"]:o.lg,["btn-sm"]:o.sm},a={...o.btnBg&&{background:o.btnBg},...o.textColor&&{color:o.textColor}},r={props:o,classes:s,styles:a};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}},fe=["disabled"];function he(t,n,o,s,a,r){return _(),p("button",te({class:["btn",s.classes],disabled:o.disabled,style:s.styles},t.$attrs),[L(t.$slots,"default",{},void 0,!0)],16,fe)}var P=x(pe,[["render",he],["__scopeId","data-v-31391942"]]);const me={__name:"HInput",props:{type:{type:String,default:"text"},placeholder:{type:String,default:""},label:{type:String,default:""}},setup(t,{expose:n}){n();const s={props:t};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}},ve=t=>(S("data-v-65c5056a"),t=t(),I(),t),be={class:"h-label"},xe=ve(()=>e("br",null,null,-1)),ye={class:"input-wrapper"},ge=["type","placeholder"];function $e(t,n,o,s,a,r){return _(),p("div",null,[e("label",be,m(o.label),1),xe,e("div",ye,[e("input",{class:"h-input",type:o.type,placeholder:o.placeholder},null,8,ge)])])}var we=x(me,[["render",$e],["__scopeId","data-v-65c5056a"]]);const Ce={__name:"CheckoutForm",emits:["close"],setup(t,{expose:n,emit:o}){n();const s=w(),a=s.cart||[],r=se({full_name:"",phone_number:"",email:"",address:"",state:"",country:""}),l=C(()=>Object.values(r).every(v=>v===null||v==="")),d=C(()=>a.map(u=>(u==null?void 0:u.quantity)*(u==null?void 0:u.price)).reduce((u,c)=>u+c,0)),h={cartStore:s,cartItems:a,form:r,formIsEmpty:l,totalCost:d,emit:o,closeModal:()=>{o("close")},useCartStore:w};return Object.defineProperty(h,"__isScriptSetup",{enumerable:!1,value:!0}),h}},F=t=>(S("data-v-303fb26d"),t=t(),I(),t),Se={class:""},Ie=F(()=>e("span",{class:"font-bold text-2xl"},"Checkout Form",-1)),ke={class:"w-full grid grid-cols-2 gap-6 my-6"},Oe={class:"w-full flex flex-col border-r pr-6"},Pe=F(()=>e("h4",null,"Personal Information",-1)),je=F(()=>e("h4",{class:"mb-[10px]"},"Cart Details",-1)),Be={class:"flex flex-col max-h-[400px] overflow-y-scroll px-[8px]"},Ee={class:"flex items-start justify-between"},Fe={class:"w-[70%]"},qe={class:"flex items-center mr-[8px]"},Ne=["src"],Me={class:"font-bold text-[14px]"},Te={class:"text-[12px]"},Le={class:"flex items-center justify-between"},De={class:"text-[12px] mr-8",style:{"white-space":"nowrap"}},Ae={class:"text-[12px] mr-8",style:{"white-space":"nowrap"}},Qe={class:"font-bold",style:{"white-space":"nowrap"}},He={class:"flex items-center justify-end mt-6 px-8 text-xl"},Ve=F(()=>e("h6",{class:"font-bold"},"Total:",-1)),ze={class:"ml-4 font-bold"},Ue={class:"flex items-center justify-center"},We=y("Pay");function Ge(t,n,o,s,a,r){const l=we,d=P;return _(),p("div",Se,[e("div",{class:"pb-4 border-b flex items-start justify-between"},[Ie,e("img",{class:"w-7 h-7 cursor-pointer",src:oe,alt:"",onClick:s.closeModal})]),e("div",ke,[e("form",Oe,[Pe,f(l,{placeholder:"Full Name"}),f(l,{type:"phone",placeholder:"Phone Number"}),f(l,{type:"email",placeholder:"Email"}),f(l,{placeholder:"Pickup Address"}),f(l,{placeholder:"State"}),f(l,{placeholder:"Country"})]),e("div",null,[je,e("ul",Be,[(_(!0),p(D,null,A(s.cartItems,(i,h)=>(_(),p("li",{key:h,class:"my-[8px]"},[e("div",Ee,[e("div",Fe,[e("div",qe,[e("img",{src:i.icon,alt:"",class:"mr-[4px] w-[20px] h-[20px]"},null,8,Ne),e("p",Me,m(`${i.title}`),1)]),e("span",Te,m(`${i.info}`),1)]),e("div",Le,[e("span",De,"$ "+m(`${i.price}`),1),e("span",Ae,m(`${i.quantity}`),1),e("span",Qe,"$ "+m(i.quantity*i.price),1)])])]))),128))]),e("div",He,[Ve,e("h6",ze,"$ "+m(s.totalCost),1)]),e("div",Ue,[f(d,{disabled:s.formIsEmpty,class:"mt-6 w-full uppercase","btn-bg":"#13183f",onClick:t.openCheckoutForm},{default:g(()=>[We]),_:1},8,["disabled","onClick"])])])])])}var J=x(Ce,[["render",Ge],["__scopeId","data-v-303fb26d"]]);const Re={__name:"HModal",props:{modelValue:{type:Boolean,default:!1},modalWidth:{type:String,default:"500px"},modalHeight:{type:String,default:"auto"},center:{type:Boolean,default:!1},right:{type:Boolean,default:!1},left:{type:Boolean,default:!1}},setup(t,{expose:n}){n();const o=t,s=$(!!o.modelValue),a=C(()=>({width:o.modalWidth,height:o.modalHeight})),r=C(()=>({"justify-center":o.center,"justify-start":o.left,"justify-end":o.right})),l={props:o,show:s,styles:a,classes:r};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}};function Ye(t,n,o,s,a,r){return _(),p("div",{class:Y(["modal-wrapper",s.classes])},[e("div",{class:"modal-content mx-auto",style:ne(s.styles)},[L(t.$slots,"content",{},void 0,!0)],4)],2)}var Ke=x(Re,[["render",Ye],["__scopeId","data-v-7ab7099e"]]);const Je={},Xe={class:"h-[300px] rounded bg-white"},Ze=e("div",{class:"flex items-center justify-center"},[e("p",{class:"text-center"},[y("Success!!!"),e("br"),y("Your item will arrive in 7 working days")])],-1),et=[Ze];function tt(t,n,o,s,a,r){return _(),p("div",Xe,et)}var st=x(Je,[["render",tt]]);const ot={__name:"Cart",setup(t,{expose:n}){n();const o=w(),s=o.cart||[],a=$(!1),r=$(!1),l=C(()=>s.map(c=>(c==null?void 0:c.quantity)*(c==null?void 0:c.price)).reduce((c,b)=>c+b,0)),v={cartStore:o,cartItems:s,checkoutFormModal:a,successModal:r,totalCost:l,removeItem:u=>{s.splice(u,1)},closeCheckoutForm:()=>{a.value=!1},openCheckoutForm:()=>{a.value=!0,console.log(a.value,"form")},useCartStore:w};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}},Q=t=>(S("data-v-2a29ada8"),t=t(),I(),t),nt={class:"relative"},at={class:"w-full bg-[#fff] rounded-lg p-6 shadow h-[500px]"},rt=Q(()=>e("h2",{class:"font-bold text-2xl border-b pb-6"},"Cart",-1)),ct={class:"w-full h-[250px] overflow-y-scroll"},lt={class:"text-sm w-full"},it=Q(()=>e("tr",{class:"border-b"},[e("th",null,"SN"),e("th",{class:"text-left"},"Item"),e("th",{class:"text-left"},"Qty"),e("th",{class:"text-left"},"Unit price ($)"),e("th",{class:"text-right"},"Total ($)"),e("th",{class:"text-right"},"Action")],-1)),dt={class:"flex items-center"},ut=["src"],_t={class:"flex items-center bg-[#f4f4f4] rounded w-14"},pt=["onUpdate:modelValue"],ft={class:"flex items-center"},ht={class:"text-right"},mt=["onClick"],vt={key:0,class:"h-[150px] flex items-center justify-center"},bt={class:"absolute bottom-[24px] right-[24px] mt-[30px]"},xt={class:"flex items-center justify-end mt-6 px-8 text-xl"},yt=Q(()=>e("h6",{class:"font-bold"},"Total:",-1)),gt={class:"ml-4 font-bold"},$t={class:"flex items-center justify-center"},wt=y("Checkout");function Ct(t,n,o,s,a,r){var v;const l=P,d=J,i=Ke,h=st;return _(),p("div",nt,[e("div",at,[rt,e("div",ct,[e("table",lt,[it,(_(!0),p(D,null,A(s.cartItems,(u,c)=>(_(),p("tr",{key:c,class:"w-full p-4 border-b"},[e("td",null,m(c+1),1),e("td",null,[e("div",dt,[e("img",{class:"mr-3 w-10 h-10",src:u.icon,alt:""},null,8,ut),e("h4",null,m(u.title),1)])]),e("td",null,[e("div",_t,[ae(e("input",{class:"bg-transparent font-bold text-center w-full",type:"number",min:"1","onUpdate:modelValue":b=>u.quantity=b},null,8,pt),[[re,u.quantity]])])]),e("td",null,[e("div",ft,[e("p",null,m(u.price),1)])]),e("td",ht,m(u.quantity*u.price),1),e("td",null,[e("img",{class:"w-7 h-7 cursor-pointer delete-icon",src:`${K()}assets/images/trash.svg`,alt:"",onClick:b=>s.removeItem(c)},null,8,mt)])]))),128))])]),s.cartItems.length===0?(_(),p("div",vt," Empty Cart ")):E("",!0),e("div",bt,[e("div",xt,[yt,e("h6",gt,"$ "+m(s.totalCost),1)]),e("div",$t,[f(l,{disabled:((v=s.cartStore.cart)==null?void 0:v.length)===0,class:"mt-6 w-full uppercase","btn-bg":"#13183f",onClick:s.openCheckoutForm},{default:g(()=>[wt]),_:1},8,["disabled"])])])]),s.checkoutFormModal?(_(),V(i,{key:0,"modal-width":"900px"},{content:g(()=>[f(d,{onClose:s.closeCheckoutForm,onSuccess:n[0]||(n[0]=u=>s.successModal=!0)})]),_:1})):E("",!0),s.successModal?(_(),V(i,{key:1,"modal-width":"600px"},{content:g(()=>[f(h,{onClose:n[1]||(n[1]=u=>s.successModal=!1)})]),_:1})):E("",!0)])}var St=x(ot,[["render",Ct],["__scopeId","data-v-2a29ada8"]]),z;const j=typeof window!="undefined",It=t=>typeof t=="string",N=()=>{};j&&((z=window==null?void 0:window.navigator)==null?void 0:z.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function kt(t){return typeof t=="function"?t():ie(t)}function Ot(t){return t}function Pt(t){return ce()?(le(t),!0):!1}function O(t){var n;const o=kt(t);return(n=o==null?void 0:o.$el)!=null?n:o}const X=j?window:void 0;j&&window.document;j&&window.navigator;j&&window.location;function B(...t){let n,o,s,a;if(It(t[0])?([o,s,a]=t,n=X):[n,o,s,a]=t,!n)return N;let r=N;const l=de(()=>O(n),i=>{r(),i&&(i.addEventListener(o,s,a),r=()=>{i.removeEventListener(o,s,a),r=N})},{immediate:!0,flush:"post"}),d=()=>{l(),r()};return Pt(d),d}function U(t,n,o={}){const{window:s=X,ignore:a,capture:r=!0,detectIframe:l=!1}=o;if(!s)return;const d=$(!0);let i;const h=c=>{s.clearTimeout(i);const b=O(t),k=c.composedPath();!b||b===c.target||k.includes(b)||!d.value||a&&a.length>0&&a.some(ee=>{const q=O(ee);return q&&(c.target===q||k.includes(q))})||n(c)},v=[B(s,"click",h,{passive:!0,capture:r}),B(s,"pointerdown",c=>{const b=O(t);d.value=!!b&&!c.composedPath().includes(b)},{passive:!0}),B(s,"pointerup",c=>{if(c.button===0){const b=c.composedPath();c.composedPath=()=>b,i=s.setTimeout(()=>h(c),50)}},{passive:!0}),l&&B(s,"blur",c=>{var b;const k=O(t);((b=document.activeElement)==null?void 0:b.tagName)==="IFRAME"&&!(k!=null&&k.contains(document.activeElement))&&n(c)})].filter(Boolean);return()=>v.forEach(c=>c())}const M=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},T="__vueuse_ssr_handlers__";M[T]=M[T]||{};M[T];var W;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(W||(W={}));var jt=Object.defineProperty,G=Object.getOwnPropertySymbols,Bt=Object.prototype.hasOwnProperty,Et=Object.prototype.propertyIsEnumerable,R=(t,n,o)=>n in t?jt(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,Ft=(t,n)=>{for(var o in n||(n={}))Bt.call(n,o)&&R(t,o,n[o]);if(G)for(var o of G(n))Et.call(n,o)&&R(t,o,n[o]);return t};const qt={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Ft({linear:Ot},qt);const Nt={__name:"DNav",setup(t,{expose:n}){n();const o=w(),s=$(!1),a=o.cart||[],r=$(null),l=$(null),d=()=>{s.value=!s.value},i=C(()=>(a==null?void 0:a.length)||0),h=()=>{l.value=window.scrollY};ue(()=>{window.addEventListener("scroll",h()),h()}),U(r,()=>s.value=!1);const v={cartStore:o,cartModal:s,cart:a,target:r,scrollPosition:l,openCart:d,cartLength:i,handleScroll:h,CustomButton:P,Cart:St,useCartStore:w,onClickOutside:U};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}},Z=t=>(S("data-v-287a7426"),t=t(),I(),t),Mt=Z(()=>e("div",null,[e("img",{src:_e,alt:"logo"})],-1)),Tt={class:"flex items-center space-x-6"},Lt=Z(()=>e("img",{src:`${K()}assets/images/shopping-cart.svg`,alt:"",class:"mr-6 w-7 h-7 cursor-pointer"},null,-1)),Dt={class:"absolute top-[-15px] left-[-15px] w-7 h-7 rounded-full flex justify-center",style:{background:"var(--main-gradient)"}},At={class:"text-[#fff] text-center font-bold text-sm"},Qt=y("Get Started"),Ht={key:0,ref:"target",class:"w-[50%] absolute top-24 right-[100px] z-50"};function Vt(t,n,o,s,a,r){return _(),p("div",{class:Y(["nav flex items-center justify-between z-[99999]",{"on-scroll-bg":s.scrollPosition>50}])},[Mt,e("div",Tt,[e("div",{class:"relative cursor-pointer",onClick:s.openCart},[Lt,e("div",Dt,[e("span",At,m(s.cartLength),1)])]),f(s.CustomButton,{class:"","btn-bg":"#13183f"},{default:g(()=>[Qt]),_:1})]),s.cartModal?(_(),p("div",Ht,[f(s.Cart)],512)):E("",!0)],2)}var zt=x(Nt,[["render",Vt],["__scopeId","data-v-287a7426"]]);const Ut={__name:"DHeader",setup(t,{expose:n}){n();const o={DNav:zt,CustomButton:P};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}},H=t=>(S("data-v-f7649474"),t=t(),I(),t),Wt={class:""},Gt={class:"h-screen pl-[150px] pt-24"},Rt={class:"flex items-center justify-between"},Yt={class:"w-[40%] flex flex-col items-left justify-between"},Kt=H(()=>e("h1",{class:"mb-[30px]"},[y("Maximize Skill, "),e("br"),y("Minimize Budget")],-1)),Jt=H(()=>e("p",{class:"mb-[40px]"}," Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life you want. ",-1)),Xt=y("Get Started"),Zt=H(()=>e("div",{class:"h-[750px] w-[50%] mt-[-0px] overflow-hidden"},[e("div",{class:"hero mr-[-300px] mt-[-120px]"})],-1));function es(t,n,o,s,a,r){return _(),p("div",Wt,[f(s.DNav,{class:"fixed z-50 w-full py-5 px-[150px]"}),e("div",Gt,[e("div",Rt,[e("div",Yt,[Kt,Jt,f(s.CustomButton,{class:"",lg:"","btn-bg":"var(--main-gradient)"},{default:g(()=>[Xt]),_:1},8,["btn-bg"])]),Zt])])])}var ts=x(Ut,[["render",es],["__scopeId","data-v-f7649474"]]);const ss={__name:"Card",props:{item:Object},setup(t,{expose:n}){n();const o=t,s=w(),a=d=>{r(d)?alert(`${d.title} already in cart`):s.cart.push({...d,quantity:1})},r=d=>{var h;const i=(h=s.cart)==null?void 0:h.find(v=>v.id===d.id);return!!(i!=null&&i.id)},l={cartStore:s,props:o,addToCart:a,alreadyInCart:r,CustomButton:P,useCartStore:w};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}},os=t=>(S("data-v-46f27ae1"),t=t(),I(),t),ns={class:"main-card"},as={class:"card"},rs=["src"],cs={class:"mb-[16px] mt-[40px] font-bold"},ls=os(()=>e("p",{class:"mt-[24px] text-[#f74780] cursor-pointer"},"Get Started",-1)),is={class:"modal-wrapper"},ds={class:"modal-content"},us={class:"c-centered flex flex-col items-center justify-center"},_s={class:"text-[#fff] font-bold text-xl mb-6"};function ps(t,n,o,s,a,r){return _(),p("div",ns,[e("div",as,[e("img",{src:o.item.icon,alt:"",class:"card-icon"},null,8,rs),e("h3",cs,m(o.item.title),1),L(t.$slots,"content",{class:"cursor-pointer"},void 0,!0),ls]),e("div",is,[e("div",ds,[e("div",us,[e("span",_s,m(o.item.price),1),f(s.CustomButton,{onClick:n[0]||(n[0]=()=>{s.addToCart(o.item)}),class:"",sm:"","btn-bg":s.alreadyInCart(o.item)?"#47f75b":"#13183f"},{default:g(()=>[y(m(s.alreadyInCart(o.item)?"Already In Cart":"Add to cart"),1)]),_:1},8,["btn-bg"])])])])])}var fs=x(ss,[["render",ps],["__scopeId","data-v-46f27ae1"]]);const hs={__name:"courses",setup(t,{expose:n}){n();const s={courses:$([{id:"itm1",price:"65.00",quantity:0,title:"Animation",icon:"../assets/images/icon-animation.svg",info:"Learn the latest animation techniques to create stunning motion design and captivate your audience."},{id:"itm2",price:"52.00",quantity:0,title:"Design",icon:"../assets/images/icon-design.svg",info:"Learn the latest animation techniques to create stunning motion design and captivate your audience."},{id:"itm3",price:"76.00",quantity:0,title:"Photography",icon:"../assets/images/icon-photography.svg",info:"Create beautiful, usable interfaces to help shape the future of how the web looks."},{id:"itm4",price:"84.00",quantity:0,title:"Crypto",icon:"../assets/images/icon-crypto.svg",info:"Create beautiful, usable interfaces to help shape the future of how the web looks."},{id:"itm5",price:"55.00",quantity:0,title:"Business",icon:"../assets/images/icon-business.svg",info:"Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos."}]),Card:fs};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}},ms={class:"grid grid-cols-3 gap-[50px]"},vs=e("div",{class:"relative h-[300px] rounded-[16px]",style:{background:"var(--main-gradient)"}},[e("div",{class:"p-8 c-centered"},[e("h2",{class:"text-[#fff]"},"Check out our most popular courses!")])],-1);function bs(t,n,o,s,a,r){return _(),p("div",ms,[vs,(_(!0),p(D,null,A(s.courses,(l,d)=>(_(),p("div",{key:d},[f(s.Card,{item:l},{content:g(()=>[y(m(l.info),1)]),_:2},1032,["item"])]))),128))])}var xs=x(hs,[["render",bs]]);const ys={__name:"index",setup(t,{expose:n}){n();const a={closeCheckoutForm:()=>{showCheckoutForm.value=!1},openCheckoutForm:()=>{showCheckoutForm.value=!0},DHeader:ts,courses:xs,CheckoutForm:J};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}},gs={class:"px-[120px] py-[20px]"};function $s(t,n,o,s,a,r){return _(),p("div",null,[e("div",null,[e("div",null,[f(s.DHeader)]),e("div",gs,[f(s.courses)])])])}var Cs=x(ys,[["render",$s],["__scopeId","data-v-5d8aadd5"]]);export{Cs as default};
