import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth'

// config from my firebase account.
const config = {
    apiKey: "AIzaSyBziEGQXHY5ZzZzcEHovkNRagfFjrDq9qY",
    authDomain: "crwn-db-2882c.firebaseapp.com",
    databaseURL: "https://crwn-db-2882c.firebaseio.com",
    projectId: "crwn-db-2882c",
    storageBucket: "crwn-db-2882c.appspot.com",
    messagingSenderId: "901791291076",
    appId: "1:901791291076:web:7582107c97336b76109b91",
    measurementId: "G-2E8NNJC913"
  };


  // initialize with config.
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' })
  export const signInWithGoogle =  () => (
      auth.signInWithPopup(provider)
  );

  export default firebase;