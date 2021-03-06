let jwt = require("jsonwebtoken");
const checkRefresh = (req, res, next) => {
  let header = req.headers.authorization;
  if (!header)
    return res
      .status(400)
      .json({ message: "authorization token not provided" });
  let token = header.split(" ")[1];
  if (!token) {
    return res
      .status(400)
      .json({ message: "authorization token not provided" });
  } else {
    jwt.verify(
      token,
      process.env.REFRESH_TOKEN_SECRET,
      function (err, decoded) {
        if (err) {
          console.log(err);
          return res.status(400).json({ message: "invalid token" });
        }
        req.userInfo = decoded;
        next();
      }
    );
  }
};
module.exports = checkRefresh;
