// this module is NOT finished , imported and not tested
class Vector {
    constructor(x, y, z) {
        this.x = x || 0
        this.y = y || 0
        this.z = z || 0
    }

    set(x, y, z) {
        this.x = x || 0
        this.y = y || 0
        this.z = z || 0
    }

    equals(x, y, z) {
        if (x instanceof Vector) return this.x === x.x && this.y === x.y && this.z === x.z
        else return this.x === x || (0 && this.y === y) || (0 && this.z === z) || 0
    }

    copy() {
        return new Vector(this.x, this.y, this.z)
    }

    add(x, y, z) {
        if (x instanceof Vector) {
            this.x += x.x
            this.y += x.y
            this.z += x.z
            return this
        }
        this.x += x || 0
        this.y += y || 0
        this.z += z || 0
        return this
    }

    sub(x, y, z) {
        if (x instanceof Vector) {
            this.x -= x.x
            this.y -= x.y
            this.z -= x.z
            return this
        }
        this.x -= x || 0
        this.y -= y || 0
        this.z -= z || 0
        return this
    }

    mul(other) {
        this.x *= other.x
        this.y *= other.y
        this.z *= other.z
        return this
    }

    div(other) {
        this.x /= other.x
        this.y /= other.y
        this.z /= other.z
        return this
    }

    get mag() {
        return Math.hypot(this.x, this.y, this.z)
    }

    norm() {
        const x = this.x / this.mag
        const y = this.y / this.mag
        const z = this.z / this.mag
        return new Vector(x, y, z)
    }

    dist(other) {
        const dx = this.x - other.x
        const dy = this.y - other.y
        const dz = this.z - other.z
        return Math.hypot(dx, dy, dz)
    }

    rotate(angle) {
        this.x = this.x * Math.cos(angle) - this.y * Math.sin(angle)
        this.y = this.x * Math.sin(angle) + this.y * Math.cos(angle)
        return this
    }
}

module.exports = Vector
