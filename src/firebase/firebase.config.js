// console.log(process.env);

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,

    // apiKey: "AIzaSyA-J4Gyr8byHwIj3BqCVM-8DCTTkgpj7J4",
    // authDomain: "my-blogs-c508e.firebaseapp.com",
    // projectId: "my-blogs-c508e",
    // storageBucket: "my-blogs-c508e.appspot.com",
    // messagingSenderId: "801328018893",
    // appId: "1:801328018893:web:2134b41f049680a472c084"
};

export default firebaseConfig;