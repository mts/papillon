# Papillon Alerts

[![npm version](https://img.shields.io/npm/v/papillon-alerts.svg)](https://www.npmjs.org/package/papillon-alerts)
[![Build Status](https://travis-ci.org/mts/papillon.svg?branch=master)](https://travis-ci.org/mts/papillon)

> Flash messages, or alerts, inform users of successful or pending actions. Use them sparingly. Don’t show more than one at a time.

This repository is a module of the full [papillon][papillon] repository.

## Install

This repository is distributed with [npm][npm]. After [installing npm][install-npm], you can install `papillon-alerts` with this command.

```
$ npm install --save papillon-alerts
```

## Usage

You can import it like this.

```javascript
import FlashAlert from 'papillon-alerts';
```

### Documentation

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
  <p>This is a longer flash message in it&apos;s own paragraph. It ends up looking something like this. If we keep adding more text, it&apos;ll eventually wrap to a new line.</p>
  <p>And this is another paragraph.</p>
</FlashAlert>
```

Should the need arise, you can quickly space out your flash message from surrounding content with a `.flash-messages` wrapper. *Note the extra top and bottom margin in the example below.*

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

