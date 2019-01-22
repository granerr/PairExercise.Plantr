//require db
const db = require('./model')

//'kick off your seed file'
db.sync({force: true})
.then(() => {
  console.log('Synced')
})
.catch((err) => {
  console.log(err)
})
.finally(() => {
  db.close()
})

