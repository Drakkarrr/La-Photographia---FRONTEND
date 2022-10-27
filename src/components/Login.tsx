import React from 'react'
import { useNavigate } from 'react-router-dom'

//! Google authentication login
import {
  GoogleOAuthProvider,
  GoogleLogin,
  CredentialResponse,
} from '@react-oauth/google'

// import GoogleLogin from 'react-google-login'
// import { FcGoogle } from 'react-icons/fc'

//! Assets
import backgroundVideo from '../assets/backgroundVideo.mp4'
// import Logo from '../assets/camera.png'
import LSULogo from '../assets/lsu-logo.png'

const Login: React.FC = () => {
  const responseGoogle = (response: unknown) => {
    console.log(response)
  }

  return (
    <div className='h-screen flex flex-col items-center justify-start'>
      <div className='w-full h-full relative'>
        <video
          src={backgroundVideo}
          typeof='video/mp4'
          loop
          muted
          controls={false}
          autoPlay
          className='w-full h-full object-cover'
        />
        <div className='flex flex-col justify-center items-center absolute top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
          <div className='p-5'>
            <img
              src={LSULogo}
              width='150px'
              alt='La Photograpia official logo'
            />
          </div>

          <div className='shadow-2xl'>
            {/* <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_API_TOKEN as string}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
              render={renderProps => (
                <button
                  type='button'
                  className='bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none'
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <FcGoogle className='mr-4' />
                  Sign in with Google
                </button>
              )}
            /> */}

            <GoogleOAuthProvider
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID as string}
            >
              <GoogleLogin
                size='large'
                onSuccess={(response: CredentialResponse): void => {
                  console.log(`Successfully logged in ${response}`)
                }}
                onError={() => console.log('Login Failed')}
              />
            </GoogleOAuthProvider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
