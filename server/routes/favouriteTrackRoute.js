const Router = require("express");

const router = new Router();
const favtrackController = require("../controllers/favtrackController");
const guardMiddleware = require("../middleware/guardmiddleware");



router.post("/", favtrackController.Add)
router.post("/search", favtrackController.getInputAll)
router.get("/", favtrackController.getAll);
router.delete("/:id", guardMiddleware("ADMIN"), favtrackController.deleteFavouriteTrack);

module.exports = router;
