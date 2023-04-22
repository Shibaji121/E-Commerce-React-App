import React from "react";

const StarRating = ({ starCount }) => {
  const MAX_STARS = 5;
  const FULL_STAR = "★";
  const EMPTY_STAR = "☆";

  // Calculate the number of full and empty stars
  const fullStars = Math.floor(starCount);
  const emptyStars = MAX_STARS - fullStars;

  // Generate full star elements
  const fullStarElements = [];
  for (let i = 0; i < fullStars; i++) {
    fullStarElements.push(
      <span key={i} className="star">
        {FULL_STAR}
      </span>
    );
  }

  // Generate empty star elements
  const emptyStarElements = [];
  for (let i = 0; i < emptyStars; i++) {
    emptyStarElements.push(
      <span key={i} className="star">
        {EMPTY_STAR}
      </span>
    );
  }

  return (
    <div className="star-rating">
      {fullStarElements}
      {emptyStarElements}
    </div>
  );
};

export default StarRating;
