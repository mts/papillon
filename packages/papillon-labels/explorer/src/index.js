import React from 'react'
import ReactDOM from 'react-dom'
// import Label from 'papillon-labels'
import Label from '../../build/papillon-labels'

ReactDOM.render(
  <div>
    <h3 className="pl-4">Label default</h3>
    <div className="p-4">
      <Label type="label" className="bg-blue">default label</Label>
    </div>

    <h3 className="pl-4">Theme gray</h3>
    <div className="p-4">
      <Label type="label" className="Label--gray">gray label</Label>
    </div>

    <h3 className="pl-4">Theme dark gray</h3>
    <div className="p-4">
      <Label type="label" className="Label--gray-darker">dark gray label</Label>
    </div>

    <h3 className="pl-4">Theme orange</h3>
    <div className="p-4">
      <Label type="label" className="Label--orange">orange label</Label>
    </div>

    <h3 className="pl-4">Theme outlined label</h3>
    <div className="p-4">
      <Label type="label" className="Label--outline">outlined label</Label>
    </div>

    <h3 className="pl-4">Theme green outlined label</h3>
    <div className="p-4">
      <Label type="label" className="Label--outline Label--outline-green">green outlined label</Label>
    </div>

    <h3 className="pl-4">State default</h3>
    <div className="p-4">
      <Label type="state">Default</Label>
    </div>

    <h3 className="pl-4">State themes</h3>
    <div className="p-4">
      <Label type="state" className="State--green mr-1"icon="git-pull-request">Open</Label>
      <Label type="state" className="State--red mr-1" icon="git-pull-request">Closed</Label>
      <Label type="state" className="State--purple" icon="git-merge">Merged</Label>
    </div>

    <h3 className="pl-4">Counters</h3>
    <div className="p-4">
      <Label type="counter" className="mr-1">16</Label>
      <Label type="counter" className="Counter--gray mr-1">32</Label>
      <Label type="counter" className="Counter--gray-light">64</Label>
    </div>

    <h3 className="pl-4">Counter in tabs</h3>
    <div className="p-4">
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
    </div>
  </div>,
  document.getElementById('app'),
)

module.hot.accept()
