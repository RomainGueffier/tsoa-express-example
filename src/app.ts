import express, { json, urlencoded } from 'express'
import { RegisterRoutes } from '../.tsoa/routes.js'
import swaggerUI from 'swagger-ui-express'
import swaggerJson from '../.tsoa/swagger.json' assert { type: 'json' }

export const app = express()

// Use body parser to read sent json payloads
app.use(
  urlencoded({
    extended: true,
  })
)
app.use(json())

RegisterRoutes(app)

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerJson))

app.get('/', (_, res) => {
  res.json('Welcome to your Tsoa-Express-Swagger app')
})
