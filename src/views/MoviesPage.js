import { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { movieSearch } from "../js/api";
export default function MoviesPage() {
  const [movies, setMovie] = useState(null);
  const { url } = useRouteMatch();

  useEffect(() => movieSearch("cat").then(setMovie), []);

  return (
    <ul>
      {movies &&
        movies.map(movie => (
          <li key={movie.id}>
            <Link to={`${url}/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
    </ul>
  );
}
