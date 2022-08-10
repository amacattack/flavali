import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GameSummary } from "./GameSummary";

// Your web app's Firebase configuration. See link below:
// https://console.firebase.google.com/u/0/project/flavali/settings/general/web:MWI3NDM4Y2MtYTc1NS00YTM3LWFiMGUtNmM0ZDE2MmNjNDEz
// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "flavali.firebaseapp.com",
  projectId: "flavali",
  storageBucket: "flavali.appspot.com",
  messagingSenderId: "524294580172",
  appId: "1:524294580172:web:3dc31d7ffe2ad380405f69",
};
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/signedIn",
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    GoogleAuthProvider.PROVIDER_ID,
    // FacebookAuthProvider.PROVIDER_ID, // TODO: set up facebook app to allow sign in w facebook
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};
// const uiConfig = {
//   callbacks: {
//     signInSuccessWithAuthResult: function (authResult, redirectUrl) {
//       // User successfully signed in.
//       // Return type determines whether we continue the redirect automatically
//       // or whether we leave that to developer to handle.
//       console.log("auth result: ", authResult);
//       console.log("redir url: ", redirectUrl);
//       console.log("sign in success!");
//       return true;
//     },
//     // We will display Google and Facebook as auth providers.
//     signInOptions: [
//       GoogleAuthProvider.PROVIDER_ID,
//       // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//     ],
//   },
//   // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
//   signInFlow: "popup",
//   signInSuccessUrl: "/",
// };

// TODO: implement saving & writing to firestore
// https://firebase.google.com/docs/firestore/quickstart#add_data
// const db = getFirestore(firebaseApp);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App auth={auth} uiConfig={uiConfig} />} />
      <Route path="/game-summary" element={<GameSummary />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
