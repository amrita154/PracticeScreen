getSearchResult = async (movieTitle) => {
  state = {movies: [], searchedMovies: []};
  state.movies = [];
  state.searchedMovies = [];
  if (movieTitle.length > 0) {
    await fetch(
      'https://api.themoviedb.org/3/search/movie?api_key=91dc96e74447b2ebe1268430803b91d6&query=' +
        movieTitle,
    )
      .then((response) => response.json())
      .then((json) => (state.searchedMovies = json.results))
      .catch((error) => {
        alert('No Result!!');
        return error;
      });
  } else if (movieTitle.length === 0) {
    alert('Please enter movie to search');
  }
  return state;
};
export default getSearchResult;
