import PropTypes from "prop-types";

export const childrenProps = PropTypes.oneOfType([
  PropTypes.node,
  PropTypes.string,
  PropTypes.number,
  PropTypes.object,
  PropTypes.element,
  PropTypes.func,
]);
