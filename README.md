# Scrapping Tool project

This is a simple scrapping project made using express.js

## Link to project

The live project can be found [here](https://my-scraptool.herokuapp.com/) or
https://my-scraptool.herokuapp.com/

## Description

- This project scraps the top 100 music chart from [howeebiz.ug](https://www.howwebiz.ug/hot100).

- The Tool stores the data in an SQLite database when ever one visits the page to scrap data.

- you can also downloasd data from the database on the site. this gives you a copy of the database in csv format.

The CSV file downloaded will be in this format below.

| artist            | title              | image                                                             | rank | date                |
| ----------------- | ------------------ | ----------------------------------------------------------------- | ---- | ------------------- |
| sheebah           | sheeNkwata Bulunji | https://cdn.howwebiz.ug/_sng_cvrs_/_180_/nkaw_1646263684.webp     | 1    | 2022-03-09 14:47:08 |
| An-Known Prosper  | Omega              | https://cdn.howwebiz.ug/_sng_cvrs_/_180_/nkaw_1646263684.webp     | 2    | 2022-03-09 14:47:08 |
| Kataleya & Kandle | Do me              | https://cdn.howwebiz.ug/_sng_cvrs_/_180_/howwebiz_1638994190.webp | 3    | 2022-03-09 14:47:08 |

## Run project locally

You need node to run this project

```

git clone https://github.com/bdllhdrss3/scraptool.git
cd scraptool
npm install
npm run serve

```

## Creators

- Abdallah Idriss Lutaaya


