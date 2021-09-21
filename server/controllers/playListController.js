const { PlayList } = require("../models/models");
// const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const path = require("path")
const uuid = require("uuid")
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
class PlayListController {
  async create(req, res) {
    try {
        let authorization = req.headers.authorization.split(" ")[1],
        decoded;
          try {
              decoded = jwt.verify(authorization, process.env.SECRET_KEY);
          } catch (e) {
              return res.status(401).send("unauthorized");
          }
          const id_user = decoded.id
      const { name } = req.body;
      const { img } = req.files
      let fileName = uuid.v4()+".jpg"
      img.mv(path.resolve(__dirname,"..","image",fileName))
      const playList = await PlayList.create({ name:name , userId:id_user , img:fileName });
      res.json(playList);
    } catch (e) {
      console.log(e);
    }
  }

  async getAll(req, res) {

      let authorization = req.headers.authorization.split(" ")[1],
      decoded;
        try {
            decoded = jwt.verify(authorization, process.env.SECRET_KEY);
        } catch (e) {
            return res.status(401).send("unauthorized");
        }
        const id_user = decoded.id

    const playList = await PlayList.findAll({ where:{ userId:id_user } });
    return res.json(playList);
  }
  async getInputAll(req, res) {
    console.log(1)
    let authorization = req.headers.authorization.split(" ")[1],
    decoded;
      try {
          decoded = jwt.verify(authorization, process.env.SECRET_KEY);
      } catch (e) {
          return res.status(401).send("unauthorized");
      }
    const id_user = decoded.id
    const{ text } = req.body
    const playList = await PlayList.findAll({ where:{  [Op.and]: [
    { userId: id_user },
    { name: { [Op.like]: `${text}%` } },
  ],
} });
  return res.json({ playList });
}

  async getOne(req, res) {
    const { id } = req.params;
    const playList = await PlayList.findOne({ where: { id } });
    return res.json(playList);
  }
  async changeName(req, res) {
    const { name ,id } = req.body;
    console.log(id ,name)
    const playList = await PlayList.update({ name: name }, {
      where: {
        id: id,
      },
    });
    return res.json({ message:`name change good job${playList} ` });
  }

  async deletePlayList(req, res) {
    const { id } = req.params;
    try {
      const playList = await PlayList.findOne({ where: { id } });

      await playList.destroy();

      return res.json({ message: "PlayList deleted" });
    } catch (e) {
      return res.status(500).json({ message: `${e} something is wrong` });
    }
  }
}

module.exports = new PlayListController();
