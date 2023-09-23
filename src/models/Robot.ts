import {
  DirectionViewModel,
  GridPositionModel,
  ValidViewsModel,
  RobotPositionModel,
  Movement,
  MovementRotation,
  MovementKeyword,
  DirectionViewModelObject,
  IRobotModel,
} from '../interfaces/Movement'

export class Robot implements IRobotModel {
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
      const { view } = this.position
      const keyword =
        this.validViews[value as MovementRotation | MovementKeyword]

      if (keyword === undefined) return

      if (keyword === 'L' || keyword === 'R') {
        const leftTurns: DirectionViewModelObject = {
          N: 'W',
          W: 'S',
          S: 'E',
          E: 'N',
        }
        const rightTurns: DirectionViewModelObject = {
          N: 'E',
          E: 'S',
          S: 'W',
          W: 'N',
        }

        this.position.view =
          keyword === 'L' ? leftTurns[view] : rightTurns[view]
      }

      if (keyword === 'M') {
        this.calculatePosition()
        return
      }
    })
  }

  public getPosition = (): RobotPositionModel => this.position

  private calculatePosition = (): void => {
    const { position, view } = this.position

    const xPlusAction = position.x + this.MOVEMENT_PER_ACTION
    const xMinusAction = position.x - this.MOVEMENT_PER_ACTION
    const yPlusAction = position.y + this.MOVEMENT_PER_ACTION
    const yMinusAction = position.y - this.MOVEMENT_PER_ACTION

    if (view === 'N') {
      this.position.position.y =
        yPlusAction > this.MAXIMUM_GRID_VALUE
          ? this.MINIMUM_GRID_VALUE
          : yPlusAction
      return
    }
    if (view === 'S') {
      this.position.position.y =
        yMinusAction < this.MINIMUM_GRID_VALUE
          ? this.MAXIMUM_GRID_VALUE
          : yMinusAction
      return
    }
    if (view === 'E') {
      this.position.position.x =
        xPlusAction > this.MAXIMUM_GRID_VALUE
          ? this.MINIMUM_GRID_VALUE
          : xPlusAction
      return
    }
    if (view === 'W') {
      this.position.position.x =
        xMinusAction < this.MINIMUM_GRID_VALUE
          ? this.MAXIMUM_GRID_VALUE
          : xMinusAction
      return
    }
  }
}
