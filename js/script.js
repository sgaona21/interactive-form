console.log("linked")

// ********** VARIABLES **********
const nameField = document.getElementById("name");
const jobRole = document.getElementById("other-job-role");
const roleSelect = document.getElementById("title");



// ********** NAME FIELD **********
nameField.focus();



// ********** JOB ROLE SECTION **********
jobRole.style.display = "none";

roleSelect.addEventListener("click", () => {
    if (roleSelect.value == "other") {
        jobRole.style.display = "block";
    } else if (roleSelect.value != "other") {
        jobRole.style.display = "none";
    }
});



// ********** T-SHIRT INFO SECTION **********