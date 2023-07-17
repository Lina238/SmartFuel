
const getDefaultFetchConfig = (String method) => {
    const  token =localStorage.getItem('token')
  
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    };
  
    return {
        method: 'GET', 
      headers: headers,
    };
  };
  
  export default getDefaultFetchConfig;
  