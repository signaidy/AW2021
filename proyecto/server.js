const express = require('express');
const cors = require('cors');
const app = express();
const basicAuth = require('express-basic-auth');

app.use(cors());

app.use('/login', (req, res) => {
    res.send({
      token: 'test123'
    });
});


app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));