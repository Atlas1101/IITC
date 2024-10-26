import {API_KEY} from "../api-code.js";
// import { getselectedMovieId,selectedMovieId, } from "../home/view.js";
import {getSelectedMovieId} from "./model-movie.js";  

const BASE_URL = "https://api.themoviedb.org/3"



async function fetchFromApi2(endpoint){
    try {
    const response = await fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}`);

    if (!response.ok) throw new Error(`API error: ${response.status} - ${response.statusText}`);
    return response.json(); // Returns the raw JSON data from the API.
    } catch (error) {
    console.error('Error fetching data:', error);
        throw error;  }
    
}

console.log("w4f43f");


async function fetchMovie (){
    console.log(fetchMovie.results);
    
    return await fetchFromApi2(`/movie/${getSelectedMovieId()}`)
    
}  

async function fetchSimilarMovies (){
    console.log(fetchMovie.results);
    
    return await fetchFromApi2(`/movie/${getSelectedMovieId()}/similar`)
    
}  





export {
    fetchMovie,
    fetchSimilarMovies
}

