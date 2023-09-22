import express, { Application, Router } from 'express'
import cors from 'cors'

class Server {
  private app: Application
  private port: string

  constructor() {
    this.app = express()
    this.port = process.env.PORT || '3000'
    this.middlewares()
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running at ${process.env.API_URL}${this.port}`)
    })
  }

  public middlewares() {
    this.app.use(cors())
    this.app.use(express.json())
  }

  public router(path: string, router: Router) {
    this.app.use(path, router)
  }
}
export default Server
