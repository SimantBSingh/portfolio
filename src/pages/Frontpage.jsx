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
            <div className="hero_badge">Software engineer | AI systems | Robotics</div>
            <div className="profile-details-name">
              <p className="primary-text">
                Hello, I'M
                <span className="highlighted-text">Simant Singh</span>
              </p>
            </div>
            <div className="profile-details-role">
              <div className="primary-text hero_type_line">
                <span>I build</span>
                <span className="type_effect">
                  <TypeWriterEffect
                    multiTextLoop
                    cursorColor="#f97316"
                    multiText={[
                      'Software Engineering',
                      'Fullstack Development',
                      'AI Systems',
                      'Cloud Engineering',
                      'Robotics Research',
                    ]}
                    multiTextDelay={1000}
                    typeSpeed={100}
                  />
                </span>
              </div>
              <p className="profile-role-tagline">
                Computer Science graduate from the University of New Orleans building full-stack, cloud, and AI-enabled tools across internships, robotics research, and startup work.
              </p>
              <div className="colz">
                <SocialMediaLinks />
              </div>
            </div>

            <div className="profile-options">
              <a
                href={`${process.env.PUBLIC_URL}/Simant_Singh_resume.pdf`}
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn highlighted-btn">View Resume</button>
              </a>
              <a href="/portfolio/education_and_certifications">
                <button className="btn primary-btn">View Education</button>
              </a>
            </div>
            <div className="hero_stats">
              <div>
                <strong>3.932</strong>
                <span>GPA</span>
              </div>
              <div>
                <strong>$18K</strong>
                <span>Seed funding</span>
              </div>
              <div>
                <strong>IEEE</strong>
                <span>RO-MAN publication</span>
              </div>
            </div>
          </div>
          <div className="profile-picture">
            <a
              href="/portfolio/#about_me"
              className="profile-picture-background"
              aria-label="Go to about section"
            >
              <span className="visually-hidden">Go to about section</span>
            </a>
          </div>
        </div>
        <SvgBackground />
      </div>
    </>
  );
}

export default Frontpage;
