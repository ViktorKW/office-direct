import React from 'react';
import './style.scss';
import discord from './images/discord-icon-svgrepo-com.svg';
import kalilinux from './images/kalilinux-svgrepo-com.svg';
import mozilla from './images/mozilla-svgrepo-com.svg';
import riot from './images/riot-svgrepo-com.svg';
import ubuntu from './images/ubuntu-svgrepo-com.svg';
import vs from './images/visual-studio-code-logo-svgrepo-com.svg';

const Partners = () => {
  return (
    <partners>
      <header>Our partners</header>
      <logos>
        <img src={discord} alt='discord' />
        <img src={kalilinux} alt='kalilinux' />
        <img src={mozilla} alt='mozilla' />
        <img src={riot} alt='riot' />
        <img src={ubuntu} alt='ubuntu' />
        <img src={vs} alt='vs code' />
      </logos>
    </partners>
  );
};

export default Partners;
