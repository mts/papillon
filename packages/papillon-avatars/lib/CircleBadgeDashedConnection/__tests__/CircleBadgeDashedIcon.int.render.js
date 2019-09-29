import React from 'react'

const CircleBadgeImage =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../CircleBadgeImage').CircleBadgeImage
    : require('../../../build/papillon-avatars').CircleBadgeImage

const CircleBadgeDashedConnection =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../CircleBadgeDashedConnection').CircleBadgeDashedConnection
    : require('../../../build/papillon-avatars').CircleBadgeDashedConnection

const srcCircleBadge = 'https://user-images.githubusercontent.com/334891/30004619-adc8ca86-90a0-11e7-8ccc-2322261d2ab1.png'

export const circleBadgeDashedConnection = (
  <CircleBadgeDashedConnection>
    <CircleBadgeImage src={srcCircleBadge} alt="" />
    <CircleBadgeImage src={srcCircleBadge} alt="" />
    <CircleBadgeImage src={srcCircleBadge} alt="" />
  </CircleBadgeDashedConnection>
)
