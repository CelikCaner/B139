const baseUrl = 'https://api.tvmaze.com';

const searchShows = (query, callback) => {
  const url = `${baseUrl}/search/shows?q=${query}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => callback(data));
};

const getShowDetails = (showId, callback) => {
  const url = `${baseUrl}/shows/${showId}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => callback(data));
};

export { searchShows, getShowDetails };
