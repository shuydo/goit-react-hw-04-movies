import axios from "axios";
import { Component } from "react";
import { Link, Route } from "react-router-dom";
import Cast from "../Comps/Cast";
import Reviews from "../Comps/Reviews";

const API_KEY = "2f8d6050c74d5f454a522d74a8cedbb8";
const BASE_URL = "https://api.themoviedb.org/3/";

export default class MoviesDetailsPage extends Component {
  state = {
    // adult: null,
    // backdrop_path: null,
    img: null, // poster_path: null,
    // genre_ids: [],
    genres: null,
    id: null,
    // media_type: null,
    // original_language: null,
    // original_title: null,
    overview: null,
    // popularity: null,
    // release_date: null,
    title: null,
    // video: null,
    // vote_average: null,
    userScore: null, // vote_count: null,
    // collBdPath: null,
    // collPosterPath: null,

    cast: [],
    reviews: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const resp = await axios.get(
      `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=ru-RU`
    );

    const {
      id,
      genres,
      overview,
      title,
      vote_average,
      poster_path,
      // backdrop_path,
      // belongs_to_collection,
    } = resp.data;

    this.setState({
      id,
      // ...resp.data
      img: poster_path,
      // backdrop_path,
      // collPosterPath:belongs_to_collection.poster_path,
      // collBdPath:belongs_to_collection.backdrop_path,
      genres: genres.map(genre => genre.name).join(", "),
      overview,
      title,
      userScore: vote_average * 10,
    });
  }

  render() {
    const { match } = this.props;

    const {
      id,
      img,
      // backdrop_path,
      // collBdPath,
      // collPosterPath,
      genres,
      overview,
      title,
      userScore,
    } = this.state;

    return (
      <article>
        <div className="movieMainInfo">
          <img
            src={`https://image.tmdb.org/t/p/w500${img}`}
            alt=""
            width="250"
          ></img>
          {/* backdrop_path collBdPath collPosterPath */}
          <div className="movieTextInfo">
            <h2>{title}</h2>

            <h4>User Score: </h4>
            <span>{userScore}%</span>

            <h4>Overview: </h4>
            <p>{overview}</p>

            <h4>Genres: </h4>
            <p>{genres}</p>
          </div>
        </div>

        {/* ================== Cast & Reviews ====================== */}
        <p>Addidional information</p>
        
        <Link to={`${match.path}/cast`}>Cast</Link>
        {/* <NavLink to={`${match.path}/cast`}>Cast</NavLink> */}
        <Route
          path={`${match.path}/cast`}
          render={() => {
            return id && <Cast movieId={id} />;
          }}
        ></Route>

        <Link to={`${match.path}/reviews`}>Reviews</Link>
        <Route
          path={`${match.path}/reviews`}
          render={() => {
            return id && <Reviews movieId={id} />;
          }}
        ></Route>
      </article>
    );
  }
}
