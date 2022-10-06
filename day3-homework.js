let line = "#"
let numberOfHashes = 5

for (let i = 1; i <= numberOfHashes; i++) {
    console.log(line)
    line = line + "#"
}

/*Write a function named assignGrade that takes one argument, a number score.
Returns a grade for the score, either  "A," "B," "C," "D," or "F." Call that 
function for a few different scores and log the result to make sure it works.*/

function assignGrade(numScore) {
    if (numScore >= 90) {
        console.log('A')
    } else if (numScore >= 80) {
        console.log('B')
    } else if (numScore >= 70) {
        console.log('C')
    } else if (numScore >= 60) {
        console.log('D')
    } else{
        console.log('F')
    }
}
assignGrade(90)