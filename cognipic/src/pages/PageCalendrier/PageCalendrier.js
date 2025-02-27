import React from 'react';
import Calendrier from '../../components/Calendrier/Calendrier';

const PageCalendrier = ({ setPage }) => {
  return (
    <div>
      <h2>Calendrier</h2>
      <button onClick={() => setPage('accueil')}>Retour à l'accueil</button>
      <Calendrier />
    </div>
  );
};

export default PageCalendrier;
