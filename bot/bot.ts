import { Telegraf } from "telegraf/typings/telegraf";
const TOKEN = "6422144117:AAFyAMiQym1MR2TBVBhJkobbCpZwOwlQqHQ";
const bot = new Telegraf(TOKEN);
bot.start((ctx) => ctx.reply("Welcome WEB APP!"));
bot.launch();
