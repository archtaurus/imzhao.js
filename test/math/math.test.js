// TODO: this test is NOT 100% finished!
const imzhao = require('imzhao')

describe('imzhao.math', () => {
    const { PI, Circle } = imzhao.math

    test('constants', () => {
        expect(imzhao.math.PI).toEqual(Math.PI)
        expect(imzhao.math.TAU).toEqual(Math.PI * 2)
        expect(imzhao.math.HALF_PI).toEqual(Math.PI / 2)
    })

    test('abs', () => {
        expect(imzhao.math.abs(99)).toEqual(99)
        expect(imzhao.math.abs(-99)).toEqual(99)
    })

    test('Circle(1).area should return PI', () => {
        const circle = new Circle(1)
        expect(circle.area).toEqual(PI)
        expect(Circle.area(1)).toEqual(PI)
        expect(circle.perimeter).toEqual(PI * 2)
        expect(Circle.perimeter(1)).toEqual(PI * 2)
    })

    const { gcd } = imzhao.math
    test('gcd() should return undefined', () => {
        expect(gcd()).toEqual(undefined)
    })
    test('gcd(13) should return 13', () => {
        expect(gcd(13)).toEqual(13)
    })
    test('gcd(13, 7) should return 1', () => {
        expect(gcd(13, 7)).toEqual(1)
    })
    test('gcd(13, 13) should return 13', () => {
        expect(gcd(13, 13)).toEqual(13)
    })
    test('gcd(54, 24, 78) should return 6', () => {
        expect(gcd(54, 24, 78)).toEqual(6)
    })

    const { lcm } = imzhao.math
    test('lcm() should return undefined', () => {
        expect(lcm()).toEqual(undefined)
    })
    test('lcm(13) should return 13', () => {
        expect(lcm(13)).toEqual(13)
    })
    test('lcm(13, 13) should return 13', () => {
        expect(lcm(13, 13)).toEqual(13)
    })
    test('lcm(30, 45) should return 90', () => {
        expect(lcm(30, 45)).toEqual(90)
    })
    test('lcm(4, 6, 8) should return 24', () => {
        expect(lcm(4, 6, 8)).toEqual(24)
    })
})
