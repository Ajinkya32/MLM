const router = require("express").Router();
const analyticsController = require("../controllers/analyticsController");
const { isAuthenticated, isAdmin } = require("../middlewares/auth");

router.get("/get-analytics", isAuthenticated, analyticsController.getAnalytics);

router.get("/get-analytics-admin", isAuthenticated, isAdmin, analyticsController.getAnalyticsAdmin);

router.post("/getAnalyticsUser", isAuthenticated, analyticsController.getAnalyticsUser);

module.exports = router;
