/**
 * 为原生Set添加方法
 */

/**
 * 返回该集合是否是另一个集合的超集
 * @param {Set} other
 * @returns {Boolean}
 */
Set.prototype.isSuperset = function (other) {
    for (let element of other) {
        if (!this.has(element)) return false
    }
    return true
}

/**
 * 返回该集合是否是另一个集合的子集
 * @param {Set} other
 * @returns {Boolean}
 */
Set.prototype.isSubset = function (other) {
    for (let element of this) {
        if (!other.has(element)) return false
    }
    return true
}

/**
 * 返回该集合是否是另一个集合的真子集
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
 * 该集合与另一个集合取交集，并返回交集
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
 * 该集合与另一个集合取差集，并返回差集
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
