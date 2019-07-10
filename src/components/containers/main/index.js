import React from 'react';

import './main.scss';

/**
 * Container ensuring same page width accross different pages.
 */
export default props  => (
  <div className='main-container  center-margin' >
    {props.children}
  </div>
)
