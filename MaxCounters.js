function arraySum(array1, array2){
    let sum1 = 0;
    let sum2 = 0;
    let i = 0, j = 0
    while (i < array1.length) {
        sum1 += array1[i];
        i++
    }
    while (j < array2.length) {
        sum2 += array2[j];
        j++
    }

    return sum1 - sum2
}
