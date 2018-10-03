import React from 'react';
import { storiesOf } from '@storybook/react';
import { breadcrumb } from './flavor';
import { withInfo } from '@storybook/addon-info';
import { withNotes } from '@storybook/addon-notes';

storiesOf('Breadcrumb', module)
  .add('Breadcrumb', withNotes('Must render Breadcrumb ~ Breadcrumb')
      (withInfo('Breadcrumb')(() => breadcrumb)))
;
