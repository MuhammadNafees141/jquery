
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

document.addEventListener("click", function (event) {
  const sidebar = document.getElementById("sidebar");
  const openSidebar = document.getElementById("openSidebar");

  const isSidebarOpen = !sidebar.classList.contains("-translate-x-full");
  const clickedInsideSidebar = sidebar.contains(event.target);
  const clickedSidebarToggle = openSidebar.contains(event.target);

  // If sidebar is open, and click is outside both the sidebar and toggle button
  if (isSidebarOpen && !clickedInsideSidebar && !clickedSidebarToggle) {
    sidebar.classList.add("-translate-x-full");
  }
});