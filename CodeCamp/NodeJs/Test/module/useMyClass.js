const mc = require('./myClass.js')
const rd = require('./myUtil.js')

let a = new mc.Human('Nuttakrit',)
a.info()
a = new mc.Human('Chulabha',26)
a.info()
a = new mc.Human('Chulabha',rd.getRandom(25,50))
a.info()
