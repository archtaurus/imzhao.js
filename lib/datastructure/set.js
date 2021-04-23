/**
 * 集合模块
 *
 * 为原生集合添加方法
 *
 * @file set.js
 * @author 赵鑫<7176466@qq.com>
 */

/**
 * 判断集合是否是另一个集合的超集
 * @param {Set} other
 * @returns {Boolean}
 */
Set.prototype.isSuperset = function (other) {
    for (const element of other) {
        if (!this.has(element)) return false
    }
    return true
}

/**
 * 判断集合是否是另一个集合的子集
 * @param {Set} other
 * @returns {Boolean}
 */
Set.prototype.isSubset = function (other) {
    for (const element of this) {
        if (!other.has(element)) return false
    }
    return true
}

/**
 * 判断集合是否是另一个集合的真子集
 * @param {Set} other
 * @returns {Boolean}
 */
Set.prototype.isProperSubset = function (other) {
    return this.size < other.size && this.isSubset(other)
}

/**
 * 该集合与另一个集合取合集，并返回合集
 * @param {Set} other
 * @returns {Set}
 */
Set.prototype.union = function (other) {
    for (let item of other) this.add(item)
    return this
}

/**
 * 与另一个集合取交集，本地修改并返回
 * @param {Set} other
 * @returns {Set}
 */
Set.prototype.intersection = function (other) {
    for (let item of this) {
        if (!other.has(item)) this.delete(item)
    }
    return this
}

/**
 * 与另一个集合取差集，本地修改并返回
 * @param {Set} other
 * @returns {Set}
 */
Set.prototype.subtraction = function (other) {
    for (let item of this) {
        if (other.has(item)) this.delete(item)
    }
    return this
}

/**
 * 返回集合的拷贝
 * @returns {Set}
 */
Set.prototype.copy = function () {
    return new Set(this)
}

/**
 * 返回两个集合中不重复的元素集合
 * @param {Set} other
 * @returns {Set}
 */
Set.prototype.difference = function (other) {
    const a = this.copy().subtraction(other)
    const b = other.copy().subtraction(this)
    return a.union(b)
}
