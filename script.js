
// JavaScript code to change header color on scroll
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var scrollPosition = window.scrollY;

    // Add 'scrolled' class to header when scrolled down
    if (scrollPosition > 0) {
        header.classList.add('scrolled');
    } else {
        // Remove 'scrolled' class when back to the top
        header.classList.remove('scrolled');
    }
});

