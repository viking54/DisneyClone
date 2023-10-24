import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA1IoF_20j8WCvaVJnxGMdijwwAj8Esfyw",
  authDomain: "disneyplus-8b9cb.firebaseapp.com",
  projectId: "disneyplus-8b9cb",
  storageBucket: "disneyplus-8b9cb.appspot.com",
  messagingSenderId: "178327765475",
  appId: "1:178327765475:web:fe4d39fd7a60302a19e0d6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
