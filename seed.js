//require db
const {db, Gardener, Plot, Vegetable} = require('./model')

const GardenerData = [
  {name: 'Grant', age: 27},
  {name: 'Rose', age: 400}
];

const PlotData = [
  {size: 34, shaded: true},
  {size: 100, shaded: false}
];

const VegetableData = [
  {name: 'Squash', color: 'Blue'},
  {name: 'Carrot', color: 'Orange'}
]

//'kick off your seed file'
db.sync({force: true})
.then(() => {
  console.log('Synced')
  const promiseForGardener  = Gardener.bulkCreate(GardenerData, {returning: true})
  const promiseForPlot      = Plot.bulkCreate(PlotData, {returning: true});
  const promiseForVegetable = Vegetable.bulkCreate(VegetableData, {returning: true});
  return Promise.all([promiseForGardener, promiseForPlot, promiseForVegetable])
})
.then((insertedData) => {
  //insertedData = return from promise.all
  const [gardener, plot, vegetable] = insertedData
  console.log('we are here')
  // console.log(gardener)
  // const [name, age] = gardener
  const [size, shaded] = plot
  //set ass'ns, run seed, check
  // const [name, color] = vegetable

  // const promise1 = grant.setGardener()
})
.catch((err) => {
  console.log(err)
})
.finally(() => {
  db.close()
})

