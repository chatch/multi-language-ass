'use strict'

const combine = require('./lib/combine')

const in1 = process.argv[2]
const in2 = process.argv[3]

console.log(combine.combineFiles(in1, in2))
