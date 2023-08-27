const router = require("express").Router();
const referenceController = require("../controllers/referenceController");
const { isAuthenticated } = require("../middlewares/auth");

router.get("/get-reference-data", isAuthenticated, referenceController.getReferenceData);

router.get("/getReferenceDataAdmin", isAuthenticated, referenceController.getReferenceDataAdmin);

module.exports = router;
