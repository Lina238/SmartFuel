// auth.js

// Fonction pour stocker le token dans le localStorage
export const setAuthToken = (token) => {
    localStorage.setItem('authToken', token);
  };
  
  // Fonction pour récupérer le token depuis le localStorage
  export const getAuthToken = () => {
    return localStorage.getItem('authToken');
  };
  
  // Fonction pour supprimer le token du localStorage
  export const clearAuthToken = () => {
    localStorage.removeItem('authToken');
  };
  