import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";

export default class Books extends Component {
  state = {
    books: [],
  };

  async componentDidMount() {
    const resp = await axios.get("http://localhost:4040/books");
    // console.log(resp.data);

    this.setState({
      books: resp.data,
    });
  }

  render() {
    // console.log(this.props.match.url); 
    return (
      <>
        <h1>Это страница книг</h1>

        <ul>
          {this.state.books.map(book => (
            // <li key={book.id}>{book.title}</li>
            <li key={book.id}>
              <Link to={`${this.props.match.url}/${book.id}`}>{book.title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
