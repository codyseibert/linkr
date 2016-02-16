Promise = require 'bluebird'
Entry = require '../models/entry'
_ = require 'underscore'

module.exports = do ->

  index = (req, res) ->
    for key, val of req.query
      if val is 'null'
        req.query[key] = null
        
    Entry.findAll where: req.query
      .then (entryies) ->
        res.status 200
        res.send entryies

  show = (req, res) ->
    Entry.findById req.params.id
      .then (entry) ->
        res.status 200
        res.send entry

  put = (req, res) ->
    Entry.findById req.params.id
      .then (entry) ->
        entry = _.extend entry, req.body
        entry.save().then ->
          res.status 200
          res.send entry

  post = (req, res) ->
    Entry.create req.body
      .then (entry) ->
        Entry.findById entry.id
          .then (entry) ->
            res.status 200
            res.send entry

  destroy = (req, res) ->
    Entry.findById req.params.id
      .then (entry) ->
        if not entry?
          res.status 400
          res.send 'entry not found'
        else
          entry.destroy().then (entry) ->
            res.status 200
            res.send entry

  index: index
  show: show
  put: put
  post: post
  destroy: destroy
