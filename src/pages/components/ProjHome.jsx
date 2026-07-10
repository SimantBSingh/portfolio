import React from "react";
import proj_img from "../../Image/proj_img.png";
import "./ProjHome.css";
function ProjHome() {
  return (
    <>
      <div className="proj_containar_section">
        <div className="proj_left">
          <h1>Experiences & Projects</h1>
          <div className="experience-card">
            <h3>Software Engineer Intern</h3>
            <h4>Bentley Systems | May 2025 - Aug 2025</h4>
            <br/>
            <ul>
              <li>Led development of an automated Python test framework that improved regression testing efficiency by 76%.</li>
              <li>Optimized PostgreSQL queries and profiled Groovy memory leaks to reduce production crashes by 27%.</li>
              <li>Delivered desktop-to-cloud sync using Azure Service Bus for reliable hybrid cloud data transfer.</li>
              <li>Tools: Python, PostgreSQL, Groovy, Azure Service Bus, CI/CD, Agile/Scrum</li>
            </ul>
          </div>
          <div className="experience-card">
            <h3>Software Developer Intern</h3>
            <h4>Bentley Systems | May 2024 - Aug 2024</h4>
            <br/>
            <ul>
              <li>Built and shipped client-facing full-stack features for a React Native and C# mobile app serving 5,000+ users.</li>
              <li>Engineered REST APIs and .NET/SQL backend integrations for a scalable microservices architecture.</li>
              <li>Designed reusable TypeScript and Tailwind CSS UI components that reduced development time by 30%.</li>
              <li>Implemented Jest and NUnit test coverage across unit and integration workflows, reaching 82% coverage.</li>
            </ul>
          </div>
          <div className="experience-card">
            <h3>Research Assistant</h3>
            <h4>Autonomous Intelligent Robotics Lab, UNO | Jan 2023 - May 2026</h4>
            <br/>
            <ul>
              <li>Created C++ computer vision components for YOLOTag using OpenCV and PyTorch for real-time UAV navigation.</li>
              <li>Developed full-stack clinician data tools using React, Node.js, Redis, FastAPI, and MongoDB.</li>
              <li>Built LLM and MCP-backed workflows that convert user prompts into actionable research system responses.</li>
              <li>Deployed AI-driven research tooling to AWS with Docker and CI/CD for a team of 14 researchers.</li>
              <li>Publication: YOLOTag, IEEE RO-MAN 2024.</li>
            </ul>
          </div>
        </div>
        <div className="proj_right">
          <img src={proj_img} alt="Project Img" />
        </div>
      </div>
    </>
  );
}

export default ProjHome;
