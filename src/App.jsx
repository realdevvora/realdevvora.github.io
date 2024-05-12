import { useState } from 'react'
import './App.css'
import {modifyAbout, modifyInitiatives, modifyProjects} from './modifyFunctions';

function App() {  

  return (
    <div className='app'>
      <div className='hero'>
        <div className='hero-text'>
          <h1 className='hero-title'>
            <div className="jumping-letter">H</div>
            <div className="jumping-letter">i</div>
            <div className="jumping-letter">!</div>
            <div className="jumping-letter" style={{paddingLeft: 20}}> m</div>
            <div className="jumping-letter">y</div>
            <div className="jumping-letter" style={{paddingLeft: 20}}> n</div>
            <div className="jumping-letter">a</div>
            <div className="jumping-letter">m</div>
            <div className="jumping-letter">e</div>
            <div className="jumping-letter" style={{paddingLeft: 20}}> i</div>
            <div className="jumping-letter">s</div>
            <div className="jumping-letter" style={{paddingLeft: 20}}> D</div>
            <div className="jumping-letter">e</div>
            <div className="jumping-letter">v</div>
          </h1>
          <p className='hero-msg'>Welcome to my website</p>
          <button className='hero-button' onClick={() => {
              const activities = document.getElementsByClassName("activities")[0];
              if (!activities.style.display) {
                activities.style.display = "flex";
              }
              const merry = document.getElementsByClassName("boat-img")[0];
              if (!merry.style.display) {
                merry.style.display = "block"
              }
          }}>Learn more about me!</button>

        </div>
        <img className='hero-img' src="project pfp.jpeg"/>
      </div>
      <div className="activities">
        <button className='activities-about section-button' id='moveButton' onClick={modifyAbout}>About Me</button>
        <div className="activities-about activities-about-text">
          My name is Dev, and I'm currently a Computer Science student at the <strong>University of Toronto Mississauga</strong>! I'm aspiring to be a back-end developer in the future. I enjoy listening to music and watching anime, and I'm also a home workout enthusiast 😎
        </div>
        <img className='activities-about activities-about-img' src="about1.jpeg" alt="Dev on a camel" />
        <div className="activities-about activities-about-motivations">As a student that's entering the workforce, I value <strong>accountability</strong>. Especially in terms of my work ethic. I deliver on commitments and can be depended upon to fulfill tasks and responsibilities, I take ownership of my work, and, I adapt to changes in the game-plan.
Secondly, I prioritize <strong>collaboration</strong>. I believe that teamwork tends to be underestimated in the field of development. However, the ability to leverage a skill set beyond mere code-writing is what brings value to a developer in the bigger picture.</div>
        <button className='activities-initiatives section-button' onClick={modifyInitiatives}>Current Initiatives</button>
        <img className='activities-initiatives activities-initiatives-img' src="rbc-logo.png" alt="" />
        <div className="activities-initiatives activities-initiatives-text">
          <h3>Cybersecurity & IT Risk Analyst</h3>
          <li>Daily access control reviews to ensure security of department data</li>
          <li>Querying data using powershell, and forming comparative Excel reports</li>

        </div>
        <img className='activities-initiatives activities-initiatives-img' src="uoft-logo.jpeg" alt="" />
        <div className="activities-initiatives activities-initiatives-text">
          <h3>Teaching Assistant</h3>
          <li>Creating educational materials and providing in-class support</li>
          <li>Conducting office hours for midterms/assignments</li>
          <li>Marking midterms and invigilating exams</li>
        </div>

        <button className='activities-projects section-button' onClick={modifyProjects}>Projects</button>
        <img className='activities-projects activities-projects-img' src="course-logo.jpeg" alt="" />
        <div className="activities-projects activities-projects-description">
          <h3>Course Evaluations</h3>
          <p>My first full stack application, made using the MERN stack. User login, ability to post and delete messages as a user, and look at rating statistics for courses.</p>
        </div>

        <img className='activities-projects activities-projects-img' src="tail-logo.jpeg" alt="" />
        <div className="activities-projects activities-projects-description">
          <h3>TailTrackr</h3>
          <p>Take pictures of lost/stray animals and report them! I worked as a full-stack developer for this project. I worked on the API setup, making API calls from the React front-end, and the user authentication including emails.</p>
        </div>
      </div>
      <svg className="accent" id="visual2" viewBox="0 0 1920 540" width="1920" height="540" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 395L26.7 375C53.3 355 106.7 315 160 328C213.3 341 266.7 407 320 422.7C373.3 438.3 426.7 403.7 480 391.5C533.3 379.3 586.7 389.7 640 380.8C693.3 372 746.7 344 800 352.5C853.3 361 906.7 406 960 412.8C1013.3 419.7 1066.7 388.3 1120 369.8C1173.3 351.3 1226.7 345.7 1280 354.5C1333.3 363.3 1386.7 386.7 1440 384C1493.3 381.3 1546.7 352.7 1600 364.5C1653.3 376.3 1706.7 428.7 1760 438.8C1813.3 449 1866.7 417 1893.3 401L1920 385L1920 541L1893.3 541C1866.7 541 1813.3 541 1760 541C1706.7 541 1653.3 541 1600 541C1546.7 541 1493.3 541 1440 541C1386.7 541 1333.3 541 1280 541C1226.7 541 1173.3 541 1120 541C1066.7 541 1013.3 541 960 541C906.7 541 853.3 541 800 541C746.7 541 693.3 541 640 541C586.7 541 533.3 541 480 541C426.7 541 373.3 541 320 541C266.7 541 213.3 541 160 541C106.7 541 53.3 541 26.7 541L0 541Z" fill="#a5c9ff" strokeLinecap="round" strokeLinejoin="miter"></path></svg>
      <img className='boat-img' src="thousand-sunny.png" alt="" />
      <svg className="accent" id="visual1" viewBox="0 0 1920 540" width="1920" height="540" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 452L26.7 440.2C53.3 428.3 106.7 404.7 160 412.5C213.3 420.3 266.7 459.7 320 469C373.3 478.3 426.7 457.7 480 450.5C533.3 443.3 586.7 449.7 640 444.3C693.3 439 746.7 422 800 427C853.3 432 906.7 459 960 463.2C1013.3 467.3 1066.7 448.7 1120 437.7C1173.3 426.7 1226.7 423.3 1280 428.7C1333.3 434 1386.7 448 1440 446.3C1493.3 444.7 1546.7 427.3 1600 434.3C1653.3 441.3 1706.7 472.7 1760 478.8C1813.3 485 1866.7 466 1893.3 456.5L1920 447L1920 541L1893.3 541C1866.7 541 1813.3 541 1760 541C1706.7 541 1653.3 541 1600 541C1546.7 541 1493.3 541 1440 541C1386.7 541 1333.3 541 1280 541C1226.7 541 1173.3 541 1120 541C1066.7 541 1013.3 541 960 541C906.7 541 853.3 541 800 541C746.7 541 693.3 541 640 541C586.7 541 533.3 541 480 541C426.7 541 373.3 541 320 541C266.7 541 213.3 541 160 541C106.7 541 53.3 541 26.7 541L0 541Z" fill="#68a5ff" strokeLinecap="round" strokeLinejoin="miter"></path></svg>
      <svg className="accent" id="visual" viewBox="0 0 1920 540" width="1920" height="540" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 510L26.7 506C53.3 502 106.7 494 160 496.7C213.3 499.3 266.7 512.7 320 515.8C373.3 519 426.7 512 480 509.5C533.3 507 586.7 509 640 507.2C693.3 505.3 746.7 499.7 800 501.3C853.3 503 906.7 512 960 513.5C1013.3 515 1066.7 509 1120 505.3C1173.3 501.7 1226.7 500.3 1280 502C1333.3 503.7 1386.7 508.3 1440 507.8C1493.3 507.3 1546.7 501.7 1600 504C1653.3 506.3 1706.7 516.7 1760 518.7C1813.3 520.7 1866.7 514.3 1893.3 511.2L1920 508L1920 541L1893.3 541C1866.7 541 1813.3 541 1760 541C1706.7 541 1653.3 541 1600 541C1546.7 541 1493.3 541 1440 541C1386.7 541 1333.3 541 1280 541C1226.7 541 1173.3 541 1120 541C1066.7 541 1013.3 541 960 541C906.7 541 853.3 541 800 541C746.7 541 693.3 541 640 541C586.7 541 533.3 541 480 541C426.7 541 373.3 541 320 541C266.7 541 213.3 541 160 541C106.7 541 53.3 541 26.7 541L0 541Z" fill="#0066ff" strokeLinecap="round" strokeLinejoin="miter"></path></svg>
    </div>
  )
}

export default App
