import React from 'react';

import './content.scss';

/**
 * Container ensuring same content width accross different pages.
 */
export default props  => (
  <div className={`content-container  center-margin  ${props.additionalCSS}`} >
    {props.children}
  </div>
)
