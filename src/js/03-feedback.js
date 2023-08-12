const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const formData = {};

form.addEventListener('input', throttle (onInputForm, 500));
form.addEventListener('submit', onSubmitForm);
window.addEventListener('load', fillForm);

function onInputForm(evt) {
     formData[evt.target.name] = evt.target.value;
     localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

function onSubmitForm(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");
    console.log(formData);
    // formData = {};
}

function fillForm() {
    const formMessages = JSON.parse(localStorage.getItem("feedback-form-state"));
         if (formMessages) {
           emailInput.value = formMessages.email || '';
            message.value = formMessages.message || '';
            }
}