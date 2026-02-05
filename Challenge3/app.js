const btn = document.querySelector('.free_trial_button');

const firstname = document.querySelector('.first_name');
const lastname = document.querySelector('.last_name');
const email = document.querySelector('.email');
const password = document.querySelector('.password');

const error_firstname = document.querySelector('.error_first_name');
const error_lastname = document.querySelector('.error_last_name');
const error_email = document.querySelector('.error_email');
const error_password = document.querySelector('.error_password');

btn.addEventListener('click', function() {
   let isFormValid = true;

   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   if(firstname.value.trim() === ""){
    showError(firstname, error_firstname);
    isFormValid = false;
   }else{
    hideError(firstname, error_firstname);
   }

   if(lastname.value.trim() === ""){
    showError(lastname, error_lastname);
    isFormValid = false;
   }else{
    hideError(lastname, error_lastname);
   }

    if(!emailPattern.test(email.value.trim())) {
        showError(email, error_email);
        isFormValid = false;
    } else {
        hideError(email, error_email);
    }  

    if(password.value.trim() === "") {
        showError(password, error_password);
        isFormValid = false;
    } else {
        hideError(password, error_password);
    }

    if (isFormValid) {
        console.log("Ready to send the email...");
        alert("Thanks for the subscription! The email has been sent.");
    }
});

function showError(inputElement, errorText){
    errorText.style.display = "block";
    inputElement.classList.add('error_active');
}

function hideError(inputElement, errorText){
    errorText.style.display = "none";
    inputElement.classList.remove('error_active');
}