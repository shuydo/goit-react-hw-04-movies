//  We don't have any reviews for this movie
import { useEffect, useState } from "react";

import { getReviewsByMovieId } from "../js/api";

export default function Reviews(movie) {
  const [reviews, setReviews] = useState(null);

  useEffect(() => getReviewsByMovieId(movie.id).then(setReviews), [movie.id]);

  return (
    <ul>
      {reviews &&
        reviews.map(({ author, content }, idx) => (
          <li key={idx}>
            <span>
              <b>Author: {author} </b>
            </span>
            <p>{content}</p>
          </li>
        ))}
    </ul>
  );
}
