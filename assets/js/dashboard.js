
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

function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    dropdown.classList.toggle('hidden');
}

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