const imzhao = require("../lib")

describe("imzhao.net", () => {
    test('getPublicIP() should return IP address', async () => {
        const result = await imzhao.net.getPublicIP()
        expect(imzhao.net.isIPv4(result)).toEqual(true)
    })
})
