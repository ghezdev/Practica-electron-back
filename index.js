const express = require('express')
const app = express()

app.set('port', process.env.PORT || 8081)

app.get('/', (req, res) =>
{
  res.send('Hello World!');
})

app.listen(app.set('port'), () =>
{
  console.log('Servidor escuchando el puerto:', app.set('port'))
})