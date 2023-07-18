const express = require('express');
const expressLayouts = require('express-ejs-layouts');

// Constants
const PORT = process.env.PORT;
const HOST = process.env.HOST;

const app = express();

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use(expressLayouts);
app.set('layout', './layouts/full-width');
app.set('view engine', 'ejs');

const links = [
    {path: "", name: "Home"},
    {path: "about", name: "About"},
    {path: "projects", name: "Projects"}
];

app.get('/', (req, res) => {
    res.render('index', { title: 'Angel Dimitrov - SWE', layout: './layouts/sidebar', links });
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Page', layout: './layouts/sidebar', links })
})

app.listen(PORT, HOST, () => { console.info(`Listening on http://${HOST}:${PORT}`) });