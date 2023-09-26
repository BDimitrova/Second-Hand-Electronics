const express = require('express');

const app = express();
const { PORT } = require('./constants');
const routes = require('./routes');

require('./config/hbsConfig')(app);
require('./config/expressConfic')(app);

app.use(routes);

app.listen(PORT, () => console.log(`The app is running on port ${PORT}...`));