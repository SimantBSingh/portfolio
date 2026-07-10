import React from "react";
import about_me_img from "../Image/about_me_img.png";
import personal_info_data from "./assets/AboutIn";
import "./About.css";
function About() {
  return (
    <section className="about_myself" id="about_me">
      <div className="container_01">
        <div className="my_img">
          <img id="img" src={about_me_img} alt="profile_image" />
        </div>
        <div className="my_info">
          <h2>
            About <span>Me</span>
          </h2>
          <p>
            I'm Simant, a Computer Science graduate from the University of New Orleans with a Mathematics minor, Summa Cum Laude honors, and a 3.932 GPA. I build full-stack, cloud, and AI-enabled systems across software engineering internships, robotics research, and startup work. My experience spans React, TypeScript, Python, C++, .NET, FastAPI, distributed data systems, and production testing workflows.
          </p>
          <div className="personal_info">
            {personal_info_data.map((data, index) => {
              return (
                <>
                  <div className="abc" key={index}>
                    {data.section_one.map((e, index) => {
                      return (
                        <h4 key={index}>
                          <span>{e.data_type} :</span> {e.data_value}
                        </h4>
                      );
                    })}
                  </div>
                  <div className="xyz">
                    {data.section_two.map((e, index) => {
                      return (
                        <h4>
                          <span>{e.data_type} :</span> {e.data_value}
                        </h4>
                      );
                    })}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
