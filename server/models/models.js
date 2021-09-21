const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const PlayList = sequelize.define("playList", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  img:{ type:DataTypes.STRING,allowNull :false },
});

const Track = sequelize.define("track" ,{
  id :{ type:DataTypes.INTEGER , primaryKey :true  , autoIncrement : true },
  name :{ type:DataTypes.STRING ,unique:true , allowNull :false },
  img:{ type:DataTypes.TEXT,allowNull :false },
  closed:{  type:DataTypes.BOOLEAN , allowNull :false ,defaultValue:false },
})

const FavouriteTrack = sequelize.define("FavouriteTrack" ,{
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name :{ type:DataTypes.STRING , allowNull :false },
  img:{ type:DataTypes.TEXT,allowNull :false },
})
const PlayListTrack = sequelize.define("PlayListTrack" ,{
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nameTrack :{ type:DataTypes.STRING , allowNull :false },
  namePlayList :{ type:DataTypes.STRING },
  img:{ type:DataTypes.TEXT,allowNull :false },
})


User.hasMany(Track);
Track.belongsTo(User);

User.hasMany(PlayList);
PlayList.belongsTo(User);

PlayList.belongsToMany(Track, { through: PlayListTrack });
Track.belongsToMany(PlayList, { through: PlayListTrack });

User.belongsToMany(Track, { through: FavouriteTrack });
Track.belongsToMany(User, { through: FavouriteTrack });

PlayList.belongsToMany(User, { through: "FavouritePlaylist" });
User.belongsToMany(PlayList, { through: "FavouritePlaylist" });

module.exports = {
  User,
  PlayList,
  Track,
  FavouriteTrack,
  PlayListTrack,
};
