webpackJsonp([2],{

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(84)
}
var Component = __webpack_require__(14)(
  /* script */
  __webpack_require__(86),
  /* template */
  __webpack_require__(90),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zheyu-zj/Site/ico_vue/resources/assets/js/pages/register/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f8d211d4", Component.options)
  } else {
    hotAPI.reload("data-v-f8d211d4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(85);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(15)("4fc909d1", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f8d211d4\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f8d211d4\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "\n#registerMain .registerWrap {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 480px;\n  height: 540px;\n  box-sizing: border-box;\n  padding: 0 40px;\n  background: #fff;\n  border-radius: 10px;\n  box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.26);\n}\n#registerMain .registerWrap h2 {\n    width: 100%;\n    height: 78px;\n    line-height: 78px;\n    font-size: 20px;\n    text-align: center;\n    font-weight: 400;\n}\n#registerMain .registerWrap label {\n    width: 100%;\n    height: 56px;\n    display: block;\n    position: relative;\n    display: block;\n    position: relative;\n}\n#registerMain .registerWrap label:after {\n      position: absolute;\n      top: 100%;\n      left: 30px;\n      content: attr(data-content);\n      font-size: 12px;\n      color: #D0017A;\n}\n#registerMain .registerWrap label input {\n      outline: none;\n      width: 100%;\n      height: 36px;\n      font-size: 12px;\n      padding: 10px 12px;\n      box-sizing: border-box;\n      text-indent: 20px;\n      border: 1px solid #e0e0e0;\n}\n#registerMain .registerWrap label input:focus {\n        border: 1px solid #a4a4a4;\n}\n#registerMain .registerWrap label:before {\n      content: '';\n      position: absolute;\n      top: 8px;\n      left: 12px;\n      width: 12px;\n      height: 20px;\n}\n#registerMain .registerWrap label.mobile:before {\n      background: url(" + __webpack_require__(3) + ") -1853px -230px;\n}\n#registerMain .registerWrap label.name:before {\n      background: url(" + __webpack_require__(3) + ") -2245px -170px;\n}\n#registerMain .registerWrap label.password a {\n      position: absolute;\n      right: 12px;\n      top: 10px;\n      line-height: 16px;\n      color: #f6ab26;\n}\n#registerMain .registerWrap label.password:before {\n      background: url(" + __webpack_require__(3) + ") -1885px -230px;\n}\n#registerMain .registerWrap label.password_confirmation:before {\n      background: url(" + __webpack_require__(3) + ") -1885px -230px;\n}\n#registerMain .registerWrap label.captcha input {\n      float: left;\n      width: 264px;\n}\n#registerMain .registerWrap label.captcha img {\n      float: right;\n      width: 116px;\n      height: 36px;\n}\n#registerMain .registerWrap label.captcha:before {\n      height: 12px;\n      top: 11px;\n      background: url(" + __webpack_require__(3) + ") -1983px -230px;\n}\n#registerMain .registerWrap label.vcode:before {\n      height: 12px;\n      top: 11px;\n      background: url(" + __webpack_require__(3) + ") -1983px -230px;\n}\n#registerMain .registerWrap label.vcode > button {\n      outline: none;\n      position: absolute;\n      top: 5px;\n      right: 12px;\n      width: 84px;\n      height: 26px;\n      font-size: 12px;\n      color: #fff;\n      text-align: center;\n      background: #f6ab26;\n      border-radius: 4px;\n      border: 0;\n      cursor: pointer;\n}\n#registerMain .registerWrap label.vcode > button:hover {\n        background: #e09209;\n}\n#registerMain .registerWrap label.vcode > button:active {\n        background: #af7207;\n}\n#registerMain .registerWrap label.vcode > button.verifyButton_active {\n        background: #e0e0e0;\n}\n#registerMain .registerWrap label.vcode > button.verifyButton_active:hover {\n          background: #e0e0e0;\n}\n#registerMain .registerWrap label.inviter_id:before {\n      height: 12px;\n      top: 11px;\n      background: url(" + __webpack_require__(3) + ") -1951px -230px;\n}\n#registerMain .registerWrap label.checked {\n      height: 47px;\n      line-height: 1;\n}\n#registerMain .registerWrap label.checked > label {\n        display: inline;\n}\n#registerMain .registerWrap label.checked span {\n        font-size: 12px;\n}\n#registerMain .registerWrap label.checked span a {\n          color: #f6ab26;\n}\n#registerMain .registerWrap label.checked p {\n        position: absolute;\n        right: 2px;\n        top: 2px;\n        text-align: right;\n        width: 120px;\n        line-height: 15px;\n}\n#registerMain .registerWrap label.checked p a {\n          color: #f6ab26;\n}\n#registerMain .registerWrap > button {\n    width: 100%;\n    display: block;\n    height: 40px;\n    font-size: 16px;\n    color: #fff;\n    text-align: center;\n    background: linear-gradient(-180deg, #8A8ADE 0%, #6464D2 100%);\n    box-shadow: 0 2px 0 0 #E2E2F2;\n    border-radius: 3px;\n    border: 0 !important;\n    text-decoration: none;\n}\n#registerMain .registerWrap > button:hover {\n      background: linear-gradient(-180deg, #6262d3 0%, #3c3cc7 100%);\n      color: #fff;\n}\n#registerMain .registerWrap > button:active {\n      background: linear-gradient(-180deg, #6464D2 0%, #8A8ADE 100%);\n}\n#registerMain .registerWrap p {\n    width: 100%;\n    line-height: 37px;\n    text-align: center;\n    color: #a4a4a4;\n}\n", ""]);

// exports


/***/ }),

/***/ 86:
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
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            checked: true
        };
    },

    components: {
        Captcha: __webpack_require__(87)
    }
});

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(14)(
  /* script */
  __webpack_require__(88),
  /* template */
  __webpack_require__(89),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zheyu-zj/Site/ico_vue/resources/assets/js/components/Captcha.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Captcha.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-573022a6", Component.options)
  } else {
    hotAPI.reload("data-v-573022a6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._v("\n    231231\n")])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-573022a6", module.exports)
  }
}

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "registerMain"
    }
  }, [_c('form', {
    attrs: {
      "action": ""
    }
  }, [_c('div', {
    staticClass: "registerWrap"
  }, [_c('h2', [_vm._v("用户注册")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _c('label', {
    staticClass: "vcode",
    attrs: {
      "for": "",
      "data-content": ""
    }
  }, [_c('input', {
    attrs: {
      "type": "text",
      "placeholder": "请输入短信验证码"
    }
  }), _vm._v(" "), _c('button', {
    attrs: {
      "tabindex": "-1",
      "type": "button"
    }
  }, [_vm._v("发送验证码")]), _vm._v(" "), (false) ? _c('Captcha') : _vm._e()], 1), _vm._v(" "), _vm._m(4), _vm._v(" "), _c('label', {
    staticClass: "checked",
    attrs: {
      "for": ""
    }
  }, [_c('el-checkbox', {
    model: {
      value: (_vm.checked),
      callback: function($$v) {
        _vm.checked = $$v
      },
      expression: "checked"
    }
  }, [_vm._v("\n                    我已阅读并同意\n                    "), _c('router-link', {
    attrs: {
      "to": "/register"
    }
  }, [_vm._v("链金盒子用户须知")])], 1), _vm._v(" "), _c('p', [_vm._v("\n                    已有帐号？\n                    "), _c('router-link', {
    attrs: {
      "to": "/login"
    }
  }, [_vm._v("直接登录")])], 1)], 1), _vm._v(" "), _c('button', {
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("注册")])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "mobile",
    attrs: {
      "for": "",
      "data-content": ""
    }
  }, [_c('input', {
    attrs: {
      "type": "text",
      "placeholder": "请输入手机号码"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "name",
    attrs: {
      "for": "",
      "data-content": ""
    }
  }, [_c('input', {
    attrs: {
      "type": "text",
      "placeholder": "请输入昵称(支持数字、字母、下划线)"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "password",
    attrs: {
      "for": "",
      "data-content": ""
    }
  }, [_c('input', {
    attrs: {
      "type": "text",
      "placeholder": "请输入登录密码"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "password_confirmation",
    attrs: {
      "for": "",
      "data-content": ""
    }
  }, [_c('input', {
    attrs: {
      "type": "text",
      "placeholder": "请再次输入登录密码"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "inviter_id",
    attrs: {
      "for": "",
      "data-content": ""
    }
  }, [_c('input', {
    attrs: {
      "type": "text",
      "placeholder": "请输入邀请人ID(选填)"
    }
  }), _vm._v(" "), _c('img', {
    attrs: {
      "src": "",
      "alt": "",
      "tabindex": "-1"
    }
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-f8d211d4", module.exports)
  }
}

/***/ })

});