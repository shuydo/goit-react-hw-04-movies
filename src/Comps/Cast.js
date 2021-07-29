import { useEffect, useState } from "react";

import { getCastByMovieId } from "../js/api";

import dummyImg from "../img/dummy.png";

export default function Cast(movie) {
  const [cast, setCast] = useState(null);

  useEffect(() => getCastByMovieId(movie.id).then(setCast), [movie.id]);

  return (
    <>
      <ul className="cast">
        {cast &&
          cast.map(({ img, name, character }, idx) => (
            <li key={idx} className="castItem">
              {img && (
                <img
                  src={`https://image.tmdb.org/t/p/w500${img}`}
                  alt={name}
                  width="124"
                ></img>
              )}

              {!img && (
                <img
                  src={dummyImg}
                  alt={name}
                  width="124"
                ></img>
              )}
              <p>{name}</p>

              <span>Character: </span>
              <span>{character}</span>
            </li>
          ))}
      </ul>
    </>
  );
}
