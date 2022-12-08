const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    var a = 2;
    var b = 1;
    var c = a + b;
  res.send('Hello ')
})
//ip: 127.0.0.1 -> local host
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
