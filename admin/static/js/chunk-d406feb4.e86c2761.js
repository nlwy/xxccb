(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d406feb4"],{2925:function(t,e,i){"use strict";var s=i("34f1"),n=i.n(s);n.a},"34f1":function(t,e,i){},"355f":function(t,e,i){t.exports=i.p+"static/img/slide-2.d358243b.jpg"},5492:function(t,e,i){t.exports=i.p+"static/img/slide-3.80666881.jpg"},"5dbc":function(t,e,i){var s=i("d3f4"),n=i("8b97").set;t.exports=function(t,e,i){var r,o=e.constructor;return o!==i&&"function"==typeof o&&(r=o.prototype)!==i.prototype&&s(r)&&n&&n(t,r),t}},"693d":function(t,e,i){},"69a7":function(t,e,i){t.exports=i.p+"static/img/slide-0.6e5db33c.jpg"},"71c4":function(t,e,i){t.exports=i.p+"static/img/slide-1.a976180d.jpg"},"77a8":function(t,e,i){"use strict";var s=i("dea6"),n=i.n(s);n.a},"8b97":function(t,e,i){var s=i("d3f4"),n=i("cb7c"),r=function(t,e){if(n(t),!s(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,s){try{s=i("9b43")(Function.call,i("11e9").f(Object.prototype,"__proto__").set,2),s(t,[]),e=!(t instanceof Array)}catch(n){e=!0}return function(t,i){return r(t,i),e?t.__proto__=i:s(t,i),t}}({},!1):void 0),check:r}},"9ed6":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"login"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.showSlide,expression:"showSlide"}],staticClass:"slideShadow"},[i("transition",[i("div",{staticClass:"slideSty animated bounce"},[i("slide-verify",{ref:"slideDiv",attrs:{sliderText:t.text,w:350,h:175},on:{success:t.onSuccess,fail:t.onFail}}),i("div",{staticClass:"iconBtn"},[i("i",{staticClass:"el-icon-circle-close",on:{click:function(e){t.showSlide=!1}}}),i("i",{staticClass:"el-icon-refresh",on:{click:t.refresh}})])],1)])],1),i("div",{staticClass:"loginBox"},[i("h2",{staticClass:"loginH2"},[t._v("后台管理系统")]),i("div",{staticClass:"loginCon"},[t._m(0),i("el-form",{ref:"loginForm",attrs:{rules:t.rules,model:t.ruleForm}},[i("el-form-item",{attrs:{prop:"user"}},[i("el-input",{attrs:{placeholder:"请输入账号","prefix-icon":"el-icon-user"},model:{value:t.ruleForm.user,callback:function(e){t.$set(t.ruleForm,"user",e)},expression:"ruleForm.user"}})],1),i("el-form-item",{attrs:{prop:"password"}},[i("el-input",{attrs:{placeholder:"请输入密码","prefix-icon":"el-icon-lock","show-password":""},model:{value:t.ruleForm.password,callback:function(e){t.$set(t.ruleForm,"password",e)},expression:"ruleForm.password"}})],1),i("el-button",{staticClass:"loginBtn",attrs:{type:"primary"},on:{click:function(e){return t.loginYz("loginForm")}}},[t._v("登录")])],1)],1)])])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"titleDiv"},[i("h3",[t._v("登录")]),i("p",[t._v("请输入您的账号密码")]),i("i",{staticClass:"el-icon-key"})])}],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"slide-verify",attrs:{id:"slideVerify",onselectstart:"return false;"}},[i("canvas",{ref:"canvas",attrs:{width:t.w,height:t.h}}),i("div",{staticClass:"slide-verify-refresh-icon",on:{click:t.refresh}}),i("canvas",{ref:"block",staticClass:"slide-verify-block",attrs:{width:t.w,height:t.h}}),i("div",{staticClass:"slide-verify-slider",class:{"container-active":t.containerActive,"container-success":t.containerSuccess,"container-fail":t.containerFail}},[i("div",{staticClass:"slide-verify-slider-mask",style:{width:t.sliderMaskWidth}},[i("div",{staticClass:"slide-verify-slider-mask-item",style:{left:t.sliderLeft},on:{mousedown:t.sliderDown,touchstart:t.touchStartEvent,touchmove:t.touchMoveEvent,touchend:t.touchEndEvent}},[i("i",{staticClass:"el-icon-arrow-right"})])]),i("span",{staticClass:"slide-verify-slider-text"},[t._v(t._s(t.sliderText))])])])},o=[],a=(i("c5f6"),Math.PI);function c(t,e){return t+e}function l(t){return t*t}var u={name:"SlideVerify",props:{l:{type:Number,default:42},r:{type:Number,default:10},w:{type:Number,default:310},h:{type:Number,default:155},sliderText:{type:String,default:"Slide filled right"}},data:function(){return{containerActive:!1,containerSuccess:!1,containerFail:!1,canvasCtx:null,blockCtx:null,block:null,block_x:void 0,block_y:void 0,L:this.l+2*this.r+3,img:void 0,originX:void 0,originY:void 0,isMouseDown:!1,trail:[],sliderLeft:0,sliderMaskWidth:0}},mounted:function(){this.init()},methods:{init:function(){this.initDom(),this.initImg(),this.bindEvents()},initDom:function(){this.block=this.$refs.block,this.canvasCtx=this.$refs.canvas.getContext("2d"),this.blockCtx=this.block.getContext("2d")},initImg:function(){var t=this,e=this.createImg(function(){t.drawBlock(),t.canvasCtx.drawImage(e,0,0,t.w,t.h),t.blockCtx.drawImage(e,0,0,t.w,t.h);var i=t.block_x,s=t.block_y,n=t.r,r=t.L,o=s-2*n-1,a=t.blockCtx.getImageData(i,o,r,r);t.block.width=r,t.blockCtx.putImageData(a,0,o)});this.img=e},drawBlock:function(){this.block_x=this.getRandomNumberByRange(this.L+10,this.w-(this.L+10)),this.block_y=this.getRandomNumberByRange(10+2*this.r,this.h-(this.L+10)),this.draw(this.canvasCtx,this.block_x,this.block_y,"fill"),this.draw(this.blockCtx,this.block_x,this.block_y,"clip")},draw:function(t,e,i,s){var n=this.l,r=this.r;t.beginPath(),t.moveTo(e,i),t.arc(e+n/2,i-r+2,r,.72*a,2.26*a),t.lineTo(e+n,i),t.arc(e+n+r-2,i+n/2,r,1.21*a,2.78*a),t.lineTo(e+n,i+n),t.lineTo(e,i+n),t.arc(e+r-2,i+n/2,r+.4,2.76*a,1.24*a,!0),t.lineTo(e,i),t.lineWidth=2,t.fillStyle="rgba(255, 255, 255, 0.8)",t.strokeStyle="rgba(255, 255, 255, 0.8)",t.stroke(),t[s](),t.globalCompositeOperation="xor"},createImg:function(t){var e=this,i=document.createElement("img");return i.crossOrigin="Anonymous",i.onload=t,i.onerror=function(){i.src=e.getRandomImg()},i.src=this.getRandomImg(),i},getRandomImg:function(){return i("a8fb")("./slide-".concat(this.getRandomNumberByRange(0,4),".jpg"))},getRandomNumberByRange:function(t,e){return Math.round(Math.random()*(e-t)+t)},refresh:function(){this.reset(),this.$emit("refresh")},sliderDown:function(t){this.originX=t.clientX,this.originY=t.clientY,this.isMouseDown=!0},touchStartEvent:function(t){this.originX=t.changedTouches[0].pageX,this.originY=t.changedTouches[0].pageY,this.isMouseDown=!0},bindEvents:function(){var t=this;document.addEventListener("mousemove",function(e){if(!t.isMouseDown)return!1;var i=e.clientX-t.originX,s=e.clientY-t.originY;if(i<0||i+38>=t.w)return!1;t.sliderLeft=i+"px";var n=(t.w-40-20)/(t.w-40)*i;t.block.style.left=n+"px",t.containerActive=!0,t.sliderMaskWidth=i+"px",t.trail.push(s)}),document.addEventListener("mouseup",function(e){if(!t.isMouseDown)return!1;if(t.isMouseDown=!1,e.clientX===t.originX)return!1;t.containerActive=!1;var i=t.verify(),s=i.spliced,n=i.TuringTest;s?n?(t.containerSuccess=!0,t.$emit("success")):(t.containerFail=!0,t.sliderText="try again",t.reset()):(t.containerFail=!0,t.$emit("fail"),setTimeout(function(){t.reset()},1e3))})},touchMoveEvent:function(t){if(!this.isMouseDown)return!1;var e=t.changedTouches[0].pageX-this.originX,i=t.changedTouches[0].pageY-this.originY;if(e<0||e+38>=this.w)return!1;this.sliderLeft=e+"px";var s=(this.w-40-20)/(this.w-40)*e;this.block.style.left=s+"px",this.containerActive=!0,this.sliderMaskWidth=e+"px",this.trail.push(i)},touchEndEvent:function(t){var e=this;if(!this.isMouseDown)return!1;if(this.isMouseDown=!1,t.changedTouches[0].pageX===this.originX)return!1;this.containerActive=!1;var i=this.verify(),s=i.spliced,n=i.TuringTest;s?n?(this.containerSuccess=!0,this.$emit("success")):(this.containerFail=!0,this.sliderText="try again",this.reset()):(this.containerFail=!0,this.$emit("fail"),setTimeout(function(){e.reset()},1e3))},verify:function(){var t=this.trail,e=t.reduce(c)/t.length,i=t.map(function(t){return t-e}),s=Math.sqrt(i.map(l).reduce(c)/t.length),n=parseInt(this.block.style.left);return{spliced:Math.abs(n-this.block_x)<10,TuringTest:e!==s}},reset:function(){this.containerActive=!1,this.containerSuccess=!1,this.containerFail=!1,this.sliderLeft=0,this.block.style.left=0,this.sliderMaskWidth=0;var t=this.w,e=this.h;this.canvasCtx.clearRect(0,0,t,e),this.blockCtx.clearRect(0,0,t,e),this.block.width=t,this.img.src=this.getRandomImg()}}},h=u,f=(i("2925"),i("2877")),d=Object(f["a"])(h,r,o,!1,null,"0afbc672",null),p=d.exports,g={data:function(){return{notifyObj:null,text:"向右滑动",showSlide:!1,ruleForm:{user:"admin",password:"123456"},rules:{user:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:15,message:"长度在3到5个字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},mounted:function(){},methods:{onSuccess:function(){this.showSlide=!1,this._login()},onFail:function(){this.$message.error("验证失败")},refresh:function(){this.$refs.slideDiv.reset()},loginYz:function(t){var e=this;this.$refs[t].validate(function(t){t&&(e.showSlide=!0)})},_login:function(){var t=this;this.$store.dispatch("user/_login",this.ruleForm).then(function(e){e.data.success?(t.$router.push(t.$route.query.redirect),t.notifyObj&&t.notifyObj.close(),t.notifyObj=null):t.refresh()}).catch(function(e){t.refresh(),t.$message.error(e)})},shopTip:function(){this.notifyObj=this.$notify({title:"提示",message:"目前有两个登陆角色，管理员和普通用户，账号分别为：admin、user,密码都为：123456",duration:0,iconClass:"el-icon-s-opportunity"})}},components:{SlideVerify:p}},v=g,m=(i("f1c1"),i("77a8"),Object(f["a"])(v,s,n,!1,null,"1ca45ad0",null));e["default"]=m.exports},a8fb:function(t,e,i){var s={"./slide-0.jpg":"69a7","./slide-1.jpg":"71c4","./slide-2.jpg":"355f","./slide-3.jpg":"5492","./slide-4.jpg":"c017"};function n(t){var e=r(t);return i(e)}function r(t){var e=s[t];if(!(e+1)){var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}return e}n.keys=function(){return Object.keys(s)},n.resolve=r,t.exports=n,n.id="a8fb"},aa77:function(t,e,i){var s=i("5ca1"),n=i("be13"),r=i("79e5"),o=i("fdef"),a="["+o+"]",c="​",l=RegExp("^"+a+a+"*"),u=RegExp(a+a+"*$"),h=function(t,e,i){var n={},a=r(function(){return!!o[t]()||c[t]()!=c}),l=n[t]=a?e(f):o[t];i&&(n[i]=l),s(s.P+s.F*a,"String",n)},f=h.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=h},c017:function(t,e,i){t.exports=i.p+"static/img/slide-4.69bbd474.jpg"},c5f6:function(t,e,i){"use strict";var s=i("7726"),n=i("69a8"),r=i("2d95"),o=i("5dbc"),a=i("6a99"),c=i("79e5"),l=i("9093").f,u=i("11e9").f,h=i("86cc").f,f=i("aa77").trim,d="Number",p=s[d],g=p,v=p.prototype,m=r(i("2aeb")(v))==d,b="trim"in String.prototype,w=function(t){var e=a(t,!1);if("string"==typeof e&&e.length>2){e=b?e.trim():f(e,3);var i,s,n,r=e.charCodeAt(0);if(43===r||45===r){if(i=e.charCodeAt(2),88===i||120===i)return NaN}else if(48===r){switch(e.charCodeAt(1)){case 66:case 98:s=2,n=49;break;case 79:case 111:s=8,n=55;break;default:return+e}for(var o,c=e.slice(2),l=0,u=c.length;l<u;l++)if(o=c.charCodeAt(l),o<48||o>n)return NaN;return parseInt(c,s)}}return+e};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof p&&(m?c(function(){v.valueOf.call(i)}):r(i)!=d)?o(new g(w(e)),i,p):w(e)};for(var y,k=i("9e1e")?l(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;k.length>x;x++)n(g,y=k[x])&&!n(p,y)&&h(p,y,u(g,y));p.prototype=v,v.constructor=p,i("2aba")(s,d,p)}},dea6:function(t,e,i){},f1c1:function(t,e,i){"use strict";var s=i("693d"),n=i.n(s);n.a},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);