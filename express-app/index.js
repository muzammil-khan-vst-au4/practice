const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const users = require('./Users');
const exphbs = require('express-handlebars');

//set a static folder
    //with /static prefix in url
app.use('/static', express.static(path.join(__dirname, 'public')));

/*     //without prefix in url
app.use(express.static(path.join(__dirname, 'public')));    
*/
//create instance allowing access to full API
const hbs = exphbs.create({ 
    extname: '.hbs'
    /* config */ 
    });

//For changing extension name
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');


/* //Init handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
 */

//render handlebars homepage
app.get('/', function(req,res) {
    res.render('home', {
        title: 'Users App',
        users
    });
})

//get all users
app.get('/api/users', function(req, res) {
   res.json(users); 
});


//default homepage
/* app.get('/', (req, res) => {
    console.log(req.query)
    res.send('Hello World!')

}) */

app.listen(port, () => console.log(`Example app listening on port ${port}!`))