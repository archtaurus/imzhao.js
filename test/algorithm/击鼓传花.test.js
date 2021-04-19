const { 击鼓传花 } = require('../../lib/algorithm')

describe('imzhao.algorithm.击鼓传花', () => {
    test('击鼓传花', () => {
        const names = ['tom', 'jerry', 'jack']
        expect(击鼓传花([], 3)).toEqual(undefined)
        expect(击鼓传花(names, 1)).toEqual('jack')
        expect(击鼓传花(names, 3)).toEqual('jerry')
    })
})
