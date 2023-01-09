const path = require('path');
const express = require('express');
const morgan = require("morgan");
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
// http longer
app.use(morgan('combined'))

app.use(express.static(path.join(__dirname, 'public')));
// Template engine
// định nghĩa 'handlebar' handlebar
app.engine('handlebars',handlebars.engine())
app.set('view engine','handlebars')
app.set('views','./src/resources/views')

// set đặt ứng dụng của bạn sử dụng view engine chính là handlebar
console.log(__dirname)
app.get('/', (req, res) => {
   res.render('home')
  
})
app.get('/new', (req, res) => {
  res.render('new')
 
})
//ip: 127.0.0.1 -> local host
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
