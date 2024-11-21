


document.addEventListener("DOMContentLoaded", () => {
    const navMenuButton = document.getElementById("nav_menu");
    const mobileNav = document.querySelector(".mobile-nav");

    navMenuButton.addEventListener("click", () => {
        // Toggle a class to show/hide the menu
        mobileNav.classList.toggle("active");
    });
});






// menu image change


document.getElementById('dropdown').addEventListener('click', function() {
    var image = document.getElementById('imageToChange');
    if (image.src.includes('img/chevron-down.svg')) {
        image.src = 'chevron-up.svg';  // Change to another image
    } else {
        image.src = 'chevron-down.svg';  // Change back to the original image
    }
});