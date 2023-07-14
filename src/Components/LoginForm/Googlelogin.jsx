import React from 'react'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
const Googlelogin = () => {
  return (
    <div>
      <GoogleOAuthProvider clientId="<your_client_id>">
      <GoogleLogin
        onSuccess={credentialResponse => {
            console.log(credentialResponse);
        }}
        onError={() => {
            console.log('Login Failed');
        }}
        />
      </GoogleOAuthProvider>
    </div>
  )
}

export default Googlelogin
