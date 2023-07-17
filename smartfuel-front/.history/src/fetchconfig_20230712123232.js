const getDefaultFetchConfig = (method) => {
    const token = localStorage.getItem('token');
  
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    };
  
    return {
      method: method,
      headers: headers,
    };
  };
  
  export default getDefaultFetchConfig;
  