
function solution (A) {
    A.sort()
    let res = 0
    if (A.length < 1) return 0

    for (let i = 0; i <= A.length; i++) {
        if (A.length === 1) res = 1
        if (A[i] !== A[i+1]) res++
    }

    return res
}
