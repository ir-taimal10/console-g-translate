#!/usr/bin/env node
const translate = require('./src/index');
const languages = require('./src/languages');
const arguments = process.argv;
let phrase, targetLanguage;
if (arguments.length > 2) {
    phrase = arguments[2];
    targetLanguage = arguments[3];
    translate(phrase, {to: targetLanguage || 'en'})
        .then(res => {
            console.log(`${res.from.language.iso}->${res.to.language.iso}:   ${res.text}`);
        }).catch(err => {
        console.error(err);
    });

} else {
    console.log("you must use: >   node translate \"Your text\"");
    console.log("Languages: ", languages);
}

