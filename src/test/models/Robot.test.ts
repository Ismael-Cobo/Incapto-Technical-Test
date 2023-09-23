import { Robot } from '../../models/Robot'

describe('Robot movement Class', () => {
  const robot = new Robot()

  test('should move one square', () => {
    robot.move({ movement: 'M' })
    const actual = robot.getPosition()
    const result = { position: { x: 0, y: 1 }, view: 'N' }
    expect(JSON.stringify(actual)).toBe(JSON.stringify(result))
  })

  test('should turn to left', () => {
    robot.move({ movement: 'L' })
    const actual = robot.getPosition()
    const result = { position: { x: 0, y: 0 }, view: 'W' }
    expect(JSON.stringify(actual)).toBe(JSON.stringify(result))
  })

  test('should turn to right', () => {
    robot.move({ movement: 'R' })
    const actual = robot.getPosition()
    const result = { position: { x: 0, y: 0 }, view: 'E' }
    expect(JSON.stringify(actual)).toBe(JSON.stringify(result))
  })

  test('should be in the same position and view', () => {
    robot.move({ movement: 'QWETYUI' })
    const actual = robot.getPosition()
    const result = { position: { x: 0, y: 0 }, view: 'N' }
    expect(JSON.stringify(actual)).toBe(JSON.stringify(result))
  })

  test('should reflect the sequence of movements', () => {
    robot.move({ movement: 'LMRMM' })
    const actual = robot.getPosition()
    const result = { position: { x: 9, y: 2 }, view: 'N' }
    expect(JSON.stringify(actual)).toBe(JSON.stringify(result))
  })

  test('should reflect the sequence of movements across the y grid edge', () => {
    robot.move({ movement: 'MMMMMMMMMM' })
    const actual = robot.getPosition()
    const result = { position: { x: 0, y: 0 }, view: 'N' }
    expect(JSON.stringify(actual)).toBe(JSON.stringify(result))
  })

  test('should reflect the sequence of movements across the x grid edge', () => {
    robot.move({ movement: 'RMMMMMMMMMML' })
    const actual = robot.getPosition()
    const result = { position: { x: 0, y: 0 }, view: 'N' }
    expect(JSON.stringify(actual)).toBe(JSON.stringify(result))
  })

  test('should reflect the sequence of complex movements', () => {
    robot.move({ movement: 'LMMMRMMRRMMML' })
    const actual = robot.getPosition()
    const result = { position: { x: 7, y: 9 }, view: 'E' }
    expect(JSON.stringify(actual)).toBe(JSON.stringify(result))
  })

  test('should be default value  if nothing passed', () => {
    robot.move({ movement: '' })
    const actual = robot.getPosition()
    const result = { position: { x: 0, y: 0 }, view: 'N' }
    expect(JSON.stringify(actual)).toBe(JSON.stringify(result))
  })

  test('should have the same view if rotate 360 from  right', () => {
    robot.move({ movement: 'RRRR' })
    const actual = robot.getPosition()
    const result = { position: { x: 0, y: 0 }, view: 'N' }
    expect(JSON.stringify(actual)).toBe(JSON.stringify(result))
  })

  test('should have the same view if rotate 360 from  left', () => {
    robot.move({ movement: 'LLLL' })
    const actual = robot.getPosition()
    const result = { position: { x: 0, y: 0 }, view: 'N' }
    expect(JSON.stringify(actual)).toBe(JSON.stringify(result))
  })
})
