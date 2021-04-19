const { gcd } = require('./gcd')

// 最小公倍数
const lcm = (a, b) => (a * b) / gcd(a, b)

const lcmMany = (...numbers) => {
    if (numbers) {
        let result = numbers[0]
        numbers.slice(1).forEach((number) => (result = lcm(result, number)))
        return result
    }
}

module.exports = { lcm, lcmMany }
