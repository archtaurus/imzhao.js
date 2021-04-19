// TODO: not fully tested

const { datetime } = require('../lib')

describe('imzhao.datetime', () => {
    test('hasOwnProperty', () => {
        expect(datetime.hasOwnProperty('now')).toBeTruthy()
    })
})
