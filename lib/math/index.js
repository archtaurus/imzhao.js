// 外来常数
const constants = {
    PI: Math.PI,
}
const PI = Math.PI
const TAU = Math.PI * 2
const HALF_PI = Math.PI / 2

// 外来函数
const abs = Math.abs
const hypot = Math.hypot

// 最大公约数
const _gcd = (a, b) => {
    a = abs(a)
    b = abs(b)
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

const gcd = (...numbers) => {
    if (numbers) {
        let result = numbers[0]
        numbers.slice(1).forEach((number) => (result = _gcd(result, number)))
        return result
    }
}

// 最小公倍数
const _lcm = (a, b) => (a * b) / _gcd(a, b)

const lcm = (...numbers) => {
    if (numbers) {
        let result = numbers[0]
        numbers.slice(1).forEach((number) => (result = _lcm(result, number)))
        return result
    }
}

// 点
class Point {
    constructor(x = 0, y = 0) {
        this.x = x
        this.y = y
    }

    static distance(a, b) {
        const dx = a.x - b.x
        const dy = a.y - b.y
        return Math.hypot(dx, dy)
    }
}

// 圆
class Circle {
    constructor(r = 1, x = 0, y = 0) {
        this.radius = r
        this.center = new Point(x, y)
    }

    static perimeter(radius) {
        return TAU * radius
    }

    get perimeter() {
        return Circle.perimeter(this.radius)
    }

    static area(radius) {
        return PI * radius ** 2
    }

    get area() {
        return Circle.area(this.radius)
    }
}

module.exports = {
    PI,
    TAU,
    HALF_PI,
    abs,
    hypot,
    gcd,
    lcm,
    Point,
    Circle,
}
