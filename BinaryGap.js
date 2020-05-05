function solution(Number) {
    const binary = Number.toString(2)
    let counter = 0
    const arrNumber = chunk(binary.toString(), 1)

    for (let i = 0; i < arrNumber.length; i++) {
        let tempCounter = 0
        if (arrNumber[i] === '1' && arrNumber[i + 1] === '0') {

            let current = i
            while (arrNumber[current + 1] === '0' && current < arrNumber.length) {
                tempCounter = tempCounter + 1
                current++
            }

            if (counter < tempCounter && arrNumber[current + 1] === '1') {
                counter = tempCounter
            }
        }
    }

    return counter
}

function chunk(s, len) {
    const arr = [];
    for (let i = 0; i < s.length; i+=len)
        arr.push(s.substring(i, i + len));
    return arr;
}
