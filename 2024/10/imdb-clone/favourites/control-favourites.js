    function openMoviePage() {
    window.location.href = '/2024/10/imdb-clone/movie/movie.html';

    }
    export {openMoviePage}


    function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

const menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
    openNav();
})

const close = document.querySelector(".closebtn");

close.addEventListener("click", () => {
    closeNav();
})

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
