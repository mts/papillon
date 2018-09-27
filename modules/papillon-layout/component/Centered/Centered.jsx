import '../../index.scss';
import React from 'react';
import {string, node} from 'prop-types';

// mts ~ block-blue does not exist

const Centered = () => (
  <div class="columns">
    <div class="one-half column centered block-blue border p-3">
      .one-half
    </div>
  </div>
);

export default Centered;
