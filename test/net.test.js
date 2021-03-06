const { net } = require('../lib')

describe('imzhao.net', () => {
    test('getPublicIP() should return IP address', async () => {
        const { isIPv4, getPublicIP } = net
        const result = await getPublicIP()
        expect(isIPv4(result)).toEqual(true)
    })

    test('getJSON', async () => {
        const { getJSON } = net
        const result = await getJSON('https://httpbin.org/ip')
        expect(result.hasOwnProperty('origin')).toBeTruthy()
    })

    test('htmlToText works', () => {
        const { htmlToText } = net
        const text = 'HELLO,WORLD'
        const result = htmlToText(`<h1>${text}</h1>`)
        expect(result).toBe(text)
    })

    // const { smtp } = imzhao.net
    // test('sendMail works', (done) => {
    //     expect(smtp).toBeTruthy()
    //     expect(process.env.SMTP_MAIL).toBeTruthy()
    //     const message = {
    //         from: process.env.SMTP_MAIL,
    //         to: process.env.SMTP_MAIL,
    //         subject: 'imzhao.net.sendMail test mail',
    //         text: 'imzhao.net.sendMail test mail',
    //     }
    //     const callback = (err, info) => {
    //         expect(info.response.match(/^250 OK/)).toBeTruthy()
    //         done()
    //     }
    //     smtp.sendMail(message, callback)
    // })
})
