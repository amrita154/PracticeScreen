function getHeaderTitle(name) {
  return name === 'Home'
    ? 'Home'
    : name === 'SearchMovie'
    ? 'Search'
    : name === 'MovieDetails'
    ? 'Movie'
    : '';
}

export default getHeaderTitle;
