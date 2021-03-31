const { isIPv4 } = require('net')
const axios = require('axios')
const { htmlToText } = require('html-to-text')

const smtp = (
    process.env.SMTP_HOST
    && process.env.SMTP_PORT
    && process.env.SMTP_USER
    && process.env.SMTP_PASS) ?
    require('nodemailer').createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secureConnection: !!process.env.SMTP_SSL || true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    }) : null

const sendMail = (subject, body, to = process.env.SMTP_MAIL, from = process.env.SMTP_MAIL) => {
    if (smtp && subject && body && to && from) {
        const text = htmlToText(body), html = body
        const message = { from, to, subject, text, html }
        smtp.sendMail(message, (err, info) => {
            if (err) console.error(err)
            else console.info(info)
        })
    }
}

const getJSON = async (url) => {
    try {
        const response = await axios.get(url)
        return response.data
    } catch (error) { console.error(error) }
}

const getPublicIP = async () => {
    const data = await getJSON('https://httpbin.org/ip')
    return data.origin
}

module.exports = {
    getJSON,
    getPublicIP,
    isIPv4,
    htmlToText,
    smtp,
    sendMail,
}
