const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://medium.com/@rishi.jain_97888';

axios.get(url).then(res=>{
    const {data:html} = res;
    const $ = cheerio.load(html);

    const postTitles = $('[aria-label="Post Preview Title"]');

    postTitles.each((i, el)=>{
        const post = $(el)
        console.log(post.find('h2').text())
    })
})