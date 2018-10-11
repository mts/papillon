# Papillon

React UI Components styled with [Primer](https://primer.style/).

## Table of Contents

### 🐳 Alerts

<details>
<summary>View contents</summary>

* [`FlashAlert`](#flashalert)
* [`FlashMessages`](#flashmessages)

</details>

### 🐠 Buttons

<details>
<summary>View contents</summary>

* [`Button`](#button)

</details>

---

## 🐳 Alerts

### Install

```bash
$ npm install --save papillon-alerts
```

### Import
```javascript
import { FlashAlert, FlashMessages } from 'papillon-alerts';
```

### Use FlashAlert
```html
<FlashAlert>
  Flash message goes here.
</FlashAlert>
```

### Use FlashMessages
```html
<FlashMessages>
  <FlashAlert>
    Flash message goes here.
  </FlashAlert>
</FlashMessages>
```

### Use all
Find more flavours of FlashAlert and FlashMessages [here](https://github.com/mts/papillon/tree/master/packages/papillon-alerts).

### Webpack Babel Sample
[Use Papillon Alerts with React 16, Webpack 4 and Babel 7](https://github.com/mts/papillon/tree/master/packages/papillon-alerts/webpack-babel-sample)

### NPM
[Latest papillon-alerts](https://www.npmjs.com/package/papillon-alerts)

<br>[⬆ Back to top](#table-of-contents)

---

## 🐠 Buttons

### Install

```bash
$ npm install --save papillon-buttons
```

### Import
```javascript
import Button from 'papillon-buttons';
```

### Use Button
```html
<Button variant="button" onClick={() => {}}>Button</Button>
```

### Use all
Find more flavours of Button [here](https://github.com/mts/papillon/tree/master/packages/papillon-buttons).

### Webpack Babel Sample
[Use Papillon Buttons with React 16, Webpack 4 and Babel 7](https://github.com/mts/papillon/tree/master/packages/papillon-buttons/webpack-babel-sample)

### NPM
[Latest papillon-buttons](https://www.npmjs.com/package/papillon-buttons)

<br>[⬆ Back to top](#table-of-contents)
