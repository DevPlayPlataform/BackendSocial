var mongoose = require('mongoose')
var Schema = mongoose.Schema

var Post = new Schema({
    author: {
        type: String, 
        required: true
    }, 
    theme:{
        type: String, 
        required: true
    },
    title:{
        type: String, 
        required: true
    },
    content:{
        type: String, 
        required: true
    },
    isDeleted:{
        type: Boolean, 
        default: false
    },
    like: {
        type: Number, 
        contentType: String
    }, 
    unlyke:{
        type: Number, 
        default: 'Membro'
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Post', Post)