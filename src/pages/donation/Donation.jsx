import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import "./donation.css";

Chart.register(...registerables);

function Donation() {
  const [donations, setDonations] = useState([
    { name: "Mansurul", amount: 50 },
    { name: "Haque", amount: 100 },
    { name: "Ifaz", amount: 30 },
  ]);

  const [form, setForm] = useState({ name: "", amount: "", method: "Bkash" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.amount) return alert("Please fill all fields!");
    setDonations([...donations, { name: form.name, amount: parseFloat(form.amount) }]);
    alert("Donation Successful!");
    setForm({ name: "", amount: "", method: "Bkash" });
  };

  // Bar Chart Data (Dummy)
  const chartData = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
    datasets: [
      {
        label: "Donations (Taka)",
        backgroundColor: "#4caf50",
        data: [200, 350, 150, 400, 250],
      },
      {
        label: "Expenses (Taka)",
        backgroundColor: "#f44336",
        data: [100, 200, 120, 300, 150],
      },
    ],
  };

  return (
    <div className="donation-container">
      <h1>Donation Page</h1>

      {/* Total Donation & Progress */}
      <div className="donation-summary">
        <h2>Total Donations: ৳{donations.reduce((acc, d) => acc + d.amount, 0)}</h2>
        <progress value={donations.reduce((acc, d) => acc + d.amount, 0)} max="1000"></progress>
      </div>

      {/* Bar Chart for Donations & Expenses */}
      <div className="chart-container">
        <h2>Daily Donations & Expenses</h2>
        <Bar data={chartData} />
      </div>

      {/* Donation Form */}
      <div className="donation-form">
        <h2>Make a Donation</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
          <input type="number" name="amount" placeholder="Donation Amount (Taka)" value={form.amount} onChange={handleChange} required />
          <select name="method" value={form.method} onChange={handleChange}>
            <option value="Bkash">Bkash</option>
            <option value="Nagad">Nagad</option>
            <option value="PayPal">PayPal</option>
            <option value="Credit Card">Credit Card</option>
          </select>
          <button type="submit">Donate Now</button>
        </form>
      </div>

      {/* Recent Donors */}
      <div className="recent-donors">
        <h2>Recent Donors</h2>
        <ul>
          {donations.map((donor, index) => (
            <li key={index}>
              {donor.name} donated <strong>৳{donor.amount}</strong>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Donation;

