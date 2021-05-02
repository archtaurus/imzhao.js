#!/usr/bin/env node
const { version } = require('../package.json')
const { program } = require('commander')
const imzhao = require('../lib')

program
    .command('pi <n>')
    .description('Output n digits of pi.')
    .action((n) => {
        process.stdout.write('3.')
        for (const d of imzhao.math.piGenerator(n)) process.stdout.write(d.toString())
        process.stdout.write('\n')
    })

program
    .command('gcd <numbers...>')
    .description('Calculate GCD of given numbers.')
    .action((numbers) => {
        const result = imzhao.math.gcdMany(...numbers)
        console.info(result)
    })

program
    .command('lcm <numbers...>')
    .description('Calculate LCM of given numbers.')
    .action((numbers) => {
        const result = imzhao.math.lcmMany(...numbers)
        console.info(result)
    })

program
    .command('calc24 <a> <b> <c> <d>')
    .description('Calculate 24 points.')
    .action((a, b, c, d) => {
        for (const result of imzhao.algorithm.calc24(a, b, c, d)) console.log(result)
    })

program
    .command('publicip')
    .description('Show your public IP address.')
    .action(async () => {
        const publicIP = await imzhao.net.getPublicIP()
        console.info(publicIP)
    })

program.version(version).description('imzhao command line tool.').parse(process.argv)
