// TODO: this test is NOT 100% finished!
const { math } = require('../lib')

describe('imzhao.math', () => {
    const { PI, TAU, HALF_PI } = math
    test('constants', () => {
        expect(PI).toEqual(Math.PI)
        expect(TAU).toEqual(Math.PI * 2)
        expect(HALF_PI).toEqual(Math.PI / 2)
    })

    test('abs', () => {
        const { abs } = math
        expect(abs(99)).toEqual(99)
        expect(abs(-99)).toEqual(99)
    })

    test('gcd', () => {
        const { gcd, gcdMany } = math
        expect(gcd()).toBeNaN()
        expect(gcd(3, -9)).toEqual(3)
        expect(gcd(-3, 9)).toEqual(-3)
        expect(gcd(13, 7)).toEqual(1)
        expect(gcd(13, 0)).toEqual(13)
        expect(gcd(13, 13)).toEqual(13)
        expect(gcdMany(54, 24, 78)).toEqual(6)
        expect(gcdMany()).toBeNaN()
    })

    test('lcm', () => {
        const { lcm, lcmMany } = math
        expect(lcm()).toBeNaN()
        expect(lcm(13, 0)).toEqual(0)
        expect(lcm(13, 13)).toEqual(13)
        expect(lcm(30, 45)).toEqual(90)
        expect(lcmMany(4, 6, 8)).toEqual(24)
        expect(lcmMany()).toBeNaN()
    })

    test('gcd 和 lcm 有一些性质', () => {
        const { randomInt, gcd, lcm, abs } = math
        const a = randomInt(1, 1000)
        const b = randomInt(1, 1000)
        const c = randomInt(1, 1000)
        for (let i = 0; i < 100; i++) {
            // gcd(a, b) === gcd(b, a)
            expect(gcd(a, b) === gcd(b, a)).toBeTruthy()
            // gcd(a,b) x lcm(a,b) === |a x b|
            expect(gcd(a, b) * lcm(a, b) === abs(a * b)).toBeTruthy()
            // gcd(a, lcm(b, c)) === lcm(gcd(a, b), gcd(a, c)) 交换律
            expect(gcd(a, lcm(b, c)) === lcm(gcd(a, b), gcd(a, c))).toBeTruthy()
            // lcm(a, gcd(b, c)) === gcd(lcm(a, b), lcm(a, c)) 交换律
            expect(lcm(a, gcd(b, c)) === gcd(lcm(a, b), lcm(a, c))).toBeTruthy()
        }
    })

    test('random', () => {
        const { randomInt, randomChoose, shuffle } = math

        expect(randomInt(0, 0)).toEqual(0)
        let zeros = 0
        let ones = 0
        let twos = 0
        let others = 0
        for (let i = 0; i < 1000; i++) {
            const random = randomInt(0, 2)
            if (random === 0) zeros++
            else if (random === 1) ones++
            else if (random === 2) twos++
            else others++
        }
        expect(zeros > 0).toBeTruthy()
        expect(ones > 0).toBeTruthy()
        expect(twos > 0).toBeTruthy()
        expect(others).toEqual(0)

        const list = ['apple', 'banana', 'cherry']
        let apples = 0
        let bananas = 0
        let cherries = 0
        for (let i = 0; i < 1000; i++) {
            const random = randomChoose(list)
            if (random === 'apple') apples++
            else if (random === 'banana') bananas++
            else if (random === 'cherry') cherries++
            else others++
        }
        expect(apples > 0).toBeTruthy()
        expect(bananas > 0).toBeTruthy()
        expect(cherries > 0).toBeTruthy()
        expect(others).toEqual(0)
    })

    // test('Circle', () => {
    //     const { Circle } = math
    //     const circle = new Circle(1)
    //     expect(circle.area).toEqual(PI)
    //     expect(Circle.area(1)).toEqual(PI)
    //     expect(circle.perimeter).toEqual(TAU)
    //     expect(Circle.perimeter(1)).toEqual(TAU)
    // })
})
