require('dotenv').config()
const bot = require('./bot')
const mangakita = require('./lib/mangakita')

// const ONE_PIECE_URL = 'https://mangakita.net/manga/onepunch-man';

// (async function () {
//   const chapters = await mangakita.listChapters(ONE_PIECE_URL)
//   console.log(chapters)
// })()

bot.launch()
