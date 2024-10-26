import {processedMovie,processedSimilarMovies} from "./model-movie.js";
import {openMoviePage,likeBtn,dislikeBtn} from "./control-movie.js";

const elMovieCard = document.querySelector(".movie-card");

const elImageContainer = document.querySelector(".movie-img-container");

const elMovieTitle = document.querySelector(".movie-title");

const elMovieDate = document.querySelector(".movie-date");

const elMovieBudget = document.querySelector(".movie-budget");

const elMovieDesc = document.querySelector(".movie-description");

const elMovieGenres = document.querySelector(".movie-genre");





const elSimilarMovieCarouselUl = document.getElementById("similar-movie-container")

// display popular movies

async function renderMovie() {
    try{ 
        let film = await processedMovie()
        
        
            const newMovieImg = document.createElement("img")
            newMovieImg.src = `https://image.tmdb.org/t/p/w300${film.image}`
            elImageContainer.appendChild(newMovieImg)

        


    

            const newMovieCard = document.createElement("li")
            newMovieCard.classList.add("pop-movie-card")

            const newMovieImgContainer =document.createElement("div")
            newMovieImgContainer.classList.add("pop-movie-img-container")
            
        

            newMovieCard.appendChild(newMovieImgContainer)

            
          
            elMovieTitle.textContent = film.title
            elMovieTitle.classList.add("indiv-movie-title")

            elMovieDesc.textContent = film.description
            elMovieDesc.classList.add("indiv-movie-desc")
            console.log(film.date);
            
            elMovieBudget.textContent = film.budget
            elMovieBudget.classList.add("indiv-movie-budget")

            elMovieDate.textContent = film.date
            elMovieDate.classList.add("indiv-movie-date")            

        
            
            elMovieGenres.textContent = film.genres.map(genre=>genre.name).join(", ");
            elMovieGenres.classList.add("indiv-movie-genres")
            
            
        

    }
    catch(error){
        console.error('Error processing popular movies data:', error);
        throw error;

    }
    
}
renderMovie()





async function renderSimilarMovieCarousel() {
    try{ 
        let moviesToRender = await processedSimilarMovies()
          const slidesContainer = document.querySelector('.slides-container-similar');

        if (!slidesContainer) {
            console.error('No slides-container found. Exiting the function.');
            return;
        }
        
        moviesToRender.forEach(film => {

            const newMovieCard = document.createElement("li")
            newMovieCard.classList.add("similar-movie-card")
            newMovieCard.setAttribute("id", film.id)
            newMovieCard.addEventListener("click", () => {
            localStorage.setItem('selectedMovieId', film.id);
            
                openMoviePage();
                
            })

            const newMovieImgContainer =document.createElement("div")
            newMovieImgContainer.classList.add("similar-movie-img-container")
            
            const newMovieImg = document.createElement("img")
            newMovieImg.src = `https://image.tmdb.org/t/p/w300${film.image}`
            newMovieImgContainer.appendChild(newMovieImg)


            newMovieCard.appendChild(newMovieImgContainer)

            
            const newMovieTitle = document.createElement("div")
            newMovieTitle.textContent = film.title
            newMovieTitle.classList.add("similar-movie-title")

            const newMovieDesc = document.createElement("div")
            newMovieDesc.textContent = film.description
            newMovieDesc.classList.add("similar-movie-desc")


            
            newMovieCard.appendChild(newMovieTitle)
            newMovieCard.appendChild(newMovieDesc)
            
            elSimilarMovieCarouselUl.appendChild(newMovieCard)
            
        });

    }
    catch(error){
        console.error('Error processing popular movies data:', error);
        throw error;

    }
    
}
renderSimilarMovieCarousel()






function toggleLikeDislike() {
    


} 

