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
function gcd(a, b) {
    if (b) while ((a %= b) && (b %= a)) {}
    return a + b
}

/**
 * 求多个数的最大公约数
 * @param {Array} numbers
 * @returns {Number} 最大公约数
 */
function gcdMany(...numbers) {
    if (!numbers.length) return NaN
    return numbers.reduce((result = 1, number) => (result = gcd(result, number)))
}

if (typeof module !== 'undefined' && typeof exports === 'object') module.exports = { gcd, gcdMany }
else {
    window.gcd = gcd
    window.gcdMany = gcdMany
}
