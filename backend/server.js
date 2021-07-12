require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.set('json spaces', 2);
const port = process.env.PORT || 3001;

app.use(cors());
app.all('/*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

module.exports = app;
console.log(`Listening on port ${port}`);
app.listen(port);
