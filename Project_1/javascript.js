document.getElementById('bookButton').addEventListener('click', function() {
    // Get form element
    const form = document.getElementById('appointmentForm');
<<<<<<< HEAD

<<<<<<< HEAD
    document.getElementById('consultationForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        
        // Get form data
        var fullName = document.getElementById('fullName').value;
        var phoneNumber = document.getElementById('phoneNumber').value;
        var email = document.getElementById('email').value;
        
        // You can perform any validation or data processing here
        
        // Display confirmation message
        var confirmationDiv = document.getElementById('confirmationMessage');
        confirmationDiv.innerHTML = '<p>Thank you, ' + fullName + '! Your request has been submitted successfully.</p>';
        
        // Clear form fields (optional)
        document.getElementById('fullName').value = '';
        document.getElementById('phoneNumber').value = '';
        document.getElementById('email').value = '';
    });


=======
=======

>>>>>>> f1957ec1f9bc3022f260fe8f24e368ee0de434cf
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


 
>>>>>>> f1957ec1f9bc3022f260fe8f24e368ee0de434cf


