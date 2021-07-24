import { useEffect, useState } from "react"; // import { useEffect, useRef, useState } from "react";
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

export default function MoviesDetailsPage() {
  const [movie, setMovie] = useState(null);

  const { movieId } = useParams();
  const { url } = useRouteMatch();

  // const useGoBackToMoviesPage = () => {
  //   console.log("in useGoBackToMoviesPage");
  //   const routerState = useRef(null);
  //   const location = useLocation();
  //   console.log(location);
  //   const history = useHistory();
  //   useEffect(() => {
  //     if (!routerState.current) routerState.current = location.state;
  //   }, []);
  //   const handleGoBack = () => {
  //     const url = routerState.current ? `/?${routerState.current.params}` : "/";
  //     history.push(url);
  //   };
  //   return { goBack: handleGoBack };
  // };

  // const { goBack } = useGoBackToMoviesPage;
  useEffect(() => getMovieById(movieId).then(setMovie), [movieId]);
  // -----------------------------
  const location = useLocation();
  const history = useHistory();

  const onGoBack = () => {
    history.push(location?.state?.from ?? "/");
  }; // ------------------------------
  return (
    <>      {/* <button onClick={goBack}> */}
      <button onClick={onGoBack}>Go Back</button>
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
