import Firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
//import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyBGMqUKGLKEtcfHn2Rmt4w4LHFT0-C4ESs",
    authDomain: "netflix-clone-357f3.firebaseapp.com",
    databaseURL: "https://netflix-clone-357f3.firebaseio.com",
    projectId: "netflix-clone-357f3",
    storageBucket: "netflix-clone-357f3.appspot.com",
    messagingSenderId: "545340357091",
    appId: "1:545340357091:web:2d164d0af3cdea9e5248d6",
    measurementId: "G-79YTNF0TR9",
}

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);

export { firebase };