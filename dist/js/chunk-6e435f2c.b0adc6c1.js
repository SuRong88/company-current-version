(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e435f2c"],{"0154":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAMAAAAMs7fIAAAARVBMVEUAAAApnv0onf0onf0onf0onf0onf0onf0onf0onf0onf0onf0onf3///8onf3s9/9Fqv3T6/9yv/7C4/6+4f7V7P90wP6w1mqUAAAADXRSTlMA524N7bp/XMBa+cFd+7HkOAAAAHhJREFUGNNtkOsOgCAIhQEtuxFml/d/1DCa5er8cOPbN8YRchx1fvYdObjTY9qEZUvYG2jjzpY9tpcRJU9zfiQG3YELF8KLd0CJX4QTQbNWZG0ApSKCMOhQonj4Oj976KjIQT/3QKhunqyXWmZYL7VK9wB3HI3P/5z61wurmtJfUwAAAABJRU5ErkJggg=="},"5d30":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bind"},[n("div",{staticClass:"wrapper"},[n("div",{staticClass:"content-wrapper"},[n("ul",[n("li",[n("span",{staticClass:"must label"},[t._v("\n\t\t\t\t\t\t"+t._s(t.cn?"登录密码设定":"Password")+"：\n\t\t\t\t\t")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.pwd,expression:"pwd"}],staticClass:"input",attrs:{type:"password",placeholder:t.cn?"输入密码":"Enter password"},domProps:{value:t.pwd},on:{input:function(e){e.target.composing||(t.pwd=e.target.value)}}}),n("span",{staticClass:"tip hide-m"},[t._v("\n\n\t\t\t\t\t\t"+t._s(t.cn?"首位字母，字母+数字不少于6位":"Begin with a letter, letter + number no less than 6 figures")+"\n\t\t\t\t\t")])]),n("li",{staticClass:"tip-box-m hide-p"},[n("span",{staticClass:"label"}),n("p",{},[n("span",{staticClass:"tip"},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.cn?"首位字母，字母+数字不少于6位":"Begin with a letter, letter + number no less than 6 figures")+"\n\t\t\t\t\t\t")])])]),n("li",[n("span",{staticClass:"must label"},[t._v("\n\n\t\t\t\t\t\t"+t._s(t.cn?"会员类型":"Membership")+"：\n\t\t\t\t\t")]),t.home?n("p",{staticClass:"type"},[t._v("\n\t\t\t\t\t\t"+t._s(t.cn?"国内会员":"Domestic Membership")+"\n\t\t\t\t\t")]):n("p",{staticClass:"type"},[t._v("\n\t\t\t\t\t\t"+t._s(t.cn?"国外会员":"Foreign Membership")+"\n\t\t\t\t\t")])]),n("li",{staticClass:"konw"},[n("span",{staticClass:"must label"},[t._v("\n\n\t\t\t\t\t\t"+t._s(t.cn?"我想了解":"Interested In")+"：\n\t\t\t\t\t")]),n("div",{staticClass:"condition-box"},[n("div",{staticClass:"select-item"},[n("el-radio-group",{model:{value:t.businessIndex,callback:function(e){t.businessIndex=e},expression:"businessIndex"}},t._l(t.businesses,(function(e,s){return n("el-radio-button",{attrs:{label:s}},[t._v(t._s(e.company_type_name))])})),1)],1),n("div",{staticClass:"select-item select-item2"},t._l(t.knowArr,(function(e,i){return n("div",{staticClass:"area-box area-box2"},[n("div",{staticClass:"cr-box"},[n("el-select",{staticClass:"country",attrs:{filterable:"","no-match-text":t.cn?"无匹配":"No match","no-data-text":t.cn?"无数据":"No data",placeholder:t.cn?"国家":"Country"},on:{change:function(e){return t.getRegion(i)}},model:{value:e[0],callback:function(s){t.$set(e,0,s)},expression:"obj[0]"}},t._l(t.countryArr,(function(t,e){return n("el-option",{key:t.country_id,attrs:{label:t.country_name,value:e}})})),1),n("el-select",{staticClass:"area",attrs:{filterable:"","no-match-text":t.cn?"无匹配":"No match","no-data-text":t.cn?"无数据":"No data",placeholder:t.cn?"地区":"Region"},model:{value:e[1],callback:function(s){t.$set(e,1,s)},expression:"obj[1]"}},t._l(t.knowRegionArr[i],(function(t,e){return n("el-option",{key:t.region_id,attrs:{label:t.region_name,value:e}})})),1),i==t.knowArr.length-1&&t.knowArr.length<3?n("span",{on:{click:t.addKnow}},[n("img",{staticClass:"add-icon",attrs:{src:s("0154"),alt:""}})]):t._e(),i>0?n("img",{staticClass:"remove-icon",attrs:{src:s("d7c6"),alt:""},on:{click:function(e){return t.reduceKnow(i)}}}):t._e()],1)])})),0),n("div",{staticClass:"select-item"},[n("div",{staticClass:"tag-box"},[n("el-checkbox-group",{attrs:{min:0,max:3},model:{value:t.checkedIndexs,callback:function(e){t.checkedIndexs=e},expression:"checkedIndexs"}},t._l(t.tags,(function(e,s){return n("el-checkbox",{key:e.company_type_id,attrs:{label:s}},[t._v(t._s(e.company_type_name))])})),1)],1)])])]),n("li",[n("span",{staticClass:"must label"},[t._v("\n\t\t\t\t\t\t"+t._s(t.cn?"国家/地区":"Country/Region")+"：\n\t\t\t\t\t")]),n("div",{staticClass:"area-box"},[n("el-select",{staticClass:"country",attrs:{filterable:"","no-match-text":t.cn?"无匹配":"No match","no-data-text":t.cn?"无数据":"No data",placeholder:t.cn?"国家":"Country"},on:{change:t.getRegion02},model:{value:t.countryIndex,callback:function(e){t.countryIndex=e},expression:"countryIndex"}},t._l(t.countryArr,(function(t,e){return n("el-option",{key:t.country_id,attrs:{label:t.country_name,value:e}})})),1),n("el-select",{staticClass:"area",attrs:{filterable:"","no-match-text":t.cn?"无匹配":"No match","no-data-text":t.cn?"无数据":"No data",placeholder:t.cn?"地区":"Region"},model:{value:t.region_id,callback:function(e){t.region_id=e},expression:"region_id"}},t._l(t.regionArr02,(function(t){return n("el-option",{key:t.region_id,attrs:{label:t.region_name,value:t.region_id}})})),1)],1)]),n("li",[n("span",{staticClass:"must label"},[t._v("\n\t\t\t\t\t\t"+t._s(t.cn?"手机号":"Phone")+"：\n\t\t\t\t\t")]),n("div",{staticClass:"phone-box"},[n("span",{staticClass:"prefix-icon"},[t._v("+")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.phone_prefix,expression:"phone_prefix"}],staticClass:"country-num",domProps:{value:t.phone_prefix},on:{input:function(e){e.target.composing||(t.phone_prefix=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"input phone",attrs:{type:"text",placeholder:t.cn?"输入手机号码":"Enter Mobile number"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})])]),n("li",[n("span",{staticClass:"label"},[t._v("\n\t\t\t\t\t\t"+t._s(t.cn?"微信":"WeChat")+"：\n\t\t\t\t\t")]),n("button",{staticClass:"btn btn-bind",on:{click:t.bindWechat}},[t._v("\n\n\t\t\t\t\t\t"+t._s(t.cn?"绑定微信":"Binding WeChat")+"\n\t\t\t\t\t")])]),n("li",[n("span",{staticClass:"label"},[t._v("\n\t\t\t\t\t\t"+t._s(t.cn?"QQ号":"QQ")+"：\n\t\t\t\t\t")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.qq,expression:"qq"}],staticClass:"input",attrs:{type:"text",placeholder:t.cn?"输入QQ账号":"Enter QQ number"},domProps:{value:t.qq},on:{input:function(e){e.target.composing||(t.qq=e.target.value)}}})]),n("li",[n("span",{staticClass:"label"},[t._v("whatsApp：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.whatsapp,expression:"whatsapp"}],staticClass:"input",attrs:{type:"text",placeholder:t.cn?"输入whatsApp账号":"Enter whatsApp number"},domProps:{value:t.whatsapp},on:{input:function(e){e.target.composing||(t.whatsapp=e.target.value)}}})]),n("li",[n("span",{staticClass:"label"}),n("p",{staticClass:"tip"},[t._v("\n\t\t\t\t\t\t"+t._s(t.cn?"注：带 * 号为必填选项":"Notes: * is required field")+"：\n\t\t\t\t\t")])])]),n("button",{staticClass:"btn btn-submit",on:{click:t.registerHandle}},[t._v("\n\n\t\t\t\t"+t._s(t.cn?"提交":"Submit")+"\n\t\t\t")])]),t.qrCode?n("div",{staticClass:"mask code-mask",on:{touchmove:function(t){t.preventDefault()}}},[n("div",{staticClass:"content"},[n("span",{staticClass:"el-icon el-icon-close close-btn",on:{click:function(e){t.qrCode=!1}}}),n("h2",{staticClass:"title"},[t._v("\n\t\t\t\t\t"+t._s(t.cn?"请打开微信进行扫码绑定":"Please open WeChat to scan the code for binding")+"\n\t\t\t\t")]),n("img",{staticClass:"code",attrs:{src:t.codeUrl,alt:""}}),t.mobile?n("p",{staticClass:"tips"},[t._v("\n\t\t\t\t\t"+t._s(t.cn?"请微信关注“全球并购公司”公众号后，长按识别本二维码绑定，获取最新信息":"Please follow WeChat Subscription “Global Company Sales” , then long press to identiry this QR code to obtain the latest information.")+"\n\t\t\t\t")]):n("p",{staticClass:"tips"},[t._v("\n\t\t\t\t\t"+t._s(t.cn?"请微信关注“全球并购公司”公众号后扫描本二维码绑定，获取最新信息":"Please follow WeChat Subscription “Global Company Sales” , then scan this QR code to subscribe and obtain the latest information.")+"\n\t\t\t\t")])])]):t._e()])])},i=[],a={name:"bind",data(){return{knowArr:[[]],knowRegionArr:[[]],mobile:!0,home:1,pwd:"",know_business_type:[],know_industry_type:[],know_area:[],countryIndex:null,country_id:"",region_id:"",phone_prefix:"",phone:"",qq:"",whatsapp:"",wx_code:"",company:"",select:!1,qrCode:!1,countryArr:[],regionArr01:[],regionArr02:[],checkedIndexs:[],tags:[],businessIndex:null,businesses:[],codeUrl:""}},watch:{checkedCountryIndexs(){this.checkedRegionIndexs=null;let t=this.countryArr[this.checkedCountryIndexs],e=this.regionArr01[this.checkedRegionIndexs];e||(e={region_id:"",region_name:""}),this.know_area[0]=Object.assign(t,e)},checkedRegionIndexs(){let t=this.countryArr[this.checkedCountryIndexs],e=this.regionArr01[this.checkedRegionIndexs];e||(e={region_id:"",region_name:""}),this.know_area[0]=Object.assign(t,e)},businessIndex(){this.know_business_type[0]=this.businesses[this.businessIndex]},checkedIndexs(){var t=[];this.checkedIndexs.forEach(e=>{t.push(this.tags[e])}),this.know_industry_type=t},countryIndex(){this.country_id=this.countryArr[this.countryIndex].country_id}},computed:{cn(){return"cn"==this.$store.state.language}},methods:{addKnow(){this.knowArr.push([]),this.knowRegionArr.push([])},reduceKnow(t){this.knowArr.splice(t,1),this.knowRegionArr.splice(t,1)},getHome(){this.$get(urls.isHome,{}).then(t=>{this.loadEnd(),this.home=t.data.home})},getRegion(t){this.$set(this.knowArr,t,[this.knowArr[t][0]]),this.$set(this.knowRegionArr,t,[]),this.$get(urls.area,{country_id:this.countryArr[this.knowArr[t][0]].country_id}).then(e=>{this.loadEnd(),this.$set(this.knowRegionArr,t,e.data.region),console.log(e)})},getRegion02(){this.region_id="",setTimeout(()=>{this.$get(urls.area,{country_id:this.country_id}).then(t=>{this.loadEnd(),this.regionArr02=t.data.region,console.log(t)})},100)},getCountry(){this.$get(urls.area,{language:"cn",country_id:0}).then(t=>{this.loadEnd(),this.countryArr=t.data.country,console.log(t)})},bindWechat(){this.qrCode=!0},getBusiness(){this.$get(urls.companyType,{parent_type:"business"}).then(t=>{this.loadEnd(),this.businesses=t.data,console.log(t)})},getIndustry(){this.$get(urls.companyType,{parent_type:"industry"}).then(t=>{this.loadEnd(),this.tags=t.data,console.log(t)})},registerHandle(){return this.know_area=[],this.knowArr.forEach((t,e)=>{if(0==t.length)return!1;let s=this.countryArr[t[0]],n=null;n=t.length<2?{region_id:"",region_name:""}:this.knowRegionArr[e][t[1]],this.know_area.push(Object.assign(s,n))}),this.nullTest(this.pwd)?(this.cn?this.errorToast("密码不能为空"):this.errorToast("Please enter password"),!1):this.know_business_type.length&&this.know_industry_type.length&&this.know_area.length?null==this.countryIndex?(this.cn?this.errorToast("请选择所在的国家"):this.errorToast("Please select your country"),!1):this.nullTest(this.phone_prefix)?(this.cn?this.errorToast("手机号码前缀不能为空"):this.errorToast("Please enter mobile number prefix"),!1):this.nullTest(this.phone)?(this.cn?this.errorToast("手机号码不能为空"):this.errorToast("Please enter mobile number"),!1):this.passwordTest(this.pwd)?void this.$post(urls.register,{pwd:this.md5(this.pwd),know_business_type:this.know_business_type,know_industry_type:this.know_industry_type,know_area:this.know_area,country_id:this.country_id,region_id:this.region_id,phone_prefix:this.phone_prefix,phone:this.phone,qq:this.qq,whatsapp:this.whatsApp,wx_code:""}).then(()=>{this.loadEnd(),this.$router.replace({path:"/register-success"})}).catch(t=>{this.errorToast(t.data.msg),this.loadEnd(),console.log(t)}):(this.cn?this.errorToast("密码格式有误"):this.errorToast("Incorrect password format"),!1):(this.cn?this.errorToast("请选择想了解的参数"):this.errorToast("Please select the parameters you want to know"),!1)}},created(){let t=localStorage.getItem("language")||"cn";window.screen.width>750?(this.mobile=!1,this.codeUrl="http://www.gcsgou.com/api/api/wx_account/qrcode_img?kinds=reg&device=pc&language="+t):this.codeUrl="http://www.gcsgou.com/api/api/wx_account/qrcode_img?kinds=reg&device=mobile&language="+t,this.getCountry(),this.getIndustry(),this.getBusiness(),this.getHome()}},o=a,r=(s("d4d0"),s("4e82")),c=Object(r["a"])(o,n,i,!1,null,"11545df1",null);e["default"]=c.exports},"6a60":function(t,e,s){},d4d0:function(t,e,s){"use strict";var n=s("6a60"),i=s.n(n);i.a},d7c6:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAMAAAAMs7fIAAAAZlBMVEUAAADT09PS0tLS0tLS0tLS0tLS0tLY2NjS0tLS0tLT09PS0tLS0tLS0tLT09PS0tLS0tLS0tLS0tLS0tLS0tLS0tL////z8/P7+/vW1tb19fXy8vLh4eHs7OzX19fS0tLu7u7i4uLgxatPAAAAFnRSTlMA6gvmcmxR/u7fZ8C5t7NW4XtYSw0JGs1JrgAAAKBJREFUGNNVkFcWAyEIRbFNL6kMEaftf5Nh0Hzkfnj0noegcGF93+ymDxYKszmZkDi5Kot7HTETN3+JR034g7YZ4GUi8qLnhTEaC+GU7UeUrFKdAgyMqrJAHsAQqlpVILWwo7LuK6ppSoYls5TMyCpiuZ5HCCmL0jF1YJ3ME/M80tBZgOpvZn2Z3zSidR6UyqWDiI7knlB4d9OtaadO/+cLrEATmypm+60AAAAASUVORK5CYII="}}]);