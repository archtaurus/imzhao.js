#!/usr/bin/env node
const { version } = require('../package.json')
const { program } = require('commander')
const imzhao = require('../lib')

program
    .command('publicip')
    .description('Show your public IP address.')
    .action(async () => {
        const publicIP = await imzhao.net.getPublicIP()
        console.log(publicIP)
    })

const options = program
    .version(version)
    .description('imzhao')
    .option('-d, --debug', 'output extra debugging')
    .parse(process.argv)
    .opts()
