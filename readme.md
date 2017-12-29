# file-uti [![Build Status](https://travis-ci.org/sindresorhus/file-uti.svg?branch=master)](https://travis-ci.org/sindresorhus/file-uti)

> Get the [UTI](https://en.wikipedia.org/wiki/Uniform_Type_Identifier) (Uniform Type Identifier) of a file on macOS


## Install

```
$ npm install file-uti
```


## Usage

```js
const fileUti = require('file-uti');

(async () => {
	console.log(await fileUti('index.js'));
	//=> 'com.netscape.javascript-source'
})();
```


## API

### fileUti(filePath)

Returns a `Promise<string>` with the UTI.

### fileUti.sync(filePath)

Returns a `string` with the UTI.


## Related

- [uti-cli](https://github.com/sindresorhus/uti-cli) - CLI for this module
- [file-metadata](https://github.com/sindresorhus/file-metadata) - Get file metadata using `mdls` on macOS


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
