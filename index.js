'use strict'

const { app, mongoose } = require('./app.js')

// Assigned port
app.set('port', process.env.PORT || 8081)

mongoose.connect('mongodb://localhost/kiosco')
  .then(db => console.log('La BD fue conectada'))
  .catch(err => console.error(err))

app.listen(app.set('port'), () =>
{
  console.log('Servidor escuchando el puerto:', app.set('port'))
})