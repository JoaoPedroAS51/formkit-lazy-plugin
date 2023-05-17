# formkit-lazy-plugin

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]
[![JSDocs][jsdocs-src]][jsdocs-href]

The Lazy plugin for FormKit allows you to effortlessly handle asynchronous data fetching and form population. With this plugin, you can easily load data into your form components while displaying a loading state until the data is resolved.

## Usage

Install package:

```sh
# npm
npm install formkit-lazy-plugin

# yarn
yarn add formkit-lazy-plugin

# pnpm
pnpm install formkit-lazy-plugin
```

Add to `formkit.config`:

```js
// ESM
import { createLazyPlugin } from "formkit-lazy-plugin";

// CommonJS
const { createLazyPlugin } = require("formkit-lazy-plugin");

// Formkit config
const config: DefaultConfigOptions = {
  plugins: [createLazyPlugin()]
}
```

Add the `lazy` prop to your FormKit component and pass either a promise or a function that returns a promise. This promise represents the asynchronous data fetching operation.

```vue
<script setup>
const fetchData = () => fetch(...)
</script>

<template>
  <FormKit type="form" :lazy="fetchData">
    ...
  </FormKit>
</template>
```

As soon as the promise is resolved, the form will automatically populate with the fetched data. In the meantime, the form will display a loading state, providing a smooth user experience.

## Development

- Clone this repository
- Install latest LTS version of [Node.js](https://nodejs.org/en/)
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
- Install dependencies using `pnpm install`
- Run interactive tests using `pnpm dev`

## License

Made with 💛

Published under [MIT License](./LICENSE).

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/formkit-lazy-plugin?style=flat&colorA=18181B&colorB=F0DB4F
[npm-version-href]: https://npmjs.com/package/formkit-lazy-plugin
[npm-downloads-src]: https://img.shields.io/npm/dm/formkit-lazy-plugin?style=flat&colorA=18181B&colorB=F0DB4F
[npm-downloads-href]: https://npmjs.com/package/formkit-lazy-plugin
[codecov-src]: https://img.shields.io/codecov/c/gh/JoaoPedroAS51/formkit-lazy-plugin/main?style=flat&colorA=18181B&colorB=F0DB4F
[codecov-href]: https://codecov.io/gh/JoaoPedroAS51/formkit-lazy-plugin
[bundle-src]: https://img.shields.io/bundlephobia/minzip/formkit-lazy-plugin?style=flat&colorA=18181B&colorB=F0DB4F
[bundle-href]: https://bundlephobia.com/result?p=formkit-lazy-plugin
[license-src]: https://img.shields.io/github/license/JoaoPedroAS51/formkit-lazy-plugin.svg?style=flat&colorA=18181B&colorB=F0DB4F
[license-href]: https://github.com/JoaoPedroAS51/formkit-lazy-plugin/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsDocs.io-reference-18181B?style=flat&colorA=18181B&colorB=F0DB4F
[jsdocs-href]: https://www.jsdocs.io/package/formkit-lazy-plugin
