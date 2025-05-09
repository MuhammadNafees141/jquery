
const today = new Date().toISOString().split('T')[0];
const dateInput = document.getElementById('select-date');
dateInput.setAttribute('max', today);
dateInput.addEventListener('input', function () {
    const selectedDate = this.value;
    if (new Date(selectedDate) > new Date(today)) {
        alert("Future dates are not allowed.");
        this.value = "";
    }
});