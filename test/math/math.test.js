// TODO: this test is NOT 100% finished!
const { math } = require('../../lib')

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
        expect(gcd(13, 7)).toEqual(1)
        expect(gcd(13, 13)).toEqual(13)
        expect(gcdMany(54, 24, 78)).toEqual(6)
    })

    test('lcm', () => {
        const { lcm, lcmMany } = math
        expect(lcm(13, 13)).toEqual(13)
        expect(lcm(30, 45)).toEqual(90)
        expect(lcmMany(4, 6, 8)).toEqual(24)
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
