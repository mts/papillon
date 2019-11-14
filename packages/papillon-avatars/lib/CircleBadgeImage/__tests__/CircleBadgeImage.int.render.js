import React from 'react'

const CircleBadge =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../CircleBadge').CircleBadge
    : require('../../../build/papillon-avatars').CircleBadge

const CircleBadgeImage =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../CircleBadgeImage').CircleBadgeImage
    : require('../../../build/papillon-avatars').CircleBadgeImage

const srcCircleBadge = 'https://user-images.githubusercontent.com/334891/30004619-adc8ca86-90a0-11e7-8ccc-2322261d2ab1.png'

export const circleBadgeSmallImage = (
  <CircleBadge size="small" className="d-inline-flex mr-2" title="Travis CI" href="#small">
    <CircleBadgeImage src={srcCircleBadge} alt="" />
  </CircleBadge>
)

export const circleBadgeMediumImage = (
  <CircleBadge size="medium" className="d-inline-flex mr-2" title="Travis CI" href="#medium">
    <CircleBadgeImage src={srcCircleBadge} alt="" />
  </CircleBadge>
)

export const circleBadgeLargeImage = (
  <CircleBadge size="large" className="d-inline-flex mr-2" title="Travis CI" href="#large">
    <CircleBadgeImage src={srcCircleBadge} alt="" />
  </CircleBadge>
)
