import 'reflect-metadata'

import express, { Response, Request } from 'express'

import cors from 'cors'
import consola from 'consola'

import { AppError } from './errors/AppError'
import router from './routes/router'

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)

app.use((err: Error, _: Request, response: Response) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message,
    })
  }

  return response.status(500).json({
    status: 'error',
    message: `Internal server error - ${err.message}`,
  })
})

app.listen(3333, () => {
  consola.info('server running on port 3333 🚀')
})
