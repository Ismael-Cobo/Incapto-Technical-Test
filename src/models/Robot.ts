import { RobotModel } from '../controllers/movementController'
import {
  DirectionViewModel,
  GridPositionModel,
  ValidViewsModel,
  RobotPositionModel,
  Movement,
  MovementRotation,
  MovementKeyword,
} from '../interfaces/Movement'

export class Robot implements RobotModel {
  private readonly INITIAL_VIEW: DirectionViewModel = 'N'
  private readonly INITIAL_GRID_POSITION: GridPositionModel = { x: 0, y: 0 }
  private readonly validViews: ValidViewsModel = {
    L: 'L',
    M: 'M',
    R: 'R',
  }
  private readonly MINIMUM_GRID_VALUE: number = 0
  private readonly MAXIMUM_GRID_VALUE: number = 9
  private readonly MOVEMENT_PER_ACTION: number = 1
  private position: RobotPositionModel = {
    view: this.INITIAL_VIEW,
    position: this.INITIAL_GRID_POSITION,
  }

  constructor() {}

  public move({ movement }: Movement): void {
    const movementToArray = movement.toUpperCase().split('')

    this.position = {
      position: { x: 0, y: 0 },
      view: 'N',
    }

    movementToArray.forEach((value) => {
      const { position, view } = this.position
      const keyword =
        this.validViews[value as MovementRotation | MovementKeyword]

      if (keyword === undefined) return

      if (keyword === 'L') {
        if (view === 'N') {
          this.position.view = 'W'
          return
        }
        if (view === 'S') {
          this.position.view = 'E'
          return
        }
        if (view === 'E') {
          this.position.view = 'N'
          return
        }
        if (view === 'W') {
          this.position.view = 'S'
          return
        }
        return
      }
      if (keyword === 'R') {
        if (view === 'N') {
          this.position.view = 'E'
          return
        }
        if (view === 'S') {
          this.position.view = 'W'
          return
        }
        if (view === 'E') {
          this.position.view = 'S'
          return
        }
        if (view === 'W') {
          this.position.view = 'N'
          return
        }
        return
      }

      if (keyword === 'M') {
        let nextX = position.x
        let nextY = position.y

        if (view === 'N') {
          this.position.position.y =
            nextY + this.MOVEMENT_PER_ACTION > this.MAXIMUM_GRID_VALUE
              ? this.MINIMUM_GRID_VALUE
              : nextY + this.MOVEMENT_PER_ACTION
          return
        }
        if (view === 'S') {
          this.position.position.y =
            nextY - this.MOVEMENT_PER_ACTION < this.MINIMUM_GRID_VALUE
              ? this.MAXIMUM_GRID_VALUE
              : nextY - this.MOVEMENT_PER_ACTION
          return
        }
        if (view === 'E') {
          this.position.position.x =
            nextX + this.MOVEMENT_PER_ACTION > this.MAXIMUM_GRID_VALUE
              ? this.MINIMUM_GRID_VALUE
              : nextX + this.MOVEMENT_PER_ACTION
          return
        }
        if (view === 'W') {
          this.position.position.x =
            nextX - this.MOVEMENT_PER_ACTION < this.MINIMUM_GRID_VALUE
              ? this.MAXIMUM_GRID_VALUE
              : nextX - this.MOVEMENT_PER_ACTION
          return
        }

        return
      }
    })
  }

  public getPosition = (): RobotPositionModel => this.position
}
