import React from 'react'
import Download from "./asset/download/Resume - Joyal George K J.pdf";

function MainPartTwo() {
  return (
    <div className='secondPart'>
      <h3 className='color-purple'>About Me</h3>
      <h2 className='color-purple'>“Creation is the Best thing in the world”</h2>
      <p className="description color-purple" style={{marginTop: 16, marginBottom: 16}}>I'm Joyal George K J, a passionate FrontEnd Developer specializing in creating seamless and user-friendly web interfaces. As a self-taught learner with a strong foundation in HTML, CSS, JavaScript, and React, I thrive on transforming ideas into visually appealing and functional websites</p>

      <h2 className='color-purple'>Education</h2>
      <div className="flex">
        <p className="date color-purple">2024</p>
        <div className="container">
          <h2 className='color-purple'>Bachelor's Degree in Computer Application</h2>
          <p className="description color-purple">Mahatma Gandhi University <br />Kottayam, Kerala, India</p>
        </div>
      </div>

      <h2 className='color-purple'>Experience</h2>
      <div className="flex">
        <p className="date color-purple">2024</p>
        <div className="container">
          <h2 className='color-purple'>Fresher with Hands-on Experience</h2>
          <p className="description color-purple">React Developer <br />Online, Offline, Remote and Freelance Works are Accepted.</p>
        </div>
      </div>

      <div className="buttons">
        <a href="#contact">
          <button className="light" onClick={() => console.log("Clicked: Contact")}>Contact Me</button>
        </a>
        <a href={Download} download="Resume - Joyal George K J.pdf">
          <button className="dark" onClick={() => console.log("Clicked: Resume")}>Resume</button>
        </a>
      </div>
    </div>
  )
}

export default MainPartTwo
