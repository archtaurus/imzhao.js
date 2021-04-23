/**
 * 最大公约数模块
 * @file gcd.js
 * @author 赵鑫<7176466@qq.com>
 */

/**
 * 求两个数的最大公约数
 * @param {Number} a
 * @param {Number} b
 * @returns {Number} 最大公约数
 */
const gcd = (a, b) => {
    if (isNaN(a) || isNaN(b)) return NaN
    a = Math.abs(a)
    b = Math.abs(b)
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

/**
 * 求多个数的最大公约数
 * @param {Array} numbers
 * @returns {Number} 最大公约数
 */
const gcdMany = (...numbers) => {
    if (!numbers.length) return NaN
    return numbers.reduce((result = 1, number) => (result = gcd(result, number)))
}

module.exports = { gcd, gcdMany }
