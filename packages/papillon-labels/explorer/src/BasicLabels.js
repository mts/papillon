import React from 'react'
// import Label from 'papillon-labels'
import Label from '../../build/papillon-labels'

const BasicLabels = () => (
  <div>
    <h2 className="p-2"><span role="img" aria-label="moyai"> 🎨 </span>Basic Labels</h2>

    <h3 className="pl-2"><span role="img" aria-label="moyai"> 🐝 </span>white on blue</h3>
    <div className="pl-6">
      <Label variant="label" className="text-white bg-blue">papillon basic label</Label>
    </div>

    <h3 className="pl-2"><span role="img" aria-label="moyai"> 🐝 </span>white on dark gray</h3>
    <div className="pl-6">
      <Label variant="label" className="text-white bg-gray-dark">papillon basic label</Label>
    </div>

    <h3 className="pl-2"><span role="img" aria-label="moyai"> 🐝 </span>white on green</h3>
    <div className="pl-6">
      <Label variant="label" className="text-white bg-green">papillon basic label</Label>
    </div>

    <h3 className="pl-2"><span role="img" aria-label="moyai"> 🐝 </span>white on red</h3>
    <div className="pl-6">
      <Label variant="label" className="text-white bg-red">papillon basic label</Label>
    </div>

    <h3 className="pl-2"><span role="img" aria-label="moyai"> 🐝 </span>white on yellow</h3>
    <div className="pl-6">
      <Label variant="label" className="text-white bg-yellow">papillon basic label</Label>
    </div>

    <h3 className="pl-2"><span role="img" aria-label="moyai"> 🐝 </span>white on purple</h3>
    <div className="pl-6">
      <Label variant="label" className="text-white bg-purple">papillon basic label</Label>
    </div>
  </div>
)

export default BasicLabels
