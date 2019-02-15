import React from 'react'
import ReactDOM from 'react-dom'
import Octicon, { getIconByName } from '@githubprimer/octicons-react'
// import { FlashAlert, FlashMessages } from 'papillon-alerts'
import { FlashAlert, FlashMessages } from '../../build/papillon-alerts'

ReactDOM.render(
  <div>
    <h3 className="pl-4">Default</h3>
    <div className="p-4">
      <FlashAlert>Flash message goes here.</FlashAlert>
    </div>

    <h3 className="pl-4">Multiple paragraphs</h3>
    <div className="p-4">
      <FlashAlert>
        <p>
          This is a longer flash message in it&apos;s own paragraph. It ends up looking something like this. If we keep adding more text,
          it&apos;ll eventually wrap to a new line.
        </p>
        <p>And this is another paragraph.</p>
      </FlashAlert>
    </div>

    <h3 className="pl-4">Warn</h3>
    <div className="p-4">
      <FlashAlert className="flash-warn">Flash message goes here.</FlashAlert>
    </div>

    <h3 className="pl-4">Error</h3>
    <div className="p-4">
      <FlashAlert className="flash-error">Flash message goes here.</FlashAlert>
    </div>

    <h3 className="pl-4">Success</h3>
    <div className="p-4">
      <FlashAlert className="flash-success">Flash message goes here.</FlashAlert>
    </div>

    <h3 className="pl-4">With icon</h3>
    <div className="p-4">
      <FlashAlert icon="alert">Flash message with an icon goes here.</FlashAlert>
    </div>

    <h3 className="pl-4">With dismiss</h3>
    <div className="p-4">
      <FlashAlert>
        <button className="flash-close js-flash-close" type="button" onClick={() => {}}>
          <Octicon size="small" icon={getIconByName('x')} />
        </button>
        Dismissable flash message goes here.
      </FlashAlert>
    </div>

    <h3 className="pl-4">With action button</h3>
    <div className="p-4">
      <FlashAlert>
        <button type="submit" className="btn btn-sm primary flash-action" onClick={() => {}}>
          Complete action
        </button>
        Flash message with action here.
      </FlashAlert>
    </div>

    <h3 className="pl-4">Full width</h3>
    <div className="p-4">
      <div className="container-lg">
        <FlashAlert className="flash-full">Full width flash message.</FlashAlert>
      </div>
    </div>

    <h3 className="pl-4">Messages</h3>
    <div className="p-4">
      <FlashMessages>
        <FlashAlert>Flash message goes here.</FlashAlert>
      </FlashMessages>
    </div>
  </div>,
  document.getElementById('app'),
)

module.hot.accept()
