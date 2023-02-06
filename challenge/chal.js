let students = ["John", "Jane", "Red", "Yellow", "Green", "Blue"];
let mathGrades = [70, 85, 0, 64, 89, 100];

let stName = prompt("Enter Name");

let output = (function(){
    let index = students.indexOf(stName);
    if (index != undefined) {
        return `${students[index]} has reached ` + getGrade(mathGrades[index]) + ` points in Math this season.`;
    }}());

document.getElementById("studenT").innerHTML = output;

function getGrade(score) {

    if (score < 60)
        return `<span style=\"color: red;\">${score}</span>`;
    if (score <= 70)
        return `<span style=\"color: yellow;\">${score}</span>`;
    if (score < 100)
        return `<span style=\"color: green;\">${score}</span>`;
    if (score == 100)
        return `<span style=\"color: blue;\">${score}</span>`;

}