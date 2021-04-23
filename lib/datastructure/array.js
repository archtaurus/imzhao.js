/**
 * 数组模块
 *
 * 为原生数组添加方法
 *
 * @file array.js
 * @author 赵鑫<7176466@qq.com>
 */

/**
 * 用另一个数组扩充当前数组，返回当前数组
 * @param {Array} list 用以扩充的数组
 * @returns {Array} 返回当前数组
 */
Array.prototype.extends = function (list) {
    if (list) Array.from(list).forEach((item) => this.push(item))
    return this
}
