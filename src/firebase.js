import firebase from 'firebase';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};
// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseDb = firebaseApp.firestore();

