const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3000
const staticPath = path.join(__dirname, './build')

// Middleware and setup
app
  .use(express.static(staticPath))

app
  .get('*', (req, res) => {
    res.sendFile(`${staticPath}/index.html`)
  })

app.listen(PORT, () => {
  console.log(`App is listening on PORT:${PORT}`)
})
