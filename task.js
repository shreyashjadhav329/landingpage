document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let isValid = true;

    // Name Validation
    let name = document.getElementById("name");
    let nameError = name.nextElementSibling;
    if (name.value.trim().length < 3) {
        nameError.classList.remove("d-none");
        isValid = false;
    } else {
        nameError.classList.add("d-none");
    }

    // Email Validation
    let email = document.getElementById("email");
    let emailError = email.nextElementSibling;
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.match(emailPattern)) {
        emailError.classList.remove("d-none");
        isValid = false;
    } else {
        emailError.classList.add("d-none");
    }

    // Phone Validation
    let phone = document.getElementById("phone");
    let phoneError = phone.nextElementSibling;
    let phonePattern = /^[0-9]{10}$/;
    if (!phone.value.match(phonePattern)) {
        phoneError.classList.remove("d-none");
        isValid = false;
    } else {
        phoneError.classList.add("d-none");
    }

    // Message Validation
    let message = document.getElementById("message");
    let messageError = message.nextElementSibling;
    if (message.value.trim().length < 10) {
        messageError.classList.remove("d-none");
        isValid = false;
    } else {
        messageError.classList.add("d-none");
    }

    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("contactForm").reset();
    }
});