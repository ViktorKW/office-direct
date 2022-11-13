import React from 'react';
import './style.scss';
import face from './images/face.svg';
import star from './images/star.svg';

const Comments = () => {
  const comment_example = (
    <div className='comment'>
      <div className='person'>
        <img src={face} alt='face' />
        <div className='info'>
          <p className='name'>Natalie, Kiyv</p>
          <div className='starts-container'>
            <img src={star} alt='star' />
            <img src={star} alt='star' />
            <img src={star} alt='star' />
            <img src={star} alt='star' />
            <img src={star} alt='star' />
          </div>
        </div>
      </div>

      <p className='comment-text'>
        Google Translate is a multilingual neural machine translation service
        developed by Google to translate text, documents and websites from one
        language into another. It offers a website interface, a mobile app for
        Android and iOS, and an API that helps developers build browser
        extensions and software...
      </p>

      <p className='show-more'>Read all...</p>
    </div>
  );

  return (
    <div className='comments-container'>
      <header>Comments</header>
      <br />
      <div className='comments-list'>
        {comment_example}
        {comment_example}
        {comment_example}
      </div>
    </div>
  );
};

export default Comments;
