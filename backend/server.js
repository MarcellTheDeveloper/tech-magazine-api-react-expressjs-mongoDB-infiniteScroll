const express = require('express');
const cors = require('cors');
const app = express();
const fetch = require('node-fetch');
require('dotenv').config();
// const fs = require('fs');
const apiKey = process.env.NEWS_API_KEY;
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
const Articles = require('./databaseSchema');
let fetchedNews = '';

//Mongo connect
mongoose.connect(
  'mongodb+srv://Marci:12345@marcicluster.aublm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log('Mongo db is connected');
  }
);
//Json read
// let voteDataRead = '';
// fs.readFile('data/data.json', (err, data) => {
//   if (err) throw err;
//   voteDataRead = JSON.parse(data);
// });
//Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

//Database saving/checking if data exists -> sending to the frontend
app.post('/', (req, res) => {
  Articles.findOne({ date: req.body.date }, (err, doc) => {
    if (err) throw err;
    if (doc) {
      console.log('Date already saved, getting from the database');
      res.send(doc.articles);
    }
    if (!doc) {
      fetch(
        `https://newsapi.org/v2/everything?q=technology&sortBy=publishedAt&pageSize=100&language=en&apiKey=${apiKey}`
      )
        .then((res) => res.json())
        .then((data) => {
          const newArticles = new Articles({
            date: req.body.date,
            articles: JSON.stringify(data.articles),
          });
          newArticles.save();
          res.send(JSON.stringify(data));
          console.log('New date saved into database');
        })
        .catch(function () {
          console.log('error');
        });
    }
  });
});

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
