<p align="center">
  <img width="300px" src="logo.png">
</p>

<h1 align="center">Papillon Components</h1>

<p align="center">React components for the Primer Design System</p>

<p align="center">
  <a aria-label="npm package" href="https://www.npmjs.com/package/papillon-prime">
    <img alt="" src="https://img.shields.io/npm/v/papillon-prime.svg">
  </a>

  <a aria-label="travis build" href="https://travis-ci.org/mts/papillon">
    <img alt="" src="https://img.shields.io/travis/mts/papillon.svg?logo=travis">
  </a>

  <a aria-label="codecov coverage" href="https://codecov.io/gh/mts/papillon">
    <img src="https://codecov.io/gh/mts/papillon/branch/master/graph/badge.svg" />
  </a>

  <a aria-label="codecov coverage" href="https://travis-ci.org/mts/papillon">
    <img alt="" src="https://codecov.io/github/mts/papillon">
  </a>

  <a aria-label="downloads" href="http://npm-stat.com/charts.html?package=papillon-prime&from=2018-10-13">
    <img alt="" src="https://img.shields.io/npm/dm/papillon-prime.svg">
  </a>

  <a aria-label="last commit" href="https://github.com/mts/papillon/commits/master">
    <img alt="" src="https://img.shields.io/github/last-commit/mts/papillon.svg">
  </a>

  <a aria-label="contributors graph" href="https://github.com/mts/papillon/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/mts/papillon.svg">
  </a>

  <a aria-label="license" href="https://github.com/mts/papillon/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/mts/papillon.svg" alt="">
  </a>
</p>

## Status

**⚠️ This project is a work in progress and is not ready for production use yet!**

## Table of Contents

### :octocat: Alerts

<details>
<summary>View contents</summary>

- [`FlashAlert`](#flashalert)
- [`FlashMessages`](#flashmessages)

</details>

### :octocat: Buttons

<details>
<summary>View contents</summary>

- [`Button`](#button)

</details>

### :octocat: Blankslate

<details>
<summary>View contents</summary>

- [`Blankslate`](#blankslate)

</details>

### :octocat: Labels

<details>
<summary>View contents</summary>

- [`Label`](#label)

</details>

### :octocat: Breadcrumb

<details>
<summary>View contents</summary>

- [`Breadcrumb`](#breadcrumb)

</details>

---

## :octocat: Alerts

### Install

```bash
$ npm install --save papillon-alerts
```

### Import

```javascript
import { FlashAlert, FlashMessages } from 'papillon-alerts'
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

### Explorer

Check out how to use Papillon Alerts with React 16, Webpack 4 and Babel 7 [here](https://github.com/mts/papillon/tree/master/packages/papillon-alerts/explorer)

### NPM

Get the latest papillon-alerts [here](https://www.npmjs.com/package/papillon-alerts)

<br>[⬆ Back to top](#table-of-contents)

---

## :octocat: Buttons

### Install

```bash
$ npm install --save papillon-buttons
```

### Import

```javascript
import Button from 'papillon-buttons'
```

### Use Button

```html
<Button variant="button" onClick={() => {}}>Button</Button>
```

### Use all

Find more flavours of Button [here](https://github.com/mts/papillon/tree/master/packages/papillon-buttons)

### Explorer

Check out how to use Papillon Buttons with React 16, Webpack 4 and Babel 7 [here](https://github.com/mts/papillon/tree/master/packages/papillon-buttons/explorer)

### NPM

Get the latest papillon-buttons [here](https://www.npmjs.com/package/papillon-buttons)

<br>[⬆ Back to top](#table-of-contents)

---

## :octocat: Blankslate

### Install

```bash
$ npm install --save papillon-blankslate
```

### Import

```javascript
import Blankslate from 'papillon-blankslate'
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

### Explorer

Check out how to use Papillon Blankslate with React 16, Webpack 4 and Babel 7 [here](https://github.com/mts/papillon/tree/master/packages/papillon-blankslate/explorer)

### NPM

Get the latest papillon-blankslate [here](https://www.npmjs.com/package/papillon-blankslate)

<br>[⬆ Back to top](#table-of-contents)

---

## :octocat: Labels

### Install

```bash
$ npm install --save papillon-labels
```

### Import

```javascript
import Label from 'papillon-labels'
```

### Use Label

```html
<label variant="label" className="bg-blue">default label</label>
```

### Use all

Find more flavours of Label [here](https://github.com/mts/papillon/tree/master/packages/papillon-labels)

### Explorer

Check out how to use Papillon Labels with React 16, Webpack 4 and Babel 7 [here](https://github.com/mts/papillon/tree/master/packages/papillon-labels/explorer)

### NPM

Get the latest papillon-labels [here](https://www.npmjs.com/package/papillon-labels)

<br>[⬆ Back to top](#table-of-contents)

---

## :octocat: Breadcrumb

### Install

```bash
$ npm install --save papillon-breadcrumb
```

### Import

```javascript
import BreadCrumb from 'papillon-breadcrumb'
```

### Use BreadCrumb

```javascript
const items = [{ href: '/business', text: 'Business' }, { href: '/business/customer', text: 'Customers' }, { href: '', text: 'MailChimp' }]
```

```html
<Breadcrumb items="{items}" selectedIndex="{2}" />
```

### Use all

Find more flavours of BreadCrumb [here](https://github.com/mts/papillon/tree/master/packages/papillon-breadcrumb)

### Explorer

Check out how to use Papillon BreadCrumb with React 16, Webpack 4 and Babel 7 [here](https://github.com/mts/papillon/tree/master/packages/papillon-breadcrumb/explorer)

### NPM

Get the latest papillon-breadcrumb [here](https://www.npmjs.com/package/papillon-breadcrumb)

<br>[⬆ Back to top](#table-of-contents)
