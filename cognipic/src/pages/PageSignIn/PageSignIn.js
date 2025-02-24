import React, { useState } from 'react';

function PageSignIn({ setPage }) {
  // Initialisation de l'état de l'utilisateur avec des valeurs vides
  const [user, setUser] = useState({
    pseudo: '',
    mail: '',
    password: ''
  });

  // Gestion de la modification des champs de formulaire
  function handleChange(e) {
    const updatedUser = { ...user, [e.target.name]: e.target.value };
    setUser(updatedUser);
  }

  // Soumettre le formulaire
  function handleSubmit(e) {
    e.preventDefault();

    // Vérification des champs (pseudo, email, et mot de passe)
    if (!user.pseudo || !user.mail || !user.password) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    // Vérification si l'utilisateur existe déjà dans le localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find((existingUser) => existingUser.pseudo === user.pseudo);

    if (existingUser) {
      alert('Cet utilisateur existe déjà.');
      return;
    }

    // Créer un nouvel utilisateur
    const newUser = {
      pseudo: user.pseudo,
      mail: user.mail,
      password: user.password,
      is_admin: false, // Exemple : l'utilisateur n'est pas administrateur par défaut
      result: { name: user.pseudo } // Ajout d'une propriété result pour le nom
    };

    // Ajouter l'utilisateur dans le tableau existant des utilisateurs
    users.push(newUser);

    // Sauvegarder les utilisateurs dans le localStorage
    localStorage.setItem('users', JSON.stringify(users));

    // Rediriger vers la page de connexion après inscription
    setPage('connexion');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pseudo">Pseudo :</label>
        <input
          type="text"
          name="pseudo"
          value={user.pseudo}
          onChange={handleChange}
          placeholder="Pseudo"
        />

        <label htmlFor="mail">Email :</label>
        <input
          type="email"
          name="mail"
          value={user.mail}
          onChange={handleChange}
          placeholder="Email"
        />

        <label htmlFor="password">Mot de passe :</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Mot de passe"
        />

        <button type="submit">S'inscrire</button>
      </form>
    </>
  );
}

export default PageSignIn;
