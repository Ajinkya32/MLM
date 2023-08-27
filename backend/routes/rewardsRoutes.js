const router = require("express").Router();
const rewardsController = require("../controllers/rewardsController");
const { isAuthenticated } = require("../middlewares/auth");

router.get("/getLeadershipRewards", isAuthenticated, rewardsController.getLeadershipRewards);

router.get("/getNonWorkingRewards", isAuthenticated, rewardsController.getNonWorkingRewards);

module.exports = router;
