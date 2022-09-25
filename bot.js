require("dotenv").config({ path: "./.env" });
const { Bot } = require("grammy");
const bot = new Bot(process.env.BOT_TOKEN, { polling: true });

bot.command("start", (ctx) => {
  console.log(ctx.from);
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Order Food",
            web_app: {
              url: "https://warm-fox-8602fd.netlify.app/",
            },
          },
        ],
      ],
    },
  });
});

bot.on("message", (ctx) => {
  console.log(ctx.msg.text);
});

bot.start();
