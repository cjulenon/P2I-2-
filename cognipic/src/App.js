import React, { useState, useEffect } from 'react';
import './App.css';
import Connexion from './pages/Connexion/Connexion';
import PageSignin from './pages/PageSignIn/PageSignIn';
import Accueil from './pages/Accueil/Accueil';

function App() {
  const [page, setPage] = useState('accueil'); // Page par défaut : Accueil
  const [token, setToken] = useState(localStorage.getItem('token')); // Récupération du token
  const [info, setInfo] = useState(null); // Informations de l'utilisateur

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
  };

  // Rendu de la page courante en fonction de l'état 'page'
  console.log('Page actuelle:', page);  // Ajoute un log ici

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
            <li><button onClick={() => setPage('reserver')}>Réserver</button></li>
            <li><button onClick={handleLogout}>Déconnexion</button></li>
            {/* Liens conditionnels */}
            {info && info.is_admin && (
              <>
                <li><button onClick={() => setPage('pageAdmin')}>Admin</button></li>
                <li><button onClick={() => setPage('espaceUser')}>Espace Personnel</button></li>
                <li><button onClick={handleLogout}>Déconnexion</button></li>
              </>
            )}
            {!info && (
              <li><button onClick={() => setPage('connexion')}>Connexion</button></li>
            )}
          </ul>
        </nav>
      </header>

      <main>
        {CurrentPage}
      </main>

      <footer>
        <p>©COPYRIGHT tous droits réservés - Meittéo</p>
      </footer>
    </div>
  );
}

export default App;
