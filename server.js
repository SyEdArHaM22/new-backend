const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  {
    res.status(200).send("Hello from the Srever!");
  } 
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  `Server is Running on port ${port}`
});