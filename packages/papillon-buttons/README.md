# Papillon Buttons

[![npm version](https://img.shields.io/npm/v/papillon-buttons.svg)](https://www.npmjs.org/package/papillon-buttons)
[![Build Status](https://travis-ci.org/mts/papillon.svg?branch=master)](https://travis-ci.org/mts/papillon)

> Buttons are used for actions, like in forms, while textual hyperlinks are used for destinations, or moving from one page to another.

This repository is a module of the full [papillon][papillon] repository.

## Install

This repository is distributed with [npm][npm]. After [installing npm][install-npm], you can install `primer-buttons` with this command.

```
$ npm install --save primer-buttons
```

## Usage

You can import it like this.

```javascript
import Button from 'papillon-buttons';
```

## Documentation

Buttons are used for **actions**, like in forms, while textual hyperlinks are used for **destinations**, or moving from one page to another.

### Default

Use the standard—yet classy—`.btn` for form actions and primary page actions. These are used extensively around the site.

When using a `<button>` element, **always specify a `type`**. When using a `<a>` element, **always add `role="button"` for accessibility**.

```html
  <Button variant="button">Button</Button>
```

```html
  <Button variant="link">Button</Button>
```

You can find them in different sizes: the default `.btn`, the smaller `.btn-sm` and the larger `.btn-large`.

```html
  <Button variant="link"className="btn-sm btn-purple mr-6">Small link button</Button>
  <Button variant="button"className="btn-sm btn-outline-blue">Small button button</Button>
```

```html
  <Button variant="link"className="btn-large btn-purple mr-6">Large link button</Button>
  <Button variant="button"className="btn-large btn-outline-blue">Large button button</Button>
```

### Primary button

Primary buttons are green and are used to indicate the *primary* action on a page. When you need your buttons to stand out, use `.btn.btn-primary`. You can use it with both button sizes—just add `.btn-primary`.

```html
  <Button variant="button" className="btn-primary">Button</Button>
  <Button variant="button" className="btn-primary hover">hover</Button>
  <Button variant="button" className="btn-primary focus">focus</Button>
  <Button variant="button" className="btn-primary selected">selected</Button>
  <Button variant="button" className="btn-primary disabled">disabled</Button>
```

### Secondary button

```html
  <Button variant="button" className="btn-secondary">Button</Button>
  <Button variant="button" className="btn-secondary hover">hover</Button>
  <Button variant="button" className="btn-secondary focus">focus</Button>
  <Button variant="button" className="btn-secondary selected">selected</Button>
  <Button variant="button" className="btn-secondary disabled">disabled</Button>
```

### Danger button

Danger buttons are red. They help reiterate that the intended action is important or potentially dangerous (e.g., deleting a repo or transferring ownership). Similar to the primary buttons, just add `.btn-danger`.

```html
  <Button variant="button" className="btn-danger">Button</Button>
  <Button variant="button" className="btn-danger hover">hover</Button>
  <Button variant="button" className="btn-danger focus">focus</Button>
  <Button variant="button" className="btn-danger selected">selected</Button>
  <Button variant="button" className="btn-danger disabled">disabled</Button>
```

### Outline button

Outline buttons downplay an action as they appear like boxy links. Just add `.btn-outline` and go.

```html
  <Button variant="button" className="btn-outline">Button</Button>
  <Button variant="button" className="btn-outline hover">hover</Button>
  <Button variant="button" className="btn-outline focus">focus</Button>
  <Button variant="button" className="btn-outline selected">selected</Button>
  <Button variant="button" className="btn-outline disabled">disabled</Button>
```

### Blue button

```html
  <Button variant="button" className="btn-blue">Button</Button>
  <Button variant="button" className="btn-blue hover">hover</Button>
  <Button variant="button" className="btn-blue focus">focus</Button>
  <Button variant="button" className="btn-blue selected">selected</Button>
  <Button variant="button" className="btn-blue disabled">disabled</Button>
```

### Purple button

```html
  <Button variant="button" className="btn-purple">Button</Button>
  <Button variant="button" className="btn-purple hover">hover</Button>
  <Button variant="button" className="btn-purple focus">focus</Button>
  <Button variant="button" className="btn-purple selected">selected</Button>
  <Button variant="button" className="btn-purple disabled">disabled</Button>
```

### Button Link

```html
  <Button variant="button-link">Button Link</Button>
```

## License

[MIT](./LICENSE) &copy; [MTS](https://github.com/mts)

[papillon]: https://github.com/mts/papillon
[docs]: https://github.com/mts/papillon/tree/master/packages/papillon-buttons
[npm]: https://www.npmjs.com/package/papillon-buttons
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[react]: https://github.com/facebook/react

