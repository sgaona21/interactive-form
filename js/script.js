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
            console.log(activityFieldValid)
        } else if (totalCost < 50) {
            activityFieldValid = false
            console.log(activityFieldValid)
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
    }   else {
        nameField.style.borderColor = 'red'
        nameFieldValid = false
    }
});

emailFieldValid = false
emailField.addEventListener('blur', (event) => {
    userInput = emailField.value
    console.log(userInput)
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(userInput)) {
        emailField.style.borderColor = 'lightgreen'
        emailFieldValid = true
    }   else {
        emailField.style.borderColor = 'red'
        emailFieldValid = false
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
            alert("FORM SUBMITTED")
        } else {
            event.preventDefault()
            alert("Please complete form before submitting")
        }
    } else if (nameFieldValid && emailFieldValid && activityFieldValid) {
        alert("FORM SUBMITTED")
    } else {
        event.preventDefault()
        alert("Please complete form before submitting")
    }


    
        
    const nameHint = document.getElementById("name-hint")
    if (nameFieldValid == false) {
        event.preventDefault()
        nameField.parentElement.classList.remove('valid')
        nameField.parentElement.classList.add('not-valid')
        nameHint.style.display = 'block'
    }

        
});


