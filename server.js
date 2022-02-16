// --------------- SERVER STARTING AT PORT 3000 ---------------
const express = require('express')
const app = express()
const port = 3000


// --------------- MIDDLEWARE ---------------
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})