const admin = require("firebase-admin")

const serviceAccount= require("../../key/segundaentrega-80f8c-firebase-adminsdk-lyahl-f09921517d.json")
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
   
  });

  const db= admin.firestore()
module.exports = {admin,db}