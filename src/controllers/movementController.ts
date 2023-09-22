import { Request, Response } from 'express'
import { Movement, RobotPositionModel } from '../interfaces/Movement'

export class MovementController {
  private _robot: RobotModel

  constructor(robot: RobotModel) {
    this._robot = robot
  }

  getMovement = (req: Request, res: Response) => {
    const movement = req.body as Movement
    this._robot.move(movement)
    const robotPosition = this._robot.getPosition()
    return res.status(200).send({ ok: true, body: robotPosition })
  }
}

export interface RobotModel {
  move: ({ movement }: Movement) => void
  getPosition: () => RobotPositionModel
}
