import { initializeApp } from "firebase/app";
import auth from "@react-native-firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSDARaKmPVmB2Xs5BhpG7F6hwprOTLXbw",
  authDomain: "whatsapp-163d0.firebaseapp.com",
  projectId: "whatsapp-163d0",
  storageBucket: "whatsapp-163d0.appspot.com",
  messagingSenderId: "1036096386645",
  appId: "1:1036096386645:web:805a698e61ebbe79de86dc",
  measurementId: "G-6YZ0MRY8WJ"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default () => {
 return {firebase, auth}
};
