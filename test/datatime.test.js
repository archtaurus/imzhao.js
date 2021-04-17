// TODO: not fully tested

const { datetime } = require('imzhao')

describe('imzhao.datetime', () => {
    test('hasOwnProperty', () => {
        expect(datetime.hasOwnProperty('now')).toBeTruthy()
    })
})
