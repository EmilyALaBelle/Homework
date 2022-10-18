//  You are counting points for a basketball game,
//  given the amount of 2-pointers scored and 3-pointers scored. 
//  Create a function that calculates the final points for the team 
//  and returns that value.


function finalScore(numTwoPointers, numThreePointers){
const twoPointers = numTwoPointers * 2
const threePointers =  numThreePointers * 3
const points = twoPointers + threePointers
return points
}

const score = finalScore(5, 2)
console.log(`The final score is ${score}`)





