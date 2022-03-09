//this file containes two main methods .
// scrape method scraps data from howe
//tocsv method creates a file which will be dowloaded

const axios = require("axios");
const cheerio = require("cheerio");
const ObjectsToCsv = require('objects-to-csv');
const db = require("./db.js")

const url = 'https://www.howwebiz.ug/hot100'




// let sql = 'CREATE TABLE music ( artist varchar(25), title varchar(25), image varchar(355), rank int, date DATE)'
// db.run(sql)

// function wc makes a csv file from the database . this file will be downloaded 
async function tocsv() {
    let sql = "SELECT * FROM music"
    db.all(sql, [], async(err, data) => {
        if (err) {
            throw err;
        }
        const csv = new ObjectsToCsv(data);
 
        // Save database to file:
        await csv.toDisk('./test.csv');

    });
  
 
}

//function which scrapes data
async function scrape() {
    
    // fetch and parse html from website
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    //select the part of interest (songs)
    const listItems = $(".w-full .pt-3");

    top100 = []

    //loop through each div getting the required information
    listItems.each((i, el) => {
        let image = $(el).find("a > div:eq(1) ").find('img').attr('src');
        let title = $(el).find("a > div:eq(2)").find('span:eq(0)').text();
        let artist = $(el).find("a > div:eq(2)").find('span:eq(1)').text();
        let rank = i+1

        // check if the data we are scrapping is available in the database
        let inDB = false
        let sql1 = 'SELECT EXISTS(SELECT * FROM music WHERE date = CURRENT_TIMESTAMP LIMIT 1);'

        db.all(sql1, [], (err, rows) => {
        if (err) {
            throw err;
            }
            if (rows.length == 1) {
                inDB = true
            } else {
                inDB = false
            }
        });

        // add data to database only if its not already there
        if (inDB) {
            let sql = `INSERT INTO music values("${artist}","${title}","${image}",${rank},CURRENT_TIMESTAMP)`
            db.all(sql, [], (err, rows) => {
                if (err) {
                    throw err;
                }       
            });
        }
        let song  = {rank:i+1,image,title,artist}
        top100.push(song)
    })
    
    return top100

}

module.exports = { scrape, tocsv }