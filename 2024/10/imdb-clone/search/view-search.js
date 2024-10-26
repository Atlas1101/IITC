import {processedSearchedMovies} from "./model-search.js";
import {openMoviePage} from "./control-search.js";





const elSearchMovieCarouselUl = document.getElementById("search-movie-container")

// display search results




async function renderSearchMovieCarousel() {
    try{
        let moviesToRender = await processedSearchedMovies()
          const slidesContainer = document.querySelector('.slides-container-search');

        if (!slidesContainer) {
            console.error('No slides-container found. Exiting the function.');
            return;
        }

        moviesToRender.forEach(film => {

            const newMovieCard = document.createElement("li")
            newMovieCard.classList.add("search-movie-card")
            newMovieCard.setAttribute("id", film.id)
            newMovieCard.addEventListener("click", () => {
            localStorage.setItem('selectedMovieId', film.id);

                openMoviePage();

            })

            const newMovieImgContainer =document.createElement("div")
            newMovieImgContainer.classList.add("search-movie-img-container")

            const newMovieImg = document.createElement("img")
            newMovieImg.src = `https://image.tmdb.org/t/p/w300${film.image}`
            newMovieImgContainer.appendChild(newMovieImg)


            newMovieCard.appendChild(newMovieImgContainer)


            const newMovieTitle = document.createElement("div")
            newMovieTitle.textContent = film.title
            newMovieTitle.classList.add("search-movie-title")

            const newMovieDesc = document.createElement("div")
            newMovieDesc.textContent = film.description
            newMovieDesc.classList.add("search-movie-desc")



            newMovieCard.appendChild(newMovieTitle)
            newMovieCard.appendChild(newMovieDesc)

            elSearchMovieCarouselUl.appendChild(newMovieCard)

        });

    }
    catch(error){
        console.error('Error processing popular movies data:', error);
        throw error;

    }

}
renderSearchMovieCarousel()

