const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.set('port', process.env.PORT || 3001);

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, './../build')));
}

app.use('/api', require('./routes'));

app.get('*', (err, res) => { res.sendFile(path.join(__dirname, './../build/index.html'))})

app.listen(app.get('port'), () => {
    console.log('Find the server at ' + app.get('port'));
})