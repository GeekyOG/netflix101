import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyChOq8YzAI2_Dl3pB3SKV9d3PsZx3Bk1Pk",
  authDomain: "netflix-clone-5b740.firebaseapp.com",
  projectId: "netflix-clone-5b740",
  storageBucket: "netflix-clone-5b740.appspot.com",
  messagingSenderId: "489814755604",
  appId: "1:489814755604:web:6cf84762681b2e09145a01",
  measurementId: "G-4WJ3SPPT9K",
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
