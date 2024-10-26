import {fetchPopMovies,} from "./api-favourites.js";



//pop movie 
console.log(fetchPopMovies.data);
console.log("wefwef");


async function processedPopMovies() {
    try{
        const data = await fetchPopMovies()

        const popMovies = data.results.map( popMovies => ({
            title: popMovies.title,
            description:popMovies.overview,
            image:popMovies.poster_path,
            id:popMovies.id

        }))
        return popMovies

    }
    catch(error){
        console.error('Error processing popular movies data:', error);
        throw error;

    }
}

export {
    processedPopMovies
};


