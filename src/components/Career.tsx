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
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>DevOps Training Program</h4>
                <h5>CloudSub Technology, Pune</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Completed practical training covering Linux, AWS, Git/GitHub, Jenkins, and Docker. Practiced real-world DevOps workflows including server setup, build automation, and container deployment. Gained working exposure to Ansible, Python, and Bash.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech – Computer Science Engineering</h4>
                <h5>Dr. D. Y. Patil Technical Campus</h5>
              </div>
              <h3>2022-2026</h3>
            </div>
            <p>
              Pursuing Bachelor of Technology in Computer Science Engineering in Kolhapur, Maharashtra. Open to full-time and internship opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
