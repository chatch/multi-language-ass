#!/usr/bin/env node
'use strict'

const fs = require('fs')
const combine = require('../lib/combine')

const USAGE = `Usage: multiass <subs1.ass> <subs2.ass>`

function err(msg) {
    console.error(msg)
    process.exit(-1)
}

if (process.argv.length != 4) {
    err(`\n${USAGE}\n`)
}

const in1 = process.argv[2]
const in2 = process.argv[3]
if (fs.existsSync(in1) == false || fs.existsSync(in2) == false) {
    err(`\nCan't see those files ... Check the paths.\n\n${USAGE}\n`)
}

console.log(combine.combineFiles(in1, in2))
