import Server from '../../models/server'

describe('Server class', () => {
  const OLD_ENV = process.env
  beforeEach(() => {
    jest.resetModules()
    process.env = { ...OLD_ENV }
  })

  afterAll(() => {
    process.env = OLD_ENV
  })

  test('should use the port defined in .env if available', () => {
    process.env.PORT = '4000'
    const app = new Server()

    expect(app.getPort()).toBe('4000')
  })
  test('should use the default port (3000) if .env PORT is not defined', () => {
    const app = new Server()

    expect(app.getPort()).toBe('3000')
  })
  test('should use the default port (3000) if .env PORT is an empty string', () => {
    process.env.PORT = ''
    const app = new Server()

    expect(app.getPort()).toBe('3000')
  })
})
