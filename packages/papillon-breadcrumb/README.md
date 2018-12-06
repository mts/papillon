# Papillon Breadcrumb

[![travis build](https://img.shields.io/travis/mts/papillon.svg?style=flat-square)](https://travis-ci.org/mts/papillon)
[![version](https://img.shields.io/npm/v/papillon-breadcrumb.svg?style=flat-square)](http://npm.im/papillon-breadcrumb)
[![downloads](https://img.shields.io/npm/dm/papillon-breadcrumb.svg?style=flat-square)](http://npm-stat.com/charts.html?package=papillon-breadcrumb&from=2018-10-13)
[![MIT License](https://img.shields.io/npm/l/papillon-breadcrumb.svg?style=flat-square)](http://opensource.org/licenses/MIT)

> Breadcrumb navigation for GitHub's pages with parents / grandparents.

This repository is a module of the full [papillon][papillon] repository.

## Install

This repository is distributed with [npm][npm]. After [installing npm][install-npm], you can install `papillon-breadcrumb` with this command.

```
$ npm install --save papillon-breadcrumb
```

## Explorer
Check out how to use Papillon Breadcrumb with React 16, Webpack 4 and Babel 7 [here](https://github.com/mts/papillon/tree/master/packages/papillon-breadcrumb/explorer)

## NPM
Get the latest papillon-breadcrumb [here](https://www.npmjs.com/package/papillon-breadcrumb)

## Usage

You can import it like this.

```javascript
import Breadcrumb from 'papillon-breadcrumb';
```

## Documentation

Breadcrumbs are used to show taxonomical context on pages that are many levels deep in a site’s hierarchy. Breadcrumbs show and link to parent, grandparent, and sometimes great-grandparent pages. Breadcrumbs are most appropriate on pages that:

- Are many levels deep on a site
- Do not have a section-level navigation
- May need the ability to quickly go back to the previous (parent) page

### Default

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

## License

[MIT](./LICENSE) &copy; [MTS](https://github.com/mts)

[papillon]: https://github.com/mts/papillon
[docs]: https://github.com/mts/papillon/tree/master/packages/papillon-breadcrumb
[npm]: https://www.npmjs.com/package/papillon-breadcrumb
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[react]: https://github.com/facebook/react

