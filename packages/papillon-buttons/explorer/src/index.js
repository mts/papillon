import React from 'react'
import ReactDOM from 'react-dom'
// import Button from 'papillon-buttons'
import Button from '../../build/papillon-buttons'

ReactDOM.render(
  <div>
    <h3 className="pl-4">Default button</h3>
    <div className="pl-4 pb-4">
      <Button variant="button" onClick={() => {}}>
        Button
      </Button>
    </div>

    <h3 className="pl-4">Default link</h3>
    <div className="pl-4 pb-4">
      <Button variant="link" onClick={() => {}}>
        Button
      </Button>
    </div>

    <h3 className="pl-4">Small</h3>
    <div className="f3 p-4">
      <Button variant="link" className="btn-sm btn-purple mr-6" onClick={() => {}}>
        Small link button
      </Button>
      <Button variant="button" className="btn-sm btn-outline-blue" onClick={() => {}}>
        Small button button
      </Button>
    </div>

    <h3 className="pl-4">Primary</h3>
    <div className="p-4 d-flex flex-justify-between">
      <Button variant="button" className="btn-primary" onClick={() => {}}>
        Button
      </Button>
      <Button variant="button" className="btn-primary hover" onClick={() => {}}>
        hover
      </Button>
      <Button variant="button" className="btn-primary focus" onClick={() => {}}>
        focus
      </Button>
      <Button variant="button" className="btn-primary selected" onClick={() => {}}>
        selected
      </Button>
      <Button variant="button" className="btn-primary disabled" onClick={() => {}}>
        disabled
      </Button>
    </div>

    <h3 className="pl-4">Secondary</h3>
    <div className="p-4 d-flex flex-justify-between">
      <Button variant="button" className="btn-secondary" onClick={() => {}}>
        Button
      </Button>
      <Button variant="button" className="btn-secondary hover" onClick={() => {}}>
        hover
      </Button>
      <Button variant="button" className="btn-secondary focus" onClick={() => {}}>
        focus
      </Button>
      <Button variant="button" className="btn-secondary selected" onClick={() => {}}>
        selected
      </Button>
      <Button variant="button" className="btn-secondary disabled" onClick={() => {}}>
        disabled
      </Button>
    </div>

    <h3 className="pl-4">Danger</h3>
    <div className="p-4 d-flex flex-justify-between">
      <Button variant="button" className="btn-danger" onClick={() => {}}>
        Button
      </Button>
      <Button variant="button" className="btn-danger hover" onClick={() => {}}>
        hover
      </Button>
      <Button variant="button" className="btn-danger focus" onClick={() => {}}>
        focus
      </Button>
      <Button variant="button" className="btn-danger selected" onClick={() => {}}>
        selected
      </Button>
      <Button variant="button" className="btn-danger disabled" onClick={() => {}}>
        disabled
      </Button>
    </div>

    <h3 className="pl-4">Outline</h3>
    <div className="p-4 d-flex flex-justify-between">
      <Button variant="button" className="btn-outline" onClick={() => {}}>
        Button
      </Button>
      <Button variant="button" className="btn-outline hover" onClick={() => {}}>
        hover
      </Button>
      <Button variant="button" className="btn-outline focus" onClick={() => {}}>
        focus
      </Button>
      <Button variant="button" className="btn-outline selected" onClick={() => {}}>
        selected
      </Button>
      <Button variant="button" className="btn-outline disabled" onClick={() => {}}>
        disabled
      </Button>
    </div>

    <h3 className="pl-4">Blue</h3>
    <div className="p-4 d-flex flex-justify-between">
      <Button variant="button" className="btn-blue" onClick={() => {}}>
        Button
      </Button>
      <Button variant="button" className="btn-blue hover" onClick={() => {}}>
        hover
      </Button>
      <Button variant="button" className="btn-blue focus" onClick={() => {}}>
        focus
      </Button>
      <Button variant="button" className="btn-blue selected" onClick={() => {}}>
        selected
      </Button>
      <Button variant="button" className="btn-blue disabled" onClick={() => {}}>
        disabled
      </Button>
    </div>

    <h3 className="pl-4">Purple</h3>
    <div className="p-4 d-flex flex-justify-between">
      <Button variant="button" className="btn-purple" onClick={() => {}}>
        Button
      </Button>
      <Button variant="button" className="btn-purple hover" onClick={() => {}}>
        hover
      </Button>
      <Button variant="button" className="btn-purple focus" onClick={() => {}}>
        focus
      </Button>
      <Button variant="button" className="btn-purple selected" onClick={() => {}}>
        selected
      </Button>
      <Button variant="button" className="btn-purple disabled" onClick={() => {}}>
        disabled
      </Button>
    </div>

    <h3 className="pl-4">Large</h3>
    <div className="f3 p-4">
      <Button variant="link" className="btn-large btn-purple mr-6" onClick={() => {}}>
        Large link button
      </Button>
      <Button variant="button" className="btn-large btn-outline-blue" onClick={() => {}}>
        Large button button
      </Button>
    </div>

    <h3 className="pl-4">Button link</h3>
    <div className="p-4 d-flex flex-justify-between">
      <Button variant="button-link" onClick={() => {}}>
        Button Link
      </Button>
    </div>
  </div>,
  document.getElementById('app'),
)

module.hot.accept()
