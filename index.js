const express = require('express')
const app = express()

var bodyParser = require('body-parser')
var cors = require('cors')

var jsonParser = bodyParser.json()

var urlencodeParser = bodyParser.urlenconded ({ extended: false })
const port = 3000


app.use(cors())
app.use(jsonParser);
app.use(urlencodeParser);

app.get('/', (req, res) => {
  res.json('Hello World!')
})

app.post('/login', (req, res) => {

    const username = 'jane'
    const password = '12345678'

    if (req.body.username === username) {
      if (req.body.password === password){
        res.json({
          status: 'succes'
        })
      } else {
        res.json({
          status: 'error, wrong password'
        })
      }
    } else {
      res.json({
        status: 'error, username not found'
      })
    }
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})