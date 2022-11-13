import React from 'react';
import './style.scss';
import footerLogo from '../../assets/icons/footerLogo.svg';
import jps from '../../assets/icons/jps.svg';
import cellPhone from '../../assets/icons/cellPhone.svg';
import mailBox from '../../assets/icons/mailBox.svg';

// import logoSign from '../../assets/icons/logoSign.svg';
const Footer = () => {
  // const menu = ['home', 'about', 'contact us'];

  return (
    <footer>
      <div class='d-flex list justify-content-between'>
        <div class='d-flex-column'>
          <div class='officeDirect'>
            <img src={footerLogo} alt='company logo' />
            <div>
              <strong>OfficeDirect</strong>
              <a href='#'>Armchairs Samurai</a>
            </div>
          </div>
          <p style={{ marginBottom: '6px' }} class='privacyPolicy hideOnMobile'>
            <a href='#'>Privacy policy</a>
          </p>
          <p class='privacyPolicy hideOnMobile'>
            <a href='#'>© 2021 All rights reserved</a>
          </p>
        </div>
        <div class='d-flex-column'>
          <p class='link'>
            <a href='#'>About</a>
          </p>
          <p class='link'>
            <a href='#'>Reviews</a>
          </p>
          <p class='link'>
            <a href='#'>Delivery and payment</a>
          </p>
          <p class='link mb-0 m-large'>
            <a href='#'>Contacts</a>
          </p>
        </div>

        <div class='d-flex-column'>
          <p class='info number'>
            <img src={cellPhone} alt='cell phone' />
            <a href='#'>+7 (812) 600-31-24</a>
          </p>
          <p class='info'>
            <img src={mailBox} alt='email box' />
            <a href='#'>zakaz@kreslasamurai.com</a>
          </p>
          <p class='info long'>
            <img src={jps} alt='jps' />
            <a href='#'>
              Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678
            </a>
          </p>
          <p
            style={{ marginBottom: '6px' }}
            class='privacyPolicy hideOnDekstop'
          >
            <a href='#'>Privacy policy</a>
          </p>
          <p class='privacyPolicy hideOnDekstop'>
            <a href='#'>© 2021 All rights reserved</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
