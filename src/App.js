import { lazy, Suspense } from "react";
import { NavLink, Route, Switch } from "react-router-dom"; // import "./App.css";

const HomePage = lazy(() =>
  import("./views/HomePage" /* webpackChunkName:"HomePag" */)
);
const MovieDetailsPage = lazy(() =>
  import("./views/MovieDetailsPage" /* webpackChunkName:"MovieDetailsPage" */)
);
const MoviesPage = lazy(() =>
  import("./views/MoviesPage" /* webpackChunkName: "MoviesPage" */)
);
const NotFound = lazy(() =>
  import("./views/NotFound" /* webpackChunkName: "NotFound" */)
);

const App = () => (
  <>
    <ul className="mainNavi">
      <li>
        <NavLink
          exact
          to="/"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          <b>Home</b>
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/movies"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          <b>Movies</b>
        </NavLink>
      </li>
    </ul>

    <hr />

    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </>
);
export default App;
