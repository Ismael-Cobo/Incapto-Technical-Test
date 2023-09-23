import dotenv from 'dotenv'
import Server from './models/server'
import { createMovementRouter } from './routes/movementRoutes'
import { Robot } from './models/Robot'
dotenv.config()

const app = new Server()
const robot = new Robot()

app.listen()
app.router('/', createMovementRouter(robot))

export default app
