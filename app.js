const Koa = require('koa')
const app = new Koa()
const router = require('./routers/index')
const apirouter = require('./routers/api')
const backend = require('./routers/backend')
const publicrouter = require('./routers/public')
const middleware = require('./middleware')
const config = require('./config')

middleware(app)
publicrouter(app)
router(app)
apirouter(app)
backend(app)


app.listen(config.port, () => {
  console.log('server is running at http://localhost:3080')
})