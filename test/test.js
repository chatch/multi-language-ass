'use strict'

const fs = require('fs')
const combine = require('../lib/combine')
const assert = require('assert')

describe('multi-language-ass', function() {
    const in1 = './test/files/input_en.ass'
    const in2 = './test/files/input_zh.ass'
    const expectedOut = './test/files/output.ass'

    it('should combine two files', function() {
        const newFileTxt = combine.combineFiles(in1, in2)
        assert.equal(newFileTxt, fs.readFileSync(expectedOut, 'utf8'))
    })
})
