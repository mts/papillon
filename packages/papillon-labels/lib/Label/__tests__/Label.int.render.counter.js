import React from 'react'
import { variants } from '../Label.library'

const Label =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../Label').Label
    : require('../../../build/papillon-labels').Label

const { counterDefault, counterGray, counterGrayLight } = variants

const counterDefaultVariant = <Label variant={counterDefault}>33</Label>

const counterGrayVariant = <Label variant={counterGray}>55</Label>

const counterGrayLightVariant = <Label variant={counterGrayLight}>77</Label>

export { counterDefaultVariant, counterGrayVariant, counterGrayLightVariant }
