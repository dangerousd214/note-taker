//required nodes
const express = require('express');
const path = require('path');

// Tells node that this is an Express server
const app = express();

// setting port for server
const PORT = process.env.PORT || 3001;

// sets up Express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// server route map
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);


// sets up the listening port
app.listen(PORT, () => {
    console.log(`App is listening on PORT http://localhost:${PORT}`);
});