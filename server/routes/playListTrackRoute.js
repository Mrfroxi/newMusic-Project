const Router = require("express");

const router = new Router();
const playListTrackController = require("../controllers/playListTrackController");
const guardMiddleware = require("../middleware/guardmiddleware");



router.post("/", playListTrackController.Add)
router.get("/:id", playListTrackController.getAll);
router.delete("/",guardMiddleware("ADMIN"), playListTrackController.deletePlayListTrack);

module.exports = router;
