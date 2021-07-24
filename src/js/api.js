import axios from "axios";

const API_KEY = "2f8d6050c74d5f454a522d74a8cedbb8"; //m
const BASE_URL = "https://api.themoviedb.org/3";

const getTrendMovies = async () => {
  const resp = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}` //&page=1`
  );

  return resp.data.results.map(({ id, title }) => {
    return { id, title };
  });
};

const movieSearch = async query => {
  const resp = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    //&page=1` // include_adult=false` // &language=ru-RU`
  );

  return resp.data.results.map(
    ({
      adult,
      backdrop_path,
      genre_ids,
      id,
      original_language,
      original_title,
      overview,
      popularity,
      poster_path,
      release_date,
      title,
      video,
      vote_average,
      vote_count,
    }) => {
      return {
        // adult,
        // backdrop_path,
        // genre_ids,
        id,
        // original_language,
        original_title,
        // overview,
        // popularity,
        // poster_path,
        release_date,
        title,
        // video,
        // vote_average,
        // vote_count,
      };
    }
  );
};

const getMovieById = async movieId => {
  const resp = await axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=ru-RU`
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

  return {
    id,
    genres: genres.map(genre => genre.name).join(", "),
    overview,
    title,
    userScore: vote_average * 10,
    img: poster_path,
  };
};

const getCastByMovieId = async movieId => {
  const resp = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}` //&language=ru-RU`
  );

  return resp.data.cast.map(el => {
    return {
      name: el.name,
      character: el.character,
      img: el.profile_path,
    };
  });
};

const getReviewsByMovieId = async movieId => {
  const resp = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}` //&language=ru-RU`
  );

  return resp.data.results.map(el => {
    return {
      author: el.author,
      content: el.content,
    };
  });
};

export {
  getTrendMovies,
  getMovieById,
  getCastByMovieId,
  getReviewsByMovieId,
  movieSearch,
};
