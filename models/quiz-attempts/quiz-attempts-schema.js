const mongoose = require('mongoose')
const questionSchema = require('../questions/questions-schema')
const Schema = mongoose.Schema;
const quizAttempts = mongoose.Schema({
    score: Number,
    quiz: {type: String, ref: 'QuizzesModel'},
    answers: [questionSchema],

}, {collection: 'quizAttempts', timestamps: true})
module.exports = quizAttempts