const sidebar = document.getElementById('sidebar');
const hamburger = document.getElementById('hamburger');

function openSidebar() {
  sidebar.classList.remove('-translate-x-full');
}

function closeSidebar() {
  sidebar.classList.add('-translate-x-full');
}

hamburger.addEventListener('click', function (event) {
  event.stopPropagation();
  openSidebar();
});

document.body.addEventListener('click', function (event) {
  if (
    window.innerWidth < 768 &&
    !sidebar.contains(event.target) &&
    !hamburger.contains(event.target)
  ) {
    closeSidebar();
  }
});