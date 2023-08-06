import React from 'react'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
const onSuccessCallback = (credentialResponse) => {
  console.log(credentialResponse);
};

const Googlelogin = () => {
  const handleLoginSuccess = (credentialResponse) => {
    console.log(credentialResponse);
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

export default Googlelogin
