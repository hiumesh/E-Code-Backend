const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require('./helpers/db')
const router = require('./routes/index')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/api/v1/', router)

app.use((_, res) => {
  res.send({
    message: "Not found!",
  });
});

db.sync().then(() => {
  console.log('Connection has been established successfully.')
  app.listen(8000, (req, res) => {
    console.log("Server is listening on port 8000")
  })
}).catch((error) => {
  console.error('Unable to connect to the database:', error)
})

