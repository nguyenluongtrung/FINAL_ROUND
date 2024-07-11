import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: 'finalround-okl.firebaseapp.com',
	projectId: 'finalround-okl',
	storageBucket: 'finalround-okl.appspot.com',
	messagingSenderId: '221704897719',
	appId: '1:221704897719:web:8c2776d6ae3eaede0df932',
};

firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth, firebase };
