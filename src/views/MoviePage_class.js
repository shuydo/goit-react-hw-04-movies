// const Authors = () => {
//   return <h1>Это страница авторов</h1>;
// };

// import axios from "axios";
import { Component } from "react";
// import { NavLink, Route } from "react-router-dom";
// import AuthorBooks from "../Comps/AuthorBooks";

export default class MoviesPage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    // const resp = await axios.get("http://localhost:4040/authors");

    // const resp = await axios.get("http://localhost:4040/authors?_embed=books");
    // console.log("authors comp:", resp.data);

    // this.setState({
    //   authors: resp.data,
    // });
  }

  render() {
    // const { match } = this.props;

    return (
      <>
         <h1>Это страница Movies</h1>

        {/* <ul>
           {this.state.authors.map(author => (
            <li key={author.id}>
              <NavLink to={`${match.url}/${author.id}`}>{author.name}</NavLink>
            </li>
          ))}
        </ul>
        <Route
          path={`${match.path}/:authorId`}
          render={props => {
            const bookId = Number(props.match.params.authorId);
            const author = this.state.authors.find(({ id }) => id === bookId);

            return author && <AuthorBooks {...props} books={author.books} />;
          }}
        ></Route> */}
      </>
    );
  }
}
