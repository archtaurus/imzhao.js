// 最大公约数
const gcd = (a, b) => {
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

// 最小公倍数
const lcm = (a, b) => a * b / gcd(a, b)

module.exports = {
    PI: Math.PI,
    gcd,
    lcm,
    circle: {
        area: (radius) => Math.PI * radius ** 2,
        perimeter: (radius) => Math.PI * radius * 2
    },
}
