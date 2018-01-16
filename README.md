# multi-language-ass
[![NPM Package](https://img.shields.io/npm/v/multi-language-ass.svg?style=flat-square)](https://www.npmjs.org/package/multi-language-ass)
[![Build Status](https://img.shields.io/travis/chatch/multi-language-ass.svg?branch=master&style=flat-square)](https://travis-ci.org/chatch/multi-language-ass)

Merges two [ASS subtitle files](https://www.matroska.org/technical/specs/subtitles/ssa.html) with different languages into a combined ASS file so you can have 2 sets of subtitles on your film at once.

One language is displayed at the bottom and one on the top as defined by the Alignment style in the ASS file.

## Quick start
```
sudo npm i -g multi-language-ass
multiass subs-en.ass subs-vi.ass > subs-combined.ass
```

## Convert SRT to ASS
TODO: integrate a converter so this happens automatically for input files.

However for now an easy way to convert is with ffmpeg. For example:

ffmpeg -i film_en.srt film_jp.ass
