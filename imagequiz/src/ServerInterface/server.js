let API = "https://alianac-imagequiz.herokuapp.com";

let getQuizzes = () => {
    return(fetch (API + "/quizzes").then(x => x.json()));
}

let getQuiz = (i) => {
    return(fetch (API + `/quiz/${i}`).then(x => x.json()));
}

let saveScore = (username, quizid, score) => {
    let data = {username: username, quizid: quizid, score: score};
    return(fetch (API + "/score",
    {method: "POST", headers: {"CONTENT-TYPE": "application/json"}, body: JSON.stringify(data)}).then(x => x.json()));

}

let server = {getQuizzes: getQuizzes, getQuiz: getQuiz, saveScore: saveScore};
export default server;
