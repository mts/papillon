import React from 'react'

const CircleBadge = process.env.NODE_ENV === 'develop'
  ? require('../CircleBadge').default
  : require('../../build/papillon-avatars').CircleBadge;

const CircleBadgeIcon = process.env.NODE_ENV === 'develop'
  ? require('./CircleBadgeIcon').default
  : require('../../build/papillon-avatars').CircleBadgeIcon;

const circleBadgeSmallIcon = (
  <CircleBadge size="small" className="bg-yellow" title="Zap this!" href="#small">
    <CircleBadgeIcon className="text-white" icon="zap" />
  </CircleBadge>
)

const circleBadgeMediumIcon = (
  <CircleBadge size="medium" className="bg-gray-dark" title="Zap this!" href="#medium">
    <CircleBadgeIcon className="text-white" icon="zap" />
  </CircleBadge>
)

const circleBadgeLargeIcon = (
  <CircleBadge size="large" className="bg-gray-dark" title="Zap this!" href="#large">
    <CircleBadgeIcon className="text-white" icon="zap" />
  </CircleBadge>
)

export {
  circleBadgeSmallIcon,
  circleBadgeMediumIcon,
  circleBadgeLargeIcon,
}
