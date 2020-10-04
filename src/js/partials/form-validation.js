const submitBtn = document.getElementById('submit-btn');

const validate = (e) => {

    const emailAddress = document.getElementById('email-address');

    if (emailAddress.value === "") {
        document.getElementById('formError').innerHTML = 'Please enter your email address.';
        emailAddress.focus();
        return false;
    }

    if (!emailIsValid(emailAddress.value)) {
        document.getElementById('formError').innerHTML = 'Please enter a valid email address.';
        emailAddress.focus();
        return false;
    }

    if (emailIsValid(emailAddress.value)) {
        document.getElementById('formError').innerHTML = '';
        return true;
    }
}

const emailIsValid = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

submitBtn.addEventListener('click', validate);