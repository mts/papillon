import React from 'react'

const { Label, variants } =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test' ? require('../index') : require('../../../build/papillon-labels')

const { counter, counterDefault, counterGray, counterGrayLight } = variants

export const counterVariant = (
  <Label variant={counter} className="text-blue">
    11
  </Label>
)

export const counterDefaultVariant = <Label variant={counterDefault}>33</Label>

export const counterGrayVariant = <Label variant={counterGray}>55</Label>

export const counterGrayLightVariant = <Label variant={counterGrayLight}>77</Label>
