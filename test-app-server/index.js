const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => {
  response.send('Hello from Signapps!')
})

app.listen(port, (err) => {
    console.log(`Signapps test app listening at http://localhost:${port}`)
  if (err) {
    return console.log('out of cheese error, redo from start: : ', err)
  }
})

app.use((err, request, response, next) => {
  console.log('Internal Server Error: ', err)
  response.status(500).send('Oh no, something fell over: ', err)
})