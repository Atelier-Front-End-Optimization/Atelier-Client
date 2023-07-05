function filterReviews(reviews, filters) {

  if (!Object.values(filters).includes(true)) return reviews;

  const appliedFilters = [];
  for (let key in filters) {
    if (filters[key]) appliedFilters.push(key);
  }

  if (appliedFilters.length === 5) return reviews;

  const filteredReviews = reviews.filter((review) => {
    if (appliedFilters.includes('fiveStars')) {
      if (review.rating == 5) return true;
    }
    if (appliedFilters.includes('fourStars')) {
      if (review.rating == 4) return true;
    }
    if (appliedFilters.includes('threeStars')) {
      if (review.rating == 3) return true;
    }
    if (appliedFilters.includes('twoStars')) {
      if (review.rating == 2) return true;
    }
    if (appliedFilters.includes('oneStars')) {
      if (review.rating == 1) return true;
    }
  });

  return filteredReviews;
}

export default filterReviews;