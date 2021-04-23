// TODO: this test is NOT 100% finished!
const { math } = require('../lib')

describe('imzhao.math', () => {
    const { PI, TAU, HALF_PI, PI1M, piGenerator } = math
    test('pi and piGenerator', () => {
        expect(PI).toEqual(Math.PI)
        expect(TAU).toEqual(Math.PI * 2)
        expect(HALF_PI).toEqual(Math.PI / 2)

        const pi50 = '3.14159265358979323846264338327950288419716939937510'
        const pi100 = '3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679'
        const pi1000 =
            '3.14159265358979323846264338327950288419716939937510' +
            '58209749445923078164062862089986280348253421170679' +
            '82148086513282306647093844609550582231725359408128' +
            '48111745028410270193852110555964462294895493038196' +
            '44288109756659334461284756482337867831652712019091' +
            '45648566923460348610454326648213393607260249141273' +
            '72458700660631558817488152092096282925409171536436' +
            '78925903600113305305488204665213841469519415116094' +
            '33057270365759591953092186117381932611793105118548' +
            '07446237996274956735188575272489122793818301194912' +
            '98336733624406566430860213949463952247371907021798' +
            '60943702770539217176293176752384674818467669405132' +
            '00056812714526356082778577134275778960917363717872' +
            '14684409012249534301465495853710507922796892589235' +
            '42019956112129021960864034418159813629774771309960' +
            '51870721134999999837297804995105973173281609631859' +
            '50244594553469083026425223082533446850352619311881' +
            '71010003137838752886587533208381420617177669147303' +
            '59825349042875546873115956286388235378759375195778' +
            '18577805321712268066130019278766111959092164201989'
        expect([3, '.', ...piGenerator(50)].join('')).toEqual(pi50)
        expect([3, '.', ...piGenerator(100)].join('')).toEqual(pi100)
        expect([3, '.', ...piGenerator(1000)].join('')).toEqual(pi1000)
        // expect([3, '.', ...piGenerator(1000000)].join('')).toEqual(PI1M)
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
