
function convertPrice(num) {
  let USDollar = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'});
  return USDollar.format(num);
}

export default convertPrice;