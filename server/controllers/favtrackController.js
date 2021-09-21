const { FavouriteTrack } = require("../models/models");

const jwt = require("jsonwebtoken");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;


class FavouriteTrackController{
    async Add(req,res){
      try {
        let authorization = req.headers.authorization.split(" ")[1],
        decoded;
          try {
              decoded = jwt.verify(authorization, process.env.SECRET_KEY);
          } catch (e) {
              return res.status(401).send("unauthorized");
          }
      const id_user = decoded.id
      const { id,name,img } = req.body;
      const FavTrack = await FavouriteTrack.create({ trackId:id , userId:id_user ,name:name , img:img });
      res.json(FavTrack);
    } catch (e) {
      console.log(e);
    }
    }
    async getAll(req,res){
        let authorization = req.headers.authorization.split(" ")[1],
        decoded;
          try {
              decoded = jwt.verify(authorization, process.env.SECRET_KEY);
          } catch (e) {
              return res.status(401).send("unauthorized");
          }
      const id_user = decoded.id
        const tracks = await FavouriteTrack.findAll({ where:{  userId:id_user } })
        return res.json(tracks)
    }
    async getInputAll(req,res){
      try{
        let authorization = req.headers.authorization.split(" ")[1],
        decoded;
          try {
              decoded = jwt.verify(authorization, process.env.SECRET_KEY);
          } catch (e) {
              return res.status(401).send("unauthorized");
          }
      const id_user = decoded.id
      const { text } = req.body
        const tracks = await FavouriteTrack.findAll({   where: {
          [Op.and]: [
            { userId: id_user },
            { name: { [Op.like]: `${text}%` } },
          ],
        } })
        return res.json({ tracks })
      }catch(e){
        console.log(e)
      }
  }
  async deleteFavouriteTrack(req, res) {
    const { id } = req.params;
    try {
      let authorization = req.headers.authorization.split(" ")[1],
      decoded;
        try {
            decoded = jwt.verify(authorization, process.env.SECRET_KEY);
        } catch (e) {
            return res.status(401).send("unauthorized");
        }
      const id_user = decoded.id
      const track = await FavouriteTrack.findOne({ where: { trackId:id , userId:id_user } });

      await track.destroy();

      return res.json({ message: "track deleted" });
    } catch (e) {
      return res.status(500).json({ message: `${e} something is wrong` });
    }
  }
}

module.exports = new FavouriteTrackController();
