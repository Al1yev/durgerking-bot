require("dotenv").config({ path: "./.env" });
const { Bot } = require("grammy");
const bot = new Bot(process.env.BOT_TOKEN, { polling: true });
const fetch = require("node-fetch");

bot.command("start", async (ctx) => {
  try {
    // Registering user to DB
    const response = await fetch("http://localhost:1234/api/v1/user", {
      method: "POST",
      body: JSON.stringify({
        first_name: ctx.from.first_name,
        last_name: ctx.from.last_name,
        username: ctx.from.username,
        chat_id: ctx.chat.id,
      }),
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Error(error);
  }

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
