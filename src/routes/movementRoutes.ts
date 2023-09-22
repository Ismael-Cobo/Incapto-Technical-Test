import { Router } from 'express'
import {
  MovementController,
  RobotModel,
} from '../controllers/movementController'

export const createMovementRouter = (robot: RobotModel): Router => {
  const router = Router()

  const movementController = new MovementController(robot)

  router.get('/getMovement', movementController.getMovement)

  return router
}
