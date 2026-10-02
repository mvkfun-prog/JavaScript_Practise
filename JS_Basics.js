const name = "Vamsi";
let age = 40;
console.log(`My name is ${name} and I am about ${age} years old.`)
/*
if condition
let score = 95;

if (score >=90  ) {
    console.log("Your Grade is A");
} 
if (score >=80 && score <=89 ) {
    console.log("Your Grade is B");
} 
if (score >=70 && score <=79 ) {
    console.log("Your Grade is C");
}
if (score <70 ) {
    console.log("Needs improvement");
}
if (score === 100 ) {
    console.log("Perfect score!");
}
*/
//if else
let score = 78.5;

if (score >=90) {
    console.log("Your Grade is A");
} else if (score >=80){
       console.log("Your Grade is B");
} else if (score >=70){
       console.log("Your Grade is C");
} else {
       console.log("Needs improvement");
}
if (score === 100){
    console.log("Perfect score!")
}

/*
Write a loop from 1 to 20. For each number:

If it's divisible by 3 and 5, print FizzBuzz
Otherwise, if it's divisible by 3, print Fizz
Otherwise, if it's divisible by 5, print Buzz
Otherwise, print the number itself */


let output = "";
for(let i=1; i<=20; i++) {
    if (i%3 === 0 && i%5 === 0) {
        output +=  "FizzBuzz,";
    } else if (i % 3 === 0) {
        output +=  "Fizz,";
    } else if (i % 5 === 0) {
        output +=  "Buzz,";
    } else {
        output +=  i + "," 
    }
}
console.log(output);
/*Write a function getGrade(score) that returns the letter grade ("A", "B", "C", or "Needs improvement").*/

function getGrade(score) {
    let message;
        if (score >=90) {
        message =  "Your Grade is A.";
    } else if (score >=80){
        message = "Your Grade is B.";
    } else if (score >=70){
        message = "Your Grade is C.";
    } else {
        message = "Needs improvement.";
    }
        if (score === 100){
        message += "Perfect score!";
    } 
    return message;
}

console.log( getGrade(100));

//Write a function isEven(number) that returns true or false.

function isEven(number) {
    if (number%2 === 0){
        return true;
    }
    return false;
}

console.log(isEven(50))
//below is better way to write this
function isEven1(number) {
    return (number%2 === 0)
}

console.log(isEven1(45));

//write fizzBuzz(n), which returns "Fizz", "Buzz", "FizzBuzz", or the number for a single value n. Then use it inside a loop from 1 to 20.

function fizzBuzz(i){
let output;
    if (i%3 === 0 && i%5 === 0) {
        output =  "FizzBuzz";
    } else if (i % 3 === 0) {
        output =  "Fizz";
    } else if (i % 5 === 0) {
        output =  "Buzz";
    } else {
        output =  i  
    }
   return output;
}

console.log(fizzBuzz(8));

let line = "";
for (let n=1; n<=20; n++) {
    line += fizzBuzz(n) + ",";
}
console.log(line)

/* LESSON 5
Write code that prints:

The number of students (use .length)
The average score (total ÷ count)
The highest score. Write it with a loop: start with let highest = scores[0];, then update it whenever you find a bigger number.
Each score with its grade, using your getGrade function from Lesson 4 */

const scores = [95, 82, 100, 67, 74, 88, 59];
console.log("Number of students "+ scores.length);

let totalScore = 0;
for (const score of scores){
    totalScore += score
}
const average = totalScore / scores.length;
console.log(`The avg score is + ${average.toFixed(2)}`);

//highest score

let highestScore = scores[0];
for (const score of scores){
    if (highestScore < score){
        highestScore = score;
    }
}
console.log(`The hightest score is ${highestScore}`);

for (const score of scores) {
    console.log( `Score = ${score} : ${getGrade(score)}`);
}

///build a new array passed that contains only the scores of 70 or more. Start with an empty array and use .push().

const firstClassScores = [];
for (const score of scores){
    if (score >= 70){
        firstClassScores.push(score);
    }
}
console.log(firstClassScores);