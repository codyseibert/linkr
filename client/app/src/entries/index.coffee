app = require('angular').module 'linkr'

app.component 'entries', require './entries_component'
app.service 'EntriesService', require './entries_service'
