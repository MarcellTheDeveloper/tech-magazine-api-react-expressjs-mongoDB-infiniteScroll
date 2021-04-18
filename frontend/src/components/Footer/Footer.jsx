import React from 'react';
import SubscribeForm from '../SubscribeForm/SubscribeForm';
import '../../style/CSS/Footer/footer.css';

function Footer() {
  return (
    <footer>
      <div className='left'>
        <SubscribeForm />

        <div className='list'>
          <div className='left-list'>
            <h3>About</h3>
            <a href='#sub-form'>The News Team</a>
            <a href='#sub-form'>Privacy Policy</a>
            <a href='#sub-form'>Terms of Use</a>
            <a href='#sub-form'>Group Subscriptions</a>
          </div>

          <div className='right-list'>
            <h3>Help</h3>
            <a href='#sub-form'>Frequently Asked Questions</a>
            <a href='#sub-form'>Feedback</a>
          </div>
        </div>

        <div className='copyright'>© 2021 News Team</div>
      </div>

      <div className='right'></div>
    </footer>
  );
}

export default Footer;
