import React from 'react'
// import Label from 'papillon-labels'
import Label from '../../build/papillon-labels'

const StateLabels = () => (
  <div>
    <h2 className="p-2"><span role="img" aria-label="moyai"> 🎨 </span>State Labels</h2>

    <h3 className="pl-2"><span role="img" aria-label="moyai"> 🐝 </span>default</h3>
    <div className="pl-6">
      <Label variant="state">papillon state label</Label>
    </div>

    <h3 className="pl-2"><span role="img" aria-label="moyai"> 🐝 </span>green</h3>
    <div className="pl-6">
      <Label variant="state" className="State--green">papillon state label</Label>
    </div>

    <h3 className="pl-2"><span role="img" aria-label="moyai"> 🐝 </span>purple</h3>
    <div className="pl-6">
      <Label variant="state" className="State--purple">papillon state label</Label>
    </div>

    <h3 className="pl-2"><span role="img" aria-label="moyai"> 🐝 </span>red</h3>
    <div className="pl-6">
      <Label variant="state" className="State--red">papillon state label</Label>
    </div>

    <h3 className="pl-2"><span role="img" aria-label="moyai"> 🐝 </span>default small</h3>
    <div className="pl-6">
      <Label variant="state" className="State--small">papillon state label</Label>
    </div>

    <h3 className="pl-2"><span role="img" aria-label="moyai"> 🐝 </span>green small</h3>
    <div className="pl-6">
      <Label variant="state" className="State--green State--small">papillon state label</Label>
    </div>

    <h3 className="pl-2"><span role="img" aria-label="moyai"> 🐝 </span>purple small</h3>
    <div className="pl-6">
      <Label variant="state" className="State--small State--purple">papillon state label</Label>
    </div>

    <h3 className="pl-2"><span role="img" aria-label="moyai"> 🐝 </span>red small</h3>
    <div className="pl-6">
      <Label variant="state" className="State--small State--red">papillon state label</Label>
    </div>

    <h3 className="pl-2"><span role="img" aria-label="moyai"> 🐝 </span>open</h3>
    <div className="pl-6">
      <Label variant="state" className="State--green mr-1"icon="git-pull-request">Open</Label>
    </div>

    <h3 className="pl-2"><span role="img" aria-label="moyai"> 🐝 </span>closed</h3>
    <div className="pl-6">
      <Label variant="state" className="State--red mr-1" icon="git-pull-request">Closed</Label>
    </div>

    <h3 className="pl-2"><span role="img" aria-label="moyai"> 🐝 </span>merged</h3>
    <div className="pl-6">
      <Label variant="state" className="State--purple" icon="git-merge">Merged</Label>
    </div>
  </div>
)

export default StateLabels
