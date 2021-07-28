import { useEffect, useState, useRef, Suspense, lazy } from "react";
import {
  Link,
  Route,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";

import { getMovieById } from "../js/api";
// import Cast from "../Comps/Cast";
// import Reviews from "../Comps/Reviews";

const Cast = lazy(() => import("../Comps/Cast" /* webpackChunkName: "Cast" */));
const Reviews = lazy(() =>
  import("../Comps/Reviews" /* webpackChunkName: "Reviews" */)
);

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
          <p> </p>
          <Suspense fallback={<h1>Loading addInfo...</h1>}>
            <ul className="addInf">
              <li>
                <p>
                  <Link to={`${url}/cast`} style={{ marginRight: "25px" }}>
                    Cast
                  </Link>
                </p>

                <Route // change from {url}
                  path={`${path}/cast`}
                  render={() => {
                    return movieId && <Cast id={movieId} />;
                  }}
                ></Route>
              </li>

              <li>
                <p>
                  <Link to={`${url}/reviews`}>Reviews</Link>
                </p>

                <Route // change from {url}
                  path={`${path}/reviews`}
                  render={() => {
                    return movieId && <Reviews id={movieId} />;
                  }}
                ></Route>
              </li>
            </ul>
          </Suspense>

          <hr />
        </div>
      )}
    </>
  );
}
// This movie haven't reviews yet
