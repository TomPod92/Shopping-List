import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyAadHGx1CFCW84dLB38KRMqG8-wGL0IfSc",
  authDomain: "shopping-list-ef1c7.firebaseapp.com",
  databaseURL: "https://shopping-list-ef1c7.firebaseio.com",
  projectId: "shopping-list-ef1c7",
  storageBucket: "",
  messagingSenderId: "701096141827",
  appId: "1:701096141827:web:590ac1df40e02324"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };
