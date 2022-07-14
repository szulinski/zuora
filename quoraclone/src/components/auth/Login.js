import React, { useState } from 'react';
import './Login.css'
import { auth, provider, provider2 } from '../../Firebase.js'
import titleImg from '../../assets/zuoratitle.png';
import googleLogo from '../../assets/googlelogo.png';
import fbLogo from '../../assets/fblogo.png';
// import { ArrowForwardIosOutlined } from '@material-ui/icons';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = () => {
    auth.signInWithPopup(provider).catch((e) => alert(e.message));
    // console.log(auth);
  };

  const signIn2 = () => {
    auth.signInWithPopup(provider2).catch((e) => alert(e.message));
    // console.log(auth);
  };

  const handleLogin = (e) => {
    e.preventDefault()
    auth.signInWithEmailAndPassword(email, password).then((auth) => {
      console.log(auth)
    }).catch((e) => alert(e.message))

    setEmail('');
    setPassword('');
  };

  const handleRegister = (e) => {
    e.preventDefault()
    auth.createUserWithEmailAndPassword(email, password).then((auth) => {
      if (auth) {
        console.log(auth)
      }
    }).catch((e) => alert(e.message))

    setEmail('');
    setPassword('');
  };

  return (
    <div className = 'login'>
      <div className = 'login_container'>
        <div className = 'login_logo'>
          <img
            src = { titleImg }
            alt = ''
            />
        </div>
        <div className = 'login_desc'>
          <p>A Space to Level Up Your Game</p>
        </div>
        <div className = 'login_auth'>
          <div className = 'login_auth_options'>
            <div className = 'login_auth_option'>
              <img
                className = 'login_google'
                src = { googleLogo }
                alt =''
                />
                <p onClick = { signIn }>Continue with Google</p>
            </div>
            <div className = 'login_auth_option'>
              <img
                className = 'login_facebook'
                src = { fbLogo }
                alt =''
                />
                <p onClick = { signIn2 }>Continue with Facebook</p>
            </div>
            <button className = 'register_button' onClick = { handleRegister }>Register</button>
            {/* <div className = 'login_auth_desc'>
              <p>Sign up with Email</p>
              \n
              <p>Terms of Service</p>
              \n
              <p>Privacy Policy</p>
            </div> */}
          </div>
          <div className = 'login_email_pass'>
            <div className = 'login_label'>
              <h4>Login</h4>
            </div>
            <div className = 'login_input_fields'>
              <div className = 'login_input_field'>
                <input
                  value = { email }
                  onChange = {(e) => setEmail(e.target.value)}
                  type='text'
                  placeholder = 'Email'
                />
              </div>
              <div className = 'login_input_field'>
                <input
                  value = { password }
                  onChange = {(e) => setPassword(e.target.value)}
                  type = 'password'
                  placeholder = 'Password'
                />
              </div>
            </div>
            <div className = 'login_forgot_button'>
              <small>Forget your password?</small>
              <button type = "submit" onClick = { handleLogin }>Login</button>
            </div>
          </div>
        </div>
        {/* <div className = 'login_language'>
          <p>English</p>
          <ArrowForwardIosOutlined fontsize = 'small' />
        </div> */}
        <div className = 'login_footer'>
          <p>About</p>
          <p>Languages</p>
          <p>Careers</p>
          <p>Privacy</p>
          <p>Terms</p>
          <p>Contact</p>
          <p>&copy; Imaginary Website Inc. 2022</p>
        </div>
      </div>
    </div>
  );
}

export default Login