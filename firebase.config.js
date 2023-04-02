//firebase config key store
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAhjEYA4zuKNe9gdyMNwAWO9_9GqpeGtiY",
  authDomain: "test-8653e.firebaseapp.com",
  projectId: "test-8653e",
  storageBucket: "test-8653e.appspot.com",
  messagingSenderId: "981943584558",
  appId: "1:981943584558:web:c77985b9dbeec69c9d1cbf",
  measurementId: "G-JXBXCVC7HD"
}

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export {firebase};