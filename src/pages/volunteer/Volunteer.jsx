import { useState } from "react";
import { useNavigate } from "react-router";
import "./volunteer.css";

function Volunteer() {
  const navigate = useNavigate();

  const [volunteers, setVolunteers] = useState([
    { name: "John Doe", age: 30, mobile: "017XXXXXXX", task: "Flood Relief", location: "Dhaka", image: "/assests/1.jpg", },
    { name: "Jane Smith", age: 25, mobile: "018XXXXXXX", task: "Food Distribution", location: "Chittagong", image: "/assests/1.jpg", },
    { name: "Alex Johnson", age: 35, mobile: "019XXXXXXX", task: "Rescue Operation", location: "Sylhet", image: "/assests/1.jpg", },
    { name: "John Doe", age: 30, mobile: "017XXXXXXX", task: "Flood Relief", location: "Dhaka", image: "/assests/1.jpg", },
    { name: "Jane Smith", age: 25, mobile: "018XXXXXXX", task: "Food Distribution", location: "Chittagong", image: "/assests/1.jpg", },
    { name: "Alex Johnson", age: 35, mobile: "019XXXXXXX", task: "Rescue Operation", location: "Sylhet", image: "/assests/1.jpg", },
    { name: "John Doe", age: 30, mobile: "017XXXXXXX", task: "Flood Relief", location: "Dhaka", image: "/assests/1.jpg", },
    { name: "Jane Smith", age: 25, mobile: "018XXXXXXX", task: "Food Distribution", location: "Chittagong", image: "/assests/1.jpg", },
    { name: "Alex Johnson", age: 35, mobile: "019XXXXXXX", task: "Rescue Operation", location: "Sylhet", image: "/assests/1.jpg", },
  ]);

  const [form, setForm] = useState({ name: "", age: "", mobile: "", task: "", location: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.age || !form.mobile || !form.task || !form.location) return alert("Please fill all fields!");
    setVolunteers([...volunteers, form]);
    alert("Volunteer Registered Successfully!");
    setForm({ name: "", age: "", mobile: "", task: "", location: "" });
  };

  return (
    <div className="volunteer-container">
      <h1>Volunteer for Disaster Management</h1>

      {/* Volunteer Registration Form */}
      <div className="volunteer-form">
        <h2>Become a Volunteer</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
          <input type="number" name="age" placeholder="Your Age" value={form.age} onChange={handleChange} required />
          <input type="text" name="mobile" placeholder="Mobile Number" value={form.mobile} onChange={handleChange} required />
          <input type="text" name="task" placeholder="Assigned Task" value={form.task} onChange={handleChange} required />
          <input type="text" name="location" placeholder="Location" value={form.location} onChange={handleChange} required />
          <button type="submit">Register Now</button>
        </form>
      </div>

      {/* Volunteer List */}
      <div className="volunteer-list">
        <h2>Volunteers</h2>
        <div className="volunteer-cards-container">
          <div className="volunteer-cards-wrapper">
            {volunteers.map((volunteer, index) => (
              <div key={index} className="volunteer-card">
                <img src={volunteer.image} alt={volunteer.name} className="volunteer-image" />
                <div className="volunteer-info">
                  <h3>{volunteer.name}</h3>
                  <p>Age: {volunteer.age}</p>
                  <p>Mobile: {volunteer.mobile}</p>
                  <p>Task: {volunteer.task}</p>
                  <p>Location: {volunteer.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Link to Home or Other Pages */}
      <div className="volunteer-footer">
        <button onClick={()=>navigate("/Home")} >Back to Home </button>
      </div>
    </div>
  );
}

export default Volunteer;