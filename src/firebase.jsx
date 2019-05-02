import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyDZJIcPnGLDRNpye8c0SiSFqG3Y2DX1icw",
    authDomain: "react-chat-f22fb.firebaseapp.com",
    databaseURL: "https://react-chat-f22fb.firebaseio.com",
    projectId: "react-chat-f22fb",
    storageBucket: "react-chat-f22fb.appspot.com",
    messagingSenderId: "139552798987"
};
firebase.initializeApp(config);

export default firebase;