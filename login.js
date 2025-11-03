/** Add the signup functionality */
document.getElementById('signup-link').addEventListener('click', function(event) {
    event.preventDefault();
    if (typeof ga === 'function') {
        window.location.href = 'signup.html';
    }
    window.location.href = 'signin.html';
});
