// Formats response to look presentable on webpage
const renderCountry = function (data, region) {
  const html = `
  <article class="country">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      <p class="country__row"><span>💰</span>${region}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const displayCountry = function (event) {
  event.preventDefault();
  while (countriesContainer.firstChild) {
    countriesContainer.removeChild(countriesContainer.firstChild);
  }
  whereAmI(latitudeInput.value, longitudeInput.value);
};
