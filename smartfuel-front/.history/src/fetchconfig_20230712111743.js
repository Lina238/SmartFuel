// fetchConfig.js

const getDefaultFetchConfig = () => {
    // Obtenez votre access token à partir d'une source sécurisée
    const accessToken = 'votre_access_token';
  
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
    };
  
    return {
      method: 'GET', // Méthode HTTP par défaut, vous pouvez la modifier selon vos besoins
      headers: headers,
    };
  };
  
  export default getDefaultFetchConfig;
  