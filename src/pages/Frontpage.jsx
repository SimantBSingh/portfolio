import React from 'react';
import SocialMediaLinks from './components/SocialMediaLinks';
import SvgBackground from './components/SvgBackground';
import './Frontpage.css';
import TypeWriterEffect from 'react-typewriter-effect';

function Frontpage() {
  return (
    <>
      <div className="profile-container" id="home_page">
        <div className="profile-parent">
          <div className="profile-details">
            <div className="profile-details-name">
              <p className="primary-text">
                Hello, I'M
                <span className="highlighted-text">Simant Singh</span>
              </p>
            </div>
            <div className="profile-details-role">
              <span className="primary-text">
                <h1 style={{ display: 'flex', gap: '6px', color: '#fff' }}>
                  I am into
                  <span style={{ color: '#5198ff' }} className="type_effect">
                    <TypeWriterEffect
                      multiTextLoop
                      cursorColor="#f3f4f6"
                      multiText={[
                        'Software Engineering',
                        'Fullstack Development',
                        'Embedded Systems',
                        'Software Development ',
                        'Web Development ',
                      ]}
                      multiTextDelay={1000}
                      typeSpeed={100}
                    />
                  </span>
                </h1>
                {/* <span className="profile-role-tagline">
                  I make websites that are easy to use, meet the client's needs,
                  and work well even as they grow. I pay close attention to
                  every little thing to make sure they work fast and are
                  reliable.
                </span> */}
              </span>
              <div className="colz">
                <SocialMediaLinks />
              </div>
            </div>

            <div className="profile-options">
              {/* <a href="#contact_page">
                <button className="btn primary-btn">Hire Me</button>
              </a> */}
              <a href="./Simant_Singh_resume.pdf" download>
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
          <div className="profile-picture">
            <a href="/portfolio/#about_me" className="profile-picture-background"></a>
          </div>
        </div>
        <SvgBackground />
      </div>
    </>
  );
}

export default Frontpage;
