import { Router } from 'express'
import { MovementController } from '../controllers/movementController'
import { IRobotModel } from '../interfaces/Movement'

export const createMovementRouter = (robot: IRobotModel): Router => {
  const router = Router()

  const movementController = new MovementController(robot)

  router.get('/getMovement', movementController.getMovement)

  return router
}
