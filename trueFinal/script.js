document.addEventListener("DOMContentLoaded", () => {
    const burgerMenu = document.getElementById("burger-menu");
    const modal = document.getElementById("modal");
    const closeButton = document.getElementById("close-button");

    burgerMenu.addEventListener("click", () => {
        modal.classList.add('open-menu')
    });

    closeButton.addEventListener("click", () => {
        modal.classList.remove('open-menu')

    });

});
