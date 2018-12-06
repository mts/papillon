import React from 'react'
import ReactDOM from 'react-dom'
import Blankslate from 'papillon-blankslate'

ReactDOM.render(
  <div>
    <h3 className="pl-4">Basic</h3>
    <div className="p-4">
      <Blankslate>
        <h3>This is a blank slate</h3>
        <p>Use it to provide information when no dynamic content exists.</p>
      </Blankslate>
    </div>

    <h3 className="pl-4">With Octicons</h3>
    <div className="p-4">
      <Blankslate icons={['git-commit', 'tag', 'git-branch']}>
        <h3>This is a blank slate</h3>
        <p>Use it to provide information when no dynamic content exists.</p>
      </Blankslate>
    </div>

    <h3 className="pl-4">Narrow</h3>
    <div className="p-4">
      <Blankslate className="blankslate-narrow">
        <h3>This is a blank slate</h3>
        <p>Use it to provide information when no dynamic content exists.</p>
      </Blankslate>
    </div>

    <h3 className="pl-4">Capped</h3>
    <div className="p-4">
      <Blankslate className="blankslate-capped">
        <h3>This is a blank slate</h3>
        <p>Use it to provide information when no dynamic content exists.</p>
      </Blankslate>
    </div>

    <h3 className="pl-4">Spacious</h3>
    <div className="p-4">
      <Blankslate className="blankslate-spacious">
        <h3>This is a blank slate</h3>
        <p>Use it to provide information when no dynamic content exists.</p>
      </Blankslate>
    </div>

    <h3 className="pl-4">Large</h3>
    <div className="p-4">
      <Blankslate className="blankslate-large">
        <h3>This is a blank slate</h3>
        <p>Use it to provide information when no dynamic content exists.</p>
      </Blankslate>
    </div>

    <h3 className="pl-4">No background</h3>
    <div className="p-4">
      <Blankslate className="blankslate-clean-background">
        <h3>This is a blank slate</h3>
        <p>Use it to provide information when no dynamic content exists.</p>
      </Blankslate>
    </div>
  </div>,
  document.getElementById('app'),
)

module.hot.accept()
