const baseUrl = 'https://api.tvmaze.com';

const searchShows = (query) => {
  const url = `${baseUrl}/search/shows?q=${query}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
};

const getShowDetails = () => {};

export { searchShows, getShowDetails };
