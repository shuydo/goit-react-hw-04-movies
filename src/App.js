import { NavLink, Route, Switch } from "react-router-dom"; // import "./App.css";

import HomePage from "./views/HomePage";
import MoviesPage from "./views/MoviesPage";
import MoviesDetailsPage from "./views/MoviesDetailsPage";
import NotFound from "./views/NotFound";

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

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/movies" component={MoviesPage} />
      <Route path="/movies/:movieId" component={MoviesDetailsPage} />
      <Route component={NotFound} />
    </Switch>
  </>
);

export default App;
