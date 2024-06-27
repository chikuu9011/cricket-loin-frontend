import React, { useEffect, useState } from 'react';

const Matches = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    // Fetch match data from the API when the component mounts
    const fetchMatches = async () => {
      try {
        const response = await fetch('https://cricket-loins-backend.vercel.app/matches');
        const data = await response.json();
        setMatches(data);
      } catch (error) {
        console.error('Error fetching match data:', error);
      }
    };

    fetchMatches();
  }, []);

  const handleInClick = (matchId) => {
    console.log(`IN button clicked for match ID: ${matchId}`);
    // Implement any further actions needed when the IN button is clicked
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Matches</h2>
      {matches.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Ground</th>
              <th>Date</th>
              <th>Fees</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {matches.map((match) => (
              <tr key={match.id}>
                <td>{match.name}</td>
                <td>{match.ground}</td>
                <td>{match.date}</td>
                <td>{match.fees}</td>
                <td>
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => handleInClick(match.id)}
                  >
                    IN
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No matches available.</p>
      )}
    </div>
  );
};

export default Matches;
