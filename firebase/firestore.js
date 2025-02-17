// Firestore initialization using Firebase Admin SDK (already done in server.js)
// This file can export a helper if needed.
const admin = require('firebase-admin');
const db = admin.firestore();
module.exports = db;
