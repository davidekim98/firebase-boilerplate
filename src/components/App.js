import React, { useState, useEffect } from "react";
import AppRouter from "components/AppRouter";
import { authService } from "fbase";

function App() {
  const [Init, setInit] = useState(false);
  const [UserObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj(user);
      } else {
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);
	
  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj(user);
  };
	
  return (
    <>
      {Init ? (
        <AppRouter
          IsLoggedIn={Boolean(UserObj)}
        />
      ) : (
        "Initializing..."
      )}
    </>
  );
}

export default App;