import React from 'react';
import './style.scss';
import phone from '../../assets/icons/phone-incoming.svg';
import user from '../../assets/icons/user.svg';
import pic from '../../assets/pic.png';

const ContactUs = () => {
  return (
    <section className='contact-us'>
      <div className='contact-us__container'>
        <div className='content'>
          <h2>Any questions?</h2>
          <p>
            Leave your contacts and our manager will reach out to you shorty.
          </p>
          <div className='inputs'>
            <div className='inputs__container'>
              <img src={user} alt='user' />
              <input
                type='text'
                id='name'
                name='name'
                placeholder='Your name'
              />
            </div>
            <div className='inputs__container'>
              <img src={phone} alt='phone' />
              <input
                type='tel'
                id='name'
                name='name'
                placeholder='Your phone number'
              />
            </div>
            <button type='button' className='request'>
              Request a call
            </button>
          </div>
        </div>
        <img src={pic} alt='phone' className='pic' />
      </div>
      <div className='map'></div>
    </section>
  );
};

export default ContactUs;
