import React from 'react'
import { counterDefault, counterGray, counterGrayLight } from './Label.variant'

const Label =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('./Label').default
    : require('../../build/papillon-labels').default

const counterDefaultVariant = <Label variant={counterDefault}>33</Label>

const counterGrayVariant = <Label variant={counterGray}>55</Label>

const counterGrayLightVariant = <Label variant={counterGrayLight}>77</Label>

export { counterDefaultVariant, counterGrayVariant, counterGrayLightVariant }
