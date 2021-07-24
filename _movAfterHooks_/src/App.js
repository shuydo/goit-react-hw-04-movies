// import "./App.css";
import { NavLink, Route, Switch } from "react-router-dom";

import HomePage from "./views/HomePage";
import MoviesPage from "./views/MoviesPage";
import MoviesDetailsPage from "./views/MoviesDetailsPage";
import NotFound from "./views/NotFound";

const App = () => (
  <>
    {/* <h1>Hello, Mary!</h1> */}

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

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/:movieId" component={MoviesDetailsPage} />
      {/* <Route path="/movies/:movieId" component={MoviesDetailsPage} /> */}
      <Route path="/movies" component={MoviesPage} />
      <Route component={NotFound} />
    </Switch>
  </>
);

export default App;
