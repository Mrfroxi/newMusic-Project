const multer = require("multer");
const storage = multer.diskStorage({
  destination(reg, file, cb) {
    cb(null, "song/");
  },
  filename(req, file, cb) {
    cb(null, `${Math.random() * 1000}-${file.originalname}`);
  },
});

const types = ["audio/mp3", "audio/wav", "audio/mpeg"];
const fileFilter = (req, file, cb) => {

  if (types.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

module.exports = multer({ storage, fileFilter });
