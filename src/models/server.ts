import express, { Application, Router } from 'express'
import cors from 'cors'


//[FEEDBACK](correcto): Buena implementación de un modelo de servidor.
class Server {
  private app: Application
  private port: string

  constructor() {
    this.app = express()
    this.port = process.env.PORT || '3000'
    this.middlewares()
  }

  public listen() {
    this.app.listen(this.port)
  }

  private middlewares() {
    this.app.use(cors())
    this.app.use(express.json())
  }

  public router(path: string, router: Router) {
    this.app.use(path, router)
  }

  public getApp = () => this.app
  public getPort = () => this.port
}
export default Server
