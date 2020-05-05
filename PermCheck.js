function solution (A) {
    let cars = 0
    let pass = 0

    for (let i = 0; i <= A.length - 1; i++) {
        if (pass > 1000000000) return -1
        if (A[i] === 0) cars++
        else pass += cars
    }

    return pass > 1000000000 ? -1 : pass
}
