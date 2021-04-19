// 最大公约数
const gcd = (a, b) => {
    a = Math.abs(a)
    b = Math.abs(b)
    if (b > a) {
        let t = a
        a = b
        b = t
    }
    while (true) {
        if (b == 0) return a
        else a %= b
        if (a == 0) return b
        else b %= a
    }
}

const gcdMany = (...numbers) => {
    if (numbers) {
        let result = numbers[0]
        numbers.slice(1).forEach((number) => (result = gcd(result, number)))
        return result
    }
}

module.exports = { gcd, gcdMany }
