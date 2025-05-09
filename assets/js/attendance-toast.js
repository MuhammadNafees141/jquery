
  function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `flex items-start gap-3 p-4 rounded-lg shadow-md text-white ${
      type === 'success' ? 'bg-green-500' : 'bg-red-500'
    }`;

    const icon = type === 'success'
      ? `<svg class="w-6 h-6 mt-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
        </svg>`
      : `<svg class="w-6 h-6 mt-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>`;

    toast.innerHTML = `${icon}<span>${message}</span>`;

    const container = document.getElementById('toast-container');
    container.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 3000);
  }

  function handleAttendanceSave() {
    const date = document.getElementById('date').value.trim();
    const checkIn = document.getElementById('checkIn').value.trim();
    const checkOut = document.getElementById('checkOut').value.trim();

    if (!date || !checkIn || !checkOut) {
      showToast('Please fill in all required fields.', 'error');
    } else {
      showToast('Attendance saved successfully!', 'success');
    }
  }
