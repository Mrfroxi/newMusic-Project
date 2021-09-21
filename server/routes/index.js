const Router = require("express");

const router = new Router();
const trackRouter = require("./trackRouter");
const userRouter = require("./userRouter");
const playListRouter = require("./playListRouter");
const favouriteTrackRoute = require("./favouriteTrackRoute");
const playListTrackRoute = require("./playListTrackRoute");

router.use("/track", trackRouter);
router.use("/user", userRouter);
router.use("/playList", playListRouter);
router.use("/favouritetrack", favouriteTrackRoute);
router.use("/playListTrack", playListTrackRoute);

module.exports = router;
