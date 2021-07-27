import { useEffect, useState, useRef } from "react";
import {
  Link,
  Route,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";

import { getMovieById } from "../js/api";
import Cast from "../Comps/Cast";
import Reviews from "../Comps/Reviews";

const useGoBackToMoviesPage = () => {
  const routerState = useRef(null);

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (!routerState.current) routerState.current = location.state;
  }, [location.state]);

  const handleGoBack = () => {
    const url = routerState.current ? routerState.current.from : "/";
    history.push(url);
  };

  return { goBack: handleGoBack };
};

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const { goBack } = useGoBackToMoviesPage();

  const [movie, setMovie] = useState(null);

  useEffect(() => getMovieById(movieId).then(setMovie), [movieId]);
  return (
    <>
      <button onClick={goBack} style={{ marginBottom: "8px" }}>
        Go Back
      </button>
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

          <Link to={`${url}/cast`} style={{ marginRight: "25px" }}>
            Cast
          </Link>

          <Route // change from {url}
            path={`${path}/cast`}
            render={() => {
              return movieId && <Cast id={movieId} />;
            }}
          ></Route>

          <Link to={`${url}/reviews`}>Reviews</Link>

          <Route // change from {url}
            path={`${path}/reviews`}
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
// This movie haven't reviews yet