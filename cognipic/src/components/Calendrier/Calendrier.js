import React, { useState } from 'react';
import { format, startOfWeek, addDays, startOfMonth, endOfMonth, endOfWeek } from 'date-fns';
import Header from '/Users/julenon/Desktop/P2I part 2/P2I-2-/cognipic/src/components/Calendrier/Header.js';
import './Calendrier.css';

const Calendrier = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const renderHeader = () => {
    return (
      <div className="header">
        <button onClick={() => setCurrentDate(addDays(currentDate, -7))}>Précédent</button>
        <h2>{format(currentDate, 'MMMM yyyy')}</h2>
        <button onClick={() => setCurrentDate(addDays(currentDate, 7))}>Suivant</button>
      </div>
    );
  };

  const renderDays = () => {
    const days = [];
    const startDate = startOfWeek(currentDate);
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col" key={i}>
          {format(addDays(startDate, i), 'EEEE')}
        </div>
      );
    }
    return <div className="days row">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = '';

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, 'd');
        const cloneDay = day;
        days.push(
          <div className="col cell" key={day} onClick={() => console.log(cloneDay)}>
            <span className="number">{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  };

  return (
    <div className="calendar-container">
      <Header /> {/* Affichage du Header ici */}
      <div className="calendar">
        {renderHeader()}
        {renderDays()}
        {renderCells()}
      </div>
    </div>
  );
};

export default Calendrier;
