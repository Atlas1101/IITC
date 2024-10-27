import {processedFavMovies,} from "./model-favourites.js";
import {openMoviePage} from "./control-favourites.js";



const elFavMovieCarouselUl = document.querySelector(".slides-container")





async function renderFavMovieCarousel() {
    try{ 
        let moviesToRender = await processedFavMovies()
          const slidesContainer = document.querySelector('.slides-container');

        // if (!slidesContainer) {
        //     console.error('No slides-container found. Exiting the function.');
        //     return;
        // }
        
        moviesToRender.forEach(film => {

            const newMovieCard = document.createElement("li")
            newMovieCard.classList.add("fav-movie-card")
            newMovieCard.setAttribute("id", film.id)
            newMovieCard.addEventListener("click", () => {
            localStorage.setItem('selectedMovieId', film.id);
                openMoviePage();
                
            })

            const newMovieImgContainer =document.createElement("div")
            newMovieImgContainer.classList.add("fav-movie-img-container")
            
            const newMovieImg = document.createElement("img")
            newMovieImg.src = `https://image.tmdb.org/t/p/w300${film.image}`
            
            newMovieImgContainer.appendChild(newMovieImg)


            newMovieCard.appendChild(newMovieImgContainer)

            
            const newMovieTitle = document.createElement("div")
            newMovieTitle.textContent = film.title
            newMovieTitle.classList.add("fav-movie-title")

            const newMovieDesc = document.createElement("div")
            newMovieDesc.textContent = film.description
            newMovieDesc.classList.add("fav-movie-desc")


            
            newMovieCard.appendChild(newMovieTitle)
            newMovieCard.appendChild(newMovieDesc)
            
            elFavMovieCarouselUl.appendChild(newMovieCard)
            
        });

    }
    catch(error){
        console.error('Error processing favourite movies data:', error);
        throw error;

    }
    
}
renderFavMovieCarousel()

const noticeMe = "please"
export {noticeMe}

