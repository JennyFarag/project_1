<script>
$(document).ready(function() {
    $('form').on('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Validate form fields
        var isValid = true;
        $(this).find('input, select').each(function() {
            if ($(this).prop('required') && $(this).val() === '') {
                isValid = false;
                $(this).addClass('is-invalid');
            } else {
                $(this).removeClass('is-invalid');
            }
        });
        
        if (isValid) {
            // Show the modal
            var myModal = new bootstrap.Modal(document.getElementById('appointmentModal'));
            myModal.show();
        }
    })
});
</script>
