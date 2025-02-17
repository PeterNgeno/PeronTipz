// Firebase Authentication configuration (if using client-side SDK)
const firebase = require('firebase/app');
require('firebase/auth');

const firebaseConfig = {
  apiKey: "your_api_key",
  authDomain: "your_project_id.firebaseapp.com",
  // ...other config values
};

firebase.initializeApp(firebaseConfig);
module.exports = firebase.auth();
