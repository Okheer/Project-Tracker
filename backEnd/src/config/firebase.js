
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIH5C2cPuQ_Op12_laVVGq80-AxzAs1TA",
  authDomain: "solosync-4949c.firebaseapp.com",
  projectId: "solosync-4949c",
  storageBucket: "solosync-4949c.firebasestorage.app",
  messagingSenderId: "1058777789918",
  appId: "1:1058777789918:web:da50a06a6e517f2fcf194f",
  measurementId: "G-MPPDC00VGN"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db