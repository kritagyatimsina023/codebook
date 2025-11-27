import React from "react";
import { Star } from "lucide-react";

const Rating = ({ rating }) => {
  let ratingArray = Array(5).fill(false);
  for (let i = 0; i < rating; i++) {
    ratingArray[i] = true;
  }
  return (
    <>
      {ratingArray.map((value, idx) =>
        value ? (
          <Star key={idx} size={17} fill="#f7d302" className="text-[#f7d302]" />
        ) : (
          <Star key={idx} size={17} />
        )
      )}
    </>
  );
};

export default Rating;
