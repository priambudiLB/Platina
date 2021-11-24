const admin = require("firebase-admin");
const serviceAccount = require("../secret/secret.json");

export const verifyIdToken = (token) => {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://mendoanid-default-rtdb.asia-southeast1.firebasedatabase.app/",
    });
  }

  return admin
    .auth()
    .verifyIdToken(token)
    .catch((error) => {
      throw error;
    });
};
