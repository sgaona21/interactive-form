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

designSelection.addEventListener("change", () => {
    if (designSelection.value != "Select Theme") {
        colorSelection.disabled = false;
    }
});


designSelection.addEventListener("change", () => {
    if (designSelection.value.includes("puns")) {
        colorSelection.childNodes[9].hidden = true;
        colorSelection.childNodes[11].hidden = true;
        colorSelection.childNodes[13].hidden = true;

        colorSelection.childNodes[3].hidden = false;
        colorSelection.childNodes[5].hidden = false;
        colorSelection.childNodes[7].hidden = false;
    } else if (designSelection.value.includes("heart")) {
        colorSelection.childNodes[3].hidden = true;
        colorSelection.childNodes[5].hidden = true;
        colorSelection.childNodes[7].hidden = true;

        colorSelection.childNodes[9].hidden = false;
        colorSelection.childNodes[11].hidden = false;
        colorSelection.childNodes[13].hidden = false;
    }
});

