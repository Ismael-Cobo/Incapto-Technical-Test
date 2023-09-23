# API de Control de Movimiento de Robot

Este repositorio contiene una API diseñada para controlar un robot capaz de analizar el terreno y generar una vista 3D a partir de fotos tomadas. La API permite mover al robot mediante comandos y proporciona la posición y dirección finales del robot después de recibir una secuencia de movimientos.

## Uso

## 🚀 Instalación

1. Clona este repositorio a tu máquina local:

```bash
git clone https://github.com/tuusuario/nombre-del-repo.git
```

2. Instala las dependencias:

```bash
npm install
```

## 💻 Ejecución

```bash
npm start
```

## 📡 API Endpoints

`GET /getMovement`: Este endpoint permite enviar comandos de movimiento al robot. Los comandos se envían en el cuerpo de la solicitud y la API devuelve la posición y dirección finales del robot.

Ejemplo de la solicitud:

```bash
curl -X GET http://localhost:3000/getMovement -H "Content-Type: application/json" -d '{"movement": "LMMMRMMRRMMMMML"}'
```

Ejemplo de la respuesta:

```json
{
  "ok": true,
  "result": "7:7:E"
}
```

## ✅ Testing

`Run unit tests with Jest and Supertest`

```bash
npm run test
```
