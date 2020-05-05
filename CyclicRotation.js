function solution(Arr, cyclic) {

    let newArr = Arr
    for (let i = 0; i < cyclic; i++ ) {
        newArr.splice(0, 0, newArr[newArr.length - 1 ])
        newArr.pop()
    }

    return newArr
}
