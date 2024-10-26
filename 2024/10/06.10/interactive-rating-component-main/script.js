let ratingPage = document.querySelector(".content");
let thankYouPage = document.querySelector(".thank-you");
let submitButton = document.getElementById("rating-submit");
let ratings = document.querySelectorAll(".btn");
let selectedRating = null;
let ratingInsert = document.querySelector(".rating");

document.addEventListener("click", (e) => {
    if (
        !e.target.classList.contains("btn") &&
        !e.target.classList.contains("btn-submit")
    ) {
        selectedRating = null;
    }
    console.log(e.target.classList);
});

ratings.forEach((ratings) => {
    ratings.addEventListener("click", () => {
        selectedRating = ` ${ratings.innerHTML} `;
        console.log(selectedRating);
    });
});

submitButton.addEventListener("click", function () {
    if (!selectedRating) {
        return;
    } else {
        ratingInsert.textContent = selectedRating;
        ratingPage.classList.add("hidden");
        thankYouPage.classList.remove("hidden");
        selectedRating = null;
    }
});

let rateAgain = document.getElementById("rate-again");

rateAgain.addEventListener("click", function () {
    console.log("the button also works");
    ratingPage.classList.remove("hidden");
    thankYouPage.classList.add("hidden");
});
