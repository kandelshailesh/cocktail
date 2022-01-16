require('dotenv').config();
const express = require('express');
const cors = require('cors');
const route = require('./routes');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/v1', route);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('listening on port ' + port);
});
