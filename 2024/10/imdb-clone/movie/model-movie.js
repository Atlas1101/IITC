import {fetchMovie,fetchSimilarMovies} from "../movie/api-movie.js";

function getSelectedMovieId() {
    return localStorage.getItem('selectedMovieId');
}
console.log(getSelectedMovieId());


//pop movie 
console.log(fetchMovie());
console.log("wefwef");



async function processedMovie() {
    try{
        const data = await fetchMovie()

        const selectedMovie = {
            title:data.title,
            date:data.release_date,
            budget:data.budget,
            description:data.overview,
            image:data.poster_path,
            genres:data.genres,
            

        }
        console.log(selectedMovie);
        return selectedMovie
        

    }
    catch(error){
        console.error('Error processing the singular movie data:', error);
        throw error;

    }
}


async function processedSimilarMovies() {
    try{
        const data = await fetchSimilarMovies()

        const similarMovies = data.results.map( similarMovies => ({
            title: similarMovies.title,
            description:similarMovies.overview,
            image:similarMovies.poster_path,
            id:similarMovies.id

        }))
        return similarMovies

    }
    catch(error){
        console.error('Error processing popular movies data:', error);
        throw error;

    }
}


function addToFav(){
    
}




export {
    processedMovie,getSelectedMovieId,processedSimilarMovies
};




