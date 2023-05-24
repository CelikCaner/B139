import { searchShows } from '../js/modules/tv-maze-api.js';
const lstTvShows = document.getElementById('lstTvShows');
let timeoutSearch = null;

document.getElementById('txtSearch').addEventListener('input', (event) => {
  const query = event.target.value;

  if (timeoutSearch) clearTimeout(timeoutSearch);
  timeoutSearch = setTimeout(() => {
    searchShows(query, (shows) => {
      createMovies(shows);
    });
  }, 500);
});

lstTvShows.addEventListener('click', (event) => {
  const selectedCard = event.target.closest('.card');
  const showId = selectedCard.dataset.show;
  location.href = `./72 tvshows-api-details.html?id=${showId}`;
});

const createMovies = (shows) => {
  lstTvShows.innerHTML = '';
  shows.forEach((item) => {
    const movieCard = createMovieCard(item);
    lstTvShows.insertAdjacentHTML('afterbegin', movieCard);
  });
};

const createMovieCard = (item) => {
  const { id, image, name, genres } = item.show;

  let movieImage = '../../img/no-image-placeholder.svg.png';
  if (image) {
    movieImage = image.medium;
  }

  return `    
  <div class="col">
	<div class="card h-100" style="cursor:pointer" data-show="${id}">
	  <img src="${movieImage}" class="card-img-top" alt="${name}." />
	  <div class="card-body">
		<h5 class="card-title">${name}</h5>
		<p class="card-text">${genres.join('-')}</p>
	  </div>
	</div>
  </div>`;
};
