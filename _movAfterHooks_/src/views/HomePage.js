import { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_KEY = "2f8d6050c74d5f454a522d74a8cedbb8";
const BASE_URL = "https://api.themoviedb.org/3/trending/movie/day";
export default class Home extends Component {
  state = { movies: [] };

  async componentDidMount() {
    // console.log("in cDM HP")
    const resp = await axios.get(`${BASE_URL}?api_key=${API_KEY}&page=1`);
    this.setState({ movies: resp.data.results });
  }

  render() {
    return (
      <>
        <h1>Tranding today</h1>

        <ul>
          {this.state.movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${this.props.match.url}${movie.id}`}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
