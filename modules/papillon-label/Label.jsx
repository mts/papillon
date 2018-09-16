import './Label.scss';
import React from 'react';
import {string, oneOf} from 'prop-types';
import cx from 'classnames';

const Label = ({color, size, text}) => (
    <span
        className={cx('label',
        {
            'label--grey': color === 'grey',
            'label--black': color === 'black',
            'label--blue': color === 'blue'
        },
        {
            'label--tiny': size === 'tiny',
            'label--small': size === 'small',
            'label--medium': size === 'medium',
            'label--large': size === 'large'
        }
        )}
    >
      {text}
    </span>
);

Label.propTypes = {
    color: oneOf(['grey', 'black', 'blue']).isRequired,
    size: oneOf(['tiny', 'small', 'medium', 'large']).isRequired,
    text: string.isRequired
};

export default Label;
