import { portfolioData } from "../data/portfolioData";
import "./styles/Resume.css";

const Resume = () => {
  return (
    <div className="resume-section section-container" id="resume">
      <div className="resume-container">
        <h2>
          My <span>Resume</span>
        </h2>

        {/* Professional Summary */}
        <div className="resume-content">
          <h3>Professional Summary</h3>
          <p>{portfolioData.summary}</p>
        </div>

        {/* Education */}
        <div className="resume-content">
          <h3>Education</h3>
          <div className="resume-item">
            <div className="resume-header">
              <div>
                <h4>{portfolioData.education.degree}</h4>
                <p className="resume-org">{portfolioData.education.university}, {portfolioData.education.location}</p>
              </div>
              <span className="resume-year">{portfolioData.education.year}</span>
            </div>
            <p className="resume-detail">CGPA: {portfolioData.education.cgpa}</p>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="resume-content">
          <h3>Technical Skills</h3>
          
          <div className="resume-skill-section">
            <h5>Programming Languages</h5>
            <div className="resume-tags">
              {portfolioData.skills.programming.map((skill, index) => (
                <span key={index} className="resume-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="resume-skill-section">
            <h5>AI & Machine Learning</h5>
            <div className="resume-tags">
              {portfolioData.skills.aiMl.map((skill, index) => (
                <span key={index} className="resume-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="resume-skill-section">
            <h5>Generative AI & LLMs</h5>
            <div className="resume-tags">
              {portfolioData.skills.generativeAi.map((skill, index) => (
                <span key={index} className="resume-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="resume-skill-section">
            <h5>Web Development</h5>
            <div className="resume-tags">
              {portfolioData.skills.webDev.map((skill, index) => (
                <span key={index} className="resume-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="resume-skill-section">
            <h5>Databases</h5>
            <div className="resume-tags">
              {portfolioData.skills.databases.map((skill, index) => (
                <span key={index} className="resume-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="resume-skill-section">
            <h5>Cloud & DevOps</h5>
            <div className="resume-tags">
              {portfolioData.skills.cloudDevops.map((skill, index) => (
                <span key={index} className="resume-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="resume-skill-section">
            <h5>Tools & IDEs</h5>
            <div className="resume-tags">
              {portfolioData.skills.tools.map((skill, index) => (
                <span key={index} className="resume-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="resume-content">
          <h3>Certifications</h3>
          <ul className="resume-list">
            {portfolioData.certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </div>

        {/* Achievements */}
        <div className="resume-content">
          <h3>Achievements</h3>
          <ul className="resume-list">
            {portfolioData.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>

        {/* Career Interests */}
        <div className="resume-content">
          <h3>Career Interests</h3>
          <div className="resume-tags">
            {portfolioData.interests.map((interest, index) => (
              <span key={index} className="resume-tag">{interest}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
