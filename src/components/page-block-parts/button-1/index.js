import React from 'react'

import './button-1.scss';

export default props => <button className={`button-1 ${props.additionalCSS}`}>{props.children}</button>
