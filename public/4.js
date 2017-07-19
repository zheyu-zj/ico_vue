webpackJsonp([4],{

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(91)
}
var Component = __webpack_require__(14)(
  /* script */
  __webpack_require__(94),
  /* template */
  __webpack_require__(95),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zheyu-zj/Site/ico_vue/resources/assets/js/pages/ico/children/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2cbcb92c", Component.options)
  } else {
    hotAPI.reload("data-v-2cbcb92c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(92);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(15)("0a95f59b", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2cbcb92c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2cbcb92c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\n#icoChildrenMain {\n  width: 1140px;\n  margin: 0 auto;\n  overflow: hidden;\n  margin: 30px auto;\n}\n#icoChildrenMain .icoDetails {\n    float: left;\n    width: 800px;\n    box-sizing: border-box;\n    padding: 20px 40px 40px;\n    background: #fff;\n    overflow: hidden;\n}\n#icoChildrenMain .icoDetails > p {\n      font-size: 16px;\n      color: #555;\n}\n#icoChildrenMain .icoDetails > p a {\n        color: #f6ab26;\n        font-size: 16px;\n}\n#icoChildrenMain .icoDetails > h2 {\n      font-size: 24px;\n      color: #555;\n      text-align: center;\n      line-height: 64px;\n      height: 54px;\n}\n#icoChildrenMain .icoDetails > span {\n      display: block;\n      line-height: 17px;\n      color: #a4a4a4;\n      text-align: center;\n}\n#icoChildrenMain .icoDetails > table {\n      margin-top: 40px;\n      width: 100%;\n      color: #a4a4a4;\n}\n#icoChildrenMain .icoDetails > table tr {\n        line-height: 50px;\n        text-indent: 20px;\n}\n#icoChildrenMain .icoDetails > table thead tr {\n        text-align: left;\n        background: #f9f9f9;\n        line-height: 40px;\n}\n#icoChildrenMain .icoDetails > table th, #icoChildrenMain .icoDetails > table td {\n        border: 1px solid #e0e0e0;\n        font-size: 14px;\n        font-weight: 400;\n}\n#icoChildrenMain .icoDetails > table td span {\n        float: right;\n        line-height: 50px;\n        color: #555;\n        margin-right: 20px;\n}\n#icoChildrenMain .icoDetails > h3 {\n      height: 53px;\n      line-height: 63px;\n      font-size: 18px;\n      color: #6464D2;\n      border-bottom: 1px solid #e0e0e0;\n}\n#icoChildrenMain .icoDetails > div {\n      min-height: 800px;\n      padding: 0 10px;\n      /*恢复元素内默认浏览器样式*/\n      /*以上列表元素默认状态下一块状显示，未显示的将以内联元素显示，该列表针对HTML4版本，部分元素在XHTML1中将废弃*/\n      /*默认以列表显示*/\n      /*默认不显示*/\n      /*默认为表格显示*/\n      /*默认为表格行显示*/\n      /*默认为表格头部分组显示*/\n      /*默认为表格行分组显示*/\n      /*默认为表格标题显示，呈现加粗居中状态*/\n      /*默认为单元格显示*/\n      /*默认为表格底部分组显示*/\n      /*默认为表格列显示*/\n      /*默认为表格列分组显示*/\n      /*默认为表格标题显示*/\n      /*默认为表格标题显示，呈现居中状态*/\n      /*定义sub元素默认为下标显示*/\n      /*定义sub元素默认为上标显示*/\n      /*定义表头、主体表、表脚元素默认为垂直对齐*/\n      /*定义单元格、列标题默认为垂直对齐默认为继承*/\n      /* s, strike, del { text-decoration: line-through }*/\n      /*定义这些元素默认为删除线显示*/\n      /*定义分割线默认为1px宽的3D凹边效果*/\n      /* ol, ul, dir, menu, dd { margin-left: 40px }*/\n}\n#icoChildrenMain .icoDetails > div p {\n        display: block;\n        -webkit-margin-before: 1em;\n        -webkit-margin-after: 1em;\n        -webkit-margin-start: 0px;\n        -webkit-margin-end: 0px;\n        line-height: 1.12;\n}\n#icoChildrenMain .icoDetails > div address, #icoChildrenMain .icoDetails > div blockquote, #icoChildrenMain .icoDetails > div body, #icoChildrenMain .icoDetails > div dd, #icoChildrenMain .icoDetails > div div, #icoChildrenMain .icoDetails > div dl, #icoChildrenMain .icoDetails > div dt, #icoChildrenMain .icoDetails > div fieldset, #icoChildrenMain .icoDetails > div form, #icoChildrenMain .icoDetails > div frame, #icoChildrenMain .icoDetails > div frameset, #icoChildrenMain .icoDetails > div h1, #icoChildrenMain .icoDetails > div h2, #icoChildrenMain .icoDetails > div h3, #icoChildrenMain .icoDetails > div h4, #icoChildrenMain .icoDetails > div h5, #icoChildrenMain .icoDetails > div h6, #icoChildrenMain .icoDetails > div noframes, #icoChildrenMain .icoDetails > div ol, #icoChildrenMain .icoDetails > div p, #icoChildrenMain .icoDetails > div ul, #icoChildrenMain .icoDetails > div hr, #icoChildrenMain .icoDetails > div menu, #icoChildrenMain .icoDetails > div pre {\n        display: block;\n}\n#icoChildrenMain .icoDetails > div li {\n        display: list-item;\n}\n#icoChildrenMain .icoDetails > div head {\n        display: none;\n}\n#icoChildrenMain .icoDetails > div table {\n        display: table;\n}\n#icoChildrenMain .icoDetails > div tr {\n        display: table-row;\n}\n#icoChildrenMain .icoDetails > div h1 {\n        font-size: 2em;\n        margin: .67em 0;\n}\n#icoChildrenMain .icoDetails > div h2 {\n        font-size: 1.5em;\n        margin: .75em 0;\n}\n#icoChildrenMain .icoDetails > div h3 {\n        font-size: 1.17em;\n        margin: .83em 0;\n}\n#icoChildrenMain .icoDetails > div h4, #icoChildrenMain .icoDetails > div p, #icoChildrenMain .icoDetails > div blockquote, #icoChildrenMain .icoDetails > div ul, #icoChildrenMain .icoDetails > div fieldset, #icoChildrenMain .icoDetails > div form, #icoChildrenMain .icoDetails > div ol, #icoChildrenMain .icoDetails > div dl, #icoChildrenMain .icoDetails > div menu {\n        margin: 1.12em 0;\n}\n#icoChildrenMain .icoDetails > div h5 {\n        font-size: .83em;\n        margin: 1.5em 0;\n}\n#icoChildrenMain .icoDetails > div h6 {\n        font-size: .75em;\n        margin: 1.67em 0;\n}\n#icoChildrenMain .icoDetails > div h1, #icoChildrenMain .icoDetails > div h2, #icoChildrenMain .icoDetails > div h3, #icoChildrenMain .icoDetails > div h4, #icoChildrenMain .icoDetails > div h5, #icoChildrenMain .icoDetails > div h6, #icoChildrenMain .icoDetails > div b, #icoChildrenMain .icoDetails > div strong {\n        font-weight: bolder;\n}\n#icoChildrenMain .icoDetails > div thead {\n        display: table-header-group;\n}\n#icoChildrenMain .icoDetails > div tbody {\n        display: table-row-group;\n}\n#icoChildrenMain .icoDetails > div th {\n        font-weight: bolder;\n        text-align: center;\n}\n#icoChildrenMain .icoDetails > div td, #icoChildrenMain .icoDetails > div th {\n        display: table-cell;\n}\n#icoChildrenMain .icoDetails > div tfoot {\n        display: table-footer-group;\n}\n#icoChildrenMain .icoDetails > div col {\n        display: table-column;\n}\n#icoChildrenMain .icoDetails > div colgroup {\n        display: table-column-group;\n}\n#icoChildrenMain .icoDetails > div caption {\n        display: table-caption;\n}\n#icoChildrenMain .icoDetails > div caption {\n        text-align: center;\n}\n#icoChildrenMain .icoDetails > div i, #icoChildrenMain .icoDetails > div cite, #icoChildrenMain .icoDetails > div em, #icoChildrenMain .icoDetails > div var, #icoChildrenMain .icoDetails > div address {\n        font-style: italic;\n}\n#icoChildrenMain .icoDetails > div big {\n        font-size: 1.17em;\n}\n#icoChildrenMain .icoDetails > div sub {\n        vertical-align: sub;\n}\n#icoChildrenMain .icoDetails > div sup {\n        vertical-align: super;\n}\n#icoChildrenMain .icoDetails > div blockquote {\n        margin-left: 40px;\n        margin-right: 40px;\n}\n#icoChildrenMain .icoDetails > div pre, #icoChildrenMain .icoDetails > div tt, #icoChildrenMain .icoDetails > div code, #icoChildrenMain .icoDetails > div kbd, #icoChildrenMain .icoDetails > div samp {\n        font-family: monospace;\n}\n#icoChildrenMain .icoDetails > div pre {\n        white-space: pre;\n}\n#icoChildrenMain .icoDetails > div button, #icoChildrenMain .icoDetails > div textarea, #icoChildrenMain .icoDetails > div input, #icoChildrenMain .icoDetails > div object, #icoChildrenMain .icoDetails > div select {\n        display: inline-block;\n}\n#icoChildrenMain .icoDetails > div small, #icoChildrenMain .icoDetails > div sub, #icoChildrenMain .icoDetails > div sup {\n        font-size: .83em;\n}\n#icoChildrenMain .icoDetails > div table {\n        border-spacing: 2px;\n}\n#icoChildrenMain .icoDetails > div thead, #icoChildrenMain .icoDetails > div tbody, #icoChildrenMain .icoDetails > div tfoot {\n        vertical-align: middle;\n}\n#icoChildrenMain .icoDetails > div td, #icoChildrenMain .icoDetails > div th {\n        vertical-align: inherit;\n}\n#icoChildrenMain .icoDetails > div hr {\n        border: 1px inset;\n}\n#icoChildrenMain .icoDetails > div ol {\n        list-style-type: decimal;\n}\n#icoChildrenMain .icoDetails > div a {\n        color: #0000EE;\n        text-decoration: none;\n}\n#icoChildrenMain .icoUser {\n    float: right;\n    width: 320px;\n}\n#icoChildrenMain .icoUser .coin {\n      width: 100%;\n      box-sizing: border-box;\n      padding: 30px;\n      background: #fff;\n      overflow: hidden;\n}\n#icoChildrenMain .icoUser .coin .coinIntroduction {\n        position: relative;\n        overflow: hidden;\n}\n#icoChildrenMain .icoUser .coin .coinIntroduction img {\n          float: left;\n          width: 70px;\n          height: 70px;\n          border-radius: 50%;\n}\n#icoChildrenMain .icoUser .coin .coinIntroduction .coinName {\n          width: 139px;\n          float: left;\n          font-size: 18px;\n          color: #555;\n          line-height: 70px;\n          text-indent: 12px;\n          overflow: hidden;\n          text-overflow-ellipsis: ellipsis;\n          white-space: normal;\n}\n#icoChildrenMain .icoUser .coin .coinIntroduction .coinName span {\n            margin-left: 3px;\n            font-size: 14px;\n            color: #a4a4a4;\n}\n#icoChildrenMain .icoUser .coin .coinIntroduction i {\n          position: absolute;\n          display: inline-block;\n          top: 20px;\n          right: 0;\n          box-sizing: border-box;\n          height: 25px;\n          line-height: 25px;\n          text-align: center;\n          color: #f6ab26;\n          border: 1px solid #f6ab26;\n          padding: 0 6px;\n}\n#icoChildrenMain .icoUser .coin > h6 {\n        line-height: 17px;\n        color: #555;\n        margin-top: 20px;\n        font-weight: 400;\n}\n#icoChildrenMain .icoUser .coin > h6 span {\n          color: #f6ab26;\n}\n#icoChildrenMain .icoUser .coin .el-progress-bar__inner {\n        background: #6464D2;\n}\n#icoChildrenMain .icoUser .coin > .aims {\n        margin-top: 20px;\n        display: flex;\n}\n#icoChildrenMain .icoUser .coin > .aims p {\n          flex: 1;\n          line-height: 1;\n          color: #a4a4a4;\n          text-align: center;\n}\n#icoChildrenMain .icoUser .coin > .aims p span {\n            color: #f6ab26;\n            font-size: 24px;\n}\n#icoChildrenMain .icoUser .coin > .aims p i {\n            font-size: 14px;\n            font-weight: 400;\n            font-style: normal;\n            color: #555;\n}\n#icoChildrenMain .icoUser .trad {\n      width: 320px;\n      height: 458px;\n      margin-top: 20px;\n      background: #fff;\n      box-sizing: border-box;\n      padding: 30px;\n}\n#icoChildrenMain .icoUser .trad > p, #icoChildrenMain .icoUser .trad > label > span {\n        font-size: 14px;\n        color: #a4a4a4;\n}\n#icoChildrenMain .icoUser .trad p {\n        line-height: 20px;\n        margin-bottom: 28px;\n}\n#icoChildrenMain .icoUser .trad p:first-of-type {\n          margin-bottom: 36px;\n}\n#icoChildrenMain .icoUser .trad p i {\n          font-style: normal;\n          font-size: 24px;\n          color: #f6ab26;\n}\n#icoChildrenMain .icoUser .trad p b {\n          color: #f6ab26;\n}\n#icoChildrenMain .icoUser .trad p span {\n          color: #555;\n}\n#icoChildrenMain .icoUser .trad label {\n        display: block;\n        height: 56px;\n}\n#icoChildrenMain .icoUser .trad label span {\n          float: left;\n          line-height: 36px;\n}\n#icoChildrenMain .icoUser .trad label input {\n          float: left;\n          box-sizing: border-box;\n          width: 190px;\n          height: 36px;\n          padding: 10px;\n}\n#icoChildrenMain .icoUser .trad button {\n        display: block;\n        height: 50px;\n        font-size: 16px;\n        color: #fff;\n        text-align: center;\n        background: linear-gradient(-180deg, #8A8ADE 0%, #6464D2 100%);\n        box-shadow: 0 2px 0 0 #E2E2F2;\n        border-radius: 70px;\n        border: 0 !important;\n        text-decoration: none;\n        width: 220px;\n        margin: 30px auto 0;\n}\n#icoChildrenMain .icoUser .trad button:hover {\n          background: linear-gradient(-180deg, #6262d3 0%, #3c3cc7 100%);\n          color: #fff;\n}\n#icoChildrenMain .icoUser .trad button:active {\n          background: linear-gradient(-180deg, #6464D2 0%, #8A8ADE 100%);\n}\n#icoChildrenMain .icoUser .trad a {\n        display: block;\n        text-align: center;\n        line-height: 37px;\n        height: 37px;\n        font-szie: 14px;\n        color: #f6ab26;\n}\n#icoChildrenMain .icoUser .login {\n      width: 320px;\n      height: 514px;\n      box-sizing: border-box;\n      background: #fff;\n      padding: 162px 50px 152px;\n      margin-top: 30px;\n}\n#icoChildrenMain .icoUser .login > div {\n        overflow: hidden;\n        margin-bottom: 63px;\n}\n#icoChildrenMain .icoUser .login > div .no-login {\n          float: left;\n          width: 50px;\n          height: 50px;\n          background: url(" + __webpack_require__(93) + ") center;\n          background-size: 50px;\n}\n#icoChildrenMain .icoUser .login > div p {\n          float: left;\n          width: 140px;\n          text-indent: 14px;\n          font-size: 18px;\n          line-height: 50px;\n}\n#icoChildrenMain .icoUser .login .loginUp {\n        display: block;\n        height: 50px;\n        font-size: 16px;\n        color: #fff;\n        text-align: center;\n        background: linear-gradient(-180deg, #8A8ADE 0%, #6464D2 100%);\n        box-shadow: 0 2px 0 0 #E2E2F2;\n        border-radius: 70px;\n        border: 0 !important;\n        text-decoration: none;\n        width: 220px;\n        line-height: 50px;\n        margin: 0 auto;\n}\n#icoChildrenMain .icoUser .login .loginUp:hover {\n          background: linear-gradient(-180deg, #6262d3 0%, #3c3cc7 100%);\n          color: #fff;\n}\n#icoChildrenMain .icoUser .login .loginUp:active {\n          background: linear-gradient(-180deg, #6464D2 0%, #8A8ADE 100%);\n}\n#icoChildrenMain .icoUser .login .registered {\n        margin-bottom: 30px;\n        display: block;\n        text-align: center;\n        line-height: 37px;\n        color: #f6ab26;\n        font-size: 14px;\n}\n", ""]);

// exports


/***/ }),

/***/ 93:
/***/ (function(module, exports) {

module.exports = "/images/no-login.png?56623a9e5185d65af22faa13d741744f";

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(7);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {};
    },
    created: function created() {
        this.load();
    },

    watch: {
        '$route': 'load'
    },
    computed: __WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapState */]({
        project: function project(state) {
            var project = {};
            var allProject = state.ico.allProject;
            var path = this.$route.params.id;
            allProject.forEach(function (vals) {
                for (var val in vals) {
                    if (val == 'id' && vals[val] == path) {
                        project = vals;
                    }
                }
            });
            return project;
        },
        login: function login(state) {
            return state.user.login.login;
        },
        rmb: function rmb(state) {
            var rmb = {};
            state.user.allAssets.forEach(function (vals) {
                for (var val in vals) {
                    if (val === 'id' && vals[val] === 0) {
                        for (var index in vals) {
                            if (index === 'usable') {
                                rmb[index] = vals[index];
                            }
                            if (index === 'EsAbbreviation') {
                                rmb[index] = vals[index];
                            }
                        }
                    }
                }
            });
            return rmb;
        }
    }),
    methods: {
        load: function load() {
            this.$store.dispatch('get_allProject');
            this.$store.dispatch('get_login');
        },
        handleSelect: function handleSelect(key, keyPath) {
            //                console.log(this.$store.state)
        },
        handleSizeChange: function handleSizeChange(val) {
            //                console.log(`每页 ${val} 条`);
        },
        handleCurrentChange: function handleCurrentChange(val) {
            //                console.log(`当前页: ${val}`);
        }
    }
});

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "icoChildrenMain"
    }
  }, [_c('div', {
    staticClass: "icoDetails"
  }, [_c('p', [_c('router-link', {
    attrs: {
      "to": "/ico"
    }
  }, [_vm._v("众筹中心")]), _vm._v("\n            > " + _vm._s(_vm.project.title) + "\n        ")], 1), _vm._v(" "), _c('h2', [_vm._v(_vm._s(_vm.project.title))]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.project.type))]), _vm._v(" "), (_vm.project.commit) ? _c('table', [_vm._m(0), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("中文名 "), _c('span', [_vm._v(_vm._s(_vm.project.name))])]), _vm._v(" "), _c('td', [_vm._v("英文名 "), _c('span', [_vm._v(_vm._s(_vm.project.EsName))])]), _vm._v(" "), _c('td', [_vm._v("缩写代码 "), _c('span', [_vm._v(_vm._s(_vm.project.EsAbbreviation))])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("研发者 "), _c('span', [_vm._v(_vm._s(_vm.project.Developers))])]), _vm._v(" "), _c('td', [_vm._v("核心算法 "), _c('span', [_vm._v(_vm._s(_vm.project.CoreAlgorithm))])]), _vm._v(" "), _c('td', [_vm._v("证明方式 "), _c('span', [_vm._v(_vm._s(_vm.project.ProofWay))])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("区块时间 "), _c('span', [_vm._v(_vm._s(_vm.project.BlockTime))])]), _vm._v(" "), _c('td', [_vm._v("货币总量 "), _c('span', [_vm._v(_vm._s(_vm.project.coinsTotal))])]), _vm._v(" "), _c('td', [_vm._v("发比日期 "), _c('span', [_vm._v(_vm._s(_vm.project.time))])])]), _vm._v(" "), _c('tr', [_c('td', {
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v("币加锁 "), _c('span', [_vm._v(_vm._s(_vm.project.CoinLock))])])])])]) : _vm._e(), _vm._v(" "), _c('h3', [_vm._v("项目简介")]), _vm._v(" "), _c('div')]), _vm._v(" "), _c('div', {
    staticClass: "icoUser"
  }, [_c('div', {
    staticClass: "coin"
  }, [_c('div', {
    staticClass: "coinIntroduction"
  }, [_c('img', {
    attrs: {
      "src": "",
      "alt": ""
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "coinName"
  }, [_vm._v(_vm._s(_vm.project.name) + " "), _c('span', [_vm._v(_vm._s(_vm.project.EsAbbreviation))])]), _vm._v(" "), (_vm.project.status == 0) ? _c('i', {
    staticClass: "finish"
  }, [_vm._v("展示中")]) : _vm._e(), _vm._v(" "), (_vm.project.status == 1) ? _c('i', {
    staticClass: "finish"
  }, [_vm._v("预热中")]) : _vm._e(), _vm._v(" "), (_vm.project.status == 2) ? _c('i', {
    staticClass: "finish"
  }, [_vm._v("进行中")]) : _vm._e(), _vm._v(" "), (_vm.project.status == 3) ? _c('i', {
    staticClass: "finish"
  }, [_vm._v("处理中")]) : _vm._e(), _vm._v(" "), (_vm.project.status == 4) ? _c('i', {
    staticClass: "finish"
  }, [_vm._v("已结束")]) : _vm._e()]), _vm._v(" "), _c('h6', [_vm._v("众筹进度："), _c('span', [_vm._v(_vm._s(_vm.project.schedule) + "%")])]), _vm._v(" "), _c('el-progress', {
    attrs: {
      "percentage": _vm.project.schedule,
      "show-text": false
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "aims"
  }, [_c('p', [_c('span', [_vm._v(_vm._s(_vm.project.aims))]), _c('i', [_vm._v("份")]), _c('br'), _vm._v("ICO目标")]), _vm._v(" "), _c('p', [_c('span', [_vm._v(_vm._s(_vm.project.complete))]), _c('i', [_vm._v("份")]), _c('br'), _vm._v("已支持份数")])])], 1), _vm._v(" "), (_vm.login) ? _c('div', {
    staticClass: "trad"
  }, [_c('p', [_vm._v("每份单价："), _c('i', [_vm._v(" " + _vm._s(_vm.project.price) + " ")]), _c('span', [_vm._v(_vm._s(_vm.project.EsAbbreviation))])]), _vm._v(" "), _c('p', [_vm._v("可用余额："), _c('b', [_vm._v(" " + _vm._s(_vm.rmb.usable) + " ")]), _c('span', [_vm._v(_vm._s(_vm.rmb.EsAbbreviation))])]), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _c('button', [_vm._v("立即申购")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("余额不够？去充值")])], 1) : _c('div', {
    staticClass: "login"
  }, [_c('div', [_c('div', {
    staticClass: "no-login"
  }), _vm._v(" "), _c('p', [_vm._v("您尚未登录")])]), _vm._v(" "), _c('router-link', {
    staticClass: "loginUp",
    attrs: {
      "to": "/login"
    }
  }, [_vm._v("立即登录")]), _vm._v(" "), _c('router-link', {
    staticClass: "registered",
    attrs: {
      "to": "/register"
    }
  }, [_vm._v("注册")])], 1)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('th', {
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v("技术参数")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', [_c('span', [_vm._v("申购份数：")]), _vm._v(" "), _c('input', {
    attrs: {
      "type": "number"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', [_c('span', [_vm._v("申购金额：")]), _vm._v(" "), _c('input', {
    attrs: {
      "type": "text",
      "disabled": "",
      "placeholder": "0"
    }
  }), _vm._v(" "), _c('i')])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', [_c('span', [_vm._v("交易密码：")]), _vm._v(" "), _c('input', {
    attrs: {
      "type": "password"
    }
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2cbcb92c", module.exports)
  }
}

/***/ })

});