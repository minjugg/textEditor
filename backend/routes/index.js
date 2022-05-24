const express = require("express");
const router = express.Router();
const documentController = require("../controller/document.controller");
const { authTokenMiddleware } = require("../middleware");

router.get("/home", documentController.home);
router.get("/mydocument", authTokenMiddleware, documentController.page);
router.post("/selectedDocument", documentController.select);
router.post("/create", authTokenMiddleware, documentController.create);

module.exports = router;
