import React from "react";
import { authService, firebaseInstance } from "fbase";
import AuthForm from "components/AuthForm/AuthForm";

const Auth = () => {
	
  const onSocialClick = async (event) => {
    const {
      currentTarget: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    }
    await authService.signInWithPopup(provider);
  };
	

  return (
    <div>
      <AuthForm onSocialClick={onSocialClick} />
    </div>
  );
};

export default Auth;