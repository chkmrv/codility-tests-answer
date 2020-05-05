function solution(Arr) {
    let res = null
    for(var i = 0; i < Arr.length; i++){
        const halfArr = [...Arr]
        const rightHalfArr = halfArr.splice(i, halfArr.length - i+1)
        const newResult = Math.abs(arraySum(halfArr) - arraySum(rightHalfArr))

        if (newResult < res || res === null) res = newResult

    }
    return res
}

function arraySum(array){
    let sum = 0;
    for(var i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum
}
