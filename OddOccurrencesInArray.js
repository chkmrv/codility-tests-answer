function solution(Arr) {
    let unpair = 0
    for (let i = 0; i < Arr.length; i++) {

        let j = i
        while ( Arr[i] !==  Arr[j+1] && j <= Arr.length -1 ) {
            j++
        }
        if (j + 1 > Arr.length) return Arr[i]
        Arr.splice(j + 1, 1)
    }

    return unpair
}
