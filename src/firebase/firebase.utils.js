import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBMu-rPujo-iZ7meBh25XgNkCZXTObC-JQ",
    authDomain: "crwn-clothing-32dc4.firebaseapp.com",
    projectId: "crwn-clothing-32dc4",
    storageBucket: "crwn-clothing-32dc4.appspot.com",
    messagingSenderId: "922941467171",
    appId: "1:922941467171:web:3c2962ba0880ace85b9f96",
    measurementId: "G-ZKNXTE5B0B" 
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;