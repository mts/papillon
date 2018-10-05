import React from 'react';
import CircleBadge from '../CircleBadge';
import CircleBadgeIcon from './CircleBadgeIcon';

const circleBadgeSmallIcon = (
  <CircleBadge size="small" className="bg-yellow" title="Zap this!" href="#small">
    <CircleBadgeIcon className="text-white" icon="zap" />
  </CircleBadge>
);

const circleBadgeMediumIcon = (
  <CircleBadge size="medium" className="bg-gray-dark" title="Zap this!" href="#medium">
    <CircleBadgeIcon className="text-white" icon="zap" />
  </CircleBadge>
);

const circleBadgeLargeIcon = (
  <CircleBadge size="large" className="bg-gray-dark" title="Zap this!" href="#large">
    <CircleBadgeIcon className="text-white" icon="zap" />
  </CircleBadge>
);

export {
  circleBadgeSmallIcon,
  circleBadgeMediumIcon,
  circleBadgeLargeIcon,
};
