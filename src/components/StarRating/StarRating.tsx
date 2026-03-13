import s from './StarRating.module.scss';

import React from "react";

type Props = {
  rating: number;
};

export const StarRating: React.FC<Props> = ({ rating }) => {
  const filledStars = Math.floor(rating);

  return (
    <div className={s.stars}>
      {[...Array(5)].map((_, index) => {
        const isFilled = index < filledStars;

        return (
          <span className={s.star} key={index}>
            {isFilled ? "★" : "☆"}
          </span>
        );
      })}
    </div>
    
  );
};