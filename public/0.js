webpackJsonp([0],{

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(53)
}
var Component = __webpack_require__(14)(
  /* script */
  __webpack_require__(55),
  /* template */
  __webpack_require__(56),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zheyu-zj/Site/ico_vue/resources/assets/js/components/hotProject.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] hotProject.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4b629b70", Component.options)
  } else {
    hotAPI.reload("data-v-4b629b70", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(54);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(15)("1eb4ff4d", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4b629b70\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./hotProject.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4b629b70\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./hotProject.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "\n.hotProject {\n  background: #fff;\n}\n.hotProject > li {\n    height: 330px;\n    line-height: 330px;\n    line-height: 10px;\n    padding: 0 !important;\n}\n.hotProject > li.is-active {\n      color: #555;\n}\n.hotProject > li:hover {\n      background: #fff;\n      color: #555;\n}\n.hotProject > li.el-menu-item {\n      border-bottom: 0 !important;\n      background: #fff;\n}\n.hotProject > li.el-menu-item:hover {\n        background: #fff;\n}\n.hotProject > li .figure {\n      position: relative;\n      height: 330px;\n}\n.hotProject > li .figure p {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 80px;\n        height: 38px;\n        border-radius: 0 0 19px 0;\n        font-size: 14px;\n        color: #fff;\n        text-align: center;\n        line-height: 38px;\n}\n.hotProject > li .figure p.show {\n          background: green;\n}\n.hotProject > li .figure p.preheating {\n          background: green;\n}\n.hotProject > li .figure p.getOn {\n          background: green;\n}\n.hotProject > li .figure p.dealWith {\n          background: green;\n}\n.hotProject > li .figure p.finish {\n          background: #6464D2;\n}\n.hotProject > li .figure img {\n        display: block;\n        width: 100%;\n        height: 100%;\n}\n.hotProject > li .figure span {\n        position: absolute;\n        bottom: 10px;\n        right: 10px;\n        font-size: 14px;\n        line-height: 20px;\n        color: #fff;\n        text-shadow: 0 1px 1px #000;\n}\n.hotProject > li .introduce {\n      height: 330px;\n      box-sizing: border-box;\n      padding: 35px 30px 27px;\n}\n.hotProject > li .introduce h3 {\n        font-size: 24px;\n        font-weight: bold;\n        color: #555;\n        line-height: 1;\n}\n.hotProject > li .introduce .introduceCon {\n        margin-top: 16px;\n        font-size: 16px;\n        color: #a4a4a4;\n        line-height: 1.5;\n        height: 74px;\n        display: -webkit-box;\n        -webkit-box-orient: vertical;\n        -webkit-line-clamp: 3;\n        word-break: normal;\n        word-wrap: break-word;\n        white-space: normal !important;\n        overflow: hidden;\n}\n.hotProject > li .introduce h6 {\n        font-size: 16px;\n        color: #555;\n        line-height: 42px;\n        font-weight: 400;\n}\n.hotProject > li .introduce h6 span {\n          color: #f6ab26;\n}\n.hotProject > li .introduce .el-progress-bar__inner {\n        background: #6464D2;\n}\n.hotProject > li .introduce .el-progress-bar__outer {\n        height: 8px !important;\n}\n.hotProject > li .introduce > .p_warp {\n        margin-top: 46px;\n        width: 100%;\n        display: flex;\n        height: 60px;\n}\n.hotProject > li .introduce > .p_warp > span {\n          display: block;\n          width: 1px;\n          background: #eaeaea;\n          height: 100%;\n}\n.hotProject > li .introduce > .p_warp > p {\n          flex: 1;\n          text-align: center;\n          font-size: 24px;\n          color: #f6ab26;\n          line-height: 1.2;\n}\n.hotProject > li .introduce > .p_warp > p > span {\n            font-size: 14px;\n            line-height: 1;\n            color: #a4a4a4;\n}\n.hotProject > li .introduce > .p_warp > p .seeDetails {\n            float: right;\n            width: 120px;\n            margin: 8px 1px 0 0;\n            display: block;\n            height: 40px;\n            font-size: 16px;\n            color: #fff;\n            text-align: center;\n            background: linear-gradient(-180deg, #8A8ADE 0%, #6464D2 100%);\n            box-shadow: 0 2px 0 0 #E2E2F2;\n            border-radius: 3px;\n            border: 0 !important;\n            text-decoration: none;\n            line-height: 40px;\n}\n.hotProject > li .introduce > .p_warp > p .seeDetails:hover {\n              background: linear-gradient(-180deg, #6262d3 0%, #3c3cc7 100%);\n              color: #fff;\n}\n.hotProject > li .introduce > .p_warp > p .seeDetails:active {\n              background: linear-gradient(-180deg, #6464D2 0%, #8A8ADE 100%);\n}\n", ""]);

// exports


/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

    props: {
        hotProject: [Object]
    }
});

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-menu', {
    staticClass: "hotProject",
    attrs: {
      "router": ""
    }
  }, [_c('el-menu-item', {
    attrs: {
      "index": ("/ico/" + (_vm.hotProject.id))
    }
  }, [_c('el-row', [_c('el-col', {
    staticClass: "figure",
    attrs: {
      "span": 12
    }
  }, [(_vm.hotProject.status === '0') ? _c('p', {
    staticClass: "finish"
  }, [_vm._v("展示中")]) : _vm._e(), _vm._v(" "), (_vm.hotProject.status === '1') ? _c('p', {
    staticClass: "finish"
  }, [_vm._v("预热中")]) : _vm._e(), _vm._v(" "), (_vm.hotProject.status === '2') ? _c('p', {
    staticClass: "finish"
  }, [_vm._v("进行中")]) : _vm._e(), _vm._v(" "), (_vm.hotProject.status === '3') ? _c('p', {
    staticClass: "finish"
  }, [_vm._v("处理中")]) : _vm._e(), _vm._v(" "), (_vm.hotProject.status === '4') ? _c('p', {
    staticClass: "finish"
  }, [_vm._v("已结束")]) : _vm._e(), _vm._v(" "), _c('img', {
    attrs: {
      "src": _vm.hotProject.img
    }
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.hotProject.type))])]), _vm._v(" "), _c('el-col', {
    staticClass: "introduce",
    attrs: {
      "span": 12
    }
  }, [_c('h3', [_vm._v(_vm._s(_vm.hotProject.title))]), _vm._v(" "), _c('p', {
    ref: "introduceCon",
    staticClass: "introduceCon"
  }, [_vm._v("\n                    " + _vm._s(_vm.hotProject.Introduction) + "\n                ")]), _vm._v(" "), _c('h6', [_vm._v("众筹进度："), _c('span', [_vm._v(_vm._s(_vm.hotProject.schedule) + "%")])]), _vm._v(" "), _c('el-progress', {
    attrs: {
      "percentage": _vm.hotProject.schedule,
      "show-text": false
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "p_warp"
  }, [_c('p', [_vm._v(_vm._s(_vm.hotProject.aims) + "份"), _c('br'), _vm._v(" "), _c('span', [_vm._v("ico目标")])]), _vm._v(" "), _c('span'), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.hotProject.complete) + "份"), _c('br'), _vm._v(" "), _c('span', [_vm._v("已募集")])]), _vm._v(" "), _c('p', [_c('router-link', {
    staticClass: "seeDetails",
    attrs: {
      "to": "/trading"
    }
  }, [_vm._v("查看详情")])], 1)])], 1)], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4b629b70", module.exports)
  }
}

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(58)
}
var Component = __webpack_require__(14)(
  /* script */
  __webpack_require__(60),
  /* template */
  __webpack_require__(61),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zheyu-zj/Site/ico_vue/resources/assets/js/components/project.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] project.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7b83dbe5", Component.options)
  } else {
    hotAPI.reload("data-v-7b83dbe5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(59);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(15)("5b98278c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7b83dbe5\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./project.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7b83dbe5\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./project.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "\n.project {\n  background: #f5f5f5;\n}\n.project .project_wrap {\n    height: 390px;\n    line-height: 390px;\n    width: 360px;\n    padding: 0;\n    margin: 0 30px 30px 0 !important;\n    height: 390px !important;\n}\n.project .project_wrap:hover {\n      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.13);\n}\n.project .project_wrap.is-active {\n      color: #6464D2;\n}\n.project .project_wrap:hover {\n      background: #fff;\n      color: #6464D2;\n}\n.project .project_wrap.el-menu-item {\n      border-bottom: 0 !important;\n      background: #fff;\n}\n.project .project_wrap.el-menu-item:hover {\n        background: #fff;\n}\n.project .project_wrap:nth-of-type(3n) {\n      margin-right: 0 !important;\n}\n.project .project_wrap .seeDetailsWrap {\n      display: flex;\n}\n.project .project_wrap .seeDetailsWrap p {\n        margin: 20px 0;\n        flex: 1;\n        text-align: left;\n        font-size: 12px;\n        color: #a4a4a4;\n        line-height: 20px;\n}\n.project .project_wrap .seeDetailsWrap p span {\n          font-size: 24px;\n          color: #f6ab26;\n          line-height: 33px;\n}\n.project .project_wrap .seeDetailsWrap .seeDetails {\n        margin: 30px 0;\n        width: 120px;\n        display: block;\n        height: 40px !important;\n        font-size: 16px;\n        color: #fff;\n        text-align: center;\n        background: linear-gradient(-180deg, #8A8ADE 0%, #6464D2 100%);\n        box-shadow: 0 2px 0 0 #E2E2F2;\n        border-radius: 3px;\n        border: 0 !important;\n        text-decoration: none;\n        line-height: 40px;\n}\n.project .project_wrap .seeDetailsWrap .seeDetails:hover {\n          background: linear-gradient(-180deg, #6262d3 0%, #3c3cc7 100%);\n          color: #fff;\n}\n.project .project_wrap .seeDetailsWrap .seeDetails:active {\n          background: linear-gradient(-180deg, #6464D2 0%, #8A8ADE 100%);\n}\n.project .project_wrap .img_wrap {\n      width: 100%;\n      height: 210px;\n      position: relative;\n}\n.project .project_wrap .img_wrap p {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 80px;\n        height: 38px;\n        background: #6464D2;\n        border-radius: 0 0 19px 0;\n        font-size: 14px;\n        color: #fff;\n        line-height: 38px;\n        text-align: center;\n        font-weight: 400;\n}\n.project .project_wrap .img_wrap img {\n        width: 100%;\n        height: 100%;\n}\n.project .project_wrap .img_wrap span {\n        position: absolute;\n        bottom: 10px;\n        right: 10px;\n        font-size: 14px;\n        line-height: 20px;\n        color: #fff;\n        text-shadow: 0 1px 1px #000;\n}\n.project .project_wrap .Introduction {\n      width: 100%;\n      height: 180px;\n      box-sizing: border-box;\n      padding: 0 19px;\n      border: 1px solid #e1e1e1;\n}\n.project .project_wrap .Introduction h3 {\n        font-size: 18px;\n        font-weight: bold;\n        height: 40px;\n        line-height: 40px;\n        overflow: hidden;\n}\n.project .project_wrap .Introduction h6 {\n        font-size: 12px;\n        line-height: 25px;\n        height: 25px;\n        font-weight: 400;\n}\n.project .project_wrap .Introduction h6 span {\n          color: #f6ab26;\n}\n", ""]);

// exports


/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

    props: {
        project: [Array]
    },
    methods: {
        load: function load() {
            this.$store.dispatch('get_login');
        },
        handleSelect: function handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
});

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-menu', {
    staticClass: "project",
    attrs: {
      "router": "",
      "mode": "horizontal"
    },
    on: {
      "select": _vm.handleSelect
    }
  }, _vm._l((_vm.project), function(data) {
    return _c('el-menu-item', {
      key: data.id,
      staticClass: "project_wrap",
      attrs: {
        "index": ("/ico/" + (data.id))
      }
    }, [_c('div', {
      staticClass: "img_wrap"
    }, [(data.status === '0') ? _c('p', {
      staticClass: "finish"
    }, [_vm._v("展示中")]) : _vm._e(), _vm._v(" "), (data.status === '1') ? _c('p', {
      staticClass: "finish"
    }, [_vm._v("预热中")]) : _vm._e(), _vm._v(" "), (data.status === '2') ? _c('p', {
      staticClass: "finish"
    }, [_vm._v("进行中")]) : _vm._e(), _vm._v(" "), (data.status === '3') ? _c('p', {
      staticClass: "finish"
    }, [_vm._v("处理中")]) : _vm._e(), _vm._v(" "), (data.status === '4') ? _c('p', {
      staticClass: "finish"
    }, [_vm._v("已结束")]) : _vm._e(), _vm._v(" "), _c('img', {
      attrs: {
        "src": data.img,
        "alt": ""
      }
    }), _vm._v(" "), _c('span', [_vm._v(_vm._s(data.type))])]), _vm._v(" "), _c('div', {
      staticClass: "Introduction"
    }, [_c('h3', [_vm._v(_vm._s(data.title))]), _vm._v(" "), _c('h6', [_vm._v("众筹进度："), _c('span', [_vm._v(_vm._s(data.schedule) + "%")])]), _vm._v(" "), _c('el-progress', {
      attrs: {
        "percentage": data.schedule,
        "show-text": false
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "seeDetailsWrap"
    }, [_c('p', [_c('span', [_vm._v(_vm._s(data.complete) + "份")]), _vm._v(" "), _c('br'), _vm._v("\n                    已募集\n                ")]), _vm._v(" "), _c('router-link', {
      staticClass: "seeDetails",
      attrs: {
        "to": ("/ico/" + (data.id))
      }
    }, [_vm._v("查看详情")])], 1)], 1)])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7b83dbe5", module.exports)
  }
}

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(67);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(15)("3a8bc2af", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-318d2758\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-318d2758\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "\n#icoMain .banner {\n  width: 100%;\n  min-width: 1140px;\n  height: 400px;\n  background: url(" + __webpack_require__(68) + ") center;\n}\n#icoMain .icoWarp {\n  width: 1140px;\n  margin: 30px auto;\n}\n#icoMain .icoWarp .icoTab {\n    width: 100%;\n    height: 48px;\n    box-sizing: border-box;\n    border: 1px solid #e0e0e0;\n    padding: 0 18px;\n    margin: 30px 0;\n    background: #fff;\n}\n#icoMain .icoWarp .icoTab li {\n      float: left;\n      padding: 0 12px;\n      font-size: 14px;\n      color: #a4a4a4;\n      line-height: 48px;\n      list-style: none;\n}\n#icoMain .icoWarp .icoTab li.active {\n        color: #6464D2;\n}\n#icoMain .icoWarp .pages {\n    float: right;\n    margin-bottom: 30px;\n}\n", ""]);

// exports


/***/ }),

/***/ 68:
/***/ (function(module, exports) {

module.exports = "/images/banner.png?ef83ba1377283fb2a256ba9acf4b6a3c";

/***/ }),

/***/ 69:
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



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {};
    },

    components: {
        hotProject: __webpack_require__(52),
        project: __webpack_require__(57)
    },
    created: function created() {
        this.load();
    },

    watch: {
        '$route': 'load'
    },
    computed: __WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapState */]({
        hotProject: function hotProject(state) {
            return state.indexProject.hot;
        },
        allProject: function allProject(state) {
            return state.ico.allProject;
        }
    }),
    methods: {
        load: function load() {
            this.$store.dispatch('get_indexProject');
            this.$store.dispatch('get_allProject');
        },
        handleSelect: function handleSelect(key, keyPath) {
            //                console.log(key, keyPath);
            console.log(this.$store.state);
        },
        handleSizeChange: function handleSizeChange(val) {
            //                console.log(`每页 ${val} 条`);
        },
        handleCurrentChange: function handleCurrentChange(val) {
            console.log('\u5F53\u524D\u9875: ' + val);
        }
    }
});

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "icoMain"
    }
  }, [_c('div', {
    staticClass: "icoWarp"
  }, [_c('hotProject', {
    attrs: {
      "hotProject": _vm.hotProject
    }
  }), _vm._v(" "), _c('ul', {
    staticClass: "icoTab"
  }, _vm._l((4), function(tab) {
    return _c('li', {
      key: tab.id
    }, [_vm._v("全部")])
  })), _vm._v(" "), _c('project', {
    attrs: {
      "project": _vm.allProject
    }
  }), _vm._v(" "), _c('el-pagination', {
    staticClass: "pages",
    attrs: {
      "page-size": 9,
      "layout": "prev, pager, next",
      "total": _vm.allProject.length
    },
    on: {
      "size-change": _vm.handleSizeChange,
      "current-change": _vm.handleCurrentChange
    }
  })], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-318d2758", module.exports)
  }
}

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(66)
}
var Component = __webpack_require__(14)(
  /* script */
  __webpack_require__(69),
  /* template */
  __webpack_require__(70),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zheyu-zj/Site/ico_vue/resources/assets/js/pages/ico/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-318d2758", Component.options)
  } else {
    hotAPI.reload("data-v-318d2758", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});