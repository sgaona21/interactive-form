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
