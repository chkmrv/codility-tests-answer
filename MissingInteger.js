function solution(Arr) {
    let res = null
    let sumRightArray = Arr.reduce((a,b) => a+b)
    let sumLeftArray = 0

    for(var i = 0; i < Arr.length; i++){
        const newArr = [...Arr]
        const rightHalfArr = newArr.splice(i, newArr.length - i+1)
        let newResult = res

        if (newArr.length > 0 && rightHalfArr.length > 0) {
            sumLeftArray = sumLeftArray + newArr[i-1]
            sumRightArray = sumRightArray - newArr[i-1]
            newResult = Math.abs(sumLeftArray - sumRightArray)
        }

        if (newResult < res || res === null) res = newResult

    }
    return res
}
