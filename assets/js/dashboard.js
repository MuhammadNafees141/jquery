
// const sidebar = document.getElementById("sidebar");
// const openSidebar = document.getElementById("openSidebar");
// const closeSidebar = document.getElementById("closeSidebar");

// openSidebar.addEventListener("click", () => {
//   sidebar.classList.remove("-translate-x-full");
// });

// closeSidebar.addEventListener("click", () => {
//   sidebar.classList.add("-translate-x-full");
// });

// function toggleDropdown(id) {
//   const dropdown = document.getElementById(id);
//   dropdown.classList.toggle('hidden');
// }

const sidebar = document.getElementById("sidebar");
const openSidebarBtn = document.getElementById("openSidebar");
const closeSidebarBtn = document.getElementById("closeSidebar");

openSidebarBtn.addEventListener("click", () => {
  sidebar.classList.remove("-translate-x-full");
});

closeSidebarBtn.addEventListener("click", () => {
  sidebar.classList.add("-translate-x-full");
});

document.addEventListener("click", (e) => {
  const isSmallScreen = window.innerWidth < 768;
  const clickedInsideSidebar = sidebar.contains(e.target);
  const clickedOpenBtn = openSidebarBtn.contains(e.target);
  if (isSmallScreen && !clickedInsideSidebar && !clickedOpenBtn) {
    sidebar.classList.add("-translate-x-full");
  }
});


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