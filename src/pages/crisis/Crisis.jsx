import React from 'react'
import "./crisis.css";
import { useState } from "react";
import CrisisData from "./CrisisData";

function Crisis() {
  const [filter, setFilter] = useState({ severity: "All", status: "All" });
  const [crises, setCrises] = useState(CrisisData);
  const [newCrisis, setNewCrisis] = useState({
    title: "",
    description: "",
    severity: "Medium",
    status: "Pending",
    image: "",
  });

  // Filter function
  const filteredCrises = crises.filter(
    (crisis) =>
      (filter.severity === "All" || crisis.severity === filter.severity) &&
      (filter.status === "All" || crisis.status === filter.status)
  );

  // Handle form input change
  const handleChange = (e) => {
    setNewCrisis({ ...newCrisis, [e.target.name]: e.target.value });
  };

  // Add a new crisis (Admin approval needed)
  const handleSubmit = (e) => {
    e.preventDefault();
    setCrises([...crises, { ...newCrisis, id: crises.length + 1 }]);
    alert("Crisis submitted! Awaiting admin approval.");
    setNewCrisis({ title: "", description: "", severity: "Medium", status: "Pending", image: "" });
  };

  return (
    <div>
      <h1>Crisis List</h1>

      {/* Filter Section */}
      <div>
        <label>Severity: </label>
        <select onChange={(e) => setFilter({ ...filter, severity: e.target.value })}>
          <option>All</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
          <option>Critical</option>
        </select>

        <label>Status: </label>
        <select onChange={(e) => setFilter({ ...filter, status: e.target.value })}>
          <option>All</option>
          <option>Approved</option>
          <option>Pending</option>
        </select>
      </div>

      {/* Crisis List */}
      <div className="crisis-list">
        {filteredCrises.map((crisis) => (
          <div key={crisis.id} className="crisis-item">
            <img src={crisis.image} alt={crisis.title} />
            <h2>{crisis.title}</h2>
            <p>{crisis.description}</p>
            <p><b>Severity:</b> {crisis.severity}</p>
            <p><b>Status:</b> {crisis.status}</p>
          </div>
        ))}
      </div>

      {/* Crisis Submission Form (For Anonymous Users) */}
      <h2>Submit a Crisis</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" value={newCrisis.title} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={newCrisis.description} onChange={handleChange} required />
        <label>Severity: </label>
        <select name="severity" onChange={handleChange}>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
          <option>Critical</option>
        </select>
        <button type="submit">Submit Crisis</button>
      </form>
    </div>
  );
}

export default Crisis;

