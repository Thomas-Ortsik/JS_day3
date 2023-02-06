class Student {

    constructor(name, score){    //instructions for what values a "Student" can hold
    this.name = name;
    this.score = score;
    }
}
//exercise 1
let students = [
    new Student("Martin", 76),   //here the "Student"s get created with the "new" keyword.
    new Student("Thomas", 85),
    new Student("Klaus", 65),
    new Student("Maria", 93),
    new Student("David", 81)
];

let sum = 0;
students.forEach(student => {
    console.log(`${student.name}\'s grade is ${getGrade(student.score)}`)    //student.name and .score allows us to access those values we stored during creation
    sum += student.score;
});
let average = sum / students.length;
console.log("Class average is " + average + " which is a " + getGrade(average));

//exercise2: fizzbuzz
fizzBuzz();

//exercise 3
let stars = "";
do {
    stars += "*";
    console.log(stars);
} while (stars != "******");

//also exercise 2
function fizzBuzz(){
    for (let index = 1; index <= 100; index++) {
        let output = "";  //if we don't inizialize with an empty string, for this solution += "Buzz" would lead to the string "undefinedBuzz"
        if (index%3 == 0){
            output = "Fizz";
        }
        if (index%5 == 0){
            output += "Buzz";
        }
        if (output == ""){    //we check for "" because if at this point it is still an empty string, we want the number.
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