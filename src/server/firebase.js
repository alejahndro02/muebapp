import app from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyC6n46QkDsHZ8laH-K5rN-qLqUKt5DQHlw",
    authDomain: "gestionmuebles-a086a.firebaseapp.com",
    databaseURL: "https://gestionmuebles-a086a.firebaseio.com",
    projectId: "gestionmuebles-a086a",
    storageBucket: "gestionmuebles-a086a.appspot.com",
    messagingSenderId: "392240629678",
    appId: "1:392240629678:web:9b6c2c637f27a594fdaa3f",
    measurementId: "G-YRXB0M4EFZ"
  };
class Firebase {
    constructor(){
        // se inicializa el servicion de firebase
        app.initializeApp(firebaseConfig);
        this.db=app.firestore();
    }
}


export default Firebase;