const formatNumber = (number, replace = " ") =>
  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, replace);

export default formatNumber;
