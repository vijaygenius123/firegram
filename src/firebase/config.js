import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCbPCwrX22xgoOkNdWFmGbxfBLiuMUq3K0",
    authDomain: "firegram-fd868.firebaseapp.com",
    databaseURL: "https://firegram-fd868.firebaseio.com",
    projectId: "firegram-fd868",
    storageBucket: "firegram-fd868.appspot.com",
    messagingSenderId: "520236706960",
    appId: "1:520236706960:web:8d19f5cde1dcc51c1bfc15"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const firestore = firebase.firestore();

export { storage, firestore }