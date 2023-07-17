function App() {
  // Vérifier si l'utilisateur est authentifié (a un token)
  const isAuthenticated = !!getAuthToken();

  // Fonction pour rediriger vers la page de connexion si l'utilisateur n'est pas authentifié
  const requireAuth = (element) => {
    return isAuthenticated ? element : <Login />;
  };

  // Fonction pour rediriger vers la page d'accueil si l'utilisateur est déjà authentifié
  const requireUnauth = (element) => {
    return isAuthenticated ? <Home /> : element;
  };

  // Fonction pour déconnecter l'utilisateur et le rediriger vers la page de connexion
  const handleLogout = () => {
    clearAuthToken();
    window.location.href = '/'; // Rediriger vers la page de connexion
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={requireUnauth(<Login />)} />
          <Route path="/Home" element={requireAuth(<Home onLogout={handleLogout} />)} />

          {/* Vos autres routes ici */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
