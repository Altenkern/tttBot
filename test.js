const fs = require("fs");

// replace the value below with the Telegram token you receive from @BotFather
fs.readFile("token.txt", "utf8", function (err, data) {
  if (err) throw err;
  console.log(data);
});
