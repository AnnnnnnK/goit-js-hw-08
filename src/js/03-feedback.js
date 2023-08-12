const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.input');
const message = document.querySelector('textarea');

const formData = {};

form.addEventListener('input', onInputForm);
form.addEventListener('submit', onSubmitForm);
 
fillForm();

function onInputForm(evt) { 
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}
 
function onSubmitForm(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");
    console.log(formData);
}

function fillForm() {
    const formMessages = JSON.parse(localStorage.getItem("feedback-form-state"));
    
    if (formMessages) {
        console.log(formMessages);
        emailInput.value = formData.email || '';
        message.value = formData.message || '';
    }
}