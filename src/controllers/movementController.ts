import { Request, Response } from 'express'
import { IRobotModel, Movement } from '../interfaces/Movement'

export class MovementController {
  private _robot: IRobotModel

  constructor(robot: IRobotModel) {
    this._robot = robot
  }
  getMovement = (req: Request<{}, {}, Movement>, res: Response): void => {
    const movement = req.body
    this._robot.move(movement)
    const robotPosition = this._robot.getPosition()
    res.status(200).send({ ok: true, body: robotPosition })
    return
  }
}
