const form = document.querySelector('.feedback-form');
console.log(form);

// const formInformation = 
form.addEventListener('input', handlerForm);

function handlerForm(evt) {
    evt.preventDefault();
    const formInformation = evt.target.value;
    console.log(evt.target.value);
    localStorage.setItem("feedback-form-state", formInformation);
}
