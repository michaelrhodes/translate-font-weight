# translate-font-weight
A tiny module that translates font-weight names into [appropriate](http://www.w3.org/TR/CSS21/fonts.html#font-boldness) [integer values](http://www.microsoft.com/typography/otspec/os2.htm#wtc).

[![Build status](https://travis-ci.org/michaelrhodes/translate-font-weight.svg?branch=master)](https://travis-ci.org/michaelrhodes/translate-font-weight)

## Install
```sh
$ npm install translate-font-weight
```

## Usage
```js
var translate = require('translate-font-weight')

var heading = document.querySelector('h1')
var weight = getComputedStyle(heading).fontWeight

console.log(translate(weight))
> 700
```

### API
The following is a list of font weight names and their translated values.
All names are case-insensitive, and their hyphens are optional.

| names                        | value |
|:---------------------------- |------:|
| Thin                         |   100 |
| Extra-light, Ultra-light     |   200 |
| Light                        |   300 |
| Normal, Regular, Roman, Book |   400 |
| Medium                       |   500 |
| Semi-bold, Demi-bold         |   600 |
| Bold                         |   700 |
| Extra-bold, Ultra-bold       |   800 |
| Black, Heavy                 |   900 |

## License
[MIT](http://opensource.org/licenses/MIT)
