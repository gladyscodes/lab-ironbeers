// Call express library
const express = require('express');
const app = express();

// Express can read =
const bodyParser = require("body-parser")
app.use(bodyParser.json());

app.listen(3000, () => console.log("app listening on port 3000"));

const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const punkAPI = new PunkAPIWrapper();

// Routes

app.get('/', (req, res, next) => {
  res.status(200).json({message:"todo esta bien"})
});

app.get("/beers", (req, res) => {
  punkAPI
  .getBeers()
  .then(beers => {
    res.status(200).json({new:beers})
  })
  .catch(error => {
    console.log(error);
  });
})

app.get("/random-beers", (req, res) => {
  res.json(req.params);
})