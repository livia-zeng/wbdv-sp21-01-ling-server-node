const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const quizzesSchema = mongoose.Schema({
    _id: String,
    title: String,
    questions: [{
        type: String,
        ref: 'QuestionsModel'
    }]
}, {collection: 'quizzes'})
module.exports = quizzesSchema
