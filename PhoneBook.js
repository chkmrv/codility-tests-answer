function solution(input) {
    let phoneToTotalSeconds = {}
    let phoneToTotalCost = {}

    input.split('\n').forEach( oneString => {
        if (oneString.length === 0) return false

        let callSeconds = 0
        let phoneNumber = oneString.substr(9)

        callSeconds += getTimeAmountFromString(oneString, 0) * 60 * 60 // hours
        callSeconds += getTimeAmountFromString(oneString, 3) * 60 // minutes
        callSeconds += getTimeAmountFromString(oneString, 6) // seconds

        phoneToTotalSeconds[phoneNumber] = (phoneToTotalSeconds[phoneNumber] ? phoneToTotalSeconds[phoneNumber] : 0) + callSeconds

        let callCost = 0
        if (callSeconds < 5 * 60) { // 5 minutes
            callCost = callSeconds * 3
        } else {
            let totalMinutes = Math.round(callSeconds / 60)
            console.log('totalMinutes', totalMinutes)
            callCost = totalMinutes * 150

            if (callSeconds % 60 !== 0) { // new minute started
                callCost += 150
            }
        }

        phoneToTotalCost[phoneNumber] = (phoneToTotalCost[phoneNumber] ? phoneToTotalCost[phoneNumber] : 0) + callCost
    })

    if (phoneToTotalSeconds.length === 0) return 0

    let maxDuration = Math.max(...Object.values(phoneToTotalSeconds))

    let longestPhoneNumbers = Object.entries(phoneToTotalSeconds).filter(item => item[1] === maxDuration ).map(el => el[0])

    let min = -1
    let freePhoneNumber = ""

    longestPhoneNumbers.forEach( el => {
        if (convertPhoneToInt(el) < min || min === -1) {
            freePhoneNumber = el
            min = convertPhoneToInt(el)
        }
    })

    phoneToTotalCost[freePhoneNumber] = 0
    return Object.values(phoneToTotalCost).reduce((a, b) => a + b)
}

function convertPhoneToInt(phoneAsString) {
    //phone number without separators
    let tmpString = `${phoneAsString.substr(0, 3)}${phoneAsString.substr(5, 8)}${phoneAsString.substr(9, 12)}`

    return Number.valueOf(tmpString)
}

function getTimeAmountFromString(oneString, startIndex) {
    let firstDigit = Number(oneString[startIndex]) // converting from char to int
    let secondDigit = Number(oneString[startIndex + 1])

    return firstDigit * 10 + secondDigit
}
