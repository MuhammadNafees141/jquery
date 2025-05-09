
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
document.getElementById("approvedBtn").addEventListener("click", () => {
    showToast("Leave Approved!", "success");
});
document.getElementById("rejectedBtn").addEventListener("click", () => {
    showToast("Leave Rejected!", "error");
});
