function solution(Arr) {
    let lost = 1
    Arr.sort()
    for (let i = 0; i < Arr.length; i++) {
        if (Arr[i+1] && Arr[i+1] - Arr[i] === 2) lost = Arr[i] + 1
    }

    return lost ? lost : 1
}
