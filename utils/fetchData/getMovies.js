getMovies = async (text) => {
  state = [{searchText: '', movies: []}];
  if (text.length > 0) {
    await fetch(
      'https://api.themoviedb.org/3/search/movie?api_key=91dc96e74447b2ebe1268430803b91d6&query=' +
        text,
    )
      .then((response) => response.json())
      .then((json) => {
        state.movies = json.results;
        state.searchText = text;
      })
      .catch((error) => console.log(error));
  } else {
    state.movies = [];
    state.searchText = '';
  }

  return state;
};

export default getMovies;
