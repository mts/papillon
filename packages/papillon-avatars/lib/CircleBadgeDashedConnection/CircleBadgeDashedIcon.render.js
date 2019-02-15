import React from 'react'

const CircleBadgeImage =
  process.env.NODE_ENV === 'develop' ? require('../CircleBadgeImage').default : require('../../build/papillon-avatars').CircleBadgeImage

const CircleBadgeDashedConnection =
  process.env.NODE_ENV === 'develop'
    ? require('./CircleBadgeDashedConnection').default
    : require('../../build/papillon-avatars').CircleBadgeDashedConnection

const srcCircleBadge = 'https://user-images.githubusercontent.com/334891/30004619-adc8ca86-90a0-11e7-8ccc-2322261d2ab1.png'

const circleBadgeDashedConnection = (
  <CircleBadgeDashedConnection>
    <CircleBadgeImage src={srcCircleBadge} alt="" />
    <CircleBadgeImage src={srcCircleBadge} alt="" />
    <CircleBadgeImage src={srcCircleBadge} alt="" />
  </CircleBadgeDashedConnection>
)

export default circleBadgeDashedConnection
