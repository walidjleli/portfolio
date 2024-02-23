$(function () {
    // hide loading after 0,5 sec
    setTimeout(function(){  $('.splashscreen').hide()}, 500);

})

function validateFormContact() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');
    var messageError = document.getElementById('messageError');

    nameError.innerHTML = '';
    emailError.innerHTML = '';
    messageError.innerHTML = '';

    var isvalid = true;

    if (name === '') {
        nameError.innerHTML = 'Le champs nom ne doit pas etre vide';
        isvalid = false;
    }
    if (email === '') {
        emailError.innerHTML = 'Le champs email ne doit pas etre vide';
        isvalid = false;
    } else if (!validateEmail(email)) {
        emailError.innerHTML = 'adresse email invalide.';
        isvalid = false;
    }
    if (message === '') {
        messageError.innerHTML = 'Le champs message ne doit pas etre vide';
        isvalid = false;
    }

    if (isvalid) {
        alert('Message envoyé')
    }

    return isvalid;
}

function validateEmail(email) {
    // Basic email validation regex
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}
