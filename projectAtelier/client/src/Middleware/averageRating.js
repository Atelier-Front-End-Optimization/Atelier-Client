//to move to middlware, gets average rating
function averageRating(obj) {
  let total = 0;
  let numOf = 0;
  for (let key in obj) {
    total += key*obj[key];
    numOf += obj[key]*1;
  }
  let averageRating = (Math.floor((total/numOf) * 4) / 4).toFixed(2);
  return averageRating;
}

export default averageRating;