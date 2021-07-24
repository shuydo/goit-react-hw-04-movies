import { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { movieSearch } from "../js/api";

export default function MoviesPage() {
  const [movies, setMovie] = useState(null);
  const { url } = useRouteMatch();

  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault(); //  как взять нужный ДОМ эл-т по тегу, а не поряд.номеру?
          movieSearch(e.target.elements[0].value).then(setMovie);
          e.target.elements[0].value = "";
        }}
      >
        <input />
        <button>Search</button>
      </form>

      <ul>
        {movies &&
          movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${url}/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
}
