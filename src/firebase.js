import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBQWy2w1zeV2JxEGAqP2HZ1OtcPq6hwTCc",
    authDomain: "instagram-clone-3da67.firebaseapp.com",
    databaseURL: "https://instagram-clone-3da67.firebaseio.com",
    projectId: "instagram-clone-3da67",
    storageBucket: "instagram-clone-3da67.appspot.com",
    messagingSenderId: "501093658567",
    appId: "1:501093658567:web:1104cd4c5629032353f3e2",
    measurementId: "G-QL5SW6SFSH"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
