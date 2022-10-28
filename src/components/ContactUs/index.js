import './style.scss';
import phone from '../../assets/icons/phone-incoming.svg';
import user from '../../assets/icons/user.svg';
import pic from '../../assets/pic.png';

const ContactUs = () => {
  return `
    <section class="contact-us">
      <div class="contact-us__container">
        <div class="content">
          <h2>Any questions?</h2>
          <p>Leave your contacts and our manager will reach out to you shorty.</p>
          <div class="inputs">
            <div class="inputs__container">
              <img src="${user}" alt="user"/>
              <input type="text" id="name" name="name" placeholder="Your name"/>
            </div>
            <div class="inputs__container">
              <img src="${phone}" alt="phone"/>
              <input type="tel" id="name" name="name" placeholder="Your phone number"/>
            </div>     
            <button type="button" class="request">Request a call</button>
          </div>
        </div>
        <img src="${pic}" alt="phone" class="pic"/>
      </div>
      <div class="map"></div>
    </section>
  `;
};

export default ContactUs;
