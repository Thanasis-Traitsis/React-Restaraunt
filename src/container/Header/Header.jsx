import React from 'react';
import { SubHeading } from '../../components';

import {images} from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavour" />
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className="p__opensans" style={{margin: '2rem 0'}}>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
