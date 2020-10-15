import React from 'react';
import './Quiz.css';

class Quiz extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            questions: quiz1,
            currQ: 0,
            score: 0,
            showScore: false
        };
    }
    render(){
        let flowerName = "";
        let flowerImg = "";
        const location = this.props.location;
        if(location){
            if(location.state){
                if(location.state.flowerName){
                    flowerName = location.state.flowerName;
                }
                if(location.state.flowerImg){
                    flowerImg = location.state.flowerImg;
                }
            }
        }
        
        if(flowerName === "Daffodil"){
            questions = quiz1;
        }else if(flowerName === "Cherry Blossom"){
            questions = quiz2;
        }else{
            questions = quiz3;
        }


        return(
            <div>
                <h2 className="quizHeader">Image Quiz</h2>
                <div className="quizSec">
                    <img src={process.env.PUBLIC_URL + flowerImg} class="flowerImg" alt="flower"></img>
                    <div className="quizQuestions">
                        <h4 className="questionText">{questions[this.state.currQ].question}</h4>
                    </div>
                    <div className="answerSec">
                    {questions[this.state.currQ].answers.map((answer) => (
                        <button className="ansB" type="text">{answer.answerText}</button>
                    ))}
                    </div>
                </div>

            </div>
        );
    }
}

const quiz1 = [
    {
        question: "What is the name of this flower?",
        answers: [
            {answerText: "Daisy", correct: false},
            {answerText: "Daffodil", corret: true},
            {answerText: "Lily", correct: false},
            {answerText: "Rose", correct: false},
        ],
    },
    {
        question: "What is the name of this flower?",
        answers: [
            {answerText: "Daisy", correct: false},
            {answerText: "Daffodil", corret: true},
            {answerText: "Lily", correct: false},
            {answerText: "Rose", correct: false},
        ],
    }
];

const quiz2 = [
    {
        question: "What is the name of thy flower?2",
        answers: [
            {answerText: "Daisy", correct: false},
            {answerText: "Daffodil", corret: true},
            {answerText: "Lily", correct: false},
            {answerText: "Rose", correct: false},
        ],
    },
    {
        question: "What is the name of thee flower?2",
        answers: [
            {answerText: "Daisy", correct: false},
            {answerText: "Daffodil", corret: true},
            {answerText: "Lily", correct: false},
            {answerText: "Rose", correct: false},
        ],
    }
];

const quiz3 = [
    {
        question: "What is the name of this flower?3",
        answers: [
            {answerText: "Daisy", correct: false},
            {answerText: "Daffodil", corret: true},
            {answerText: "Lily", correct: false},
            {answerText: "Rose", correct: false},
        ],
    },
    {
        question: "What is the name of this flower?3",
        answers: [
            {answerText: "Daisy", correct: false},
            {answerText: "Daffodil", corret: true},
            {answerText: "Lily", correct: false},
            {answerText: "Rose", correct: false},
        ],
    }
];

let questions = quiz1;
export default Quiz;