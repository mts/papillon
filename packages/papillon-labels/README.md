# Papillon Labels

[![travis build](https://img.shields.io/travis/mts/papillon.svg?style=flat-square)](https://travis-ci.org/mts/papillon)
[![version](https://img.shields.io/npm/v/papillon-labels.svg?style=flat-square)](http://npm.im/papillon-labels)
[![downloads](https://img.shields.io/npm/dm/papillon-labels.svg?style=flat-square)](http://npm-stat.com/charts.html?package=papillon-labels&from=2018-10-13)
[![MIT License](https://img.shields.io/npm/l/papillon-labels.svg?style=flat-square)](http://opensource.org/licenses/MIT)

> Labels add metadata or indicate status of items and navigational elements.

This repository is a module of the full [papillon][papillon] repository.

## Install

This repository is distributed with [npm][npm]. After [installing npm][install-npm], you can install `papillon-labels` with this command.

```
$ npm install --save papillon-labels
```

## Webpack Babel Sample
Check out how to use Papillon Labels with React 16, Webpack 4 and Babel 7 [here](https://github.com/mts/papillon/tree/master/packages/papillon-labels/webpack-babel-sample)

## NPM
Get the latest papillon-labels [here](https://www.npmjs.com/package/papillon-labels)

## Usage

You can import it like this.

```javascript
import Label from 'papillon-labels';
```

## Documentation

Labels add metatdata or indicate status of items and navigational elements. Three different types of labels are available: [Labels](#default-label-styles) for adding metadata, [States](#states) for indicating status, and [Counters](#counters) for showing the count for a number of items.

## Labels

The base label component styles the text, adds padding and rounded corners, and an inset box shadow. Labels come in various themes which apply colors and different border styles.

GitHub also programmatically generates and applies a background color for labels on items such as issues and pull requests. Users are able to select any background color and the text color will adjust to work with light and dark background colors.

The base `Label` style does not apply a background color, here's an example using the `bg-blue` utility to apply a blue background:

```html
  <Label type="label" className="bg-blue">default label</Label>
```

### Label themes

Labels come in a few different themes. Use a theme that helps communicate the content of the label, and ensure it's used consistently.

#### Theme gray

Use `Label--gray` to create a label with a light gray background and gray text. This label is neutral in color and can be used in contexts where all you need to communicate is metadata, or whe you want a label to feel less prominent compared with labels with stronger colors.

```html
  <Label type="label" className="Label--gray">gray label</Label>
```

#### Theme dark gray

Use `Label--gray-darker` to create a label with a dark-gray background color. This label is also neutral in color, however, since it's background is darker it can stand out more compared to `Label--gray`.

```html
  <Label type="label" className="Label--gray-darker">dark gray label</Label>
```

#### Theme orange

Use `Label--orange` to communicate "warning". The orange background color is very close to red, so avoid using next to labels with a red background color since most people will find it hard to tell the difference.

```html
  <Label type="label" className="Label--orange">orange label</Label>
```

#### Theme outline

Use `Label--outline` to create a label with gray text, a gray border, and a transparent background. The outline reduces the contrast of this label in combination with filled labels. Use this in contexts where you need it to stand out less than other labels and communicate a neutral message.

```html
  <Label type="label" className="Label--outline">outlined label</Label>
```

#### Theme outline green

Use `Label--outline-green` in combination with `Label--outline` to communicate a positive message.

```html
  <Label type="label" className="Label--outline Label--outline-green">green outlined label</Label>
```

## States

Use state labels to inform users of an items status. States are large labels with bolded text. The default state has a gray background.

```html
  <Label type="state">Default</Label>
```

### State themes

States come in a few variations that apply different colors. Use the state that best communicates the status or function.

```html
  <Label type="state" className="State--green mr-1"icon="git-pull-request">Open</Label>
  <Label type="state" className="State--red mr-1" icon="git-pull-request">Closed</Label>
  <Label type="state" className="State--purple" icon="git-merge">Merged</Label>
```

### Small states

Use `State--small` for a state label with reduced padding a smaller font size. This is useful in denser areas of content.

```html
  <Label type="state" className="State--green State--small mr-1" icon="issue-opened">Open</Label>
  <Label type="state" className="State--red State--small" icon="issue-closed">Closed</Label>
```

## Counters

Use the `Counter` component to add a count to navigational elements and buttons. Counters come in 3 variations: the default `Counter` with a light gray background, `Counter--gray` with a dark-gray background and inverse white text, and `Counter--gray-light` with a light-gray background and dark gray text.

```html
  <Label type="counter" className="mr-1">16</Label>
  <Label type="counter" className="Counter--gray mr-1">32</Label>
  <Label type="counter" className="Counter--gray-light">64</Label>
```

#### Counter in tabs

Use the `Counter` in navigation to indicate the number of items without the user having to click through or count the items, such as open issues in a GitHub repo. See more options in [navigation](../navigation).

```html
  <div className="tabnav">
    <nav className="tabnav-tabs" aria-label="Foo bar">
      <a href="#url" className="tabnav-tab selected" aria-current="page">
        Foo tab
        <Label type="counter">23</Label>
      </a>
      <a href="#url" className="tabnav-tab ml-1">
        Bar tab
      </a>
    </nav>
  </div>
```

## License

[MIT](./LICENSE) &copy; [MTS](https://github.com/mts)

[papillon]: https://github.com/mts/papillon
[docs]: https://github.com/mts/papillon/tree/master/packages/papillon-labels
[npm]: https://www.npmjs.com/package/papillon-labels
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[react]: https://github.com/facebook/react

