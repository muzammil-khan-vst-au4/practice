const express = require('express');
const app = express();
const PORT= 9090;
const exphbs = require('express-handlebars');

const hbs = exphbs.create({ 
    extname: '.hbs'
    /* config */ 
});
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

app.get('/search', function (req, res){
    res.render('homepage');
 });
 
app.get('/search/*', function(req, res) {
    var search = req.query;
 
    console.log(search, 'of type', typeof search);
    res.send("the query is about the student with name " + search.sname + ' and subject '+search.ssubject );

})

app.listen(PORT, function(req, res){
    console.log("Listening on Port: ", PORT);
});
