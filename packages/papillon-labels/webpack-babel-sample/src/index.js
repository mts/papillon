import React from 'react';
import ReactDOM from 'react-dom';
import Label from 'papillon-labels';

ReactDOM.render(
  <div>
    <h3>Label default</h3>
    <Label type="label" className="bg-blue">default label</Label>

    <h3>Theme gray</h3>
    <Label type="label" className="Label--gray">gray label</Label>

    <h3>Theme dark gray</h3>
    <Label type="label" className="Label--gray-darker">dark gray label</Label>

    <h3>Theme orange</h3>
    <Label type="label" className="Label--orange">orange label</Label>

    <h3>Theme outlined label</h3>
    <Label type="label" className="Label--outline">outlined label</Label>

    <h3>Theme green outlined label</h3>
    <Label type="label" className="Label--outline Label--outline-green">green outlined label</Label>

    <h3>State default</h3>
    <Label type="state">Default</Label>

    <h3>State themes</h3>
    <Label type="state" className="State--green mr-1"icon="git-pull-request">Open</Label>
    <Label type="state" className="State--red mr-1" icon="git-pull-request">Closed</Label>
    <Label type="state" className="State--purple" icon="git-merge">Merged</Label>

    <h3>Counters</h3>
    <Label type="counter" className="mr-1">16</Label>
    <Label type="counter" className="Counter--gray mr-1">32</Label>
    <Label type="counter" className="Counter--gray-light">64</Label>

    <h3>Counter in tabs</h3>
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
  </div>,
  document.getElementById('app'),
);

module.hot.accept();
