const db = require('../models');
const mongoose = require("mongoose")

module.exports = {
  findAll: function (req, res) {
    db.Campaign
      .find({ _id: req.params.id})
      .then(dbCampaign => res.json(dbCampaign))
      .catch(err => res.status(502).json(err))
  },
  create: function (req, res) {
    db.Campaign
      .create(req.body)
      .then(results => res.json(results))
      .catch(err => res.status(502).json(err))
  },
  viewCampaign: (req, res) => {
    db.Campaign.findOne({ _id: req.params.id })
    .populate("characters")
    .then(function (foundOne) {
      res.json(foundOne)
    })
    .catch(function (err) {
      res.json(err)
    })
  },
  createCampaign: (req, res) => {
    let data = req.body
    console.log(data)
    db.Campaign.create({
      name: data.name,
      DM: data.userId
    })
    .then(function (dbCampaign) {
      // console.log(dbCampaign)
      db.User.findOneAndUpdate({ _id: mongoose.Types.ObjectId(data.userId) }, { $push: { 'campaigns': [dbCampaign._id] } }, { "new": true, "upsert": true })
      .then(res.json(dbCampaign));
    })
    .catch(function (err) {
      res.json(err)
    })
  },
  update: (req, res) => {
    db.Campaign
      .findOneAndUpdate({_id: req.body.id}, { $push: { 'users': [req.body.userId]}}, { "new": true, "upsert": true })
      .then(updated => res.json(updated))
      .catch(err => res.status(502).json(err))
  },
  addNote: (req, res) => {
    let data = req.body
    db.Note.create({
      author: data.name,
      note: data.note
    })
    .then(function (dbNote) {
      db.Campaign.findOneAndUpdate({ _id: mongoose.Types.ObjectId(data.id) }, { $push: { 'notes': [dbNote._id] } }, { "new": true, "upsert": true })
    .then(function (dbCampaign) {
      res.json(dbCampaign)
    })
  })
    .catch(function (err) {
      res.json(err)
    })
  },
  populateCharacter: (req, res) => {
    db.Campaign.findOne({ _id: req.params.id })
    .populate("characters")
    .then(function (foundOne) {
      res.json(foundOne)
    })
    .catch(function (err) {
      res.json(err)
    })
  },
  populateNotes: (req, res) => {
    db.Campaign.findOne({ _id: req.params.id })
    .populate("notes")
    .then(function (foundOne) {
      res.json(foundOne)
    })
    .catch(function (err) {
      res.json(err)
    })
  },
  delete: function (req, res) {
    db.Campaign
      .findByIdAndDelete(req.params.id)
      .then(results => {
        res.json(results)
      })
      .catch(err => res.status(502).json(err))
  }
};