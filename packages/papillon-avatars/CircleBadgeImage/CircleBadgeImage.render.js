import React from 'react';

const CircleBadge = process.env.NODE_ENV === 'develop'
  ? require('../CircleBadge').default
  : require('../lib/papillon-avatars').CircleBadge;

const CircleBadgeImage = process.env.NODE_ENV === 'develop'
  ? require('./CircleBadgeImage').default
  : require('../lib/papillon-avatars').CircleBadgeImage;

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
