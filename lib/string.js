if (!String.prototype.format) {
    String.prototype.format = function () {
        let string = this
        if (arguments.length > 1) {
            for (let i = 0; i < arguments.length; i++) {
                string = string.replace(new RegExp('\\{' + i + '\\}', 'g'), arguments[i])
            }
        } else {
            for (let k in arguments[0]) {
                string = string.replace(new RegExp('\\{' + k + '\\}', 'g'), arguments[0][k])
            }
        }
        return string
    }
}
