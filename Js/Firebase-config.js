// Firebase Configuration
const firebaseConfig = {
    // 👇 YAHAN APNI FIREBASE CONFIG PASTE KARNA
    apiKey: "TERA_API_KEY",
    authDomain: "TERA_PROJECT.firebaseapp.com",
    databaseURL: "https://TERA_PROJECT-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "TERA_PROJECT",
    storageBucket: "TERA_PROJECT.appspot.com",
    messagingSenderId: "TERA_SENDER_ID",
    appId: "TERA_APP_ID"
};

// Firebase Initialize
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
