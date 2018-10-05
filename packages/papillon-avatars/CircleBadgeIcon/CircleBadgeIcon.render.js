import React from 'react';
import CircleBadge from '../CircleBadge';
import CircleBadgeIcon from './CircleBadgeIcon';
import { action } from '@storybook/addon-actions';

const srcAvatar = "https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png";
const srcCircleBadge = "https://user-images.githubusercontent.com/334891/30004619-adc8ca86-90a0-11e7-8ccc-2322261d2ab1.png";

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
