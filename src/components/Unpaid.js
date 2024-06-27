import React, { useState } from 'react';
import './CSS/Unpaid.css';


const Unpaid = () => {
  const [date, setDate] = useState('');
  const [players, setPlayers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleDateChange = async (event) => {
    setDate(event.target.value);
    setIsLoading(true);
    try {
      const response = await fetch(`https://cricket-loins-backend.vercel.app/played/matches/date/${event.target.value}`);
      const data = await response.json();
      setPlayers(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdatePaidStatus = async (playerId, currentPaidStatus) => {
    try {
      const response = await fetch(`https://cricket-loins-backend.vercel.app/played/matches/id/${playerId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ paid: currentPaidStatus === 1 ? 0 : 1 }),
      });
      if (response.ok) {
        const updatedPlayers = players.map(player =>
          player.id === playerId ? { ...player, paid: currentPaidStatus === 1 ? 0 : 1 } : player
        );
        setPlayers(updatedPlayers);
      } else {
        console.error('Failed to update paid status');
      }
    } catch (error) {
      console.error('Error updating paid status:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Unpaid Players</h2>
      <div className="mb-3">
        <label htmlFor="dateInput" className="form-label">Select Date:</label>
        <input
          type="date"
          className="form-control"
          id="dateInput"
          value={date}
          onChange={handleDateChange}
          required
        />
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : players.length > 0 ? (
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Player Name</th>
                <th>Ground</th>
                <th>Date</th>
                <th>Fees</th>
                <th>Paid/Unpaid</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {players.map((player) => (
                <tr key={player.id}>
                  <td>{player.name}</td>
                  <td>{player.playername}</td>
                  <td>{player.ground}</td>
                  <td>{new Date(player.date).toLocaleDateString()}</td>
                  <td>{player.fees}</td>
                  <td>{player.paid ? 'Paid' : 'Unpaid'}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-success"
                      onClick={() => handleUpdatePaidStatus(player.id, player.paid)}
                    >
                      {player.paid ? 'Mark Unpaid' : 'Mark Paid'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No data available for the selected date.</p>
      )}
    </div>
  );
};

export default Unpaid;
