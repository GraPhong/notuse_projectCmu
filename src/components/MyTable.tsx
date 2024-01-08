import React from 'react';


const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const MyTable = () => {
  return (
    <div className="schedule-table-container">
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Time</th>
            {daysOfWeek.map(day => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Render your schedule data here */}
          <tr>
            <td>8:00 AM</td>
            <td>Your activity</td>
            <td>Your activity</td>
            {/* ... repeat for other days ... */}
          </tr>
          {/* ... repeat for other time slots ... */}
        </tbody>
      </table>
    </div>
  );
};

export default MyTable;