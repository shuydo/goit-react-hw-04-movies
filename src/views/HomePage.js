import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTrendMovies } from "../js/api";

export default function Home() {
  const [movies, setMovies] = useState([]);

  // const {url} = useRouteMatch();
  useEffect(() => getTrendMovies().then(setMovies), []);

  return (
    <>
      <h1>Tranding today</h1>

      <ul>
        {movies &&
          movies.map(movie => (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
}
