import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyBRvs17ciAclwSIlkOQkCgM87TyzCdamNw',
  authDomain: 'blog-51c46.firebaseapp.com',
  databaseURL:'https://blog-51c46.firebaseio.com',
  projectId: 'blog-51c46',
  storageBucket: 'blog-51c46.appspot.com',
  messagingSenderId: '989670961431'
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };
