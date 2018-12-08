import React from 'react'
// import Label from 'papillon-labels'
import Label from '../../build/papillon-labels'

const RegularLabels = () => (
  <div>
    <h2 className="p-2"><span role="img" aria-label="moyai"> 🎨 </span>Regular Labels</h2>

    <h3 className="pl-2"><span role="img" aria-label="moyai"> 🐝 </span>white on blue</h3>
    <div className="pl-6">
      <Label variant="label" className="text-white bg-blue">papillon regular label</Label>
    </div>

    <h3 className="pl-2"><span role="img" aria-label="moyai"> 🐝 </span>white on dark gray</h3>
    <div className="pl-6">
      <Label variant="label" className="text-white bg-gray-dark">papillon regular label</Label>
    </div>

    <h3 className="pl-2"><span role="img" aria-label="moyai"> 🐝 </span>white on green</h3>
    <div className="pl-6">
      <Label variant="label" className="text-white bg-green">papillon regular label</Label>
    </div>

    <h3 className="pl-2"><span role="img" aria-label="moyai"> 🐝 </span>white on red</h3>
    <div className="pl-6">
      <Label variant="label" className="text-white bg-red">papillon regular label</Label>
    </div>

    <h3 className="pl-2"><span role="img" aria-label="moyai"> 🐝 </span>white on yellow</h3>
    <div className="pl-6">
      <Label variant="label" className="text-white bg-yellow">papillon regular label</Label>
    </div>

    <h3 className="pl-2"><span role="img" aria-label="moyai"> 🐝 </span>white on purple</h3>
    <div className="pl-6">
      <Label variant="label" className="text-white bg-purple">papillon regular label</Label>
    </div>
  </div>
)

export default RegularLabels
