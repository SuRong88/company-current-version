(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d3873434"],{"7ecb":function(t,n,e){"use strict";e.r(n);var s=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"pay"},[s("div",{staticClass:"wrapper"},[s("img",{staticClass:"result-icon",attrs:{src:e("96c0"),alt:""}}),s("p",{staticClass:"pay-result"},[t._v(t._s(t.cn?"支付成功":"Payment Accepted"))]),s("p",{staticClass:"pay-tip"},[0==t.company_id?s("span",[t._v(t._s(t.cn?"已成功购买VIP会员套餐～":"Successfully Purchased VIP Membership "))]):t._e()]),s("div",{staticClass:"btn-box"},[0!=t.company_id?s("router-link",{attrs:{to:{path:"/company_purchase_info",query:{company_id:t.company_id}},tag:"button"}},[t._v("\n\t\t\t\t"+t._s(t.cn?"查看公司详情":"View Company Details")+"\n\t\t\t")]):s("router-link",{attrs:{to:"/me/info",tag:"button"}},[t._v("\n\t\t\t\t"+t._s(t.cn?"返回个人中心":"Return to Personal Center")+"\n\t\t\t")]),s("router-link",{attrs:{to:"/index",tag:"button"}},[t._v("\n\t\t\t\t"+t._s(t.cn?"返回首页":"Return to Home Page")+"\n\t\t\t")])],1)])])},a=[],c={data(){return{company_id:""}},computed:{cn(){return"cn"==this.$store.state.language}},methods:{getQuery(){this.$store.commit("clearPayInfo"),this.company_id=this.$route.query.company_id,console.log(this.company_id),0==this.company_id&&this.$store.dispatch("getUserInfoHandle")}},created(){this.getQuery()}},o=c,i=e("4e82"),r=Object(i["a"])(o,s,a,!1,null,null,null);n["default"]=r.exports},"96c0":function(t,n,e){t.exports=e.p+"img/icon05.29c6b760.png"}}]);