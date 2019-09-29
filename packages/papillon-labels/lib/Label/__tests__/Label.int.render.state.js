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
} from '../Label.variant'

const Label =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../Label').Label
    : require('../../../build/papillon-labels').Label

export const stateDefaultVariant = <Label variant={stateDefault}>papillon state label</Label>

export const stateGreenVariant = <Label variant={stateGreen}>papillon state label</Label>

export const statePurpleVariant = <Label variant={statePurple}>papillon state label</Label>

export const stateRedVariant = <Label variant={stateRed}>papillon state label</Label>

export const stateDefaultSmallVariant = <Label variant={stateDefaultSmall}>papillon state label</Label>

export const stateGreenSmallVariant = <Label variant={stateGreenSmall}>papillon state label</Label>

export const statePurpleSmallVariant = <Label variant={statePurpleSmall}>papillon state label</Label>

export const stateRedSmallVariant = <Label variant={stateRedSmall}>papillon state label</Label>

export const stateOpenVariant = <Label variant={stateOpen}>papillon state label</Label>

export const stateClosedVariant = <Label variant={stateClosed}>papillon state label</Label>

export const stateMergedVariant = <Label variant={stateMerged}>papillon state label</Label>
