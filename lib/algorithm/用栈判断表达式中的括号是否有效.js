const { Stack } = require('../datastructure')

function 用栈判断表达式中的括号是否有效(expression) {
    const stack = new Stack()
    for (let c of expression) {
        if (/[\(\[\{]/.test(c)) stack.push(c)
        else if (/[\)\]\}]/.test(c)) {
            const pair = stack.pop()
            if (c == ')' && pair != '(') return false
            if (c == ']' && pair != '[') return false
            if (c == '}' && pair != '{') return false
        }
    }
    return stack.isEmpty()
}

module.exports = 用栈判断表达式中的括号是否有效
