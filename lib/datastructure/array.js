/**
 * 为原生Array添加方法
 */

Array.prototype.extends = function (list) {
    for (let item of list) this.push(item)
    return this
}
