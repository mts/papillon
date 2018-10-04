import React from 'react';
import { storiesOf } from '@storybook/react';
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
} from './flavor';
import { withInfo } from '@storybook/addon-info';
import { withNotes } from '@storybook/addon-notes';

import Label from './Label';

storiesOf('Label', module)
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
  .add('Counter in tabs', () => (
    <div className="tabnav">
      <nav className="tabnav-tabs" aria-label="Foo bar">
        <a href="#url" className="tabnav-tab selected" aria-current="page">Foo tab <Label type="counter" text="23"/></a>
        <a href="#url" className="tabnav-tab ml-1">Bar tab</a>
      </nav>
    </div>
  ))
  .add('Counter in Box headers', () => (
    <div className="Box">
      <div className="Box-header">
        <h3 className="Box-title">
          Box title
          <Label type="counter" className="Counter--gray ml-1" text="3"/>
        </h3>
      </div>
      <ul>
        <li className="Box-row">
          Box row one
        </li>
        <li className="Box-row">
          Box row two
        </li>
        <li className="Box-row">
          Box row three
        </li>
      </ul>
    </div>
  ))
;
