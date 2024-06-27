import React, { useState } from 'react';

const Addmatches = () => {
  // State variables to hold form data
  const [name, setName] = useState('');
  const [ground, setGround] = useState('');
  const [date, setDate] = useState('');
  const [fees, setFees] = useState('');

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Send form data to the server
    try {
      const response = await fetch('https://cricket-loins-backend.vercel.app/matches', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, ground, date, fees }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
    // Clear form fields after submission
    setName('');
    setGround('');
    setDate('');
    setFees('');
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Add Match</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ground" className="form-label">Ground:</label>
          <input
            type="text"
            className="form-control"
            id="ground"
            value={ground}
            onChange={(e) => setGround(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">Date:</label>
          <input
            type="date"
            className="form-control"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="fees" className="form-label">Fees:</label>
          <input
            type="number"
            className="form-control"
            id="fees"
            value={fees}
            onChange={(e) => setFees(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Match</button>
      </form>
    </div>
  );
};

export default Addmatches;
