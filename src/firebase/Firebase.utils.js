import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDsjUNkfGfCpIaMll6jObhsPUhparrxW9g',
  authDomain: 'crown-db-e890d.firebaseapp.com',
  projectId: 'crown-db-e890d',
  storageBucket: 'crown-db-e890d.appspot.com',
  messagingSenderId: '834221460657',
  appId: '1:834221460657:web:028d24678b5f776511e690',
  measurementId: 'G-Z7T7D4828G',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
