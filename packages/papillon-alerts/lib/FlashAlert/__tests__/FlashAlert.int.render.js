import React from 'react'
import Octicon, { getIconByName } from '@githubprimer/octicons-react'
import { action } from '@storybook/addon-actions'

const FlashAlert =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../FlashAlert').FlashAlert
    : require('../../../build/papillon-alerts').FlashAlert

export const flashAlertDefault = (
  <div className="p-4">
    <FlashAlert>Flash message goes here.</FlashAlert>
  </div>
)

export const multipleParagraphs = (
  <div className="p-4">
    <FlashAlert>
      <p>
        This is a longer flash message in it&apos;s own paragraph. It ends up looking something like this. If we keep adding more text,
        it&apos;ll eventually wrap to a new line.
      </p>
      <p>And this is another paragraph.</p>
    </FlashAlert>
  </div>
)

export const flashWarn = (
  <div className="p-4">
    <FlashAlert className="flash-warn">Flash message goes here.</FlashAlert>
  </div>
)

export const flashError = (
  <div className="p-4">
    <FlashAlert className="flash-error">Flash message goes here.</FlashAlert>
  </div>
)

export const flashSuccess = (
  <div className="p-4">
    <FlashAlert className="flash-success">Flash message goes here.</FlashAlert>
  </div>
)

export const flashIcon = (
  <div className="p-4">
    <FlashAlert icon="alert">Flash message with an icon goes here.</FlashAlert>
  </div>
)

export const withDismiss = (
  // mts ~ js-flash-close does not exist
  <div className="p-4">
    <FlashAlert>
      <button className="flash-close js-flash-close" type="button" onClick={action('withDismiss-button-click')}>
        <Octicon size="small" icon={getIconByName('x')} />
      </button>
      Dismissable flash message goes here.
    </FlashAlert>
  </div>
)

export const withActionButton = (
  <div className="p-4">
    <FlashAlert>
      <button type="submit" className="btn btn-sm primary flash-action" onClick={action('withAction-button-click')}>
        Complete action
      </button>
      Flash message with action here.
    </FlashAlert>
  </div>
)

export const fullWidthFlash = (
  <div className="p-4">
    <div className="container-lg">
      <FlashAlert className="flash-full">Full width flash message.</FlashAlert>
    </div>
  </div>
)
