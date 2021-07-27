import { useEffect, useState} from "react";
// import { useEffect, useState, useRef } from "react";

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

export default function MovieDetailsPage() {
  // const routerState = useRef(null);
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const location = useLocation();
  console.log('location in MDP:',location)

  const history = useHistory();
  // console.log("history in MDP:", history.location.state.from.search);


  const [movie, setMovie] = useState(null);

  // const useGoBackToMoviesPage = () => {

  // useEffect(() => {
  //   if (!routerState.current) routerState.current = location.state;
  // }, [location.state]);

  const handleGoBack = () => {
    // const url = routerState.current ? `/?${routerState.current.params}` : "/";
    history.push(location?.state?.from ?? "/movies");
    console.log('39:',location.state.from)
  };
  // return {goBack: handleGoBack,};};
  useEffect(() => getMovieById(movieId).then(setMovie), [movieId]);
  // const { goBack } = useGoBackToMoviesPage;
  return (
    <>
      <button onClick={handleGoBack} style={{ marginBottom: "8px" }}>
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

          <Route // path={`${url}/cast`}
            path={`${path}/cast`}
            render={() => {
              return movieId && <Cast id={movieId} />;
            }}
          ></Route>

          <Link to={`${url}/reviews`}>Reviews</Link>

          <Route // path={`${url}/reviews`}
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