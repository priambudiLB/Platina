import firebase from "firebase";

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBkNBmjgzESRcvZUA3Y4rI2S8XJ3EqhcWI",
  authDomain: "mendoanid.firebaseapp.com",
  projectId: "mendoanid",
  storageBucket: "mendoanid.appspot.com",
  messagingSenderId: "521537107475",
  appId: "1:521537107475:web:fce186e56e42f93f28f1e6",
};

export default function firebaseClient() {
  if (!firebase.apps.length) {
    firebase.initializeApp(FIREBASE_CONFIG);
  }
}
