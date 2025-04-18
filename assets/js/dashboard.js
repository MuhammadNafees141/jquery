

const sidebar = document.getElementById('sidebar');
const hamburger = document.getElementById('hamburger');


hamburger.addEventListener('click', function (event) {
    event.stopPropagation();
    sidebar.classList.toggle('-translate-x-full');
});
document.addEventListener('click', function (event) {
    if (
        window.innerWidth < 768 &&
        !sidebar.contains(event.target) &&
        !hamburger.contains(event.target)
    ) {
        sidebar.classList.add('-translate-x-full');
    }
});

window.addEventListener('resize', function () {
    if (window.innerWidth >= 768) {
        sidebar.classList.remove('-translate-x-full');
    }
});