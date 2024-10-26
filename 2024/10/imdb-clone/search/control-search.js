function openMoviePage() {
    window.location.href = "/2024/10/imdb-clone/movie/movie.html";
}

function openNav() {
    document.getElementById("mySidenav-search").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav-search").style.width = "0";
}

const menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
    openNav();
});

const close = document.querySelector(".closebtn");

close.addEventListener("click", () => {
    closeNav();
});

export { openMoviePage };
