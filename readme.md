# file-uti

> Get the [UTI](https://en.wikipedia.org/wiki/Uniform_Type_Identifier) (Uniform Type Identifier) of a file on macOS

## Install

```
$ npm install file-uti
```

## Usage

```js
import {fileUtiAsync} from 'file-uti';

console.log(await fileUtiAsync('index.js'));
//=> 'com.netscape.javascript-source'
```

## API

### fileUtiAsync(filePath)

Returns a `Promise<string>` with the UTI.

### fileUtiSync(filePath)

Returns a `string` with the UTI.

## Related

- [uti-cli](https://github.com/sindresorhus/uti-cli) - CLI for this module
- [file-metadata](https://github.com/sindresorhus/file-metadata) - Get file metadata using `mdls` on macOS
