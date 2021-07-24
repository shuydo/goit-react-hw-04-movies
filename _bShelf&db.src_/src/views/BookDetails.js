import axios from "axios";
import { Component } from "react";

export default class BookDetails extends Component {
  state = {
    authorId: null,
    descr: null,
    genre: null,
    id: null,
    imgUrl: null,
    title: null,
    author: null,
  };

  async componentDidMount() {
    const { bookId } = this.props.match.params;
    const resp = await axios.get(
      `http://localhost:4040/books/${bookId}?_expand=author`
    );
    // console.log(resp.data)
    this.setState({ ...resp.data });
  }

  render() {
    // destruct!
    const { imgUrl, title, author, descr } = this.state;
    return (
      <div>
        <h1>Это страница книги {this.props.match.params.bookId}</h1>

        <img src={imgUrl} alt=""></img>
        <h2>{title}</h2>
        {author && <p>Автор: {author.name}</p>}
        <p>{descr}</p>
      </div>
    );
  }
}
