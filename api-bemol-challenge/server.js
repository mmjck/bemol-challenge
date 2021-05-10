
const express = require('express')
const cors = require('cors')
const database = require('./src/database/connection');
const router = require("./src/config/routes");

const app = express()
app.use(cors())

app.use(express.json());
app.use(router);


database.then(async (_) => {
  try {

    app.listen(9000, () => console.log('Server ativo na porta 9000'));

  } catch (error) {
    throw error;
  }
}).catch(() => {
  console.log('Sometime is wrong');
})

