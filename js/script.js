console.log("linked")

// ********** VARIABLES **********
const nameField = document.getElementById("name");
const jobRole = document.getElementById("other-job-role");
const roleSelect = document.getElementById("title");
const colorSelection = document.getElementById("color");
const designSelection = document.getElementById("design");
const activitiesSelection = document.getElementById("activities-box");
const checkBoxes = document.querySelectorAll('#activities-box input[type="checkbox"]');
const totalCostElement = document.getElementById('activities-cost');
const paymentSelection = document.getElementById('payment');
const paypalBox = document.getElementById("paypal")
const bitcoinBox = document.getElementById("bitcoin")
const creditCardBoxes = document.querySelectorAll('.cc');
const formSection = document.querySelector('form');
const emailField = document.getElementById("email");
const creditCardField = document.getElementById("cc-num");
const zipCodeField = document.getElementById("zip");
const cvvField = document.getElementById("cvv");
const nameHint = document.getElementById("name-hint")
const emailHint = document.getElementById("email-hint")
const activitiesHint = document.getElementById("activities-hint")
const ccHint = document.getElementById("cc-hint")
const zipHint = document.getElementById("zip-hint")
const cvvHint = document.getElementById("cvv-hint")
//checkboxes
const mainEventCheckbox = document.querySelector('input[name="all"]');
const jsLibsCheckbox = document.querySelector('input[name="js-libs"]');
const nodeCheckbox = document.querySelector('input[name="node"]');
const jsFrameworksCheckbox = document.querySelector('input[name="js-frameworks"]');
const buildToolsCheckbox = document.querySelector('input[name="build-tools"]');
const npmCheckbox = document.querySelector('input[name="npm"]');
const expressCheckbox = document.querySelector('input[name="express"]');





// ********** NAME FIELD **********
nameField.focus();



// ********** JOB ROLE SECTION **********
jobRole.style.display = "none";

roleSelect.addEventListener("click", () => {
    if (roleSelect.value == "other") {
        jobRole.style.display = "block";
    } else if (roleSelect.value !== "other") {
        jobRole.style.display = "none";
    }
});



// ********** T-SHIRT INFO SECTION **********
colorSelection.disabled = true;

designSelection.addEventListener("change", () => {
    if (designSelection.value.includes("puns")) {
        colorSelection.disabled = false;
        colorSelection.childNodes[9].hidden = true;
        colorSelection.childNodes[11].hidden = true;
        colorSelection.childNodes[13].hidden = true;

        colorSelection.childNodes[3].hidden = false;
        colorSelection.childNodes[5].hidden = false;
        colorSelection.childNodes[7].hidden = false;
    } else if (designSelection.value.includes("heart")) {
        colorSelection.disabled = false;
        colorSelection.childNodes[3].hidden = true;
        colorSelection.childNodes[5].hidden = true;
        colorSelection.childNodes[7].hidden = true;

        colorSelection.childNodes[9].hidden = false;
        colorSelection.childNodes[11].hidden = false;
        colorSelection.childNodes[13].hidden = false;
    }

    colorSelection.value = "Select a design theme above";
});



// ********** ACTIVITIES SECTION **********
let totalCost = null
activityFieldValid = false
checkBoxes.forEach(checkbox => {
    checkbox.addEventListener('change', event => {
        const isChecked = event.target.checked; 
        const cost = parseFloat(event.target.dataset.cost); 

        if (isChecked) {
            totalCost += cost; 
        } else {
            totalCost -= cost; 
        }

        totalCostElement.textContent = `Total: $${totalCost}`
        if (totalCost > 50) {
            activityFieldValid = true
        } else if (totalCost < 50) {
            activityFieldValid = false
        }
    });
});


checkBoxes.forEach(checkbox => {
    checkbox.addEventListener('focus', event => {
        //adds focus class to activity checkboxes
        event.target.parentElement.classList.add('focus')
    });
});

checkBoxes.forEach(checkbox => {
    checkbox.addEventListener('blur', event => {
        //removes focus class from activity checkboxes
        event.target.parentElement.classList.remove('focus')
    });
});





// ********** PAYMENNT SECTION ********** //
function updatePaymentArea() {
    const selectedPaymentMethod = paymentSelection.value;

    switch (selectedPaymentMethod) {
        case 'credit-card':
            paypalBox.style.display = 'none'
            bitcoinBox.style.display = 'none'
            creditCardBoxes.forEach(element => {
                element.style.display = 'flex';  
            });
            break;

        case 'paypal':
            paypalBox.style.display = 'block'
            bitcoinBox.style.display = 'none'
            creditCardBoxes.forEach(element => {
                element.style.display = 'none';  
            });
            break;

        case 'bitcoin':
            bitcoinBox.style.display = 'block'
            paypalBox.style.display = 'none'
            creditCardBoxes.forEach(element => {
                element.style.display = 'none';  
            });
            break;
    }
}

updatePaymentArea()

paymentSelection.addEventListener('change', (event) => {
    updatePaymentArea()
});





// ************ FORM VALIDATION ********** // 
let userInput = null

nameFieldValid = false
nameField.addEventListener('blur', (event) => {
    userInput = nameField.value
    console.log(userInput)
    const nameRegex = /^\s*\S+.*$/;
    if (nameRegex.test(userInput)) {
        nameField.style.borderColor = 'lightgreen'
        nameFieldValid = true
        nameField.parentElement.classList.add('valid')
        nameField.parentElement.classList.remove('not-valid')
        nameHint.style.display = 'none'
    }   else {
        nameField.style.borderColor = 'red'
        nameFieldValid = false
        nameField.parentElement.classList.remove('valid')
        nameField.parentElement.classList.add('not-valid')
        nameHint.style.display = 'block'

    }
});

const customEmailErrorMessage = document.createElement("span");
customEmailErrorMessage.textContent = "lol, you need an @ symbol"
emailField.parentElement.append(customEmailErrorMessage)
customEmailErrorMessage.classList.add('email-hint')
customEmailErrorMessage.classList.add('hint')
customEmailErrorMessage.style.display = 'none'

emailFieldValid = false
emailField.addEventListener('blur', (event) => {
    userInput = emailField.value
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    

    if (emailRegex.test(userInput)) {
        emailField.style.borderColor = 'lightgreen'
        emailFieldValid = true

        if (userInput.includes('@')) {
            emailField.parentElement.classList.add('valid')
            emailField.parentElement.classList.remove('not-valid')
            customEmailErrorMessage.style.display = 'none'
        }
        emailField.parentElement.classList.add('valid')
        emailField.parentElement.classList.remove('not-valid')
        emailHint.style.display = 'none'

    }   else {
        emailField.style.borderColor = 'red'
        emailFieldValid = false
        if (!userInput.includes('@')) {
            emailField.parentElement.classList.remove('valid')
            emailField.parentElement.classList.add('not-valid')
            customEmailErrorMessage.style.display = 'block'
        } 
    }
});

ccFieldValid = false
creditCardField.addEventListener('blur', (event) => {
    userInput = creditCardField.value
    console.log(userInput)
    const ccRegex = /^\d{13,16}$/;
    if (ccRegex.test(userInput)) {
        creditCardField.style.borderColor = 'lightgreen'
        ccFieldValid = true
    }   else {
        creditCardField.style.borderColor = 'red'
        ccFieldValid = false
    }
});

zipCodeFieldValid = false
zipCodeField.addEventListener('blur', (event) => {
    userInput = zipCodeField.value
    console.log(userInput)
    const zipRegex = /^\d{5}$/;
    if (zipRegex.test(userInput)) {
        zipCodeField.style.borderColor = 'lightgreen'
        zipCodeFieldValid = true
    }   else {
        zipCodeField.style.borderColor = 'red'
        zipCodeFieldValid = false
    }
});

cvvFieldValid = false
cvvField.addEventListener('blur', (event) => {
    userInput = cvvField.value
    console.log(userInput)
    const cvvRegex = /^\d{3}$/;
    if (cvvRegex.test(userInput)) {
        cvvField.style.borderColor = 'lightgreen'
        cvvFieldValid = true
       }   else {
        cvvField.style.borderColor = 'red'
        cvvFieldValid = false
    }
});

formSection.addEventListener('submit', (event) => {
    if (paymentSelection.value == 'credit-card') {
        if (nameFieldValid && emailFieldValid && ccFieldValid && zipCodeFieldValid && cvvFieldValid && activityFieldValid) {
        } else {
            event.preventDefault()
        }
    } else if (nameFieldValid && emailFieldValid && activityFieldValid) {
    } else {
        event.preventDefault()
    }


    if (nameFieldValid == false) {
        event.preventDefault()
        nameField.parentElement.classList.remove('valid')
        nameField.parentElement.classList.add('not-valid')
        nameHint.style.display = 'block'
    } else {
        nameField.parentElement.classList.add('valid')
        nameField.parentElement.classList.remove('not-valid')
        nameHint.style.display = 'none'
    }

    if (emailFieldValid == false) {
        event.preventDefault()
        emailField.parentElement.classList.remove('valid')
        emailField.parentElement.classList.add('not-valid')
        emailHint.style.display = 'block'
    } else {
        emailField.parentElement.classList.add('valid')
        emailField.parentElement.classList.remove('not-valid')
        emailHint.style.display = 'none'
    }

    if (activityFieldValid == false) {
        event.preventDefault()
        activitiesSelection.parentElement.classList.remove('valid')
        activitiesSelection.parentElement.classList.add('not-valid')
        activitiesHint.style.display = 'block'
    } else {
        activitiesSelection.parentElement.classList.add('valid')
        activitiesSelection.parentElement.classList.remove('not-valid')
        activitiesHint.style.display = 'none'
    }
 
    if (paymentSelection.value == 'credit-card') {
        if (ccFieldValid == false) {
            event.preventDefault()
            creditCardField.parentElement.classList.remove('valid')
            creditCardField.parentElement.classList.add('not-valid')
            ccHint.style.display = 'block'
        } else {
            creditCardField.parentElement.classList.add('valid')
            creditCardField.parentElement.classList.remove('not-valid')
            ccHint.style.display = 'none'  
        }    

        if (zipCodeFieldValid == false) {
            event.preventDefault()
            zipCodeField.parentElement.classList.remove('valid')
            zipCodeField.parentElement.classList.add('not-valid')
            zipHint.style.display = 'block'
        } else {
            zipCodeField.parentElement.classList.add('valid')
            zipCodeField.parentElement.classList.remove('not-valid')
            zipHint.style.display = 'none'
        }

        if (cvvFieldValid == false) {
            event.preventDefault()
            cvvField.parentElement.classList.remove('valid')
            cvvField.parentElement.classList.add('not-valid')
            cvvHint.style.display = 'block'
        } else {
            cvvField.parentElement.classList.add('valid')
            cvvField.parentElement.classList.remove('not-valid')
            cvvHint.style.display = 'none'  
        }
    }
});



// ************ CONFLICTING ACTIVITY TIMES ********** // 
checkBoxes.forEach(checkbox => {
    checkbox.addEventListener('change', event => {
        currentSelectionTimeDate = event.target.getAttribute('data-day-and-time')
        currentSelectionNameAttribute = event.target.getAttribute('name')

        checkBoxes.forEach(element => {
            if (element.getAttribute('name') != currentSelectionNameAttribute) {
                if (element.getAttribute('data-day-and-time') == currentSelectionTimeDate) {
                    element.parentElement.classList.add('disabled')
                    element.parentElement.firstElementChild.disabled = true
                } 
            } 
        });

        if (!jsLibsCheckbox.checked) {
            jsFrameworksCheckbox.parentElement.classList.remove('disabled')
            jsFrameworksCheckbox.disabled = false;
        }
        if (!jsFrameworksCheckbox.checked) {
            jsLibsCheckbox.parentElement.classList.remove('disabled')
            jsLibsCheckbox.disabled = false;
        }

        if (!buildToolsCheckbox.checked) {
            nodeCheckbox.parentElement.classList.remove('disabled')
            nodeCheckbox.disabled = false;
        }
        if (!nodeCheckbox.checked) {
            buildToolsCheckbox.parentElement.classList.remove('disabled')
            buildToolsCheckbox.disabled = false;
        }
    });
});


