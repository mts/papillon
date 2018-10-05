import React from 'react';
import CircleBadge from '../CircleBadge';
import CircleBadgeImage from './CircleBadgeImage';
import { action } from '@storybook/addon-actions';

const srcAvatar = "https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png";
const srcCircleBadge = "https://user-images.githubusercontent.com/334891/30004619-adc8ca86-90a0-11e7-8ccc-2322261d2ab1.png";

const circleBadgeSmallImage = (
  <CircleBadge size="small" className="float-left mr-2" title="Travis CI" href="#small">
    <CircleBadgeImage src={srcCircleBadge} alt="" />
  </CircleBadge>
);

const circleBadgeMediumImage = (
  <CircleBadge size="medium" className="float-left mr-2" title="Travis CI" href="#medium">
    <CircleBadgeImage src={srcCircleBadge} alt="" />
  </CircleBadge>
);

const circleBadgeLargeImage = (
  <CircleBadge size="large" className="float-left mr-2" title="Travis CI" href="#large">
    <CircleBadgeImage src={srcCircleBadge} alt="" />
  </CircleBadge>
);

export {
  circleBadgeSmallImage,
  circleBadgeMediumImage,
  circleBadgeLargeImage,
};
