const  token =localStorage.getItem('token')
const getDefaultFetchConfig = () => {
    
  
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenoken}`,
    };
  
    return {
      method: 'GET', // Méthode HTTP par défaut, vous pouvez la modifier selon vos besoins
      headers: headers,
    };
  };
  
  export default getDefaultFetchConfig;
  