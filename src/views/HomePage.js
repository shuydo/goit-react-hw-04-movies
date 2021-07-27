import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getTrendMovies } from "../js/api";

export default function HomePage() {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => getTrendMovies().then(setMovies), []);

  return (
    <>
      <h1>Tranding today</h1>

      <ul>
        {movies &&
          movies.map(movie => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `movies/${movie.id}`,
                  state: { from: location },
                }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}
