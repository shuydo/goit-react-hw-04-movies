import { useEffect, useState } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import { getMovieById } from "../js/api";
import Cast from "../Comps/Cast";
import Reviews from "../Comps/Reviews";

export default function MoviesDetailsPage() {
  const { movieId } = useParams();
  const { url } = useRouteMatch();

  const [movie, setMovie] = useState(null);

  useEffect(() => getMovieById(movieId).then(setMovie), [movieId]);

  return (
    <>
      {movie && (
        <div>
          <div className="movieMainInfo">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.img}`}
              alt=""
              width="250"
            ></img>
            <div className="movieTextInfo">
              <h2>{movie.title}</h2>

              <h4>User Score: </h4>
              <span>{movie.userScore}%</span>

              <h4>Overview: </h4>
              <p>{movie.overview}</p>

              <h4>Genres: </h4>
              <p>{movie.genres}</p>
            </div>
          </div>
          <hr />

          <p>Addidional information</p>

          <Link to={`${url}/cast`}>Cast</Link>
          <Route
            path={`${url}/cast`}
            render={() => {
              return movieId && <Cast id={movieId} />;
            }}
          ></Route>

          <Link to={`${url}/reviews`}>Reviews</Link>
          <Route
            path={`${url}/reviews`}
            render={() => {
              return movieId && <Reviews id={movieId} />;
            }}
          ></Route>
          <hr />
        </div>
      )}
    </>
  );
}
