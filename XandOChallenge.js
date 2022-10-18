const string = "xxooo"

function XO (string){
    let x = 0
    let o = 0
    for (let i = 0; i < string.length; i++){
        let spot = string[i] 
        if (spot == "x" || spot == "X"){
            x = x + 1
        } else if(spot =='o' || spot == "O"){
            o = o + 1
        }

    }
    let isEqual
    if (x == o){
        isEqual = true;
    } else if(x != o) {
        isEqual = false
    } 
    return isEqual
}

results = XO(string)
console.log(results)