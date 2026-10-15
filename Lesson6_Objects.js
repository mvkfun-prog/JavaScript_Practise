function getGrade(score) {
    let message;
    if (score >= 90) {
        message = "Your Grade is A.";
    } else if (score >= 80) {
        message = "Your Grade is B.";
    } else if (score >= 70) {
        message = "Your Grade is C.";
    } else {
        message = "Needs improvement.";
    }
    if (score === 100) {
        message += "Perfect score!";
    }
    return message;
}

const students = [
    { name: "Vamsi", score: 95 },
    { name: "Priya", score: 82 },
    { name: "Arjun", score: 100 },
    { name: "Meera", score: 67 },
    { name: "Rahul", score: 74 }
];

/* Expected output
   Vamsi: 95 → Your Grade is A
   Priya: 82 → Your Grade is B */

for (const student of students) {
    console.log(`${student.name}: ${student.score} → ${getGrade(student.score)}`)
}

//Finds the top student and prints their name, not just the score. 
// Hint: keep track of the whole object, like let topStudent = students[0];
let topStudent = students[0];

for (const student of students) {
    if (topStudent.score < student.score) {
        topStudent = student
    }
}
console.log(`Top student: ${topStudent.name} with ${topStudent.score}`);

//Prints the class average.
let totalScore = 0;

for (const student of students) {
    totalScore += student.score;
}
const avgScore = students.length>0 ? totalScore / students.length : 0; 
console.log(`Average score is: ${avgScore}`);

/*Question 4 (bonus): give each student a passed property 
(true if the score is 70 or more). 
Remember the >= lesson from last time. 
After the loop, console.log(students) and expand the output to check that 
each object now has the new property.*/

for (const student of students) {
    const result = student.score >= 70;
    student.passed = result;
}
console.log(students);