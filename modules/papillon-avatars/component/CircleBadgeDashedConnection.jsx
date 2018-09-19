import '../index.scss';
import React from 'react';
import {string, node} from 'prop-types';

const CircleBadgeDashedConnection = ({children}) => (
  <div class="DashedConnection">
    <ul class="d-flex list-style-none flex-justify-between" aria-label="A sample GitHub workflow">
      {children.map((child) => (
        <li class="CircleBadge CircleBadge--small" aria-label="GitHub">
          {child}
        </li>
      ))}
    </ul>
  </div>
);

CircleBadgeDashedConnection.propTypes = {
  className: string.isRequired,
  children: node.isRequired
};

export default CircleBadgeDashedConnection;
