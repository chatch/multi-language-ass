'use strict'

const fs = require('fs')
const parser = require('ass-parser')
const assStringify = require('ass-stringify')

// Defines a style for each language.
// One language at top and one at the bottom of the viewport.
const STYLES = require('./styles.json')

// Named style in styles.json
const TOP_STYLE = "TopAlign"

function combineAss(ass1, ass2) {
    const assBoth = ass1

    // Override the styles
    const styleObj = assBoth[1]
    if (styleObj.section.substring("Styles") == -1) {
        throw "Styles not found"
    }
    styleObj.body = STYLES

    // Merge the ass2 subtitles in
    const eventsCombined = assBoth[2].body
    const events2 = ass2[2].body
    for (let idx = 1; idx < events2.length; idx++) {
        const event = events2[idx]
        event.value.Style = TOP_STYLE
        eventsCombined.push(event)
    }

    return assStringify(assBoth)
}

function combineFiles(file1, file2) {
    const encoding = 'utf8'
    const ass1 = parser(fs.readFileSync(file1, encoding))
    const ass2 = parser(fs.readFileSync(file2, encoding))
    return combineAss(ass1, ass2)
}

module.exports = {
    combineFiles: combineFiles,
    combineAss: combineAss
}
