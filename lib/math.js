// 最大公约数
const _gcd = (a, b) => {
    a = Math.abs(a)
    b = Math.abs(b)
    if (b > a) { let t = a; a = b; b = t }
    while (true) {
        if (b == 0) return a
        a %= b
        if (a == 0) return b
        b %= a
    }
}

const gcd = (...numbers) => {
    if (numbers) {
        let result = numbers[0]
        numbers.slice(1).forEach(number => result = _gcd(result, number))
        return result
    }
}

// 最小公倍数
const _lcm = (a, b) => a * b / _gcd(a, b)

const lcm = (...numbers) => {
    if (numbers) {
        let result = numbers[0]
        numbers.slice(1).forEach(number => result = _lcm(result, number))
        return result
    }
}

module.exports = {
    PI: Math.PI,
    gcd,
    lcm,
    circle: {
        area: (radius) => Math.PI * radius ** 2,
        perimeter: (radius) => 2 * Math.PI * radius
    },
}
