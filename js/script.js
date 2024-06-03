console.log("linked")

// ********** VARIABLES **********
const nameField = document.getElementById("name");
const jobRole = document.getElementById("other-job-role");
const roleSelect = document.getElementById("title");
const colorSelection = document.getElementById("color");
const designSelection = document.getElementById("design");



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

designSelection.addEventListener("click", () => {
    if (designSelection.value != "Select Theme") {
        colorSelection.disabled = false;
    };
});

colorSelection.addEventListener("click", () => {
    if (designSelection.value = "Theme - JS Puns") {

    }
})

console.log(colorSelection.childNodes)
console.log(colorSelection.childNodes[2].hidden = true)

colorSelection.childNodes[2].hidden = true;