import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDQdxw4MUG9F6FxnpPbc--GD7iwFJx4eXM",
    authDomain: "hackathon-practice-f4e44.firebaseapp.com",
    projectId: "hackathon-practice-f4e44",
    storageBucket: "hackathon-practice-f4e44.firebasestorage.app",
    messagingSenderId: "263497649252",
    appId: "1:263497649252:web:aaf2c81f2eef9eb89ee371"
};

const app = initializeApp(firebaseConfig);

export default app;