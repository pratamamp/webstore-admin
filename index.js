const express = require('express')
const app = express()
const port = 6969


// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.set('views', './views')

// routes
app.use(require('./routers'))

app.listen(port, () => console.log('server is okay'))