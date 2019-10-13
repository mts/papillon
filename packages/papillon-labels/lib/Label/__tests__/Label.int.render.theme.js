import React from 'react'

const { Label, variants } =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test' ? require('../index') : require('../../../build/papillon-labels')

const { theme, themeGray, themeDarkGray, themeOrange, themeOutline, themeOutlineGreen } = variants

export const themeVariant = (
  <Label variant={theme} className="text-pink">
    papillon theme label
  </Label>
)

export const themeGrayVariant = <Label variant={themeGray}>papillon theme label</Label>

export const themeDarkGrayVariant = <Label variant={themeDarkGray}>papillon theme label</Label>

export const themeOrangeVariant = <Label variant={themeOrange}>papillon theme label</Label>

export const themeOutlineVariant = <Label variant={themeOutline}>papillon theme label</Label>

export const themeOutlineGreenVariant = <Label variant={themeOutlineGreen}>papillon theme label</Label>
