const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const STORAGE_KEY = "feedback-form-state"


form.addEventListener('input', throttle (onInputForm, 500));
form.addEventListener('submit', onSubmitForm);
window.addEventListener('load', fillForm);

function onInputForm(evt) {
    const formData = {email: emailInput.value, message: message.value};
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSubmitForm(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
     
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    localStorage.removeItem(STORAGE_KEY);
}

function fillForm() {
    const formMessages = JSON.parse(localStorage.getItem(STORAGE_KEY));
         if (formMessages) {
           emailInput.value = formMessages.email || '';
            message.value = formMessages.message || '';
         }
}