import React from 'react';
import './Accueil.css';

function Accueil({ setPage }) {
  return (
    <div className="accueil">
      <header className="accueil-header">
        <h2>Explorez nos services et commencez à utiliser notre application dès aujourd'hui.</h2>
      </header>

      <section className="features">
        <h3>Nos services</h3>
        <div className="feature-item">
          <h4>Le club photo</h4>
          <p>CogniPic est le club photo de l'ENSC qui est là pour
             faire en sorte que chaque évènement et chaque moment crucial 
            de l'école est capturé. 
          </p>
        </div>
        
        <div className="feature-item">
          <h4>Les évènements</h4>
          <p>Ici vous retrouverez les photos de chaque évènements de l'école. WEI, WIS, gala et même WES, TOUT y est. </p>
        </div>
        <div className="feature-item">
          <h4>Le Yearbook</h4>
          <p> Dans cette section, vous pouvez avoir un aperçu direct du yearbook et de son avancé. D'ailleurs, pensez à réserver un créneau pour prendre votre photo !</p>
        </div>
      </section>

      

      
    </div>
  );
}

export default Accueil;
