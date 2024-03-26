import React from 'react';
import { Col } from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6">
      <div className="pb-5 text-center">
        {/* Apply inline styles for width and height */}
        <img
          className="bg-white mb-3"
          src={data.companylogo}
          alt="Company Logo"
          style={{ 
            width: '200px', 
            height: '200px' 
          }}
        />
        <p className="lead">
          {data.role}
          <br />
          {data.companyname}
          <br />
          {data.date}
        </p>
      </div>
    </Col>
  );
}

export default ExperienceCard;
