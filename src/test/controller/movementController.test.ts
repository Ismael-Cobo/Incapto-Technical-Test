import request from 'supertest'
import app from '../..'

const API_URL = '/getMovement'

describe('Robot movement API', () => {
  let application = app.getApp()

  test('should calculate the final position correctly with a complex sequence of motions', async () => {
    const response = await request(application).get(API_URL).send({
      movement: 'LMMMRMMRRMMMMML',
    })
    const result = { ok: true, result: '7:7:E' }
    expect(response.text).toBe(JSON.stringify(result))
  })

  test('should have an initial position at 0:0:N when no movement is provided.', async () => {
    const response = await request(application).get(API_URL).send({
      movement: '',
    })
    const result = { ok: true, result: '0:0:N' }
    expect(response.text).toBe(JSON.stringify(result))
  })
})
