const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "Sc4FmTrb#jdrq-Wj2QBtg6mhW6tVpUd8Q1-fCqplhMO23M3kjA_Y",
  MONGODB: process.env.MONGODB || "mongodb://mongo:TcRCWZGNTzIKxnsUQvteZksjPiglffwf@switchyard.proxy.rlwy.net:46726",
  OWNER_NUM: process.env.OWNER_NUM || "94779702531",
};
