#!/usr/bin/env node
const { version, description } = require('../package.json')
const { program } = require('commander')
const imzhao = require('../lib')

program
    .command('gcd')
    .description('Calculate GCD')
    .action(() => {
        const numbers = process.argv.slice(3)
        if (numbers) {
            const result = imzhao.math.gcd(...numbers)
            console.log(result)
        }
    })

program
    .command('lcm')
    .description('Calculate LCM')
    .action(() => {
        const numbers = process.argv.slice(3)
        if (numbers) {
            const result = imzhao.math.lcm(...numbers)
            console.log(result)
        }
    })

program
    .command('publicip')
    .description('Show your public IP address.')
    .action(async () => {
        const publicIP = await imzhao.net.getPublicIP()
        console.log(publicIP)
    })

const options = program
    .version(version)
    .description(description)
    .parse(process.argv)
    .opts()
