const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
//var PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'notes.html')));

//start server
app.listen(PORT, () => console.log(`App listening on PORT http://localhost:${PORT}`));
