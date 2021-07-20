// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCaqQKaAPwin3KG-wiu0A5_BPm0GoKFj6Y",
    authDomain: "facebook-clone-2afc3.firebaseapp.com",
    databaseURL: "https://facebook-clone-2afc3.firebaseio.com",
    projectId: "facebook-clone-2afc3",
    storageBucket: "facebook-clone-2afc3.appspot.com",
    messagingSenderId: "699322819588",
    appId: "1:699322819588:web:9f42c2507b60de99cd8151",
    measurementId: "G-WRFGC2XS0F"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  
  export default db;