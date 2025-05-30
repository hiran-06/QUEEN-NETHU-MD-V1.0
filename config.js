const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "FnlA3YTJ#jv2fXahhvAN4IWAuImPqLs6XnRQc1sgEiBjuZZeYjF8",
  OWNER_NUM: process.env.OWNER_NUM || "94779702531",
  PREFIX: process.env.PREFIX || ".",
  ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/B2gnQ2rm/IMG-20250216-WA0140.jpg",
  ALIVE_MSG: process.env.ALIVE_MSG || "Hello , I am alive now!!\n\n🥶𝐌𝐚𝐝𝐞 𝐛𝐲 𝑳_𝑰_𝒀_𝑶🥶",
  MODE: process. env.MODE || "Public",
};
