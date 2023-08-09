# msklc-parser

Parse Microsoft Keyboard Layout Creator (MSKLC) .klc files into a JSON representation.

## Usage

To install:

```sh
npm install msklc-parser --save
```

To use:

```js
import fs from 'fs';
import msklcParser from 'msklc-parser';

const klc = fs.readFileSync('path/to/klc/file.klc', 'utf8');
const json = msklcParser(klc);
```

## License

Licensed under the MIT License. See [LICENSE.md](LICENSE.md) for details.
