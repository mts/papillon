import React from 'react';
import {string, node} from 'prop-types';

// mts ~ block-blue does not exist

const Grid = () => (
  <div className="container">
    <div className="columns mb-1">
      <div className="one-fifth column block-blue p-3 border">
        .one-fifth
      </div>
      <div className="four-fifths column block-blue p-3 border">
        .four-fifths
      </div>
    </div>

    <div className="columns mb-1">
      <div className="one-fourth column block-blue p-3 border">
        .one-fourth
      </div>
      <div className="three-fourths column block-blue p-3 border">
        .three-fourths
      </div>
    </div>

    <div className="columns mb-1">
      <div className="one-third column block-blue p-3 border">
        .one-third
      </div>
      <div className="two-thirds column block-blue p-3 border">
        .two-thirds
      </div>
    </div>

    <div className="columns">
      <div className="one-half column block-blue p-3 border">
        .one-half
      </div>
      <div className="one-half column block-blue p-3 border">
        .one-half
      </div>
    </div>
  </div>
);

export default Grid;
