import React from 'react';

import './drop-down-menu.scss';

/**
 * Reusable drop down menu.
 * Displays children.
 * Most magic happens in CSS...
 */
export default props => (
  <div className={`drop-down-menu ${props.additionalCss}`}>
    {props.children}
  </div>
)
