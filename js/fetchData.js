import { addDataToMovieCards, addDataToCelebrityCards, addDataToTop10Cards } from "./dataToCards.js";
import { errorEmptySearch, errorNotFound, errorNetwork } from "./errorHandling.js";

//API KEY
const BAERER_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjUyODgzNTk5OGQ3YzlhNDM2MmRjNDI5NzI2M2JiMSIsInN1YiI6IjY2MWY5YTZiNTI4YjJlMDE2NDNmNWIxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AEQ-SaHrYRbowVIpI_HgGjEjRtxvZNTCyrRi1_HQaF4';
export const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${BAERER_KEY}`
    }
};

const mainClass = document.querySelector('#mainClass');
const input = document.querySelector('#userSearch');

//fetch top list for top ranked movies and handles network error
export async function fetchTopRankedMovies() {
    mainClass.innerHTML = "";
    notFoundDiv.classList.add('hide');

    const rankedListUrl = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`;

    const response = await fetch(rankedListUrl, options).catch(errorNetwork);
    console.log(errorNetwork)

    if (response.ok) {
        const data = await response.json();
        console.log(data.results)
        return addDataToTop10Cards(data.results)

    } else if (response.status == 404) {
        throw new Error('Top ranked movies not found');
    }

}

//fetch top list for popular movies and handles network error
export async function fetchTopPopularMovies() {
    mainClass.innerHTML = "";
    notFoundDiv.classList.add('hide');
    const popularListUrl = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`;

    const response = await fetch(popularListUrl, options).catch(errorNetwork);

    if (response.ok) {
        const data = await response.json();
        console.log(data.results)
        return addDataToTop10Cards(data.results);

    } else if (response.status == 404) {
        throw new Error('Top popular movies not found');
    }
}

//fetches movie (user search) from API and handles network error / user input error / data not found error
async function movieSearch() {
    mainClass.innerHTML = "";
    const inputValue = input.value;

    errorEmptySearch(inputValue);

    const urlMovie = `https://api.themoviedb.org/3/search/movie?query=${inputValue}&include_adult=false&language=en-US&page=1`;

    const response = await fetch(urlMovie, options);


    if (response.ok) {
        notFoundDiv.classList.add('hide');
        const data = await response.json();
        console.log(data)

        if (data.results.length === 0) {
            console.log(data.results.length)

            errorNotFound();
            console.log('here')
        }

        console.log(data.results)
        return addDataToMovieCards(data.results);

    } else if (response.status == 404) {
        throw new Error('Film not found');
    }
}

//fetches celebrity (user search) from API and handles network error / user input error / data not found error
async function celebritySearch() {
    mainClass.innerHTML = "";
    const inputValue = input.value;

    errorEmptySearch(inputValue);

    const urlCelebrity = `https://api.themoviedb.org/3/search/person?query=${inputValue}&include_adult=false&language=en-US&page=1`;

    const response = await fetch(urlCelebrity, options);

    if (response.ok) {
        const data = await response.json();
        notFoundDiv.classList.add('hide');

        if (data.results.length === 0) {
            console.log(data.results.length)

            errorNotFound();
        }
        console.log(data.results)

        return addDataToCelebrityCards(data.results);

    } else if (response.status == 404) {
        throw new Error('Celebrity not found');
    }
}

//handles users selections in search drop down menu
export function selectionEvent(event) {
    event.preventDefault();

    const selectionMenu = document.querySelector('#selectionMenu').value;
    const movieSelected = document.querySelector('#movieSelected').value;
    const celebritySelected = document.querySelector('#celebritySelected').value;


    if (selectionMenu === movieSelected) {
        movieSearch().catch(errorNetwork);
        console.log(movieSelected)
    } else {
        celebritySearch().catch(errorNetwork);
        console.log(celebritySelected);
    }
}