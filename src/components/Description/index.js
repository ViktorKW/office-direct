import React from 'react';
import './style.scss';
import chair from './images/chair.svg';

const Description = () => {
  return (
    <div className='description'>
      <h1>Samurai chair features</h1>
      <p className='des-txt'>
        Here the key advantage will be expanded in more detail. Fourth
        generation Samurai, in production since September 2020. Fixed dozens of
        shortcomings of previous generations
      </p>

      <div className='details'>
        <div className='info'>
          <div className='feature'>
            <p className='feature-header'>Individual settings</p>
            <p className='feature-description'>
              Considering key behavioral scenarios, the high quality of
              positional research contributes to
            </p>
          </div>
          <div className='feature'>
            <p className='feature-header'>Individual settings</p>
            <p className='feature-description'>
              Considering key behavioral scenarios, the high quality of
              positional research contributes to
            </p>
          </div>
          <div className='feature'>
            <p className='feature-header'>Individual settings</p>
            <p className='feature-description'>
              Considering key behavioral scenarios, the high quality of
              positional research contributes to
            </p>
          </div>
          <div className='feature'>
            <p className='feature-header'>Individual settings</p>
            <p className='feature-description'>
              Considering key behavioral scenarios, the high quality of
              positional research contributes to
            </p>
          </div>
        </div>

        <img className='chair-img' src={chair} alt='chair' />

        <div className='info'>
          <div className='feature'>
            <p className='feature-header'>Individual settings</p>
            <p className='feature-description'>
              Considering key behavioral scenarios, the high quality of
              positional research contributes to
            </p>
          </div>
          <div className='feature'>
            <p className='feature-header'>Individual settings</p>
            <p className='feature-description'>
              Considering key behavioral scenarios, the high quality of
              positional research contributes to
            </p>
          </div>
          <div className='feature'>
            <p className='feature-header'>Individual settings</p>
            <p className='feature-description'>
              Considering key behavioral scenarios, the high quality of
              positional research contributes to
            </p>
          </div>
          <div className='feature'>
            <p className='feature-header'>Individual settings</p>
            <p className='feature-description'>
              Considering key behavioral scenarios, the high quality of
              positional research contributes to
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
