"use strict";
// "fast-deep-equal": "^3.1.3",
// "prop-types": "^15.7.2",

let __extends = (this && this.__extends) || (function () {
  let extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (let p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
  };
  return function (d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
})();
let __assign = (this && this.__assign) || function () {
  __assign = Object.assign || function (t) {
    for (let s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (let p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
let __rest = (this && this.__rest) || function (s, e) {
  let t = {};
  for (let p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (let i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
let React = require("react");
let fast_deep_equal_1 = require("fast-deep-equal");
let PropTypes = require("prop-types");
function normalizeHtml(str) {
  return str && str.replace(/&nbsp;|\u202F|\u00A0/g, ' ');
}
function replaceCaret(el) {
  let target = document.createTextNode('');
  el.appendChild(target);
  let isTargetFocused = document.activeElement === el;
  if (target !== null && target.nodeValue !== null && isTargetFocused) {
    let sel = window.getSelection();
    if (sel !== null) {
      let range = document.createRange();
      range.setStart(target, target.nodeValue.length);
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
    }
    if (el instanceof HTMLElement) el.focus();
  }
}

let ContentEditable = /** @class */ (function (_super) {
  __extends(ContentEditable, _super);
  function ContentEditable() {
    let _this = _super !== null && _super.apply(this, arguments) || this;
    _this.lastHtml = _this.props.html;
    _this.el = typeof _this.props.innerRef === 'function' ? { current: null } : React.createRef();
    _this.getEl = function () { return (_this.props.innerRef && typeof _this.props.innerRef !== 'function' ? _this.props.innerRef : _this.el).current; };
    _this.emitChange = function (originalEvt) {
      let el = _this.getEl();
      if (!el)
        return;
      let html = el.innerHTML;
      if (_this.props.onChange && html !== _this.lastHtml) {
        let evt = Object.assign({}, originalEvt, {
          target: {
            value: html
          }
        });
        _this.props.onChange(evt);
      }
      _this.lastHtml = html;
    };
    return _this;
  }
  
  ContentEditable.prototype.render = function () {
    let _this = this;
    let _a = this.props, tagName = _a.tagName, html = _a.html, innerRef = _a.innerRef, props = __rest(_a, ["tagName", "html", "innerRef"]);
    return React.createElement(tagName || 'div', __assign(__assign({}, props), {
      ref: typeof innerRef === 'function' ? function (current) {
        innerRef(current);
        _this.el.current = current;
      } : innerRef || this.el, onInput: this.emitChange, onBlur: this.props.onBlur || this.emitChange, onKeyUp: this.props.onKeyUp || this.emitChange, onKeyDown: this.props.onKeyDown || this.emitChange, contentEditable: !this.props.disabled, dangerouslySetInnerHTML: { __html: html }
    }), this.props.children);
  };

  ContentEditable.prototype.shouldComponentUpdate = function (nextProps) {
    let props = this.props;
    let el = this.getEl();
    if (!el)
      return true;
    if (normalizeHtml(nextProps.html) !== normalizeHtml(el.innerHTML)) {
      return true;
    }
    return props.disabled !== nextProps.disabled ||
      props.tagName !== nextProps.tagName ||
      props.className !== nextProps.className ||
      props.innerRef !== nextProps.innerRef ||
      !fast_deep_equal_1.default(props.style, nextProps.style);
  };
  ContentEditable.prototype.componentDidUpdate = function () {
    let el = this.getEl();
    if (!el)
      return;
    if (this.props.html !== el.innerHTML) {
      el.innerHTML = this.props.html;
    }
    this.lastHtml = this.props.html;
    replaceCaret(el);
  };
  ContentEditable.propTypes = {
    html: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    tagName: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    innerRef: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.func,
    ])
  };
  return ContentEditable;
}(React.Component));
exports.default = ContentEditable;
