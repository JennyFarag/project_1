

document.getElementById('appointmentForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Validate form
    if (!this.checkValidity()) {
        this.classList.add('was-validated');
        return;
    }

    // Generate random booking ID
    const bookingId = 'Y' + Math.random().toString(36).substr(2, 4).toUpperCase();

    // Get form values
    const service = document.getElementById('service').value;
    const expert = document.getElementById('expert').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Populate modal with form values
    document.getElementById('bookingId').textContent = bookingId;
    document.getElementById('modalService').textContent = service;
    document.getElementById('modalExpert').textContent = expert;
    document.getElementById('modalDate').textContent = date;
    document.getElementById('modalTime').textContent = time;

    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('confirmationModal'));
    modal.show();
});

 // Enable Bootstrap popover
 var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
 var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
     return new bootstrap.Popover(popoverTriggerEl)
 })


