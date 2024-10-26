import {fetchSearchedMovies,fetchFromApi3} from "./api-search.js";

function getSearchedMovies() {
    return localStorage.getItem('searchInput');
}

console.log(fetchSearchedMovies());


//pop movie 
console.log("wefwef");



async function processedSearchedMovies() {
    try{
        const data = await fetchFromApi3()
         const searchedMovies = data.results.map( similarMovies => ({
            title: similarMovies.title,
            description:similarMovies.overview,
            image:similarMovies.poster_path,
            id:similarMovies.id

        }))

        return searchedMovies
        



    }
    catch(error){
        console.error('Error processing the singular movie data:', error);
        throw error;

    }
    
}



export {
    processedSearchedMovies,getSearchedMovies,
};




