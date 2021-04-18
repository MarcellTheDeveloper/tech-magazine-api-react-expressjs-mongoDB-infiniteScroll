import React from 'react'
import '../../style/CSS/LandingPage/landingPage.css'
import HeaderLanding from './HeaderLanding/HeaderLanding';
import LoadingMask from '../LoadingMask/LoadingMask';
import Footer from '../Footer/Footer';

function LandingPage() {
  return (
    <>
      <HeaderLanding />

      <div className="landing-page">
        <div className="top-part">
          <div className="left"></div>

          <div className="middle-top"></div>

          <div className="middle">
            <div className="content">
              <p>You can know everything you've ever wanted to.</p>
              <p>We provide you.</p>
              <p id="bigger-margin">From JSP. To you.</p>
              <p>stay tuned</p>
              <button>Subscribe</button>
            </div>
          </div>

          <div className="right"></div>
        </div>

        <div className="ribbon">
          <div className="content">
            <p>Unlimited access to all the journalism we offer.</p>
            <a href="http://localhost:3000/">Get the knowledge of technology!</a>
          </div>

          <LoadingMask />
        </div>

        <Footer />
      </div >
    </>
  )
}

export default LandingPage
