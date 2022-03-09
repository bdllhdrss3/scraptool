// this file establishes cinnection to the databse. it is imported in all files which need database connection
const sqlite3 = require('sqlite3').verbose();

// open database on disk
let db = new sqlite3.Database('./music.db', (err) => {
  if (err) {
    console.error(err.message);
    }
    
  console.log('Connected to the music database.');
});

module.exports = db






// let sql = 'DELETE  FROM music where artist="abu"'
// let sql1 = 'SELECT EXISTS(SELECT * FROM music WHERE date = CURRENT_TIMESTAMP LIMIT 1);'
// db.all(sql, [], (err, rows) => {
//   if (err) {
//     throw err;
//   }
//   console.log("Success")

// });