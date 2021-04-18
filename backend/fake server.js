// const express = require('express');
// const cors = require('cors');
// const app = express();
// const fetch = require('node-fetch');
// require('dotenv').config();
// const fs = require('fs');
// const apiKey = process.env.NEWS_API_KEY;
// const PORT = process.env.PORT || 5000;
// let fetchedNews = '';
// //Json read
// let voteDataRead = '';
// fs.readFile('data/data.json', (err, data) => {
//   if (err) throw err;
//   voteDataRead = JSON.parse(data);
// });
// //Middlewares
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     credentials: true,
//   })
// );
// app.post('/', (req, res) => {
//   if (err) throw err;
//   if (voteDataRead[req.body.date]) {
//     console.log('there is date');
//     res.send(voteDataRead[req.body.date]);
//   } else {
//     fetch(
//       `https://newsapi.org/v2/everything?q=technology&sortBy=publishedAt&pageSize=100&language=en&apiKey=${apiKey}`
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         voteDataRead[req.body.date] = data.articles;
//         fs.writeFile(
//           'data/data.json',
//           JSON.stringify(voteDataRead, null, 2),
//           function (err) {
//             if (err) return console.log(err);
//             console.log('JSON UPDATED');
//           }
//         );
//         res.send(voteDataRead[req.body.date]);
//         console.log('there isnt date2');
//       })
//       .catch(function () {
//         console.log('error');
//       });

//     // fs.writeFile(
//     //   'data/data.json',
//     //   JSON.stringify(voteDataRead, null, 2),
//     //   function (err) {
//     //     if (err) return console.log(err);
//     //     console.log('JSON UPDATED');
//     //   }
//     // );
//     //from=2021-03-01&to=2021-03-04&
//     res.send(voteDataRead[req.body.date]);
//   }
// });

// app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
