
function solution(Arr) {
    let res = null
    for(var i = 0; i < Arr.length; i++){
        const halfArr = [...Arr]
        const rightHalfArr = halfArr.splice(i, halfArr.length - i+1)

        let newResult = res
        if (halfArr.length > 0 && rightHalfArr.length > 0) {
            newResult = Math.abs(arraySum(halfArr, rightHalfArr))
            newResult = Math.abs(halfArr.reduce((a,b)=>a+b) - rightHalfArr.reduce((a,b)=>a+b))

        }

        if (newResult < res || res === null) res = newResult

    }
    return res
}
