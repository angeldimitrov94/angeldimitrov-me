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

function buildRenderLocals(title) {
    return { title, layout: './layouts/sidebar', links };
}

app.get('/', (req, res) => {
    res.render('home', buildRenderLocals('Angel Dimitrov - SWE'));
})

app.get('/about', (req, res) => {
    res.render('about', buildRenderLocals('About'))
})

app.get('/projects', (req, res) => {
    res.render('projects', buildRenderLocals('Projects'))
})

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
    res.status(404).render('404', buildRenderLocals('Page not found'))
  });

app.listen(PORT, HOST, () => { console.info(`Listening on http://${HOST}:${PORT}`) });