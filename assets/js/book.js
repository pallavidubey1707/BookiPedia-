document.addEventListener('DOMContentLoaded', function() {
    showSection('home');
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
        if (section.id === sectionId) {
            section.classList.add('active');
        }
    });
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to get a cookie
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Set cookies
    setCookie('name', name, 7); // Cookie expires in 7 days
    setCookie('email', email, 7);
    setCookie('message', message, 7);

    // You can add code here to actually submit the form if needed
    // form.submit();
}

// Function to pre-fill form fields from cookies
function fillFormFromCookies() {
    var name = getCookie('name');
    var email = getCookie('email');
    var message = getCookie('message');

    if (name) document.getElementById('name').value = name;
    if (email) document.getElementById('email').value = email;
    if (message) document.getElementById('message').value = message;
}

// Add event listener to the form
document.addEventListener('DOMContentLoaded', function() {
    // Fill the form fields with cookies if available
    fillFormFromCookies();

    // Add event listener to the form submit button
    document.getElementById('sub').addEventListener('click', handleFormSubmit);
});





