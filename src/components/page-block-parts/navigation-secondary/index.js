import React from 'react';


import './navigation-secondary.scss';

const Divider = () => <span className='navigation-secondary__divider'>|</span>;

export default props => (
  <div className={`navigation-secondary ${props.additionalCSS}`}>
    <a className='navigation-secondary__link' href="/adeo-web-task/">MENU</a>
    <Divider />
    <a className='navigation-secondary__link' href="/adeo-web-task/">SOME TEXT</a>
    <Divider />
    <a className='navigation-secondary__link' href="/adeo-web-task/">ANOTHER ITEM</a>
    <Divider />
    <a className='navigation-secondary__link' href="/adeo-web-task/">ONE MORE</a>
    <Divider />
    <a className='navigation-secondary__link' href="/adeo-web-task/">AND LAST ONT</a>
  </div>
);