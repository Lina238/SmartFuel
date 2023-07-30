
export const setAuthToken = (token) => {
    localStorage.setItem('authToken', token);
  };
  export const getAuthToken = () => {
    return localStorage.getItem('authToken');
  };
  export const clearAuthToken = () => {
    localStorage.removeItem('authToken');
  };
  