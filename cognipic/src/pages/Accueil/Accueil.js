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
          <p>Réservez facilement vos créneaux horaires.</p>
        </div>
        
        <div className="feature-item">
          <h4>Les évènements</h4>
          <p>Suivez vos progrès avec nos outils de suivi.</p>
        </div>
        <div className="feature-item">
          <h4>Le Yearbook</h4>
          <p>Gérez vos équipes et vos projets facilement.</p>
        </div>
      </section>

      <section className="cta">
        <button onClick={() => setPage('reserver')}>Réserver maintenant</button>
      </section>

      <footer>
        <p>© 2025 Meittéo - Tous droits réservés.</p>
        <nav>
          <a href="/about">À propos</a> | <a href="/contact">Contact</a> | <a href="/terms">Mentions légales</a>
        </nav>
      </footer>
    </div>
  );
}

export default Accueil;
