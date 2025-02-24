import React, { useState, useEffect } from 'react';
import FormulaireConnexion from "/Users/julenon/Desktop/P2I part 2/P2I-2-/cognipic/src/components/FormulaireConnexion/FormulaireConnexion.js";

function Connexion({ setPage }) {
  const [info, setInfo] = useState(null);
  const [token] = useState(localStorage.getItem('token')); // Récupérer le token du localStorage

  // Simuler la validation du token
  useEffect(() => {
    if (token) {
      console.log('Token validé :', token);
      setInfo({ is_admin: true, result: { name: 'John Doe' } }); // Exemple d'utilisateur simulé
    } else {
      setInfo(null); // Pas de token, on réinitialise l'état
    }
  }, [token]);

  // Si l'utilisateur est authentifié, rediriger
  useEffect(() => {
    if (info) {
      if (info.result) {
        if (info.is_admin) {
          setPage('pageAdmin'); // Rediriger vers la page admin
        } else {
          setPage('espaceUser'); // Rediriger vers l'espace utilisateur
        }
      }
    }
  }, [info, setPage]);

  // Si l'utilisateur n'est pas authentifié, afficher le formulaire de connexion
  if (!info) {
    return (
      <div>
        <FormulaireConnexion setPage={setPage} />
      </div>
    );
  }

  return null; // Si tout est OK, on ne rend rien ici
}

export default Connexion;
