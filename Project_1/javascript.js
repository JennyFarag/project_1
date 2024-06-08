document.getElementById('bookButton').addEventListener('click', function() {
    // Get form element
    const form = document.getElementById('appointmentForm');

    // Check if the form is valid
    if (!form.checkValidity()) {
        form.classList.add('was-validated'); // This will show validation feedback if any field is invalid
        return; // Stop the function if the form is invalid
    }

    // Generate a random booking ID
    const bookingId = 'Y' + Math.random().toString(36).substring(2, 6).toUpperCase();

    // Retrieve values from the form
    const service = document.getElementById('service').value;
    const expert = document.getElementById('expert').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Set the values in the modal
    document.getElementById('bookingId').textContent = bookingId;
    document.getElementById('modalService').textContent = service;
    document.getElementById('modalExpert').textContent = expert;
    document.getElementById('modalFirstName').textContent = firstName;
    document.getElementById('modalLastName').textContent = lastName;
    document.getElementById('modalDate').textContent = date;
    document.getElementById('modalTime').textContent = time;

    // Show the modal
    var modal = new bootstrap.Modal(document.getElementById('appointmentModal'));
    modal.show();
});


 


