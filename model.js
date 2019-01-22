//create a sequelize instance
const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/plantr')


//defining
const Gardener = db.define('gardener', {
  name: Sequelize.STRING,
  age: Sequelize.INTEGER
})

const Plot = db.define('plot', {
  size: Sequelize.INTEGER,
  shaded: Sequelize.BOOLEAN
})

const Vegetable = db.define('vegetable', {
  name: Sequelize.STRING,
  color: Sequelize.STRING,
  planted_on: Sequelize.DATE
})
//A Plot belongs to a Gardener, and a Gardener has one Plot
Plot.belongsTo(Gardener);
Gardener.hasOne(Plot);

//A Vegetable may belong to many Plots, and a Plot has many Vegetables.
Vegetable.belongsToMany(Plot, {through: 'vegetable_plot'})
Plot.belongsToMany(Vegetable, {through: 'vegetable_plot'})

//A Gardener also belongs to a Vegetable as that gardener's favorite_vegetable
Gardener.belongsTo(Vegetable, {as: 'favorite_vegetable'})

//export
module.exports = db
