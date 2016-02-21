app = require('angular').module 'linkr'

app.directive 'entries', require './entries_directive'
app.service 'EntriesService', require './entries_service'
