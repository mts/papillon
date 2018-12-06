# Papillon Blankslate

[![travis build](https://img.shields.io/travis/mts/papillon.svg?style=flat-square)](https://travis-ci.org/mts/papillon)
[![version](https://img.shields.io/npm/v/papillon-blankslate.svg?style=flat-square)](http://npm.im/papillon-blankslate)
[![downloads](https://img.shields.io/npm/dm/papillon-blankslate.svg?style=flat-square)](http://npm-stat.com/charts.html?package=papillon-blankslate&from=2018-10-13)
[![MIT License](https://img.shields.io/npm/l/papillon-blankslate.svg?style=flat-square)](http://opensource.org/licenses/MIT)

> Blankslates are for when there is a lack of content within a page or section. Use them as placeholders to tell users why something isn’t there. Be sure to provide an action to add content as well.

This repository is a module of the full [papillon][papillon] repository.

## Install

https://nodei.co/npm/papillon-blankslate.png

This repository is distributed with [npm][npm]. After [installing npm][install-npm], you can install `papillon-blankslate` with this command.

```
$ npm install --save papillon-blankslate
```

## Explorer
Check out how to use Papillon Blankslate with React 16, Webpack 4 and Babel 7 [here](https://github.com/mts/papillon/tree/master/packages/papillon-blankslate/explorer)

## NPM
Get the latest papillon-blankslate [here](https://www.npmjs.com/package/papillon-blankslate)

## Usage

You can import it like this.

```javascript
import Blankslate from 'papillon-blankslate';
```

## Documentation

Blankslates are for when there is a lack of content within a page or section. Use them as placeholders to tell users why something isn't there. Be sure to provide an action to add content as well.

### Basic

Wrap some content in the outer `.blankslate` wrapper to give it the blankslate appearance.

```html
  <Blankslate>
    <h3>This is a blank slate</h3>
    <p>Use it to provide information when no dynamic content exists.</p>
  </Blankslate>
```

### With Octicons

When it helps the message, include (relevant) icons in your blank slate. Add `.blankslate-icon` to any `.mega-octicon`s as the first elements in the blankslate, like so.

```html
  <Blankslate icons={['git-commit', 'tag', 'git-branch']}>
    <h3>This is a blank slate</h3>
    <p>Use it to provide information when no dynamic content exists.</p>
  </Blankslate>
```

#### Variations

Add an additional optional class to the `.blankslate` to change its appearance.

### Narrow

Narrows the blankslate container to not occupy the entire available width.

```html
  <Blankslate className="blankslate-narrow">
    <h3>This is a blank slate</h3>
    <p>Use it to provide information when no dynamic content exists.</p>
  </Blankslate>
```

### Capped

Removes the `border-radius` on the top corners.

```html
  <Blankslate className="blankslate-capped">
    <h3>This is a blank slate</h3>
    <p>Use it to provide information when no dynamic content exists.</p>
  </Blankslate>
```

### Spacious

Significantly increases the vertical padding.

```html
  <Blankslate className="blankslate-spacious">
    <h3>This is a blank slate</h3>
    <p>Use it to provide information when no dynamic content exists.</p>
  </Blankslate>
```

### Large

Increases the size of the text in the blankslate

```html
  <Blankslate className="blankslate-large">
    <h3>This is a blank slate</h3>
    <p>Use it to provide information when no dynamic content exists.</p>
  </Blankslate>
```

### No background

Removes the `background-color` and `border`.

```html
  <Blankslate className="blankslate-clean-background">
    <h3>This is a blank slate</h3>
    <p>Use it to provide information when no dynamic content exists.</p>
  </Blankslate>
```

## License

[MIT](./LICENSE) &copy; [MTS](https://github.com/mts)

[papillon]: https://github.com/mts/papillon
[docs]: https://github.com/mts/papillon/tree/master/packages/papillon-blankslate
[npm]: https://www.npmjs.com/package/papillon-blankslate
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[react]: https://github.com/facebook/react

