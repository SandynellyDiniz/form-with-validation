const form = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const jobSelect = document.querySelector('#job');
const massageTexatarea =document.querySelector('#message');


form.addEventListener('submit',(event) => {
    event.preventDefault();

    // If the NAME input is empty:
    if(nameInput.value === ""){
        alert("Please, enter your name in the input field");
        return;
    }
    // If the EMAIL input is empty and valid:
    if(emailInput.value === "" || !isEmailValid(emailInput.value)){
        alert("Please, enter your email in the input field");
        return;
    }

    // Checks if the PASSWORD input is filled in:
    if(!validaPassword(passwordInput.value,8)){
        alert("Password needs at least 8 digits");
        return;
    }

    // Verify that the job JOBSELECT was selected:
    if(jobSelect.value === ""){
        alert("Please, select your situation");
        return;
    }

    // Check whether the text area ( MASSAGE ) has been filled:
    if(massageTexatarea.value === ""){
        alert("Please, fill in the text area");
        return;
    }

    //If the fields are filled in correctly:
    form.submit(); 
});


// function that validates the email:
function isEmailValid(email){
    // create a regex to validate the email: 
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );
    if(emailRegex.test(email)){
        return true
    }
        return false
};


// function that validates the password:
function validaPassword(password, minDigits){
   if(password.length >= minDigits){
      // valid password
        return true
    }
     // invalid password
        return false
}

