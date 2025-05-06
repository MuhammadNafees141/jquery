
document.addEventListener("DOMContentLoaded", function () {
    const today = new Date().toISOString().split('T')[0];
    const dateInput = document.getElementById('date');
    dateInput.value = today;
    dateInput.min = today;
    dateInput.max = today;
});
