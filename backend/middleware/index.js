const admin = require("firebase-admin");
const serviceAccount = require("../config/serviceAccount.json");
const { getAuth } = require("firebase-admin/auth")
let firebaseApp = null;

const authTokenMiddleware = async (req, res, next) => {
  if (!firebaseApp) {
    firebaseApp = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }

  console.log("HEADER", req.headers);
  const tokenString = req.headers["authorization"]?.split(" ");

  if (!tokenString) {
    res.send("No header");
  } else if (!tokenString[1]) {
    res.send("No token provided");
  } else {
    try {
      const decodedToken = await getAuth().verifyIdToken(tokenString[1]);

      req.session.uid = decodedToken.uid;

      next();
    } catch (err) {
      res.send(err);
    }
  }
}

module.exports = { authTokenMiddleware };
