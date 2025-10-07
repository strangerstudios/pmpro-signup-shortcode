/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./blocks/src/pmpro-signup-shortcode/block.json":
/*!******************************************************!*\
  !*** ./blocks/src/pmpro-signup-shortcode/block.json ***!
  \******************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"pmpro-signup-shortcode/pmpro-signup-shortcode","title":"PMPro Signup shortcode","category":"pmpro","description":"Inserts a customizable signup form for Paid Memberships Pro.","keywords":["signup","register","form","paid memberships pro","pmpro"],"attributes":{"intro":{"type":"string","default":""},"hidelabels":{"type":"boolean","default":false},"level":{"type":"string","default":""},"login":{"type":"boolean","default":false},"redirect":{"type":"string","default":""},"short":{"type":"string","default":null},"submit_button":{"type":"string","default":null},"title":{"type":"string","default":""},"custom_fields":{"type":"boolean","default":false},"confirm_email":{"type":"boolean","default":false},"confirm_password":{"type":"boolean","default":false}},"supports":{},"example":{},"textdomain":"pmpro-signup-shortcode","editorScript":"file:./index.js","render":"file:./render.php"}');

/***/ }),

/***/ "./blocks/src/pmpro-signup-shortcode/edit.js":
/*!***************************************************!*\
  !*** ./blocks/src/pmpro-signup-shortcode/edit.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);








/**
 * Fetch all membership levels and return a value:id, label:name pair.
 *
 * @returns {Promise} Promise resolving to an array of membership levels.
 */
async function pmprosus_get_all_levels() {
  try {
    const levels = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default()({
      path: '/pmpro/v1/membership_levels',
      method: 'GET'
    });
    Object.keys(levels).forEach(key => {
      levels[key] = {
        value: levels[key].id,
        label: levels[key].name
      };
    });
    return Object.values(levels);
  } catch (error) {
    console.error('Failed to fetch membership levels:', error);
    return [];
  }
}
function Edit({
  attributes,
  setAttributes
}) {
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)();
  const {
    intro,
    hidelabels,
    level,
    login,
    redirect,
    short,
    submit_button,
    title,
    custom_fields,
    confirm_email,
    confirm_password
  } = attributes;
  const [levelsOptions, setLevelsOptions] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
    pmprosus_get_all_levels().then(setLevelsOptions);
  }, []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    __next40pxDefaultSize: true,
    __nextHasNoMarginBottom: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title', 'pmpro-signup-shortcode'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Optionally specify a title to display above the form.', 'pmpro-signup-shortcode'),
    value: title,
    onChange: value => setAttributes({
      title: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    __next40pxDefaultSize: true,
    __nextHasNoMarginBottom: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Level', 'pmpro-signup-shortcode'),
    value: level,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select a level', 'pmpro-signup-shortcode'),
      value: ''
    }, ...levelsOptions],
    onChange: value => setAttributes({
      level: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    __next40pxDefaultSize: true,
    __nextHasNoMarginBottom: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Intro', 'pmpro-signup-shortcode'),
    value: intro,
    onChange: value => setAttributes({
      intro: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    __next40pxDefaultSize: true,
    __nextHasNoMarginBottom: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Redirect', 'pmpro-signup-shortcode'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Optionally specify a URL to redirect to after signup. Accepts "referrer" or "account".', 'pmpro-signup-shortcode'),
    value: redirect,
    onChange: value => setAttributes({
      redirect: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    __next40pxDefaultSize: true,
    __nextHasNoMarginBottom: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Short', 'pmpro-signup-shortcode'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Use the short version of the form (no billing fields).', 'pmpro-signup-shortcode'),
    value: short,
    options: [{
      label: 'True',
      value: true
    }, {
      label: 'False',
      value: false
    }, {
      label: 'Email Only',
      value: 'emailonly'
    }],
    onChange: value => setAttributes({
      short: value
    })
  }), short == 'false' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    __nextHasNoMarginBottom: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Confirm Email', 'pmpro-signup-shortcode'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Require users to confirm their email address by entering it twice.', 'pmpro-signup-shortcode'),
    checked: confirm_email,
    onChange: value => setAttributes({
      confirm_email: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    __nextHasNoMarginBottom: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Confirm Password', 'pmpro-signup-shortcode'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Require users to confirm their password by entering it twice.', 'pmpro-signup-shortcode'),
    checked: confirm_password,
    onChange: value => setAttributes({
      confirm_password: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    __next40pxDefaultSize: true,
    __nextHasNoMarginBottom: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Submit Button Text', 'pmpro-signup-shortcode'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Optionally customize the text on the submit button.', 'pmpro-signup-shortcode'),
    value: submit_button,
    onChange: value => setAttributes({
      submit_button: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    __nextHasNoMarginBottom: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hide Labels', 'pmpro-signup-shortcode'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hide field labels and use placeholders instead.', 'pmpro-signup-shortcode'),
    checked: hidelabels,
    onChange: value => setAttributes({
      hidelabels: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    __nextHasNoMarginBottom: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Login', 'pmpro-signup-shortcode'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Display a login link above the form.', 'pmpro-signup-shortcode'),
    checked: login,
    onChange: value => setAttributes({
      login: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    __nextHasNoMarginBottom: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Custom Fields', 'pmpro-signup-shortcode'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Display custom user fields defined in Memberships > Settings > Custom Fields.', 'pmpro-signup-shortcode'),
    checked: custom_fields,
    onChange: value => setAttributes({
      custom_fields: value
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "pmpro-block-element"
  }, blockProps), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "pmpro-block-title"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Paid Memberships Pro', 'pmpro-signup-shortcode')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "pmpro-block-subtitle"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Signup Shortcode', 'pmpro-signup-shortcode')))));
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}


/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!****************************************************!*\
  !*** ./blocks/src/pmpro-signup-shortcode/index.js ***!
  \****************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./blocks/src/pmpro-signup-shortcode/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./blocks/src/pmpro-signup-shortcode/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Internal dependencies
 */



/**
 * Register the Advanced Levels Page block.
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_2__.name, {
  icon: {
    background: '#FFFFFF',
    foreground: '#658B24',
    src: 'shortcode'
  },
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map