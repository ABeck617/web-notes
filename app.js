const express = require('express')
const app = express()

app.use('/css', express.static('css'));

const port = 3000

const myNotes = [
    'http is a protocol',
    'http requests have a url, method, header, and body',
    'I like tomatoes'
  ];

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/notes', (req, res) => { 
    myNotes.push(req.body.note);
    res.redirect('/');
  });


// app.get('/', (req, res) => res.send('Hello World!'))
//app.use('/', express.static('views'));
app.get('/', (req, res) => {
    res.render('notes.ejs', { notes: myNotes });
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))