const spacing = (...values) => {
  if (values.length === 0 || values.length > 4) return "0em";
  return values
    .reduce((finalValue, value) => `${finalValue} ${value * 0.25}em`, "")
    .trim();
};

export default spacing;
