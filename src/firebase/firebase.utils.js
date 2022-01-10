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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
               displayName,
               email,
               createdAt, 
               ...additionalData
            })
        } catch (error){
            console.log('error', error.message)
        }
    }

    return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;