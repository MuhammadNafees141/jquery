
const sidebar = document.getElementById("sidebar");
const openSidebar = document.getElementById("openSidebar");
const closeSidebar = document.getElementById("closeSidebar");

openSidebar.addEventListener("click", () => {
  sidebar.classList.remove("-translate-x-full");
});

closeSidebar.addEventListener("click", () => {
  sidebar.classList.add("-translate-x-full");
});

function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  dropdown.classList.toggle('hidden');
}

