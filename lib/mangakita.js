const axios = require('axios')
const cheerio = require('cheerio')

async function extract (url) {
  const { data } = await axios.get(url)
  const $ = cheerio.load(data)

  const images = []
  $('#readerarea').children('.mangaimg').each((i, elm) => {
    images.push(elm.attribs.src)
  })

  return images
}

module.exports = {
  extract
}
