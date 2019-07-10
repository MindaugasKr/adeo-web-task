import React from 'react';

import './site-logo.scss';

export default props => (
  <h1 className={`site-logo ${props.additionalCSS}`}><b className='site-logo__bold'>DEMO</b>SITE</h1>
);