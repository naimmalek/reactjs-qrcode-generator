# reactjs-qrcode-generator

> reactjs-qrcode-generator is a clean and simple QRcode generator library for reactJS.

[![NPM](https://img.shields.io/npm/v/reactjs-qrcode-generator.svg)](https://www.npmjs.com/package/reactjs-qrcode-generator) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save reactjs-qrcode-generator
```

Demo https://naimmalek.github.io/reactjs-qrcode-generator-demo/

## Usage

```tsx
import React, { Component } from 'react'

import {ReactQrcode} from 'reactjs-qrcode-generator'

class Example extends Component {
  render() {
    return <ReactQrcode qrvalue={qrvalue} size={size} level={1} />
  }
}
```

## Parameters

| Attribute        | Type           | Default | Description  |
| ------------- |-------------| -----|------------|
| level | Number | 1    | QR ECC level (1, 2, 3, 4) |
| qrvalue      | String | This is Qrcode | Your String |
| size      | Number | 200     | (Width/Height value) |

### Ecc level description

| Level        | Description  |
| -------------|------------  |
| 1            | low          |
| 2            | medium       |
| 3            | quartile     |
| 4            | high         |


## License

MIT © [naimmalek](https://github.com/naimmalek)
