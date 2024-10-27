import { API_KEY } from "../api-code.js";
import { favIdArray } from "../movie/model-movie.js";

let readyFavIdArray = JSON.parse(localStorage.getItem('theFavIdArray')) || [];

const BASE_URL = "https://api.themoviedb.org/3";

async function fetchFromApiFav(endpoint) {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}`);

        if (!response.ok)
            throw new Error(`API error: ${response.status} - ${response.statusText}`);
        return response.json(); // Returns the raw JSON data from the API.
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}

let favMovieArray = [];

async function fetchMovieById(movieId) {
    return await fetchFromApiFav(`/movie/${movieId}`);
}

async function favMovieArrayCreator() {
    favMovieArray = [];
    for (const element of readyFavIdArray) {
        const movieId = element.id;
        try {
            const movieData = await fetchMovieById(movieId);
            favMovieArray.push(movieData);
        } catch (error) { }
    }
    console.log(favMovieArray);
}

export { favMovieArrayCreator, favMovieArray };
