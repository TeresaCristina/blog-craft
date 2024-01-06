const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
const CONNECTION_STRING = process.env.CONNECTION_STRING

const indexRouter = require('./routes/index')
const postsRouter = require('./routes/posts')

const app = express()

// view engine setup to a
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

// setup connection to mongo
mongoose.connect("mongodb+srv://itchtostitchbyteresa:TCPC2024@clustercraft.tzalvgk.mongodb.net/?retryWrites=true&w=majority")
const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())

app.use('/', indexRouter)
app.use('/api/posts', postsRouter)

// Return the client
app.get('/posts*', (_, res) => {
  res.sendFile(path.join(__dirname, 'public') + '/index.html')
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app