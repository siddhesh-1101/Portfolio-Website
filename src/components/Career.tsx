import { portfolioData } from "../data/portfolioData";
import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          
          {/* Education Section */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>{portfolioData.education.degree}</h4>
                <h5>{portfolioData.education.university}</h5>
              </div>
              <h3>{portfolioData.education.year}</h3>
            </div>
            <p>
              CGPA: {portfolioData.education.cgpa}
            </p>
          </div>

          {/* Experience Section */}
          {portfolioData.experience.map((exp, index) => (
            <div className="career-info-box" key={index}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{exp.role}</h4>
                  <h5>{exp.company}</h5>
                </div>
                <h3>{exp.period}</h3>
              </div>
              <p>
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
