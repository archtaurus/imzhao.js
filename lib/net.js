const { isIPv4 } = require('net')
const axios = require('axios')

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
    isIPv4
}
