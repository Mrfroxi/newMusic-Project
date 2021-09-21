const { PlayListTrack } = require("../models/models");

// const jwt = require("jsonwebtoken");


class PlayListTrackController{
    async Add(req,res){
      try {
        const { id,nameTrack,img,idTrack,namePlayList } = req.body;
        const FavTrack = await PlayListTrack.create({ 
          trackId:idTrack , playListId:id ,nameTrack:nameTrack , img:img ,namePlayList:namePlayList,
        });
      res.json(FavTrack);
    } catch (e) {
      console.log(e);
    }
    }
    async getAll(req,res){
      const { id } = req.params;
      console.log(req.params)
        const tracks = await PlayListTrack.findAll({ where:{  playListId:id } })
        return res.json(tracks)
    }
  async deletePlayListTrack(req, res) {

    const { trackId ,playListId } = req.body;
    try {
      const track = await PlayListTrack.findOne({ where: { trackId:trackId ,playListId:playListId } });

      await track.destroy();

      return res.json({ message: "track deleted" });
    } catch (e) {
      console.log(e)
      return res.status(500).json({ message: `${e} something is wrong` });
    }
  }
}

module.exports = new PlayListTrackController();
