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


let favIdArray = JSON.parse(localStorage.getItem('theFavIdArray')) || [];


function addToFav(){
    let newFavId = {
        id:getSelectedMovieId(),
    }
    
        favIdArray.push(newFavId)
        localStorage.setItem('theFavIdArray',JSON.stringify(favIdArray))

    
}


function removeFromFav(){
    let unFavId = {
        id:getSelectedMovieId(),
    }
    favIdArray=favIdArray.filter(film => film.id !== unFavId.id)
    localStorage.setItem('theFavIdArray',JSON.stringify(favIdArray))
}

function isFav(){
     if(favIdArray.some(film => film.id === getSelectedMovieId())){

         return true
     }
    else
    return false
}




export {
    processedMovie,getSelectedMovieId,processedSimilarMovies,addToFav,removeFromFav,isFav,favIdArray
};




