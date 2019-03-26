const axios = require('axios')
const cheerio = require('cheerio')

async function extractImages (mangaUrl) {
  const { data } = await axios.get(mangaUrl)
  const $ = cheerio.load(data)

  const images = []
  $('#readerarea').children('.mangaimg').each((i, elm) => {
    images.push(elm.attribs.src)
  })

  return images
}

async function listChapters (listChapterUrl) {
  const { data } = await axios.get(listChapterUrl)
  const $ = cheerio.load(data)

  const chapters = []
  $('.list.chapter-list').first().children('.list-group-item').each((i, elm) => {
    const text = $(elm).find('.chapterLabel a').first().text()
    const link = $(elm).find('.chapterLabel a').first().attr('href')
    chapters.push({ text, link })
  })

  return chapters
}

module.exports = {
  extractImages,
  listChapters
}
