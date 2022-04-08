import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutPropertiesLoose from '@babel/runtime/helpers/objectWithoutPropertiesLoose';
var _excluded = ['component', 'className', 'aria-label', 'children'];
import React from 'react';

var Typography = function Typography(_ref) {
  var _ref$component = _ref.component,
    component = _ref$component === void 0 ? 'article' : _ref$component,
    className = _ref.className,
    ariaLabel = _ref['aria-label'],
    children = _ref.children,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var Component = component;
  return /*#__PURE__*/ React.createElement(
    Component,
    _extends(
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
export default Typography;
//# sourceMappingURL=Typography.js.map
