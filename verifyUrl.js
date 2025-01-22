const axios = require('axios');
const cheerio = require('cheerio');

async function verifyTitle (url) {
    await axios.get(url)
    .then(response =>  {
        const html = response.data
        const $ = cheerio.load(html) //lưu data trả về vào $ để query sau đó
        const title = $('#pageTitle').text(); //ở vị trí css để lấy ra title
        console.log(`title : ${title}`);

        $('h2').each((index, element) => {
            console.log(`Item ${index + 1}: `, $(element).text())
        })
    })
    .catch(error => {
        console.error(error);
    })
}
verifyTitle('https://www.facebook.com/?locale=vi_VN')

