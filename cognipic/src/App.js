import React, { useState, useEffect } from 'react';
import './App.css';
import Connexion from './pages/Connexion/Connexion';
import PageSignin from './pages/PageSignIn/PageSignIn';
import Accueil from './pages/Accueil/Accueil';
import Calendrier from './components/Calendrier/Calendrier';
import PageCalendrier from './pages/PageCalendrier/PageCalendrier';
import Evenements from './pages/Evenements/Evenements';

function App() {
  const [page, setPage] = useState('accueil'); // Page par défaut : Accueil
  const [token, setToken] = useState(localStorage.getItem('token')); // Récupération du token
  const [info, setInfo] = useState(null); // Informations de l'utilisateur
  const [showCalendar, setShowCalendar] = useState(false); // État pour afficher le calendrier

  // Simulation de validation du token (mock)
  const mockUser = {
    is_admin: true,
    result: { name: 'John Doe' },
  };

  // Validation du token dans useEffect
  useEffect(() => {
    console.log('Token récupéré:', token);
    if (token) {
      setInfo(mockUser);
    } else {
      setInfo(null);
    }
  }, [token]);

  // Fonction de déconnexion
  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setPage('connexion');
    setShowCalendar(false); // Masquer le calendrier lors de la déconnexion
  };

  // Rendu de la page courante
  console.log('Page actuelle:', page);

  let CurrentPage;
  switch (page) {
    case 'connexion':
      console.log('Rendu de Connexion');
      CurrentPage = <Connexion setPage={setPage} setToken={setToken} />;
      break;
    case 'pageSignin':
      console.log('Rendu de PageSignin');
      CurrentPage = <PageSignin setPage={setPage} />;
      break;
    case "evenements":
        CurrentPage = <Evenements setPage={setPage}/>;
      break;
    case 'calendrier':
        console.log('Rendu de PageCalendrier');
        CurrentPage = <PageCalendrier setPage={setPage} />;
      break;      
    default:
      console.log('Rendu d\'Accueil');
      CurrentPage = <Accueil setPage={setPage} />;
      break;
  }

  return (
    <div className="App">
      <header className="header">
        <h1>Bienvenue !</h1>
        <nav className="nav">
          <ul>
            <li><button onClick={() => setPage('accueil')}>Accueil</button></li>

            {/* Liens conditionnels */}
            {info?.is_admin && (
                <>
                  <li><button onClick={() => setPage('calendrier')}>Calendrier</button></li>
                  <li><button onClick={() => setPage('evenements')}>Evenements</button></li>
                  <li><button onClick={handleLogout}>Déconnexion</button></li>
                </>
              )}
            {!info && (
              <>
              <li><button onClick={() => setPage('connexion')}>Connexion</button></li>
              <li><button onClick={() => setPage('evenements')}>Evenements</button></li>
              <li>
                 
                </li> 
                </>

            )}
          </ul>
        </nav>
      </header>

      <main>
        {CurrentPage}
        {showCalendar && <Calendrier />} {/* Afficher le calendrier si showCalendar est true */}
      </main>

      <footer>
        <p>©COPYRIGHT tous droits réservés - Meittéo</p>
      </footer>
    </div>
  );
}

export default App;
