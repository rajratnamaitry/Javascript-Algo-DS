// Import the functions you need from the SDKs you need
import  firebase  from "firebase/app";
//import firebase from 'firebase';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCATeVTtWW7MlXS6PSXy2AFj7fH25DNYwE33",
  authDomain: "jsalgods.firebaseapp.com",
  projectId: "jsalgods",
  storageBucket: "jsalgods.appspot.com",
  messagingSenderId: "112785131816",
  appId: "1:112785131816:web:c1a6171759cf4a10f6e81d",
  measurementId: "G-VDKPETY3HT"
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);   
  console.log('firebase',firebase)
}
export default firebase;
