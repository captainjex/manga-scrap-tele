const Telegraf = require('telegraf')
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('Welcome!'))
bot.help((ctx) => ctx.reply('Silakan ke https://github.com/wkwksama/manga-scrap-tele'))
bot.command('list', ctx => ctx.reply('list manga', {
  reply_markup: {
    keyboard: [
      ['list manga'],
      ['list manga'],
      ['list manga'],
      ['list manga'],
      ['list manga'],
      ['list manga'],
      ['list manga'],
      ['list manga'],
      ['list manga'],
      ['list manga'],
    ],
    resize_keyboard: true
  }
}))
bot.hears('list manga', ctx => ctx.reply('ok', {
  reply_markup: {
    remove_keyboard: true
  }
}))
bot.on('message', (ctx) => {
  const message = ctx.message.text
  console.log(message)
  switch (message) {
    case 'op':
      ctx.reply('opee', {
        reply_markup: {
          inline_keyboard: [[{ text: 'lololo', callback_data: 'lololo' }]],
        }
      })
      break
    default:
      ctx.reply('👍')
      break
  }
})

bot.catch((err) => {
  console.log('====== Ooops', err)
})

module.exports = bot
