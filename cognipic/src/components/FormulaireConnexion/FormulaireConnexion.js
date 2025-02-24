import React, { useState } from 'react';

function FormulaireConnexion({ setPage }) {
  const [pseudo, setPseudo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Liste simulée d'utilisateurs pour la démo
  const mockUsers = [
    { pseudo: 'JohnDoe', password: '1234', is_admin: true },
    { pseudo: 'JaneDoe', password: 'abcd', is_admin: false }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérification des identifiants
    const user = mockUsers.find(user => user.pseudo === pseudo && user.password === password);

    if (user) {
      // Si l'utilisateur existe et les informations sont correctes
      localStorage.setItem('token', 'fake-token'); // On stocke un token fictif
      setPage(user.is_admin ? 'pageAdmin' : 'espaceUser'); // Redirige vers la page admin ou espace utilisateur
    } else {
      // Si les informations sont incorrectes
      setError('Identifiants incorrects');
    }
  };

  return (
    <div>
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="pseudo">Pseudo :</label>
          <input
            type="text"
            id="pseudo"
            name="pseudo"
            value={pseudo}
            onChange={(e) => setPseudo(e.target.value)}
            placeholder="Entrez votre pseudo"
          />
        </div>

        <div>
          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Entrez votre mot de passe"
          />
        </div>

        <div>
          <button type="submit">Se connecter</button>
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
}

export default FormulaireConnexion;
