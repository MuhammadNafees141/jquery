
document.getElementById('cnic').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '').slice(0, 13); // Digits only, max 13
    let formatted = '';

    if (value.length > 5) {
        formatted = value.slice(0, 5) + '-' + value.slice(5, 12);
        if (value.length > 12) {
            formatted += '-' + value.slice(12);
        }
    } else {
        formatted = value;
    }

    e.target.value = formatted;
});

const sidebar = document.getElementById("sidebar");
const openSidebar = document.getElementById("openSidebar");
const closeSidebar = document.getElementById("closeSidebar");

openSidebar.addEventListener("click", () => {
  sidebar.classList.remove("-translate-x-full");
});

closeSidebar.addEventListener("click", () => {
  sidebar.classList.add("-translate-x-full");
});