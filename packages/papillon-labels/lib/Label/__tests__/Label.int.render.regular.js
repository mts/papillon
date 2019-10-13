import React from 'react'

const { Label, variants } =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test' ? require('../index') : require('../../../build/papillon-labels')

const {
  label,
  labelWhiteOnBlue,
  labelWhiteOnDarkGray,
  labelWhiteOnDarkGreen,
  labelWhiteOnRed,
  labelWhiteOnYellow,
  labelWhiteOnPurple,
} = variants

export const labelVariant = (
  <Label variant={label} className="text-gray">
    papillon regular label
  </Label>
)

export const labelWhiteOnBlueVariant = <Label variant={labelWhiteOnBlue}>papillon regular label</Label>

export const labelWhiteOnDarkGrayVariant = <Label variant={labelWhiteOnDarkGray}>papillon regular label</Label>

export const labelWhiteOnGreenVariant = <Label variant={labelWhiteOnDarkGreen}>papillon regular label</Label>

export const labelWhiteOnRedVariant = <Label variant={labelWhiteOnRed}>papillon regular label</Label>

export const labelWhiteOnYellowVariant = <Label variant={labelWhiteOnYellow}>papillon regular label</Label>

export const labelWhiteOnPurpleVariant = <Label variant={labelWhiteOnPurple}>papillon regular label</Label>
