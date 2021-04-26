const { algorithm } = require('../../lib')

describe('imzhao.algorithm', () => {
    const { calc24 } = algorithm
    test('calc24', () => {
        expect(calc24(3, 2, 4, 8).length).toEqual(5)
    })
})
