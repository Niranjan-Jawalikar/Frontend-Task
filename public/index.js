document.querySelector(".cross-icon").addEventListener("click", () => {
    document.querySelector(".notification").style.display = "none";
})


// const checkOffset = () => {
//     if ($('.floating-buttons').offset().top + $('.floating-buttons').height()
//         >= $('.footer').offset().top - 10)
//         $('.floating-buttons').css('position', 'absolute');
//     if ($(document).scrollTop() + window.innerHeight < $('.footer').offset().top)
//         $('.floating-buttons').css('position', 'fixed'); // restore when you scroll up

// }

// document.addEventListener("scroll", checkOffset)