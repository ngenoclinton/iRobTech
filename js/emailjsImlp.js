
$(document).ready(function(){
    $("#submit_btn").click(function () {
        // Initialize EmailJS with your public key
        // Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
        emailjs.init('YOUR_PUBLIC_KEY');

        // Get form elements
        const contactForm = document.getElementById('contact_form');
        const submitBtn = document.getElementById('submit_btn');
        const formLoading = document.getElementById('form-loading');
        const formSuccess = document.getElementById('form-success');
        const formError = document.getElementById('form-error');

        // Form submission handler
        contactForm.addEventListener('submit', function (event) {
            // Prevent default form submission
            event.preventDefault();

            // Show loading indicator
            formLoading.style.display = 'inline-block';
            submitBtn.disabled = true;

            // Hide previous messages
            formSuccess.style.display = 'none';
            formError.style.display = 'none';

            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const budget = document.getElementById('budget').value;
            const message = document.getElementById('message').value;

            // Prepare template parameters
            // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual EmailJS service and template IDs
            const templateParams = {
                from_name: name,
                from_email: email,
                budget: budget,
                message: message,
                to_name: 'iRob Technologies',
                reply_to: email
            };

            // Send email using EmailJS
            emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
                .then(function (response) {
                    console.log('SUCCESS!', response.status, response.text);

                    // Hide loading indicator
                    formLoading.style.display = 'none';

                    // Show success message
                    formSuccess.style.display = 'block';

                    // Reset form
                    contactForm.reset();

                    // Re-enable submit button
                    submitBtn.disabled = false;
                }, function (error) {
                    console.log('FAILED...', error);

                    // Hide loading indicator
                    formLoading.style.display = 'none';

                    // Show error message
                    formError.style.display = 'block';

                    // Re-enable submit button
                    submitBtn.disabled = false;
                });
        });
    })()
})