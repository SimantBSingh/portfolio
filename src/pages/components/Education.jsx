import React from "react";
import "./Education.css";
import dyp_college_img from "../../Image/uno_cover.jpg";
import college_logo from "../../Image/college_logo.png";
function Education() {
  const my_education_data = [
    {
      index: 1,
      education_logo_link: college_logo,
      college_name: "University of New Orleans",
      college_degree_name: "Bachelor of Science in Computer Science",
      education_spam: "2022-2025",
      education_info: [
        {
          index: 1,
          educ_info:
            "⚡ I have been taking general Computer Science classes like Intro to Programming, Data Structures and Algorithms, Machine Structure and Assembly Language, System Programming Concepts etc.",
        },
    
      ],
      btn_name: "Visit Website",
      btn_link: "https://www.uno.edu/",
    },
  ];
  return (
    <>
      <div className="educ_container">
        <div className="educ_div_section">
          {my_education_data.map((data, index) => {
            return (
              <>
                <div className="educ_upper_section" key={index}>
                  <div className="educ_container_one">
                    <img src={dyp_college_img} alt="educ_image" />
                  </div>
                  <div className="educ_container_two">
                    <div className="upper_container_section">
                      <div className="upper_left">
                        <img
                          src={data.education_logo_link}
                          alt="college logo"
                        />
                      </div>
                      <div className="upper_middle">
                        <h3>{data.college_name}</h3>
                        <div className="upper_right">
                          <h4>{data.college_degree_name}</h4>
                          <h5 style={{ color: "green" }}>
                            {data.education_spam}
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="educ_lower_section">
                      {data.education_info.map((indata, index) => {
                        return (
                          <div className="educ_data_info" key={index}>
                            <p>{indata.educ_info}</p>
                          </div>
                        );
                      })}
                      <div className="educ_btn">
                        <a href={data.btn_link}>
                          <button>{data.btn_name}</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Education;
