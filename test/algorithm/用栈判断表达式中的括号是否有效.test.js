const imzhao = require('imzhao')

describe('imzhao.algorithm', () => {
    const { 用栈判断表达式中的括号是否有效 } = imzhao.algorithm

    test('用栈判断表达式中的括号是否有效', () => {
        expect(用栈判断表达式中的括号是否有效('()')).toBeTruthy()
        expect(用栈判断表达式中的括号是否有效('()[]{}')).toBeTruthy()
        expect(用栈判断表达式中的括号是否有效('(]')).toBeFalsy()
        expect(用栈判断表达式中的括号是否有效('{[([{}])([{}])]}')).toBeTruthy()
    })
})
