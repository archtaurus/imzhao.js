/**
 * PI生成器
 *
 * 从 3 开始生成时，参数: k=2, a=4, b=1, a1=12, b1=4
 * 从小数位开始生成时，参数: k=3, a=0, b=4, a1=40, b1=24
 *
 * @param {*} n 生成位数
 * @returns {Generator}
 */
function* piGenerator(n = 10) {
    let p, q, d, d1, last_digit
    let k = 3n,
        a = 0n,
        b = 4n,
        a1 = 40n,
        b1 = 24n

    while (n >= 0) {
        ;[p, q, k] = [k * k, 2n * k + 1n, k + 1n]
        ;[a, b, a1, b1] = [a1, b1, p * a + q * a1, p * b + q * b1]
        d = ~~(a / b)
        d1 = ~~(a1 / b1)
        while (d === d1) {
            if (n > 1) yield d
            else if (n === 1) last_digit = d
            else {
                yield last_digit
                return
            }
            a = (a % b) * 10n
            a1 = (a1 % b1) * 10n
            d = ~~(a / b)
            d1 = ~~(a1 / b1)
            n--
        }
    }
}

module.exports = {
    PI: Math.PI,
    TAU: Math.PI * 2,
    HALF_PI: Math.PI / 2,
    piGenerator,
}