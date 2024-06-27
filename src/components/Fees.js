import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './CSS/Fees.css';

const Fees = () => {
  const [match, setMatch] = useState(null); // Use null to represent no data initially

  useEffect(() => {
    // Fetch played data from the API when the component mounts
    const fetchMatch = async () => {
      try {
        const response = await fetch('https://cricket-loins-backend.vercel.app/played/matches/id/1');
        const data = await response.json();
        console.log(data); // Verify data in console
        setMatch(data);
      } catch (error) {
        console.error('Error fetching match data:', error);
      }
    };

    fetchMatch();
  }, []);

  console.log(match);

  return (
    <div>
      <Container>
        <div className='F-title'><h4>Please pay the match fees on time.</h4></div>
        <div className='F-para'><p></p></div>
        <div className='F-table'>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Match Name</th>
                  <th>Player Name</th>
                  <th>Date</th>
                  <th>Ground</th>
                  <th>Paid/Unpaid</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {match ? (
                  <tr key={match.id}>
                    <td>{match.name}</td>
                    <td>{match.playername}</td>
                    <td>{new Date(match.date).toLocaleDateString()}</td>
                    <td>{match.ground}</td>
                    <td>{match.paid ? 'Paid' : 'Unpaid'}</td>
                    <td>{match.fees}</td>
                  </tr>
                ) : (
                  <tr>
                    <td colSpan="6">No data available.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className='F-upi'>
          <p>shubhamchikhale@icici</p>
        </div>
        <div className='F-Qr'></div>
      </Container>
    </div>
  );
};

export default Fees;
