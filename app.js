const TelegramBot = require("node-telegram-bot-api");
const fs = require("fs");

// replace the value below with the Telegram token you receive from @BotFather
const token = fs.readFileSync("./token.txt", "utf8");

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  bot.sendMessage(chatId, resp);
});

var options = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: "Кнопка 1", callback_data: "1" }],
      [{ text: "Кнопка 2", callback_data: "data 2" }],
      [{ text: "Кнопка 3", callback_data: "text 3" }],
    ],
  }),
};

bot.onText(/\/aaaa/, function (msg, match) {
  bot.sendMessage(msg.chat.id, "Выберите любую кнопку:", options);
});

bot.on("callback_query", function (msg) {
  var answer = msg.data;
  console.log(answer);
});
