// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider, setPersistence, inMemoryPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: process.env.NEXT_PUBLIC_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
//     projectId: process.env.NEXT_PUBLIC_API_PROJECT_ID,
//     storageBucket: process.env.NEXT_PUBLIC_API_STORAGE_BUCKET,
//     messagingSenderId: process.env.NEXT_PUBLIC_API_MESSAGING_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_API_APP_ID,
//     measurementId: process.env.NEXT_PUBLIC_API_MEASUREMENT_ID
// };

const firebaseConfig = {
    apiKey: "AIzaSyDNSRe0598FccksSyqktd1CNBp7B-x2gOs",
    authDomain: "fyp-venntrading.firebaseapp.com",
    projectId: "fyp-venntrading",
    storageBucket: "fyp-venntrading.appspot.com",
    messagingSenderId: "855063889557",
    appId: "1:855063889557:web:61432b1ca848bc7e85bd9c",
    measurementId: "G-FQ80M2EGGS"
};
  

// Initialize Firebase
export const app = !getApps().length ? initializeApp(firebaseConfig, "FYP-VennTrading"): getApp("FYP-VennTrading");
export const auth = getAuth(app);
export const db = getFirestore(app);
// export const analytics = getAnalytics(app);
export const googleProvider = new GoogleAuthProvider();

setPersistence(auth, inMemoryPersistence);