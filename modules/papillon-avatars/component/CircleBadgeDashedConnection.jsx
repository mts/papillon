import '../index.scss';
import React from 'react';
import {string, node} from 'prop-types';

const CircleBadgeDashedConnection = ({children}) => (
  <div className="DashedConnection">
    <ul className="d-flex list-style-none flex-justify-between" aria-label="A sample GitHub workflow">
      {children.map((child, index) => (
        <li key={index} className="CircleBadge CircleBadge--small" aria-label="GitHub">
          {child}
        </li>
      ))}
    </ul>
  </div>
);

CircleBadgeDashedConnection.defaultProps = {
  className: ''
};

CircleBadgeDashedConnection.propTypes = {
  className: string.isRequired,
  children: node.isRequired
};

export default CircleBadgeDashedConnection;
