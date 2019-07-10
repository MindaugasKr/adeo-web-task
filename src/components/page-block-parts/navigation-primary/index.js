import React from 'react';

import DropDownMenu from '../drop-down-menu';
import './navigation-primary.scss';

export default props => (
  <nav className={`navigation-primary ${props.additionalCSS}`}>
    <span className='navigation-primary__main-link-box'>
        <a className='navigation-primary__main-link' href="/adeo-web-task/">
          HOME
        </a>
        {props.disableSubmenus ? '' :
          <DropDownMenu additionalCss='theme-dark-gray-white  navigation-primary__drop-down'>
            <a className='drop-down-menu__link navigation-primary__drop-down-link' href="/adeo-web-task/">Item 1</a>
            <a className='drop-down-menu__link navigation-primary__drop-down-link' href="/adeo-web-task/">Item 2</a>
            <a className='drop-down-menu__link navigation-primary__drop-down-link' href="/adeo-web-task/">Item 3</a>
          </DropDownMenu>
        }
    </span>
    <span className='navigation-primary__main-link-box'>
        <a className='navigation-primary__main-link' href="/adeo-web-task/">
          SERVICE
        </a>
        {props.disableSubmenus ? '' :
          <DropDownMenu additionalCss='theme-dark-gray-white  navigation-primary__drop-down'>
            <a className='drop-down-menu__link navigation-primary__drop-down-link' href="/adeo-web-task/">Item 1</a>
            <a className='drop-down-menu__link navigation-primary__drop-down-link' href="/adeo-web-task/">Item 2</a>
            <a className='drop-down-menu__link navigation-primary__drop-down-link' href="/adeo-web-task/">Item 3</a>
          </DropDownMenu>
        }
    </span>
    <span className='navigation-primary__main-link-box'>
      <a className='navigation-primary__main-link' href="/adeo-web-task/">
        WORKS
      </a>
      {props.disableSubmenus ? '' :
        <DropDownMenu additionalCss='theme-dark-gray-white  navigation-primary__drop-down'>
          <a className='drop-down-menu__link navigation-primary__drop-down-link' href="/adeo-web-task/">ALL</a>
          <a className='drop-down-menu__link navigation-primary__drop-down-link' href="/adeo-web-task/">GRAPHICS</a>
          <a className='drop-down-menu__link navigation-primary__drop-down-link' href="/adeo-web-task/">DESIGN</a>
          <a className='drop-down-menu__link navigation-primary__drop-down-link' href="/adeo-web-task/">LOGO</a>
          <a className='drop-down-menu__link navigation-primary__drop-down-link' href="/adeo-web-task/">WEBSITE</a>
        </DropDownMenu>
      }
    </span>
    <span className='navigation-primary__main-link-box'>
      <a className='navigation-primary__main-link' href="/adeo-web-task/">
        ABOUT ME
      </a>
      {props.disableSubmenus ? '' :
          <DropDownMenu additionalCss='theme-dark-gray-white  navigation-primary__drop-down'>
            <a className='drop-down-menu__link navigation-primary__drop-down-link' href="/adeo-web-task/">Item 1</a>
            <a className='drop-down-menu__link navigation-primary__drop-down-link' href="/adeo-web-task/">Item 2</a>
            <a className='drop-down-menu__link navigation-primary__drop-down-link' href="/adeo-web-task/">Item 3</a>
          </DropDownMenu>
        }
    </span>
    <span className='navigation-primary__main-link-box'>
      <a className='navigation-primary__main-link' href="/adeo-web-task/">
        CONTACT
      </a>
      {props.disableSubmenus ? '' :
          <DropDownMenu additionalCss='theme-dark-gray-white  navigation-primary__drop-down'>
            <a className='drop-down-menu__link navigation-primary__drop-down-link' href="/adeo-web-task/">Item 1</a>
            <a className='drop-down-menu__link navigation-primary__drop-down-link' href="/adeo-web-task/">Item 2</a>
            <a className='drop-down-menu__link navigation-primary__drop-down-link' href="/adeo-web-task/">Item 3</a>
          </DropDownMenu>
        }
    </span>
  </nav>
);