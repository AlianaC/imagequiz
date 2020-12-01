import quizzes from "./data.js";

let getQuizzes = () => {
    return quizzes;
}

let getQuiz = (id) => {
    return quizzes[id-1];
}

let server = {getQuizzes: getQuizzes, getQuiz: getQuiz};
export default server;