//  We don't have any reviews for this movie
import { Component } from "react";
import axios from "axios";

const API_KEY = "2f8d6050c74d5f454a522d74a8cedbb8";
const BASE_URL = "https://api.themoviedb.org/3/";

export default class Reviews extends Component {
  state = { reviews: [] };

  async componentDidMount() {
    const { movieId } = this.props;
    // console.log("in componentDidMount:", movieId);
    const resp = await axios.get(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}` //&language=ru-RU`
    );

    // console.log(resp.data.results);
    this.setState({
      reviews: resp.data.results.map(el => {
        return {
          author: el.author,
          content: el.content,
        };
      }),
    });
  }

  render() {
    return (
      <>
        <ul>
          {this.state.reviews.map(({ author, content }, idx) => (
            <li key={idx}>
              <span><b>Author: {author} </b></span>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
