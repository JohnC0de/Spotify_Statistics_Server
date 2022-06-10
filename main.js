const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const crypto = require('crypto')
const querystring = require('querystring')

const app = express()

const randomState = () => crypto.randomBytes(8).toString('hex')

const stateKey = 'spotify_auth_state'

app.use(cors())
// .use(cookieParser())

app.get('/login', function (req, res) {
  const info = {
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    redirect_uri: process.env.REDIRECT_URI,
    response_type: 'code',
    scope: 'user-read-private user-read-email',
    state: randomState()
  }

  res.redirect(
    'https://accounts.spotify.com/authorize?' + .stringify(info)
  )
})

// app.listen(8888, () => console.log('Listening on 8888'))
