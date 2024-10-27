import {processedPopMovies,} from "./model.js";
import {openMoviePage} from "./control.js";
import { noticeMe } from "../favourites/view-favourites.js";

let isPageActive = true;


const elpopularMovieCarouselUl = document.getElementById("pop-movie-container")

// display popular movies




async function renderPopularMovieCarousel() {
    try{ 
        if (!isPageActive) return;
        let moviesToRender = await processedPopMovies()
          const slidesContainer = document.querySelector('.slides-container');

        if (!slidesContainer) {
            console.error('No slides-container found. Exiting the function.');
            return;
        }
        
        moviesToRender.forEach(film => {

            const newMovieCard = document.createElement("li")
            newMovieCard.classList.add("pop-movie-card")
            newMovieCard.setAttribute("id", film.id)
            newMovieCard.addEventListener("click", () => {
            localStorage.setItem('selectedMovieId', film.id);
                
                isPageActive = false; 
                console.log(isPageActive);
                
                openMoviePage();
                
            })

            const newMovieImgContainer =document.createElement("div")
            newMovieImgContainer.classList.add("pop-movie-img-container")
            
            const newMovieImg = document.createElement("img")
            newMovieImg.src = `https://image.tmdb.org/t/p/w300${film.image}`
            newMovieImgContainer.appendChild(newMovieImg)


            newMovieCard.appendChild(newMovieImgContainer)

            
            const newMovieTitle = document.createElement("div")
            newMovieTitle.textContent = film.title
            newMovieTitle.classList.add("pop-movie-title")

            const newMovieDesc = document.createElement("div")
            newMovieDesc.textContent = film.description
            newMovieDesc.classList.add("pop-movie-desc")


            
            newMovieCard.appendChild(newMovieTitle)
            newMovieCard.appendChild(newMovieDesc)
            
            elpopularMovieCarouselUl.appendChild(newMovieCard)
            
        });

    }
    catch(error){
        console.error('Error processing popular movies data:', error);
        throw error;

    }
    
}
renderPopularMovieCarousel()


// export {getselectedMovieId,selectedMovieId}

