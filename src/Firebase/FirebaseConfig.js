// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.envVITE_apiKey,
  authDomain: import.meta.envVITE_authDomain,
  projectId: import.meta.envVITE_projectId,
  storageBucket: import.meta.envVITE_storageBucket,
  messagingSenderId: import.meta.envVITE_messagingSenderId,
  appId: import.meta.envVITE_appId,
  measurementId: import.meta.envVITE_measurementId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
