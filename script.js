const searchbutton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('countryResult');

searchbutton.addEventListener('click',function(){
    console.log('Button clicked!');
    getCountry(searchInput.value);
});

function getCountry(countryName) {
     const url = `https://countries.dev/name/${countryName}`;
     fetch(url)
         .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            displayCountry(data);
        })
    }

    function displayCountry(data) {
    const country = data[0];

    searchResults.innerHTML = `
        <h2>${country.name}</h2>
        <img src="${country.flags.png}" alt="Flag of ${country.name}" width="150">
        <p>Capital: ${country.capital}</p>
        <p>Region: ${country.region}</p>
        <p>Population: ${country.population.toLocaleString()}</p>
    `;
}