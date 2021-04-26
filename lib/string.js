if (!String.prototype.format) {
    String.prototype.format = function () {
        let string = this
        if (arguments.length === 1 && arguments[0] instanceof Object) {
            for (let k in arguments[0]) {
                string = string.replace(new RegExp('\\{' + k + '\\}', 'g'), arguments[0][k])
            }
        } else {
            for (let i = 0; i < arguments.length; i++) {
                string = string.replace(new RegExp('\\{' + i + '\\}', 'g'), arguments[i])
            }
        }
        return string
    }
}
