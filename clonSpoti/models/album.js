'use_strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AlbumSchema = Schema({
    title: String,
    description: String,
    year: number,
    image: String,
    artits: {type: Schema.ObjectId, ref: 'Artist'}
});

module.exports = mongoose.model('Album', AlbumSchema);