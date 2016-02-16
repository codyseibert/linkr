app = require('./app')

entriesController = require('./controllers/entries_controller')

module.exports = do ->
  app.get '/entries', entriesController.index
  app.get '/entries/:id', entriesController.show
  app.post '/entries', entriesController.post
  app.put '/entries/:id', entriesController.put
  app.delete '/entries/:id', entriesController.destroy
