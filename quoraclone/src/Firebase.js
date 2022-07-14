import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCRRKElKO3QWRKonf0wBJyWpuM14KuHbQ4",
    authDomain: "quoraclone-6d694.firebaseapp.com",
    projectId: "quoraclone-6d694",
    storageBucket: "quoraclone-6d694.appspot.com",
    messagingSenderId: "1061434269752",
    appId: "1:1061434269752:web:af932ba8623047426bc6cd",
    measurementId: "G-21STMKZK0N"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const provider2 = new firebase.auth.FacebookAuthProvider();
  const db = firebaseApp.firestore();

  export { firebaseApp }
  export {auth, provider, provider2}
  export default db