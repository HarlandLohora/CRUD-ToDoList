const express = require('express');
const morgan  = require('morgan');
const bodyParser = require('body-parser');
const app     = express();

app.set('port', process.env.port || 3000);
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));

app.listen(3000, () => {
  console.log('Connect on port ' + app.get('port'));
})
