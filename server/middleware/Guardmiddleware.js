const jwt = require("jsonwebtoken");
const PostsArray = {
  ADMIN:3,
  USER:2,
  NOTAuth:1,
}
module.exports = function (role) {
  return function (req, res, next) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      if (!token) {
        return res.status(401).json({ message: "not authorized" });
      }
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      if(PostsArray[(decoded.role)] < PostsArray[role]){
        return res.status(403).json({ message: "you have no rights" });
      }
      if(PostsArray[(decoded.role)] >= PostsArray[role]){
        req.user = decoded;
        next();
      }
    } catch (e) {
      res.status(401).json({ message: "not authorized" });
    }
  };
};
