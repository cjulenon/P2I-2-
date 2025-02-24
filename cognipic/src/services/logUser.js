// Simulation d'une base de données d'utilisateurs en local
const users = [
    { pseudo: 'john', password: '1234', token: 'abc123' },
    { pseudo: 'jane', password: 'password', token: 'xyz456' }
  ];
  
  // Fonction de connexion de l'utilisateur sans API
  export const logUser = (pseudo, password) => {
    const user = users.find(user => user.pseudo === pseudo && user.password === password);
    
    if (user) {
      return Promise.resolve({ token: user.token });
    } else {
      return Promise.reject(new Error('Utilisateur ou mot de passe incorrect'));
    }
  };

  
  // Fonction de déconnexion de l'utilisateur sans API
export const logoutUser = () => {
    // Simuler la suppression du token dans un state
    localStorage.removeItem('userToken');
    return Promise.resolve({ message: 'Déconnexion réussie' });
  };

  // Récupérer les informations de l'utilisateur
export const getUserinfo = (token) => {
    // Ici on simule la récupération des informations de l'utilisateur en local
    const userInfo = {
      pseudo: 'john',
      email: 'john@example.com'
    };
  
    return Promise.resolve(userInfo);
  };

  // Simuler la récupération des attractions
const attractions = [
    { id: 1, name: 'Roller Coaster', description: 'Une montagne russe excitante' },
    { id: 2, name: 'Ferris Wheel', description: 'Une grande roue pour admirer la vue' }
  ];
  
  export const getAttraction = () => {
    return Promise.resolve(attractions);
  };

  // Simuler la suppression d'une attraction
export const deleteAttraction = (id_attraction) => {
    const index = attractions.findIndex(attraction => attraction.id === id_attraction);
    
    if (index !== -1) {
      attractions.splice(index, 1); // Supprime l'attraction du tableau
      return Promise.resolve({ message: 'Attraction supprimée' });
    } else {
      return Promise.reject(new Error('Attraction introuvable'));
    }
  };

 