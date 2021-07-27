import { useEffect, useState } from "react";
import {
  Link,
  useRouteMatch,
  useLocation,
  useHistory,
  // Route,
} from "react-router-dom";
import { movieSearch } from "../js/api";
// import MovieDetailsPage from "./MovieDetailsPage";

export default function MoviesPage() {
  const [movies, setMovie] = useState(null);
  const { url } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    if (!query) return;
    movieSearch(query).then(setMovie);
  }, [query]);

  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          const query = e.target.elements.query.value;
          history.push({ ...location, search: `query=${query}` });
          e.target.elements.query.value = ""; // query.trim() === ''
        }}
      >
        <input name="query" />
        <button style={{ marginLeft: "8px" }}>Search</button>
      </form>

      <ul>
        {movies &&
          movies.map(movie => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `${url}/${movie.id}`,
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
