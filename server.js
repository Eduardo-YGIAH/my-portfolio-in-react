const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/contact/api/form', (req, res) => {
  console.log('Body:', req.body);

  res.status(200).send({ msg: 'data received by server' });
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
