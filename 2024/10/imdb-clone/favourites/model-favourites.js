import { favIdArray } from "../movie/model-movie.js";
import { favMovieArrayCreator,favMovieArray } from "./api-favourites.js";






async function processedFavMovies() {
    try{
        await favMovieArrayCreator()
        const data = favMovieArray
        console.log(data);
        

        const FavMovies = data.map( FavMovies => ({
            title: FavMovies.title,
            description:FavMovies.overview,
            image:FavMovies.poster_path,
            id:FavMovies.id

        }))
        console.log(FavMovies);
        console.log(data);
        
        return FavMovies
        

    }
    catch(error){
        console.error('Error processing fav movies data:', error);
        throw error;

    }
}


export {
    processedFavMovies
};


