class Student {

    constructor(name, score){
    this.name = name;
    this.score = score;
    }
}

let students = [
    new Student("Martin", 76),
    new Student("Thomas", 85),
    new Student("Klaus", 65),
    new Student("Maria", 93),
    new Student("David", 81)
];

let sum = 0;
students.forEach(student => {
    console.log(`${student.name}\'s grade is ${getGrade(student.score)}`)
    sum += student.score;
});
let average = sum / students.length;
console.log("Class average is " + average + " which is a " + getGrade(average));


fizzBuzz();

let stars = "";
do {
    stars += "*";
    console.log(stars);
} while (stars != "******");


function fizzBuzz(){
    for (let index = 1; index <= 100; index++) {
        let output = "";
        if (index%3 == 0){
            output = "Fizz";
        }
        if (index%5 == 0){
            output += "Buzz";
        }
        if (output == ""){
            output = index;
        }
        console.log(output);
        
    }



}

function getGrade(score){
    
   if(score < 60)
            return "F";
        if (score < 70)
            return "D";
        if (score < 80)
            return "C";
        if (score < 90)
            return "B";
        if (score <= 100 )
            return "A";
 
}