
// Bonus: Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of items 
// but containing one item, "needle".
//  After your function finds the needle, 
// it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle.

let arr = ['cat', 'dog', 'lizard', 'octopus','bat', 'needle', 'object']

function findNeedle(arr){
    for(let i = 0; i < arr.length;i++){
        let position = arr[i]
        if(position === 'needle'){
            i = i + 1
            console.log(`found the needle at position ${i}`)
        }
    }
}
findNeedle(arr)



