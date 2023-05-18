const express = require('express');
const morgan = require('morgan');   
const handlebars = require('express-handlebars');
// const handlebars = require('handlebars/runtime')
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;


app.use(morgan('combined')); // log ra server mỗi lần request

app.use(express.static(path.join(__dirname, 'public')));

app.engine('.hbs', handlebars.engine({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// console.log('PATH:',path.join(__dirname,'resources/views'));

app.get('/', (req, res) => {
    res.render('home'); // router tới đường dẫn
});

app.get('/news', (req, res) => {
    res.render('news'); // router tới đường dẫn
});

app.listen(port, () => console.log(`Example app listening port at http://localhost:${port}`)) // nghe với port 