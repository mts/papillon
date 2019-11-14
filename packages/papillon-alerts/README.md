# Papillon Alerts

[![version](https://img.shields.io/npm/v/papillon-alerts.svg?style=flat-square)](http://npm.im/papillon-alerts)
[![travis build](https://img.shields.io/travis/mts/papillon.svg?style=flat-square)](https://travis-ci.org/mts/papillon)
[![codecov coverage](https://codecov.io/gh/mts/papillon/branch/master/graph/badge.svg?style=flat-square)](https://codecov.io/gh/mts/papillon/branch/master)
[![downloads](https://img.shields.io/npm/dm/papillon-alerts.svg?style=flat-square)](http://npm-stat.com/charts.html?package=papillon-alerts&from=2018-10-13)
[![MIT License](https://img.shields.io/npm/l/papillon-alerts.svg?style=flat-square)](http://opensource.org/licenses/MIT)

> Flash messages, or alerts, inform users of successful or pending actions. Use them sparingly. Don’t show more than one at a time.

This repository is a module of the full [papillon][papillon] repository.

## Install

<p align="left">
  <a aria-label="npm install" href="https://www.npmjs.com/package/papillon-alerts">
    <img alt="" src="https://nodei.co/npm/papillon-alerts.png">
  </a>
</p>

This repository is distributed with [npm][npm]. After [installing npm][install-npm], you can install `papillon-alerts` with this command.

```
$ npm install --save papillon-alerts
```

## Explorer

Check out how to use Papillon Alerts with React 16, Webpack 4 and Babel 7 [here](https://github.com/mts/papillon/tree/master/packages/papillon-alerts/explorer)

## NPM

Get the latest papillon-alerts [here](https://www.npmjs.com/package/papillon-alerts)

## Usage

You can import it like this.

```javascript
import { FlashAlert, FlashMessages } from 'papillon-alerts'
```

## Documentation

Flash messages, or alerts, inform users of successful or pending actions. Use them sparingly. Don't show more than one at a time.

### Default

Flash messages start off looking decently neutral—they're just light blue rounded rectangles.

```html
<FlashAlert>
  Flash message goes here.
</FlashAlert>
```

You can put multiple paragraphs of text in a flash message—the last paragraph's bottom `margin` will be automatically override.

```html
<FlashAlert>
  <p>
    This is a longer flash message in it&apos;s own paragraph. It ends up looking something like this. If we keep adding more text,
    it&apos;ll eventually wrap to a new line.
  </p>
  <p>And this is another paragraph.</p>
</FlashAlert>
```

Should the need arise, you can quickly space out your flash message from surrounding content with a `.flash-messages` wrapper. _Note the extra top and bottom margin in the example below._

```html
<FlashMessages>
  <FlashAlert>
    Flash message goes here.
  </FlashAlert>
</FlashMessages>
```

### Variations

Add `.flash-warn`, `.flash-error`, or `.flash-success` to the flash message to make it yellow, red, or green, respectively.

```html
<FlashAlert className="flash-warn">
  Flash message goes here.
</FlashAlert>

<FlashAlert className="flash-error">
  Flash message goes here.
</FlashAlert>

<FlashAlert className="flash-success">
  Flash message goes here.
</FlashAlert>
```

### With icon

Add an icon to the left of the flash message to give it some funky fresh attention.

```html
<FlashAlert icon="alert">
  Flash message with an icon goes here.
</FlashAlert>
```

### With dismiss

Add a JavaScript enabled (via Crema) dismiss (close) icon on the right of any flash message.

```html
<FlashAlert>
    <button
      className="flash-close js-flash-close"
      type="button"
      onClick={() => {}}
    >
      <Octicon size='small' icon={getIconByName('x')} />
    </button>
    Dismissable flash message goes here.
</FlashAlert>
```

### With action button

A flash message with an action button.

```html
<FlashAlert>
  <button
    type="submit"
    className="btn btn-sm primary flash-action"
    onClick={() => {}}
  >
    Complete action
  </button>
  Flash message with action here.
</FlashAlert>
```

### Full width flash

A flash message that is full width and removes border and border radius.

```html
<div className="container-lg">
  <FlashAlert className="flash-full">
    Full width flash message.
  </FlashAlert>
</div>
```

## License

[MIT](./LICENSE) &copy; [MTS](https://github.com/mts)

[papillon]: https://github.com/mts/papillon
[docs]: https://github.com/mts/papillon/tree/master/packages/papillon-alerts
[npm]: https://www.npmjs.com/package/papillon-alerts
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[react]: https://github.com/facebook/react
