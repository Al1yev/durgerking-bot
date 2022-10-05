require("dotenv").config({ path: "./.env" });
const { Bot } = require("grammy");
const bot = new Bot("5630916341:AAFpRPTmGpxqZJYPTLxR_Q7yuVRvkAJxN5s", {
  polling: true,
});
const fetch = require("node-fetch");

bot.command("start", async (ctx) => {
  try {
    // Registering user to DB
    const response = await fetch(
      "https://durgerking-bot.herokuapp.com/api/v1/user",
      {
        method: "POST",
        body: JSON.stringify({
          first_name: ctx.from.first_name,
          last_name: ctx.from.last_name,
          username: ctx.from.username,
        }),
        headers: { "Content-Type": "application/json", chat_id: ctx.chat.id },
      }
    );
    // console.log(await response.json());
  } catch (error) {
    return new Error(error);
  }

  ctx.reply(
    `Let's get started 🍟
       
    Please tap the button below to order your perfect lunch!`,
    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Order Food",
              web_app: {
                url: "https://sparkly-hummingbird-fdbec0.netlify.app",
              },
            },
          ],
        ],
      },
    }
  );
});

// bot.command("requestToApi", (ctx) => {

//   console.log(ctx.match);
// });

bot.on("message", (ctx) => {
  console.log(ctx.msg.text);
});

bot.start();
