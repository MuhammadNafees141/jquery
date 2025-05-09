
const today = new Date().toISOString().split('T')[0];
const dateInput = document.getElementById('date');
dateInput.setAttribute('max', today);
dateInput.setAttribute('min', today);
dateInput.addEventListener('input', function () {
    const selectedDate = this.value;
    if (new Date(selectedDate).toISOString().split('T')[0] !== today) {
        alert("Only the current date is allowed.");
        this.value = ""; 
    }
});
