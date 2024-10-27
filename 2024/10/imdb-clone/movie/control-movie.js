import { addToFav, removeFromFav } from "./model-movie.js";
import { favSelected, unfavSelected } from "../movie/view-movie.js";

function openMoviePage() {
    window.location.href = "/2024/10/imdb-clone/movie/movie.html";
}

function openNav() {
    document.getElementById("mySidenav-movie").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav-movie").style.width = "0";
}

const menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
    openNav();
});

const close = document.querySelector(".closebtn");

close.addEventListener("click", () => {
    closeNav();
});


const searchForm = document.querySelector(".search");
const searchInput = document.querySelector(".search-input");


searchForm.addEventListener("submit", (e) => {
    localStorage.setItem('searchInput', searchInput.value);
    e.preventDefault();
    openSearchPage();
})

function openSearchPage() {
    window.location.href = '/2024/10/imdb-clone/search/search.html';
}


export { openMoviePage };


const likeBtn = document.querySelector(".favourite-icon");

likeBtn.addEventListener("click", () => {
    console.log("I like");
    favSelected();
    addToFav();
    
});


const dislikeBtn = document.querySelector(".unfavourite-icon");

dislikeBtn.addEventListener("click", () => {
    console.log("I dont like");
    unfavSelected();
    removeFromFav();
    
});

export { likeBtn, dislikeBtn };