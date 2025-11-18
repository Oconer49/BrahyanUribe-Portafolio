import { Col } from "react-bootstrap";

export const ExperienceCard = ({ title, description, period, type }) => {
  return (
    <Col size={12} sm={6} md={6}>
      <div className="exp-imgbx">
        <div className="exp-icon">
          <i className={`fas fa-${type === 'education' ? 'graduation-cap' : 'briefcase'}`}></i>
        </div>
        <div className="exp-txtx">
          <h4>{title}</h4>
          <span className="exp-period" style={{ whiteSpace: 'pre-line' }}>{period}</span>
          <p>{description}</p>
        </div>
      </div>
    </Col>
  )
}
