function showValue(number,callBack){
    number=number**3
    callBack()
    return number;
}

function showLog(){
    console.log("Calculating")
}


let power=showValue(3,showLog)

console.log(power)