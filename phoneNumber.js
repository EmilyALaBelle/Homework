phoneArr = ([5,6,1,5,4,5,2,8,8,3])

function phoneNumFormat(phoneArr){
    let string = "("
    for(let i = 0; i < phoneArr.length; i++){
        let num = phoneArr[i]
        if(i == 3){
            string = string + ")"
        } if (i == 3){
            string = string + " "
        }else if (i == 6){
            string = string + "-"
        }
        string = string + num
    }
    return string
}
result = phoneNumFormat(phoneArr)
console.log(result)