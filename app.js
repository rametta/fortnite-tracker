require('dotenv').config()

const express = require('express')
const proxy = require('express-http-proxy')
const helmet = require('helmet')
const compression = require('compression')

const app = express()
const dist = process.env.DIST_ROOT
const proxyUrl = process.env.API_PROXY
const port = process.env.PROXY_PORT

// Endpoints that start like this will be proxyed to the API server
const proxyPaths = ['/v1']

app
  .use(helmet()) // Applies security precautions
  .use(compression()) // gzip compress
  .use('/', express.static(__dirname + dist))
  .get('/ApiHost', (req, res) => res.json({ ApiHost: proxyUrl }))
  .use(
    proxyPaths,
    proxy(proxyUrl, {
      proxyReqPathResolver: (req, res) => req.originalUrl
    })
  )
  .use('*', (req, res, next) => {
    res.sendFile(__dirname + dist + '/index.html')
  })
  .listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
  })
