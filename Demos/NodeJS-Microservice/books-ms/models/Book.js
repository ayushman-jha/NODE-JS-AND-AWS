const mongoose = require('mongoose')

let Book = mongoose.model('Book', {
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    numberPages: {
        type: Number,
        required: false,
    },
    publisher: {
        type: String,
        required: false,
    }
})

module.exports = Book;