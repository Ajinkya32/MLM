const router = require("express").Router();
const adminController = require("../controllers/adminController");
const { isAuthenticated } = require("../middlewares/auth");
const { isAdmin } = require("../middlewares/auth");

const multer = require("multer");
const path = require("path");

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/videos/");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
});

router.get("/get-data", adminController.getData);

router.get("/getVideos", adminController.getVideo);

router.post("/postVideo", upload.single("video"), adminController.postVideo);

router.post("/deleteVideo", adminController.deleteVideo);

module.exports = router;
