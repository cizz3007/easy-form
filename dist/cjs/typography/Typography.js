'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutPropertiesLoose')
);

var _react = _interopRequireDefault(require('react'));

var _excluded = ['component', 'className', 'aria-label', 'children'];

var Typography = function Typography(_ref) {
  var _ref$component = _ref.component,
    component = _ref$component === void 0 ? 'article' : _ref$component,
    className = _ref.className,
    ariaLabel = _ref['aria-label'],
    children = _ref.children,
    props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  var Component = component;
  return /*#__PURE__*/ _react.default.createElement(
    Component,
    (0, _extends2.default)(
      {
        className: className,
        'aria-label': ariaLabel
      },
      props
    ),
    children
  );
};

Typography.displayName = 'Typography';
var _default = Typography;
exports.default = _default;
//# sourceMappingURL=Typography.js.map
