import React from 'react'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

const onSuccessCallback = (credentialResponse) => {
  console.log(credentialResponse);
};

const LoginDialog = () => {
  const handleLoginSuccess = (res) => {
    console.log(res.credential);
    const decodedCredential = jwt_decode(res.credential);
    console.log(decodedCredential);
    // Handle the successful login here, e.g., redirect to another page or store the user credentials.
  };

  const handleLoginError = () => {
    console.log('Login Failed');
    // Handle login error here, if necessary.
  };
  return (
    <div>
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginError}
        />
    </div>
  )
}

export default LoginDialog
