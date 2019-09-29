import React from 'react'
import {
  labelWhiteOnBlue,
  labelWhiteOnDarkGray,
  labelWhiteOnDarkGreen,
  labelWhiteOnRed,
  labelWhiteOnYellow,
  labelWhiteOnPurple,
} from './Label.variant'

const Label =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('./Label').default
    : require('../../build/papillon-labels').default

const labelWhiteOnBlueVariant = <Label variant={labelWhiteOnBlue}>papillon regular label</Label>

const labelWhiteOnDarkGrayVariant = <Label variant={labelWhiteOnDarkGray}>papillon regular label</Label>

const labelWhiteOnGreenVariant = <Label variant={labelWhiteOnDarkGreen}>papillon regular label</Label>

const labelWhiteOnRedVariant = <Label variant={labelWhiteOnRed}>papillon regular label</Label>

const labelWhiteOnYellowVariant = <Label variant={labelWhiteOnYellow}>papillon regular label</Label>

const labelWhiteOnPurpleVariant = <Label variant={labelWhiteOnPurple}>papillon regular label</Label>

export {
  labelWhiteOnBlueVariant,
  labelWhiteOnDarkGrayVariant,
  labelWhiteOnGreenVariant,
  labelWhiteOnRedVariant,
  labelWhiteOnYellowVariant,
  labelWhiteOnPurpleVariant,
}
