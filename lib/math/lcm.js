/**
 * 最小公倍数模块
 * @file lcm.js
 * @author 赵鑫<7176466@qq.com>
 */

const { gcd } = require('./gcd')

/**
 * 求两个数的最小公倍数
 * @param {Number} a
 * @param {Number} b
 * @returns {Number} 最小公倍数
 */
const lcm = (a, b) => {
    if (isNaN(a) || isNaN(b)) return NaN
    return (a * b) / gcd(a, b)
}

/**
 * 求多个数的最小公倍数
 * @param {Array} numbers
 * @returns {Number} 最小公倍数
 */
const lcmMany = (...numbers) => {
    if (!numbers.length) return NaN
    return numbers.reduce((result, number) => (result = lcm(result, number)))
}

module.exports = { lcm, lcmMany }
