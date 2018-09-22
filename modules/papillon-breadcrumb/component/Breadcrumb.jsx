import '../index.scss';
import React from 'react';
import {arrayOf, shape, string, number} from 'prop-types';

const Breadcrumb = ({items, selectedIndex}) => (
  <nav aria-label="Breadcrumb">
    <ol>
      {items.map((item, index) => {
        const {href, text} = item;

        if (index !== selectedIndex) {
          return (
            <li key={index} class="breadcrumb-item text-small">
              <a href={href}>{text}</a>
            </li>
          )
        } else {
          return (
            <li key={index} class="breadcrumb-item breadcrumb-item-selected text-small text-gray" aria-current="page">
              {text}
            </li>
          )
        }
      })}
    </ol>
  </nav>
);

Breadcrumb.propTypes = {
  items: arrayOf(shape({
    href: string,
    text: string
  })).isRequired,
  selectedIndex: number
};

export default Breadcrumb;
