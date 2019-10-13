# Papillon Labels

[![version](https://img.shields.io/npm/v/papillon-labels.svg?style=flat-square)](http://npm.im/papillon-labels)
[![travis build](https://img.shields.io/travis/mts/papillon.svg?style=flat-square)](https://travis-ci.org/mts/papillon)
[![codecov coverage](https://codecov.io/gh/mts/papillon/branch/master/graph/badge.svg?style=flat-square)](https://codecov.io/gh/mts/papillon/branch/master)
[![downloads](https://img.shields.io/npm/dm/papillon-labels.svg?style=flat-square)](http://npm-stat.com/charts.html?package=papillon-labels&from=2018-10-13)
[![MIT License](https://img.shields.io/npm/l/papillon-labels.svg?style=flat-square)](http://opensource.org/licenses/MIT)

> Labels add metadata or indicate status of items and navigational elements.

This repository is a module of the full [papillon][papillon] repository.

## Install

<p align="left">
  <a aria-label="npm install" href="https://www.npmjs.com/package/papillon-labels">
    <img alt="" src="https://nodei.co/npm/papillon-labels.png">
  </a>
</p>

This repository is distributed with [npm][npm]. After [installing npm][install-npm], you can install `papillon-labels` with this command.

```
$ npm install --save papillon-labels
```

## Explorer

Check out how to use Papillon Labels with React 16, Webpack 4 and Babel 7 [here](https://github.com/mts/papillon/tree/master/packages/papillon-labels/explorer)

## NPM

Get the latest papillon-labels [here](https://www.npmjs.com/package/papillon-labels)

## Usage

You can import it like this.

```javascript
import Label from 'papillon-labels'
```

### Regular Labels

```javascript
<Label variant="label-white-on-blue">papillon regular label</Label>
```

```javascript
<Label variant="label-white-on-dark-gray">papillon regular label</Label>
```

```javascript
<Label variant="label-white-on-green">papillon regular label</Label>
```

```javascript
<Label variant="label-white-on-red">papillon regular label</Label>
```

```javascript
<Label variant="label-white-on-yellow">papillon regular label</Label>
```

```javascript
<Label variant="label-white-on-purple">papillon regular label</Label>
```

### Theme Labels

```javascript
<Label variant="theme-gray">papillon theme label</Label>
```

```javascript
<Label variant="theme-dark-gray">papillon theme label</Label>
```

```javascript
<Label variant="theme-orange">papillon theme label</Label>
```

```javascript
<Label variant="theme-outline">papillon theme label</Label>
```

```javascript
<Label variant="theme-outline-green">papillon theme label</Label>
```

### State Labels

```javascript
<Label variant="state-default">papillon state label</Label>
```

```javascript
<Label variant="state-green">papillon state label</Label>
```

```javascript
<Label variant="state-purple">papillon state label</Label>
```

```javascript
<Label variant="state-red">papillon state label</Label>
```

```javascript
<Label variant="state-default-small">papillon state label</Label>
```

```javascript
<Label variant="state-green-small">papillon state label</Label>
```

```javascript
<Label variant="state-purple-small">papillon state label</Label>
```

```javascript
<Label variant="state-red-small">papillon state label</Label>
```

```javascript
<Label variant="state-open" icon="git-pull-request">
  Open
</Label>
```

```javascript
<Label variant="state-closed" icon="git-pull-request">
  Closed
</Label>
```

```javascript
<Label variant="state-merged" icon="git-merge">
  Merged
</Label>
```

### Counter Labels

```javascript
<Label variant="counter-default">16</Label>
```

```javascript
<Label variant="counter-gray">32</Label>
```

```javascript
<Label variant="counter-gray-light">32</Label>
```

```javascript
<div className="tabnav">
  <nav className="tabnav-tabs" aria-label="Foo bar">
    <a href="#url" className="tabnav-tab selected" aria-current="page">
      Foo tab
      <Label variant="counter-default">23</Label>
    </a>
    <a href="#url" className="tabnav-tab ml-1">
      Bar tab
    </a>
  </nav>
</div>
```

```javascript
<div className="Box">
  <div className="Box-header">
    <h3 className="Box-title">
      Box title
      <Label variant="counter-default">3</Label>
    </h3>
  </div>
  <ul>
    <li className="Box-row">Box row one</li>
    <li className="Box-row">Box row two</li>
    <li className="Box-row">Box row three</li>
  </ul>
</div>
```

## License

[MIT](./LICENSE) &copy; [MTS](https://github.com/mts)

[papillon]: https://github.com/mts/papillon
[docs]: https://github.com/mts/papillon/tree/master/packages/papillon-labels
[npm]: https://www.npmjs.com/package/papillon-labels
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[react]: https://github.com/facebook/react
