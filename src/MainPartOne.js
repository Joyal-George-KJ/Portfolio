import React from 'react'

function MainPartOne() {
  return (
    <div className='PartOne'>
      <h2 className='color-purple'>Joyal George K J <br />(he/him)</h2>
      <p className='color-purple'>Front-End Dev + React Dev</p>
      <div className="profile">
        <div className="loader"></div>
      </div>

      <div className="connectwithme">
        <h3 className='color-purple'>connect with me</h3>
        <div className="social-container">
          <a href="mailto:joyalgeorge1111@gmail.com">
            <i className="color-purple bi bi-envelope" style={{fontSize: 34}}></i>
          </a>
          <a href="https://www.instagram.com/_.i.m_fine_/">
            <i className="color-purple bi bi-instagram"></i>
          </a>
          <a href="https://x.com/JoyalGeorgeKJ">
            <i className="color-purple bi bi-twitter-x"></i>
          </a>
          <a href="https://www.facebook.com/joyalgeorgekj">
            <i className="color-purple bi bi-facebook"></i>
          </a>
          <a href="https://www.linkedin.com/in/joyal-george-k-j-b01625248/">
            <i className="color-purple bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default MainPartOne;
