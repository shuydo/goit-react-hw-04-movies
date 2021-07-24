import { Component } from "react";
import axios from "axios";

const API_KEY = "2f8d6050c74d5f454a522d74a8cedbb8";
const BASE_URL = "https://api.themoviedb.org/3/";

export default class Cast extends Component {
  state = { cast: [] };

  async componentDidMount() {
    const { movieId } = this.props;
    // console.log("in componentDidMount:", movieId);
    const resp = await axios.get(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}` //&language=ru-RU`
    );

    this.setState({
      cast: resp.data.cast.map(el => {
        return {
          name: el.name,
          character: el.character,
          img: el.profile_path,
        };
      }),
    });
  }

  render() {
    return (
      <>
        <ul className="cast">
          {this.state.cast.map(({ img, name, character }, idx) => (
            <li key={idx} className="castItem">
              <img
                src={`https://image.tmdb.org/t/p/w500${img}`}
                alt={name}
                width="125"
              ></img>

              <p>{name}</p>

              <span>Character: </span>
              <span>{character}</span>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
