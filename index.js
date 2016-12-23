'use strict'

const fs = require('fs')
const parser = require('ass-parser')
const assStringify = require('ass-stringify')

// Defines a style for each language.
// One language at top and one at the bottom of the viewport.
const STYLES = require('./styles.json')

function combine(ass1, ass2) {
    const assBoth = ass1
    console.log(JSON.stringify(assBoth))
    return assStringify(assBoth)
}

const file1 = './test/files/input_en.ass'
const file2 = './test/files/input_zh.ass'

const UTF8 = {
    encoding: 'utf8'
}
const ass1 = parser(fs.readFileSync(file1, UTF8))
const ass2 = parser(fs.readFileSync(file2, UTF8))

const assBothText = combine(ass1, ass2)
console.log(assBothText)
