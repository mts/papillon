import React from 'react'
import {
  stateDefault,
  stateGreen,
  statePurple,
  stateRed,
  stateDefaultSmall,
  stateGreenSmall,
  statePurpleSmall,
  stateRedSmall,
  stateOpen,
  stateClosed,
  stateMerged,
} from './Label.variant'

const Label =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('./Label').default
    : require('../../build/papillon-labels').default

const stateDefaultVariant = <Label variant={stateDefault}>papillon state label</Label>

const stateGreenVariant = <Label variant={stateGreen}>papillon state label</Label>

const statePurpleVariant = <Label variant={statePurple}>papillon state label</Label>

const stateRedVariant = <Label variant={stateRed}>papillon state label</Label>

const stateDefaultSmallVariant = <Label variant={stateDefaultSmall}>papillon state label</Label>

const stateGreenSmallVariant = <Label variant={stateGreenSmall}>papillon state label</Label>

const statePurpleSmallVariant = <Label variant={statePurpleSmall}>papillon state label</Label>

const stateRedSmallVariant = <Label variant={stateRedSmall}>papillon state label</Label>

const stateOpenVariant = <Label variant={stateOpen}>papillon state label</Label>

const stateClosedVariant = <Label variant={stateClosed}>papillon state label</Label>

const stateMergedVariant = <Label variant={stateMerged}>papillon state label</Label>

export {
  stateDefaultVariant,
  stateGreenVariant,
  statePurpleVariant,
  stateRedVariant,
  stateDefaultSmallVariant,
  stateGreenSmallVariant,
  statePurpleSmallVariant,
  stateRedSmallVariant,
  stateOpenVariant,
  stateClosedVariant,
  stateMergedVariant,
}
