#!/usr/bin/env node
const { version, description } = require('../package.json')
const { program } = require('commander')
const imzhao = require('../lib')

program
    .command('gcd <numbers...>')
    .description('Calculate GCD of given numbers.')
    .action((numbers) => {
        const result = imzhao.math.gcd(...numbers)
        console.info(result)
    })

program
    .command('lcm <numbers...>')
    .description('Calculate LCM of given numbers.')
    .action((numbers) => {
        const result = imzhao.math.lcm(...numbers)
        console.info(result)
    })

program
    .command('publicip')
    .description('Show your public IP address.')
    .action(async () => {
        const publicIP = await imzhao.net.getPublicIP()
        console.info(publicIP)
    })

program
    .version(version)
    .description('imzhao command line tool.')
    .parse(process.argv)
