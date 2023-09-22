export interface Movement {
  movement: string
}

export type DirectionViewModel = 'N' | 'S' | 'E' | 'W'
export type MovementRotation = 'L' | 'R'
export type MovementKeyword = 'M'
export type GridPositionModel = { x: number; y: number }

export interface RobotPositionModel {
  view: DirectionViewModel
  position: GridPositionModel
}

export type ValidViewsModel = {
  [key in MovementRotation | MovementKeyword]:
    | MovementRotation
    | MovementKeyword
}
