function solution(N, A) {
    let res = new Array(N).fill(0)
    let max = 0
    for (let i = 0; i < A.length; i++) {

        if (A[i] <= N) {
            res[A[i]-1] += 1
            max = res[A[i]-1]
        } else {
            for (let j = 0; j < N; j++) {
                res[j] = max
            }
        }
    }

    for(var i=0; i<res.length; i++) {
        res[i] = Math.max(res[i], min);
    }
    return res
}
