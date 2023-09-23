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
    const { position, view } = this._robot.getPosition()
    const { x, y } = position
    res.status(200).send({ ok: true, result: `${x}:${y}:${view}` })
    return
  }
}
