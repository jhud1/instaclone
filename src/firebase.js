import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDYyKlZo369fjD7KR_S9ch1kXoZi9kgjsc",
    authDomain: "instaclone-1051e.firebaseapp.com",
    databaseURL: "https://instaclone-1051e-default-rtdb.firebaseio.com",
    projectId: "instaclone-1051e",
    storageBucket: "instaclone-1051e.appspot.com",
    messagingSenderId: "1037216588080",
    appId: "1:1037216588080:web:c3d4634c30764a010c28f5"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };