Set.prototype.isSuperset = function (other) {
    for (let element of other) {
        if (!this.has(element)) return false
    }
    return true
}

Set.prototype.isSubset = function (other) {
    for (let element of this) {
        if (!other.has(element)) return false
    }
    return true
}

Set.prototype.isProperSubset = function (other) {
    return this.size < other.size && this.isSubset(other)
}

Set.prototype.union = function (other) {
    const union = new Set(this)
    for (let element of other) union.add(element)
    return union
}

Set.prototype.intersection = function (other) {
    const intersection = new Set()
    for (let element of this) {
        if (other.has(element)) intersection.add(element)
    }
    return intersection
}

Set.prototype.subtraction = function (other) {
    const subtraction = new Set(this)
    for (let element of other) subtraction.delete(element)
    return subtraction
}

Set.prototype.difference = function (other) {
    const a = this.subtraction(other)
    const b = other.subtraction(this)
    const difference = a.union(b)
    return difference
}
