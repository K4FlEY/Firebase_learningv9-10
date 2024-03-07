import {initializeApp} from 'firebase/app'
import {getFireStore, collection} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBVTRxGIiwCqPqiNt5PvfRnjc9ujD9OKPs",
    authDomain: "fire-base-9--10.firebaseapp.com",
    projectId: "fire-base-9--10",
    storageBucket: "fire-base-9--10.appspot.com",
    messagingSenderId: "732304743261",
    appId: "1:732304743261:web:f6673e1c0a2567c08a66b4"
  };

initializeApp(firebaseConfig)
let db = getFireStore();

const colRef = collection(db, 'books')