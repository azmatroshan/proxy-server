const express = require('express');
const request = require('request');
const cors = require('cors');
const app = express();
require('dotenv').config(); 

app.use(cors());

const port = process.env.PORT;

app.use('/proxy', (req, res) => {
  const url = req.query.url;
  req.pipe(request(url)).pipe(res);
});

app.listen(port, () => {
  console.log(`Proxy server running${port}`);
});
