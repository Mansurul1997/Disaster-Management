import React from 'react';
import './latestDisasters.css';

const LatestDisasters = () => {
  const disasters = [
    { id: 1, name: "Cyclone Amphan", location: "Bangladesh", date: "2024-01-10" },
    { id: 2, name: "California Wildfires", location: "USA", date: "2024-01-15" }
  ];

  return (
    <div className="disasters-container">
      <h2>Latest Disasters</h2>
      <ul>
        {disasters.map((disaster) => (
          <li key={disaster.id}>
            <strong>{disaster.name}</strong> - {disaster.location} ({disaster.date})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LatestDisasters;
