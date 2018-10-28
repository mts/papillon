# Papillon

[![travis build](https://img.shields.io/travis/mts/papillon.svg?style=flat-square)](https://travis-ci.org/mts/papillon)
[![version](https://img.shields.io/npm/v/papillon-prime.svg?style=flat-square)](http://npm.im/papillon-prime)
[![downloads](https://img.shields.io/npm/dm/papillon-prime.svg?style=flat-square)](http://npm-stat.com/charts.html?package=papillon-prime&from=2018-10-13)
[![MIT License](https://img.shields.io/npm/l/papillon-prime.svg?style=flat-square)](http://opensource.org/licenses/MIT)

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

### 🐬 Blankslate

<details>
<summary>View contents</summary>

* [`Blankslate`](#blankslate)

</details>

### 🐋 Labels

<details>
<summary>View contents</summary>

* [`Label`](#label)

</details>

### 🐙 Breadcrumb

<details>
<summary>View contents</summary>

* [`Breadcrumb`](#breadcrumb)

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
Find more flavours of FlashAlert and FlashMessages [here](https://github.com/mts/papillon/tree/master/packages/papillon-alerts)

### Webpack Babel Sample
Check out how to use Papillon Alerts with React 16, Webpack 4 and Babel 7 [here](https://github.com/mts/papillon/tree/master/packages/papillon-alerts/webpack-babel-sample)

### NPM
Get the latest papillon-alerts [here](https://www.npmjs.com/package/papillon-alerts)

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
Find more flavours of Button [here](https://github.com/mts/papillon/tree/master/packages/papillon-buttons)

### Webpack Babel Sample
Check out how to use Papillon Buttons with React 16, Webpack 4 and Babel 7 [here](https://github.com/mts/papillon/tree/master/packages/papillon-buttons/webpack-babel-sample)

### NPM
Get the latest papillon-buttons [here](https://www.npmjs.com/package/papillon-buttons)

<br>[⬆ Back to top](#table-of-contents)

---

## 🐬 Blankslate

### Install

```bash
$ npm install --save papillon-blankslate
```

### Import
```javascript
import Blankslate from 'papillon-blankslate';
```

### Use Blankslate
```html
  <Blankslate>
    <h3>This is a blank slate</h3>
    <p>Use it to provide information when no dynamic content exists.</p>
  </Blankslate>
```

### Use all
Find more flavours of Blankslate [here](https://github.com/mts/papillon/tree/master/packages/papillon-blankslate)

### Webpack Babel Sample
Check out how to use Papillon Blankslate with React 16, Webpack 4 and Babel 7 [here](https://github.com/mts/papillon/tree/master/packages/papillon-blankslate/webpack-babel-sample)

### NPM
Get the latest papillon-blankslate [here](https://www.npmjs.com/package/papillon-blankslate)

<br>[⬆ Back to top](#table-of-contents)

---

## 🐋 Labels

### Install

```bash
$ npm install --save papillon-labels
```

### Import
```javascript
import Label from 'papillon-labels';
```

### Use Label
```html
  <Label type="label" className="bg-blue">default label</Label>
```

### Use all
Find more flavours of Label [here](https://github.com/mts/papillon/tree/master/packages/papillon-labels)

### Webpack Babel Sample
Check out how to use Papillon Labels with React 16, Webpack 4 and Babel 7 [here](https://github.com/mts/papillon/tree/master/packages/papillon-labels/webpack-babel-sample)

### NPM
Get the latest papillon-labels [here](https://www.npmjs.com/package/papillon-labels)

<br>[⬆ Back to top](#table-of-contents)

---

## 🐙 Breadcrumb

### Install

```bash
$ npm install --save papillon-breadcrumb
```

### Import
```javascript
import BreadCrumb from 'papillon-breadcrumb';
```

### Use BreadCrumb
```javascript
const items = [
  { href: '/business', text: 'Business' },
  { href: '/business/customer', text: 'Customers' },
  { href: '', text: 'MailChimp' },
];
```

```html
  <Breadcrumb items={items} selectedIndex={2} />
```

### Use all
Find more flavours of BreadCrumb [here](https://github.com/mts/papillon/tree/master/packages/papillon-breadcrumb)

### Webpack Babel Sample
Check out how to use Papillon BreadCrumb with React 16, Webpack 4 and Babel 7 [here](https://github.com/mts/papillon/tree/master/packages/papillon-breadcrumb/webpack-babel-sample)

### NPM
Get the latest papillon-breadcrumb [here](https://www.npmjs.com/package/papillon-breadcrumb)

<br>[⬆ Back to top](#table-of-contents)
