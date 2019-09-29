import React from 'react'

const CircleBadge =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../CircleBadge').CircleBadge
    : require('../../../build/papillon-avatars').CircleBadge

const CircleBadgeIcon =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../CircleBadgeIcon').CircleBadgeIcon
    : require('../../../build/papillon-avatars').CircleBadgeIcon

export const circleBadgeSmallIcon = (
  <CircleBadge size="small" className="bg-yellow" title="Zap this!" href="#small">
    <CircleBadgeIcon className="text-white" icon="zap" />
  </CircleBadge>
)

export const circleBadgeMediumIcon = (
  <CircleBadge size="medium" className="bg-gray-dark" title="Zap this!" href="#medium">
    <CircleBadgeIcon className="text-white" icon="zap" />
  </CircleBadge>
)

export const circleBadgeLargeIcon = (
  <CircleBadge size="large" className="bg-gray-dark" title="Zap this!" href="#large">
    <CircleBadgeIcon className="text-white" icon="zap" />
  </CircleBadge>
)
