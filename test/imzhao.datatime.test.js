const imzhao = require("../lib")

describe("imzhao.datetime", () => {

    const { now } = imzhao.datetime
    test('test', () => {
        console.log(now.datetimeString)
    })

})
