import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAHI4ROTg9hD1z5AYj2NxUUO7gHFmfx-aU",
	authDomain: "clone-3a0f8.firebaseapp.com",
	databaseURL: "https://clone-3a0f8.firebaseio.com",
	projectId: "clone-3a0f8",
	storageBucket: "clone-3a0f8.appspot.com",
	messagingSenderId: "355270619722",
	appId: "1:355270619722:web:ff56b5f47728e5f852acb3",
	measurementId: "G-JM9EB7VC06",
};

// Init app with config passed in
const firebaseApp = firebase.initializeApp(firebaseConfig);

// init firebase database
const db = firebaseApp.firestore();
// var to handle signin
const auth = firebase.auth();

export { db, auth };
