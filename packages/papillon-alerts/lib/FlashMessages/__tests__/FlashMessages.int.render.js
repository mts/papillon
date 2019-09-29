import React from 'react'

const FlashAlert =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../FlashAlert').FlashAlert
    : require('../../../build/papillon-alerts').FlashAlert

const FlashMessages =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../FlashMessages').FlashMessages
    : require('../../../build/papillon-alerts').FlashMessages

export const flashMessages = (
  <div className="p-4">
    <FlashMessages>
      <FlashAlert>Flash message goes here.</FlashAlert>
    </FlashMessages>
  </div>
)
