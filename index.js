require('dotenv').config()
const Telegraf = require('telegraf')
const mangakita = require('./lib/mangakita')

const ONE_PIECE_URL = 'https://mangakita.net/one-piece-chapter-937-bahasa-indonesia/'

const bot = new Telegraf(process.env.BOT_TOKEN);

(async function() {
  const onepiece = await mangakita.extract(ONE_PIECE_URL)
  console.log(onepiece)
})();

bot.start((ctx) => ctx.reply('Welcome!'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()
