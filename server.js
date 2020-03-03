require('dotenv').config();
const express = require('express');
const sendMail = require('./config-mail/mail');
const { log } = console;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/contact/api/form', (req, res) => {
  const { email } = req.body;
  const subject = req.body.name;
  const text = req.body.message;
  log(email, subject, text);
  sendMail(email, subject, text, function(err, data) {
    if (err) {
      log('ERROR: ', err);
      return res.status(500).json({ message: err.message || 'Internal Error' });
    }
    log('Email sent!!!');
    return res.json({ message: 'Form was successfully submited!' });
  });
});

const port = process.env.PORT;

app.listen(port, () => `Server running on port ${port}`);
