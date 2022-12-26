<div align="center">
	<br />
	<p>
		<a href="#"><img src="/logo.svg" width="546" alt="artificial.js" /></a>
	</p>
	<br>
	<p>
		<a href="https://www.npmjs.com/package/artificial.js"><img src="https://img.shields.io/npm/v/artificial.js.svg?maxAge=3600" alt="npm version" /></a>
		<a href="https://www.npmjs.com/package/artificial.js"><img src="https://img.shields.io/npm/dt/artificial.js.svg?maxAge=3600" alt="npm downloads" /></a>
	</p>
</div>

## About

This is an ongoing project intended to make it easier to use neural network creation, genetic algorithms, and other data science and machine learning skills.

However, the npm module is under development.

check out a separate version of the same developed: [FabioSmuu/RNA](https://github.com/fabiosmuu/rna).

## Example usage

Install artificial.js:

```sh-session
npm install artificial.js
```

Testing that the module is working.:

```js
const { Activations: fn, Generation, RNA } = require('artificial.js')

fn.ReLU()

const rna = new RNA()
console.log(rna)

const generation = new Generation()
console.log(generation)
```

## Links

- [GitHub][github]
- [npm][npm]

## Contributing

No contributors at the moment.
We will have [documentation][docs]. 

# License

This project is free software; you can redistribute it and/or modify it under the terms of the [GNU Lesser General Public License][license] as published by the Free Software Foundation, version 2.1.

[license]: https://github.com/fabiosmuu/artificial.js/tree/main/LICENSE
[docs]: https://github.com/fabiosmuu/artificial.js/tree/main/docs
[github]: https://github.com/fabiosmuu/artificial.js
[npm]: https://www.npmjs.com/package/artificial.js
