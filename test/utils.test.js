const { utils } = require('imzhao')

describe('imzhao.utils', () => {
    test('should has these properties', () => {
        expect(utils.hasOwnProperty('uuidv4')).toBeTruthy()
        expect(utils.hasOwnProperty('bmi')).toBeTruthy()
        expect(utils.hasOwnProperty('numberToArray')).toBeTruthy()
        expect(utils.hasOwnProperty('baseConvert')).toBeTruthy()
    })

    test('utils.uuidv4', () => {
        const uuid = utils.uuidv4()
        expect(typeof uuid).toEqual('string')
        expect(uuid.length).toEqual(36)
        expect(utils.uuidv4() === utils.uuidv4()).toBeFalsy()
    })
})
