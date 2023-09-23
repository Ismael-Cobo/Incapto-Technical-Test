# Robot Movement Control API

This repository contains an API designed to control a robot capable of analyzing the terrain and generating a 3D view from photos taken. The API allows to move the robot by commands and provides the final position and direction of the robot after receiving a sequence of movements.

## 🚀 Instalation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/tuusuario/nombre-del-repo.git
```

2. Install the dependencies:

```bash
npm install
```

## 💻 Execution

```bash
npm start
```

## 📡 API Endpoints

`GET /getMovement`: This endpoint allows to send movement commands to the robot. The commands are sent in the body of the request and the API returns the final position and direction of the robot.

Example of the request:

```bash
curl -X GET http://localhost:3000/getMovement -H "Content-Type: application/json" -d '{"movement": "LMMMRMMRRMMMMML"}'
```

Example of the response:

```json
{
  "ok": true,
  "result": "7:7:E"
}
```

## ✅ Testing

### Unit tests

`Run unit tests with Jest and Supertest`

```bash
npm run test
```

### Code Coverage

We maintain a high level of code coverage in this project to ensure the reliability of our code. Currently, our unit tests provide 100% code coverage, meaning that every line of code is tested.

To generate a code coverage report and check the coverage details, you can use the following command:

```bash
npm run test:coverage
```
