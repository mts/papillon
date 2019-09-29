import React from 'react'
import ReactDOM from 'react-dom'

import { RegularLabels } from './RegularLabels'
import { ThemeLabels } from './ThemeLabels'
import { StateLabels } from './StateLabels'
import { CounterLabels } from './CounterLabels'

ReactDOM.render(
  <div>
    <div className="d-flex flex-justify-around">
      <div className="col-3">
        <RegularLabels />
      </div>
      <div className="col-3">
        <ThemeLabels />
      </div>
      <div className="col-3">
        <StateLabels />
      </div>
      <div className="col-3">
        <CounterLabels />
      </div>
    </div>
  </div>,
  document.getElementById('app'),
)

module.hot.accept()
