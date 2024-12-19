let phoneInput = document.getElementById('PhoneNumber')
let form = document.getElementById('formId')
let passInput1 = document.getElementById('inputPassword1')
let passInput2 = document.getElementById('inputPassword2')
let nameInput = document.getElementById('inputName')

form.addEventListener('submit', function phoneValidation(e) {

    const phoneNumber = phoneInput.value.trim();
    const passowrd1 = passInput1.value
    const passowrd2 = passInput2.value
    const name = nameInput.value
    phoneInput.classList.remove('is-valid', 'is-invalid')
    const phoneRegx = /^[0-9]{10}$/;

    if (!phoneRegx.test(phoneNumber) || phoneNumber === "1234567890") {
        e.preventDefault();
        phoneInput.classList.add('is-invalid');
    }
    else {
        phoneInput.classList.add('is-valid')

    }
    if (passowrd1 === "password" || passowrd1 === name.split(" ")[0]) {
        passInput1.classList.add('is-invalid')
        e.preventDefault()

    }
    else{
        passInput1.classList.add('is-valid')
    }
    if (passowrd1 !== passowrd2) {
        passInput1.classList.add('is-invalid')
        passInput2.classList.add('is-invalid')
        e.preventDefault()

    }
    else {
        passInput1.classList.add('is-valid')
        passInput2.classList.add('is-valid')
    }
}


)

