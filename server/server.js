const express = require('express');
const bodyParser = require('bodyParser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.set('port', process.env.PORT || 3001);

if (process.env.PORT == 'production') {
    app.use(express.static('../build'));
}

app.use('/api', require('./routes'));

app.listen(app.get('port'), () => {
    console.log('Find the server at ' + app.get('port'));
})