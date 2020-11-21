/* eslint-disable prefer-rest-params */
function debounce(fn, wait) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;

    clearTimeout(timeout);

    timeout = setTimeout(function () {
      fn.apply(context, args);
    }, wait);
  };
}

export default debounce;
