var app;

app = require('angular').module('linkr');

app.constant('API_URL', require('./url'));

app.service('CrudDecorator', require('./crud_decorator'));
