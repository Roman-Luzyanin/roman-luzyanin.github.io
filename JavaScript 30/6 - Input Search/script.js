const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
    .then(pack => pack.json())
    .then(data => cities.push(...data));

function findMatches(word, cities) {
    return cities.filter(place => {
        const regexp = new RegExp(word, 'gi');
       return place.city.match(regexp) || place.state.match(regexp);
})}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

function displayMatches() {
    const arr = findMatches(this.value, cities);
    const info =  arr.map(place => {
        const regexp = new RegExp(this.value, 'gi');
        console.log(this.value);
        const cityName = place.city.replace(regexp, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regexp, `<span class="hl">${this.value}</span>`);
        return `
        <li>
            <span>${cityName}, ${stateName}</span>
            <span>${numberWithCommas(place.population)}</span>
        </li>`
            
         
    }).join('');
    
    output.innerHTML = info;
}

const input = document.querySelector('.search');
const output = document.querySelector('.info');

input.addEventListener('keyup', displayMatches);

