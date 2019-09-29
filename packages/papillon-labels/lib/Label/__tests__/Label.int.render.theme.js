import React from 'react'
import { themeGray, themeDarkGray, themeOrange, themeOutline, themeOutlineGreen } from '../Label.variant'

const Label =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../Label').Label
    : require('../../../build/papillon-labels').Label

export const themeGrayVariant = <Label variant={themeGray}>papillon theme label</Label>

export const themeDarkGrayVariant = <Label variant={themeDarkGray}>papillon theme label</Label>

export const themeOrangeVariant = <Label variant={themeOrange}>papillon theme label</Label>

export const themeOutlineVariant = <Label variant={themeOutline}>papillon theme label</Label>

export const themeOutlineGreenVariant = <Label variant={themeOutlineGreen}>papillon theme label</Label>
