/**
 * 派Pi模块
 * @file pi.js
 * @author 赵鑫<7176466@qq.com>
 */

/**
 * Pi生成器
 *
 * 从小数位开始生成，参数: k=3, a=0, b=4, a1=40, b1=24
 * 从 3 开始生成时，参数: k=2, a=4, b=1, a1=12, b1=4
 *
 * 计算1000000位耗时：
 * ________________________________________________________
 * Executed in  844.14 mins    fish           external
 * usr time  590.84 mins  666.00 micros  590.84 mins
 * sys time  299.85 mins  275.00 micros  299.85 mins
 *
 * @param {Number} n 生成的Pi的小数部分的位数
 * @returns {Generator}
 */
function* piGenerator(n = 10) {
    n = BigInt(n)
    let p, q, d, d1, last_digit
    let k = 3n,
        a = 0n,
        b = 4n,
        a1 = 40n,
        b1 = 24n

    while (n >= 0n) {
        ;[p, q, k] = [k * k, 2n * k + 1n, k + 1n]
        ;[a, b, a1, b1] = [a1, b1, p * a + q * a1, p * b + q * b1]
        d = ~~(a / b)
        d1 = ~~(a1 / b1)
        while (d === d1) {
            if (n > 1n) yield Number(d)
            else if (n === 1n) last_digit = d
            else {
                yield Number(last_digit)
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

if (typeof module !== 'undefined' && typeof exports === 'object') module.exports = piGenerator
else window.piGenerator = piGenerator
