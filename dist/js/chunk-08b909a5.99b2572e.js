(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08b909a5"],{4889:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"openInBrowser"},[n("div",{staticClass:"browser-top clear"},[n("img",{staticClass:"arrow-icon",attrs:{src:r("890f"),alt:""}}),n("p",{staticClass:"notes"},[t._v(t._s(t.cn?"请在菜单中选择在浏览器中打开， 以完成支付":"Please select open in browser in the menu to complete the payment"))])]),n("div",{staticClass:"browser-box"},[n("img",{staticClass:"browser-icon",attrs:{src:r("7d93"),alt:""}}),n("span",{staticClass:"browser-txt"},[t._v(t._s(t.cn?"在浏览器中打开":"Open in browser"))])])])},A=[],s={methods:{getForm(){this.$get(urls.buyMethod,{order_id:this.$route.query.order_id,type:"ali",device_port:"mobile",language:this.$route.query.language||"cn"}).then(t=>{this.loadEnd()}).catch(t=>{this.loadEnd();const e=document.createElement("div");e.innerHTML=t.data,document.body.appendChild(e),setTimeout((function(){document.forms["alipaysubmit"].submit()}),200)})}},computed:{orderQuery(){var t={"90_vip_price":this.$store.state.payInfo[0],"180_vip_price":this.$store.state.payInfo[1],"360_vip_price":this.$store.state.payInfo[2],company_purchase_info_price:this.$store.state.payInfo[3],company_id:this.$store.state.payInfo[4]};return t},cn(){return"cn"==this.$store.state.language}},created(){if(!this.$route.query.order_id)return this.$router.replace({path:"/index"}),!1;var t=navigator.userAgent.toLowerCase(),e=-1!=t.indexOf("micromessenger");let r=this.$route.query.order_id;var n=null,A=0;if(e)return n=setInterval(()=>{if(console.log(233),A>=3600)return clearInterval(n),this.loadEnd(),this.cn?this.errorToast("支付超时，请重新支付"):this.errorToast("Payment timeout, please pay again"),this.$router.replace({path:"/pay-fail",query:{order_id:r}}),!1;this.$get(urls.paySuccess,{order_id:r}).then(t=>{if(t.data.pay_success){clearInterval(n),this.loadEnd();let t=""==this.orderQuery.company_id?null:this.orderQuery.company_id;return this.$router.replace({path:"/pay-success",query:{company_id:t}}),!1}}),A+=1},1e3),!1;this.getForm()}},o=s,d=(r("a4cb"),r("4e82")),i=Object(d["a"])(o,n,A,!1,null,"b8c8856e",null);e["default"]=i.exports},"6ff9":function(t,e,r){},"7d93":function(t,e){t.exports="data:image/png;base64,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"},"890f":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAABhCAMAAACnDtLnAAAAkFBMVEUAAADZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dlHMkXaAAAAL3RSTlMAMdogzOoL7gTzg1pJBuDBYExDOy35x6mkl350JRDk07GSZ2MZ0LafcGpUNhy6is1ZW/sAAAHtSURBVFjDtZfZdoJAEERFEBBkCyiigAsad/v//y5GkzgtMt39kHrMqXtOYKaKsqfXdtITqQHwRUAfoC/xj+CmkwCIvoFPvt+EuzZsoHgAK67fHj+AccAE5vCjNROof4Ga50/gTyMWYD0Bi+PPQFHJAHIV2NH+DSDZJDDDwIzyuw4GhhQQw4saMghIZCxSaMnQAktsJmNxhjc6a4DVO6DQBAGwyFgc4K0O9DvFCrv8H9hHxyLqAjpqs8QuOhbTbmDKeKd0LPbYQsdioAMct+U/glZxC1jogcWr3wBCKf1OsZbYHwwpwMFABaToi4pVtz6DhI6t79rJuCuL1RpLs8dfT2avU2X3k9IxcmwhMAj+AxipgCsEag6QEAWjCQZzAvk4BbRiEH6n19oGI9ojkmwZ9ijzUOOx55hgk+W48GhdFGAtnEuQcIAQtRetSm2ojD9y+VPXEOdHevcOCpBzgKsCeBxgKj23SHhurnoMpvStSitgIo1PIX1mn/dr5qlSWt2u8BF20rjF0jCYnBKTNndfeFVT6X90EaYtA+ExW2jkcS6qrFUrYqjqV+Kec69Fh7aZAEg61ccbcU6NhSUA0IVnpmYQ2EZTbDULFQHzm1NNJP0hPF/b43MQExn2QjR/vYrRdU1uhYOhE1q7RGf/AvnFEEJf0G0XAAAAAElFTkSuQmCC"},a4cb:function(t,e,r){"use strict";var n=r("6ff9"),A=r.n(n);A.a}}]);