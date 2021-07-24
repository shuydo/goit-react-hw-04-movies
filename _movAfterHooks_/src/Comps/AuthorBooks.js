// rce
// import { Component } from "react";

import { Link } from "react-router-dom";

// export default class AuthorBooks extends Component {
// state = {
//   books: [],
// };
const AuthorBooks = ({ books }) => {
  console.log("books in AuthorBooks:", books);
  return (
    <ul>
      {books.map(book => (
        // <li key={book.id}>{book.title}</li>
        <li key={book.id}>
          <Link to={`/books/${book.id}`}>{book.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default AuthorBooks;
// componentDidMount() {
// console.log("cd M");
// const id = Number(this.props.match.params.authorId);
// const { books } = this.props.authors.find(author => author.id === id);
// console.log("AuthorBooks:", books);
// this.setState({ books });
// console.log("cd M end");
// }
// componentDidUpdate(prevProps, prevState) {
//   console.log("cd U");
//   console.log(+this.props.match.params.authorId);
//   console.log(this.props.authors);
// }

// render() {
//   return (
//     <>
//       <h2>Comp author's books</h2>
//  <ul>
//   {this.state.books.map(book=><li key={book.id}>{book.title}</li>)}
// </ul>
//       </>
//     );
//   }
// }
