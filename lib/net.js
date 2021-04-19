const { isIPv4 } = require('net')
const { htmlToText } = require('html-to-text')

const sendMail = (
    subject,
    body,
    to = process.env.SMTP_MAIL,
    from = process.env.SMTP_MAIL,
    host = process.env.SMTP_HOST,
    port = process.env.SMTP_PORT,
    user = process.env.SMTP_USER,
    pass = process.env.SMTP_PASS,
    useSSL = true
) => {
    const options = {
        host,
        port,
        secureConnection: useSSL,
    }
    if (user && pass) options.auth = { user, pass }
    const smtp = require('nodemailer').createTransport(options)
    if (smtp && subject && body && to && from) {
        const text = htmlToText(body),
            html = body
        const message = { from, to, subject, text, html }
        smtp.sendMail(message, (err, info) => err && console.error(err))
    }
}

const getJSON = async (url) => {
    try {
        const axios = require('axios')
        const response = await axios.get(url)
        return response.data
    } catch (error) {
        console.error(error)
    }
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
    sendMail,
}
