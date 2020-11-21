import PropTypes from "prop-types";

export const childrenProps = PropTypes.oneOfType([
  PropTypes.node,
  PropTypes.string,
  PropTypes.number,
  PropTypes.object,
  PropTypes.element,
]);

export const inputOptionsProps = PropTypes.shape({
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
});
