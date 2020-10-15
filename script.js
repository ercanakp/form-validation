const form = document.getElementById('form');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function setMessage(msg, color) {
    message.textContent = msg;
    message.style.color = color;
    messageContainer.style.borderColor = color;
}

function setPasswordFields(color) {
    password.style.borderColor = color;
    passwordConfirm.style.borderColor = color;
}

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    };

    console.log(user);
}

function validateForm() {
    // Using Constraint API
    isValid = form.checkValidity();
    if (!isValid) {
        // Style main message for an error
        setMessage('Please fill out all fileds', 'green');
    }

    if (password.value === passwordConfirm.value) {
        passwordsMatch = true;
        setMessage('Congratulations!', 'green');
    } else {
        passwordsMatch = false;
        setMessage('Make sure passwords match', 'red');
        setPasswordFields('red');
    }
}

function processFormData(e) {
    e.preventDefault();

    // Validate Form
    validateForm();

    // Store form data if the data is valid
    if (isValid && passwordsMatch) {
        storeFormData();
    }
}

// Event Listener
form.addEventListener('submit', processFormData);