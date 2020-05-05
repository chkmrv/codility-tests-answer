function solution (A, K) {
    let countRow = Math.ceil(A.length/K)
    let biggerNumber =  Math.max(...A).toString().length

    let line = '+'
    for (let i = 0; (i < K && i < A.length); i++) {
        let j = 0
        while (j < biggerNumber) {
            line += '-'
            j++
        }
        line += '+'
    }

    let row = line
    let table = 0
    let el = 0
    while (table < countRow) {
        row += '\n|'
        for (let r = 0; r < K; r++) {
            let lengthNum = A[el] && A[el].toString().length
            let space = biggerNumber - lengthNum
            let s = 0

            while (s < space) {
                row += ' '
                s++
            }
            if (el <= A.length - 1 ) row += `${A[el]}|`
            else {
                row += ' '
                line = line.substr(0, line.length - biggerNumber - 1)
            }
            if (el < A.length) el++
        }
        row += '\n' + line
        table++
    }

    // return row
    process.stdout.write(row)
}
