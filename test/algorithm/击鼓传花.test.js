const imzhao = require('imzhao')

describe('imzhao.algorithm', () => {
    const { 击鼓传花 } = imzhao.algorithm

    test('击鼓传花', () => {
        const names = ['tom', 'jerry', 'jack']
        expect(击鼓传花([], 3)).toEqual(undefined)
        expect(击鼓传花(names, 1)).toEqual('jack')
        expect(击鼓传花(names, 3)).toEqual('jerry')
    })

    // const { htmlToText } = imzhao.net
    // test('htmlToText works', () => {
    //     const text = 'HELLO,WORLD'
    //     const result = htmlToText(`<h1>${text}</h1>`)
    //     expect(result).toBe(text)
    // })

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
