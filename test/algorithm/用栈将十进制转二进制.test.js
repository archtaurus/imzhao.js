const imzhao = require('imzhao')

describe('imzhao.algorithm', () => {
    const { 用栈将十进制转二进制 } = imzhao.algorithm

    test('用栈将十进制转二进制', () => {
        expect(用栈将十进制转二进制(170)).toEqual('10101010')
    })
})
