import { useEffect, useState } from "react";

import { getCastByMovieId } from "../js/api";

export default function Cast(movie) {
  const [cast, setCast] = useState(null);

  useEffect(() => getCastByMovieId(movie.id).then(setCast), [movie.id]);

  return (
    <>
      <ul className="cast">
        {cast &&
          cast.map(({ img, name, character }, idx) => (
            <li key={idx} className="castItem">
              <img
                src={`https://image.tmdb.org/t/p/w500${img}`}
                alt={name}
                width="125"
              ></img>

              <p>{name}</p>

              <span>Character: </span>
              <span>{character}</span>
            </li>
          ))}
      </ul>
    </>
  );
}
