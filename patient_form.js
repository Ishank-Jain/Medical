document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded");

    const form = document.getElementById('patientForm');
    
    if (form) {
        console.log("Form found");
        
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            console.log("Form submitted");
            
            // Get form data
            const formData = new FormData(form);
            for (let [key, value] of formData.entries()) {
                console.log(key + ': ' + value);
            }
            
            // Here you would typically send the data to the server
            // For now, we'll just log a message
            console.log("Data would be sent to server here");
            
            // Clear the form
            form.reset();
            
            alert("Form submitted successfully!");
        });
    } else {
        console.error("Form not found");
    }
});