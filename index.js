const express = require('express')
const path = require('path')
const scrape = require("./scrape.js");
const app = express()

const port = 3000


//home route. renders the html page
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

//sends file to download
app.get('/download', async function (req, res) {
  await scrape.tocsv()
  res.sendFile(path.join(__dirname, 'test.csv'));
});

//scraping route
app.get('/scrape', async function (req, res) {
    let songs = await scrape.scrape()
    res.send(songs)
});


app.listen(process.env.PORT || 3000, () => {
  console.log(`App listening on port ${port}`)
})