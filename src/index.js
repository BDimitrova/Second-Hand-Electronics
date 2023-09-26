const express = require('express');

const app = express();
const port = 3000;

require('./config/hbsConfig')(app);
require('./config/expressConfic')(app);

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(port, () => console.log(`The app is running on port ${port}...`));