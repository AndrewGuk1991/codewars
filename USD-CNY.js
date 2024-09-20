// Description: 

// Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'

// Examples (Input -> Output)
// 15  -> '101.25 Chinese Yuan'
// 465 -> '3138.75 Chinese Yuan'
// The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers should be represented as a string with 2 decimal places. (e.g. "21.00" NOT "21.0" or "21")

// Solution: 

function usdcny(usd) {
    let str = usd * 6.75 + ''
    if (str[str.length - 2] === '.') {
        return str + 0 + ' Chinese Yuan'
    } else if (str[str.length - 3] === '.') {
        return str + ' Chinese Yuan'
    } else {
        return str + '.00' + ' Chinese Yuan'
    }

}