import { Router } from 'express'
import { MovementController } from '../controllers/movementController'
import { IRobotModel } from '../interfaces/Movement'

export const createMovementRouter = (robot: IRobotModel): Router => {
  const router = Router()

  const movementController = new MovementController(robot)

  //[FEEDBACK](error): segun la documentación el endpoint a usar es un GET, pero este endpoint es un POST, por lo tanto está mal 
  //tanto la documentación como el nombre del endpoint.
  //Además No se ha planteado una estructura de endpoints que permita una facil escalabilidad y posterior versionado
// Ej: se debería definir una estructura basada en entry_point/version/modelo/feature -> api/v1/robot/move
  router.post('/getMovement', movementController.getMovement)

  return router
}
