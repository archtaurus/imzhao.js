const imzhao = require("../lib")

describe("imzhao.math", () => {
    test('circle.area(1) should return PI', () => {
        const area = imzhao.math.circle.area(1)
        expect(area).toEqual(imzhao.math.PI)
    })
    test('circle.area(2) should return PI*4', () => {
        const area = imzhao.math.circle.area(2)
        expect(area).toEqual(imzhao.math.PI * 4)
    })
    test('circle.perimeter(0.5) should return PI', () => {
        const perimeter = imzhao.math.circle.perimeter(0.5)
        expect(perimeter).toEqual(imzhao.math.PI)
    })
    test('circle.perimeter(1) should return PI*2', () => {
        const perimeter = imzhao.math.circle.perimeter(1)
        expect(perimeter).toEqual(imzhao.math.PI * 2)
    })
    test('gcd(54, 24) should return 6', () => {
        expect(imzhao.math.gcd(54, 24)).toEqual(6)
    })
    test('gcd(13, 7) should return 1', () => {
        expect(imzhao.math.gcd(13, 7)).toEqual(1)
    })
    test('lcm(30, 45) should return 90', () => {
        expect(imzhao.math.lcm(30, 45)).toEqual(90)
    })
})
