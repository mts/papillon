import React from 'react'
import { themeGray, themeDarkGray, themeOrange, themeOutline, themeOutlineGreen } from './Label.variant'

const Label = process.env.NODE_ENV === 'develop' ? require('./Label').default : require('../../build/papillon-labels').default

const themeGrayVariant = <Label variant={themeGray}>papillon theme label</Label>

const themeDarkGrayVariant = <Label variant={themeDarkGray}>papillon theme label</Label>

const themeOrangeVariant = <Label variant={themeOrange}>papillon theme label</Label>

const themeOutlineVariant = <Label variant={themeOutline}>papillon theme label</Label>

const themeOutlineGreenVariant = <Label variant={themeOutlineGreen}>papillon theme label</Label>

export { themeGrayVariant, themeDarkGrayVariant, themeOrangeVariant, themeOutlineVariant, themeOutlineGreenVariant }
