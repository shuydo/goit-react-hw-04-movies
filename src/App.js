// import "./App.css";
import { NavLink, Route, Switch } from "react-router-dom";

import Home from "./views/Home";
import Authors from "./views/Authors";
import Books from "./views/Books";
import BookDetails from "./views/BookDetails";
import NotFound from "./views/NotFound";

// console.log(BookDetails)

// const linkStyle = {
//   base: { color: "green" },
//   active: { color: "red" },
// };

// export default
const App = () => (
  // return <div className="App"><p>Hello1</p></div>;
  <>
  <h1>Hello, Mary!</h1>
    <ul>
      <li>
        {/* <NavLink to="/" style={linkStyle.base} activeStyle={linkStyle.active}> */}
        <NavLink
          exact
          to="/"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/authors"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Authors
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/books"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Books
        </NavLink>
      </li>
    </ul>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/authors" component={Authors} />
      <Route path="/books/:bookId" component={BookDetails} />
      <Route path="/books" component={Books} />
      <Route component={NotFound} />
    </Switch>
  </>
);

export default App;
