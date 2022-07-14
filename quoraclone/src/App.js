import React, { useEffect } from 'react';
import './App.css';
import Zuora from "./components/Zuora";
import { useDispatch, useSelector } from 'react-redux'
import { selectUser, login, logout } from "./features/userSlice";
import Login from './components/auth/Login.js';
import { auth } from './Firebase';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch()
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          displayName: authUser.displayName,
          email: authUser.email
        }));
        // console.log(authUser);
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);
  
  return (
    <div className="App">
      {
       user ? (<Zuora />) : (<Login />)
      }
    </div>
  );
}

export default App;
