const cities = [];
const newCityInput = document.getElementById('inputField');
const addBtn = document.getElementById('addBtn');
const sortBtn = document.getElementById('sortBtn');
const reverseBtn = document.getElementById('reverseBtn');
const removeLastBtn = document.getElementById('removeLastBtn');
const removeFirstBtn = document.getElementById('removeFirstBtn');
const removeAllBtn = document.getElementById('removeAllBtn');
const mixBtn = document.getElementById('mixBtn');
const listCities = document.getElementById('cityList');

const addCity = (city) => {
  if (!city) return;
  if (cities.includes(city)) return;
  cities.push(city);
};

const sortCities = () => {
  cities.sort((a, b) => a.localeCompare(b));
};

const reverseCities = () => {
  cities.reverse();
};

const removeFirstCity = () => {
  cities.shift();
};

const removeLastCity = () => {
  cities.pop();
};

const removeAllCities = () => {
  cities.splice(0, cities.length);
};

const renderCities = () => {
  listCities.innerHTML = '';
  cities.forEach(
    (city) =>
      (listCities.innerHTML += `<li class="list-group-item">${city}</li>`)
  );
};

const mixCities = () => {
  cities.sort(() => 0.5 - Math.random());
};

addBtn.addEventListener('click', () => {
  const city = newCityInput.value;
  addCity(city);
  renderCities();
  newCityInput.value = '';
  newCityInput.focus();
});

newCityInput.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    addBtn.click();
  }
});

sortBtn.addEventListener('click', () => {
  sortCities();
  renderCities();
});

reverseBtn.addEventListener('click', () => {
  reverseCities();
  renderCities();
});

removeFirstBtn.addEventListener('click', () => {
  removeFirstCity();
  renderCities();
});

removeLastBtn.addEventListener('click', () => {
  removeLastCity();
  renderCities();
});

removeAllBtn.addEventListener('click', () => {
  removeAllCities();
  renderCities();
});

mixBtn.addEventListener('click', () => {
  mixCities();
  renderCities();
});
