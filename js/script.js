
// Arrays containing student names and grades
let students = [
    "Anna Reyes",
    "Ben Santos",
    "Carla Cruz",
    "David Lim",
    "Ella Ramos"
];

let grades = [92, 85, 78, 97, 74];


// Function to display grade equivalents
function showGradeEquivalent() {

    // Initialize the output heading and table
    let output = "<h2>Grade Equivalents</h2>";

    output += "<table>";

    output += "<tr>";
    output += "<th>Student Name</th>";
    output += "<th>Grade</th>";
    output += "<th>Equivalent</th>";
    output += "<th>Remark</th>";
    output += "<th>Academic Leader</th>";
    output += "</tr>";

    // Use a for loop to access student names and grades
    for (let i = 0; i < students.length; i++) {

        // Get the current student's name and grade
        let student = students[i];
        let grade = grades[i];

        // Evaluate the student's grade using the functions
        let equivalent = getEquivalent(grade);
        let remark = getRemark(grade);
        let leader = getAcademicLeader(equivalent);

        // Add the student's information to the table
        output += "<tr>";

        output += "<td>" + student + "</td>";
        output += "<td>" + grade + "</td>";
        output += "<td>" + equivalent + "</td>";
        output += "<td>" + remark + "</td>";
        output += "<td>" + leader + "</td>";

        output += "</tr>";
    }

    // Close the table
    output += "</table>";

    // Display the results inside the HTML element
    document.getElementById("result").innerHTML = output;
}


// Function to determine the student's remark
function getRemark(grade) {

    // Ternary operator
    // If grade is 75 or higher, return Passed
    // Otherwise, return Failed
    let remark = (grade >= 75) ? "Passed" : "Failed";

    return remark;
}


// Function to determine the grade equivalent
function getEquivalent(grade) {

    let equivalent = "";

    if (grade >= 97 && grade <= 100) {
        equivalent = "1.0";
    }
    else if (grade >= 94) {
        equivalent = "1.25";
    }
    else if (grade >= 91) {
        equivalent = "1.5";
    }
    else if (grade >= 88) {
        equivalent = "1.75";
    }
    else if (grade >= 85) {
        equivalent = "2.0";
    }
    else if (grade >= 82) {
        equivalent = "2.25";
    }
    else if (grade >= 79) {
        equivalent = "2.5";
    }
    else if (grade >= 76) {
        equivalent = "2.75";
    }
    else if (grade === 75) {
        equivalent = "3.0";
    }
    else {
        equivalent = "Failed";
    }

    return equivalent;
}


// Function to determine the academic leader
function getAcademicLeader(equivalent) {

    let leader = "";

    switch (equivalent) {

        case "1.0":
        case "1.25":
            leader = "1st Class Academic Leader";
            break;

        case "1.5":
            leader = "2nd Class Academic Leader";
            break;

        case "1.75":
            leader = "3rd Class Academic Leader";
            break;

        default:
            leader = "-";
    }

    return leader;
}
