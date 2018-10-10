![Logo](/papillon.png)

# Papillon

React UI Components using the [design system](https://primer.style/) that powers GitHub.

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

### FlashAlert
```html
<FlashAlert>
  Flash message goes here.
</FlashAlert>
```

### FlashMessages
```html
<FlashMessages>
  <FlashAlert>
    Flash message goes here.
  </FlashAlert>
</FlashMessages>
```

### Webpack Babel Sample
[Papillon Alerts, React 16, Webpack 4 and Babel 7](https://github.com/mts/papillon/tree/master/packages/papillon-alerts/webpack-babel-sample)

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

### Button
```html
<Button variant="button">Button</Button>
```

### Webpack Babel Sample
[Papillon Buttons, React 16, Webpack 4 and Babel 7](https://github.com/mts/papillon/tree/master/packages/papillon-buttons/webpack-babel-sample)

### NPM
[Latest papillon-buttons](https://www.npmjs.com/package/papillon-buttons)

<br>[⬆ Back to top](#table-of-contents)
