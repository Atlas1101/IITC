const queButtons = document.querySelectorAll(".question-btn");

queButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const headerContainer = button.querySelector(".header-container");
        const answer = button.querySelector(".answer");

        answer.classList.toggle("visible");

        const plusIcon = headerContainer.querySelector(".plus");
        const minusIcon = headerContainer.querySelector(".minus");

        plusIcon.classList.toggle("hidden");
        minusIcon.classList.toggle("hidden");
    });
});
