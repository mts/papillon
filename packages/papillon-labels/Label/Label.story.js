import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withNotes } from '@storybook/addon-notes';
import {
  labelDefault,
  design,
  labelThemeGray,
  labelThemeDarkGray,
  labelThemeOrange,
  labelOutline,
  labelOutlineGreen,
  state,
  stateThemes,
  smallStates,
  counter,
  counterInTabs,
  counterInBoxHeaders,
} from './Label.render';

storiesOf('Label/Label', module)
  .add('Default', withNotes('Must render Label ~ Default')
      (withInfo('Default')(() => labelDefault)))
  .add('Design', withNotes('Must render Label ~ Design')
      (withInfo('Design')(() => design)))
  .add('Label theme gray', withNotes('Must render Label ~ Label theme gray')
      (withInfo('Label theme gray')(() => labelThemeGray)))
  .add('Label theme dark gray', withNotes('Must render Label ~ Label theme dark gray')
      (withInfo('Label theme dark gray')(() => labelThemeDarkGray)))
  .add('Label theme orange', withNotes('Must render Label ~ Label theme orange')
      (withInfo('Label theme orange')(() => labelThemeOrange)))
  .add('Label outline', withNotes('Must render Label ~ Label outline')
      (withInfo('Label outline')(() => labelOutline)))
  .add('Label outline green', withNotes('Must render Label ~ Label outline green')
      (withInfo('Label outline green')(() => labelOutlineGreen)))
  .add('State', withNotes('Must render Label ~ State')
      (withInfo('State')(() => state)))
  .add('State themes', withNotes('Must render Label ~ State themes')
      (withInfo('State themes')(() => stateThemes)))
  .add('Small states', withNotes('Must render Label ~ Small states')
      (withInfo('Small states')(() => smallStates)))
  .add('Counter', withNotes('Must render Label ~ Counter')
      (withInfo('Counter')(() => counter)))
  .add('Counter in tabs', withNotes('Must render Label ~ Counter in tabs')
      (withInfo('Counter in tabs')(() => counterInTabs)))
  .add('Counter in Box headers', withNotes('Must render Label ~ Counter in Box headers')
      (withInfo('Counter in Box headers')(() => counterInBoxHeaders)))
;
