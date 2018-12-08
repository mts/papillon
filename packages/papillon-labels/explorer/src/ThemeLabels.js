import React from 'react'
// import Label from 'papillon-labels'
import Label from '../../build/papillon-labels'

const ThemeLabels = () => (
  <div>
    <h2 className="p-2"><span role="img" aria-label="moyai"> 🎨 </span>Theme Labels</h2>

    <h3 className="pl-2"><span role="img" aria-label="moyai"> 🐝 </span>gray</h3>
    <div className="pl-6">
      <Label variant="label" className="Label--gray">papillon theme label</Label>
    </div>

    <h3 className="pl-2"><span role="img" aria-label="moyai"> 🐝 </span>dark gray</h3>
    <div className="pl-6">
      <Label variant="label" className="Label--gray-darker">papillon theme label</Label>
    </div>

    <h3 className="pl-2"><span role="img" aria-label="moyai"> 🐝 </span>orange</h3>
    <div className="pl-6">
      <Label variant="label" className="Label--orange">papillon theme label</Label>
    </div>

    <h3 className="pl-2"><span role="img" aria-label="moyai"> 🐝 </span>outline</h3>
    <div className="pl-6">
      <Label variant="label" className="Label--outline">papillon theme label</Label>
    </div>

    <h3 className="pl-2"><span role="img" aria-label="moyai"> 🐝 </span>outline green</h3>
    <div className="pl-6">
      <Label variant="label" className="Label--outline Label--outline-green">papillon theme label</Label>
    </div>
  </div>
)

export default ThemeLabels
