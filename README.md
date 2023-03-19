# Express.js REST API template

[Express.js](https://expressjs.com/) REST API project starter.

## Instalation

`git clone https://github.com/cammarb/expressjs-api.git`

`cd expressjs-api`

`yarn install`

Create a **.env** file to assign the _ATLAS_URI_ variable the value of your connection string and to the _PORT_ variable the port of your choosing.

Replace the credentials with your database, username and password in the example code:

```env
ATLAS_URI=mongodb+srv://<username>:<password>@<database>.mongodb.net/?retryWrites=true&w=majority
PORT=8800
```

## Run

### Testing/Development

`yarn dev`
