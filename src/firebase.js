// Importa las funciones que necesitas de los SDKs que necesitas
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/analytics';
import 'firebase/compat/storage';

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDky0aDBAd2jAO-u_FVgbA6wa639dmt2nM",
  authDomain: "disney-clone-ff779.firebaseapp.com",
  projectId: "disney-clone-ff779",
  storageBucket: "disney-clone-ff779.appspot.com",
  messagingSenderId: "564993448513",
  appId: "1:564993448513:web:d81214ca9617b6b5afc4c0",
  measurementId: "G-3P2MQMLEGN"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

// Obtiene las instancias de los servicios de Firebase
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
const db = firebase.firestore();
const analytics = firebase.analytics();

export { auth, provider, storage, analytics };
export default db;