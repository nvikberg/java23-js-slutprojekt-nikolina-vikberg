/**
 * Film portal using themoviedb.org API
 * Author: Nikolina Vikberg
 * 2024 Malmö
 * Reference: https://developer.themoviedb.org/reference/intro/getting-started
 * 
 * End project for JavaScript 1, in Java Developer program at Grit Academy
 * This website shows the top 10 highest ranked movies, top 10 most popular movies right now, 
 * and has a search funtion for movies and celeberities.
 */

import {  selectionEvent, fetchTopPopularMovies, fetchTopRankedMovies } from "./js/fetchData.js";

fetchTopRankedMovies();
fetchTopPopularMovies();

document.querySelector("#top10Ranked").addEventListener("click", fetchTopRankedMovies);
document.querySelector("#top10Popular").addEventListener("click", fetchTopPopularMovies);
document.querySelector('#searchForm').addEventListener('submit', selectionEvent )
