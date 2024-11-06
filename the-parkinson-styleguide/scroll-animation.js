document.addEventListener("DOMContentLoaded", function() {
    let scrollDirection = 1;
    const scrollSpeed = 0.8; // Adjust the scroll speed as needed

    function scrollPage() {
        window.scrollBy(0, scrollSpeed * scrollDirection);
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight || window.scrollY === 0) {
            scrollDirection *= -1;
        }
        requestAnimationFrame(scrollPage);
    }

    scrollPage();
});