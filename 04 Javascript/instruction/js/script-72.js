import { getShowDetails } from '../js/modules/tv-maze-api.js';

const url = new URL(document.URL);
const serachParams = url.searchParams;
const showId = serachParams.get('id');

getShowDetails(showId, (show) => {
  console.log(show);

  const title = document.getElementById('title');
  const image = document.getElementById('image');

  title.innerHTML = show.name;
  image.setAttribute('src', show.image.original);
});
