import {API_KEY} from "../api-code.js";
import {getSearchedMovies} from "./model-search.js";  

const BASE_URL = "https://api.themoviedb.org/3"


const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDdiYWU4YmRhYTdkOTQ0MmNmMDljN2U5NmViZmY1OCIsIm5iZiI6MTcyOTg3OTYxMi43MjQ1NTUsInN1YiI6IjY3MTY4ZDYwNGJmMzdjODgzY2I3MzE2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NW-jPho5tHkf-b0XuSO6d05MTgj5ntDnd1bt13HWvWY'
  }
};



async function fetchFromApi3(){
    try {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${getSearchedMovies()}&include_adult=false&language=en-US&page=1`, options)
 console.log(response);
    

    if (!response.ok) throw new Error(`API error: ${response.status} - ${response.statusText}`);
    return response.json();
    } catch (error) {
    console.error('Error fetching data:', error);
        throw error;  }
    
}








// async function fetchFromApi3(endpoint){
//     try {
//     const response = await fetch(`${BASE_URL}${endpoint}api_key=${API_KEY}`);
//     console.log(response);
    

//     if (!response.ok) throw new Error(`API error: ${response.status} - ${response.statusText}`);
//     return response.json();
//     } catch (error) {
//     console.error('Error fetching data:', error);
//         throw error;  }
    
// }

console.log("w4f43f");




async function fetchSearchedMovies (){
    console.log(fetchSearchedMovies.results);
    return await fetchFromApi3()
    
}  




export {
    fetchSearchedMovies,fetchFromApi3
}

