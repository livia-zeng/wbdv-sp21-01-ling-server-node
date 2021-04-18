
const quizzesDao = require('../../daos/quizzes-dao')
const findAllQuizzes = () => quizzesDao.findAllQuizzes()
const findQuizById = (qid) => {
     return quizzesDao.findQuizById(qid)
}
module.exports = { findAllQuizzes, findQuizById }

