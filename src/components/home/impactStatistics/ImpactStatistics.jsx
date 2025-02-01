import React from 'react';
import './impactStatistics.css';

const ImpactStatistics = () => {
  return (
    <div className="stats">
        <div className="stats-container">
            <h2>Impact Statistics</h2>
            <p>Affected People: <strong>5,00,000+</strong></p>
            <p>Rescue Teams Deployed: <strong>200+</strong></p>
        </div>
        <div className="help-container">
            <h2>How We Help</h2>
            <p>We provide relief, rehabilitation, and emergency aid during disasters.</p>
        </div>
    </div>
  );
};

export default ImpactStatistics;
