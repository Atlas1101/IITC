import {API_KEY} from "../api-code.js";

const BASE_URL = "https://api.themoviedb.org/3"



async function fetchFromApi(endpoint){
    try {
    const response = await fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}`);

    if (!response.ok) throw new Error(`API error: ${response.status} - ${response.statusText}`);
    return response.json(); // Returns the raw JSON data from the API.
    } catch (error) {
    console.error('Error fetching data:', error);
        throw error;  }
    
}


