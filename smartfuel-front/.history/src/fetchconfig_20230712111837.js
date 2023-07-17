
const getDefaultFetchConfig = () => {
    const  token =localStorage.getItem('token')
  
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    };
  
    return {
      headers: headers,
    };
  };
  
  export default getDefaultFetchConfig;
  