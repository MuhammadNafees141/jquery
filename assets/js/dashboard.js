
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
// document.addEventListener("click", (e) => {
//   const isSmallScreen = window.innerWidth < 768;
//   const clickedInsideSidebar = sidebar.contains(e.target);
//   const clickedOpenBtn = openSidebarBtn.contains(e.target);
//   if (isSmallScreen && !clickedInsideSidebar && !clickedOpenBtn) {
//     sidebar.classList.add("-translate-x-full");
//   }
// });
// document.addEventListener("click", function (event) {
//   const sidebar = document.getElementById("sidebar");
//   const openSidebar = document.getElementById("openSidebar");

//   const isSidebarOpen = !sidebar.classList.contains("-translate-x-full");
//   const clickedInsideSidebar = sidebar.contains(event.target);
//   const clickedSidebarToggle = openSidebar.contains(event.target);

//   // If sidebar is open, and click is outside both the sidebar and toggle button
//   if (isSidebarOpen && !clickedInsideSidebar && !clickedSidebarToggle) {
//     sidebar.classList.add("-translate-x-full");
//   }
// });




const sidebar = document.getElementById("sidebar");
const openSidebar = document.getElementById("openSidebar");
const closeSidebar = document.getElementById("closeSidebar");

// Sidebar toggle logic
openSidebar.addEventListener("click", () => {
  sidebar.classList.remove("-translate-x-full");
});

closeSidebar.addEventListener("click", () => {
  sidebar.classList.add("-translate-x-full");
});

// Dropdown toggle logic
function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  const icon = document.getElementById(id.replace("Dropdown", "Icon"));
  const isHidden = dropdown.classList.contains("hidden");

  // Close all dropdowns and reset icons
  document.querySelectorAll('[id$="Dropdown"]').forEach(el => el.classList.add("hidden"));
  document.querySelectorAll('[id$="Icon"]').forEach(el => el.classList.remove("rotate-180"));

  // Open selected dropdown and rotate icon if it was hidden
  if (isHidden) {
    dropdown.classList.remove("hidden");
    icon.classList.add("rotate-180");
  }
}

// Close dropdowns on outside click
document.addEventListener("click", (e) => {
  const isDropdownBtn = e.target.closest("button[onclick^='toggleDropdown']");
  const isDropdownContent = e.target.closest('[id$="Dropdown"]');

  if (!isDropdownBtn && !isDropdownContent) {
    document.querySelectorAll('[id$="Dropdown"]').forEach(el => el.classList.add("hidden"));
    document.querySelectorAll('[id$="Icon"]').forEach(el => el.classList.remove("rotate-180"));
  }
});

// Sidebar auto-close on small screens
document.addEventListener("click", (e) => {
  const isSmallScreen = window.innerWidth < 768;
  const clickedInsideSidebar = sidebar.contains(e.target);
  const clickedOpenBtn = openSidebar.contains(e.target);

  if (isSmallScreen && !clickedInsideSidebar && !clickedOpenBtn) {
    sidebar.classList.add("-translate-x-full");
  }
});
