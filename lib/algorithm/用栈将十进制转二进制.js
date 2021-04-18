const { Stack } = require('../datastructure')

function 用栈将十进制转二进制(number) {
    const stack = new Stack()
    while (number > 0) {
        stack.push(number % 2)
        number = ~~(number / 2)
    }
    let result = ''
    while (!stack.isEmpty()) result += stack.pop()
    return result
}

module.exports = 用栈将十进制转二进制
