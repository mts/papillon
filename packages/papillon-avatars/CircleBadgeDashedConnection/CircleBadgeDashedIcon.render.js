import React from 'react';
import CircleBadgeImage from '../CircleBadgeImage';
import CircleBadgeDashedConnection from './CircleBadgeDashedConnection';
import { action } from '@storybook/addon-actions';

const srcAvatar = "https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png";
const srcCircleBadge = "https://user-images.githubusercontent.com/334891/30004619-adc8ca86-90a0-11e7-8ccc-2322261d2ab1.png";

const circleBadgeDashedConnection = (
  <CircleBadgeDashedConnection>
    <CircleBadgeImage src={srcCircleBadge} alt="" />
    <CircleBadgeImage src={srcCircleBadge} alt="" />
    <CircleBadgeImage src={srcCircleBadge} alt="" />
  </CircleBadgeDashedConnection>
);

export {
  circleBadgeDashedConnection
};
