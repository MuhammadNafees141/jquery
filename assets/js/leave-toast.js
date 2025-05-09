
const toastContainer = document.getElementById("toast-container");
function showToast(message, type = "success") {
  const toast = document.createElement("div");
  const baseStyle = "px-4 py-2 rounded shadow text-white animate-slideIn flex items-center justify-between min-w-[250px]";
  const successStyle = "bg-green-600";
  const errorStyle = "bg-red-600";

  toast.className = `${baseStyle} ${type === "success" ? successStyle : errorStyle}`;
  toast.innerHTML = `
    <span>${message}</span>
    <button class="ml-4 text-white font-bold" onclick="this.parentElement.remove()">×</button>
  `;

  toastContainer.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}
document.getElementById("submitApplicationBtn").addEventListener("click", () => {
  const leaveType = document.getElementById("leaveType").value.trim();
  const checkIn = document.getElementById("checkIn").value.trim();
  const checkOut = document.getElementById("checkOut").value.trim();
  const notes = document.getElementById("notes").value.trim();

  if (!leaveType || !checkIn || !checkOut || !notes) {
    showToast("Please fill out all required fields.", "error");
  } else {
    showToast("Application submitted successfully.", "success");
  }
});



// Get today's date in YYYY-MM-DD format
const today = new Date().toISOString().split('T')[0];

// Apply to both inputs
const checkInInput = document.getElementById('checkIn');
const checkOutInput = document.getElementById('checkOut');

checkInInput.setAttribute('min', today);
checkOutInput.setAttribute('min', today);

// Prevent manual entry of past dates
checkInInput.addEventListener('input', function () {
  if (this.value < today) {
    alert("Past dates are not allowed.");
    this.value = "";
  }
});

checkOutInput.addEventListener('input', function () {
  if (this.value < today) {
    alert("Past dates are not allowed.");
    this.value = "";
  }
});
