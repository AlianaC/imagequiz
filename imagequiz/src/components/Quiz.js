import React from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css';
import server from '../ServerInterface/server.js';


class Quiz extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            currQ: 0,
            score: 0,
            showScore: false
        };
    }

    answerClicked = (correct) => {
        if(correct){
            let curr = this.state.score + 1;
            this.setState({score: curr});
        }
        let numQ = this.state.currQ + 1;
        if(numQ < this.state.data.length){
            this.setState({currQ: numQ});
        }else{
            this.setState({showScore: true});
        }
    }

    tryAgain = () => {
        server.saveScore(this.props.location.state.user, this.props.location.state.id, this.state.score).catch(e => console.log(e));
        this.setState({score: 0, showScore: false, currQ: 0});
    }

    showQuestion = () => {
        let questions = this.state.data;
        if(questions.length !== 0){
            return (
                <div className="quizSec">
                    <img 
                    src={process.env.PUBLIC_URL + questions[this.state.currQ].image} 
                    class="flowerImg" 
                    alt="flower"></img>
                    <div className="quizQuestions">
                        <h4 className="questionText">
                            {this.state.currQ + 1}) {questions[this.state.currQ].question}
                        </h4>
                    </div>
                    <div className="answerSec">
                    {questions[this.state.currQ].answers.map((answer) => (
                        <button 
                        className="ansB" 
                        type="text"
                        onClick={() => this.answerClicked(answer.correct)}>
                            {answer.answerText}
                        </button>
                    ))}
                    </div>
                </div>
            );
        }

    }

    componentDidMount() {
        const location = this.props.location;
        if(location){
            if(location.state){
                if(location.state.id){
                    server.getQuiz(location.state.id).then(data => this.setState({data: data})).catch(e => console.log(e));
                    console.log(this.state.data);
                }
            }
        }
    }

    render(){

        return(
            <div>
                <h2 className="quizHeader">Image Quiz</h2>
                {this.state.showScore ? (
                    <div className="scoreSec">
                        <h4>You scored {this.state.score} out of 6</h4>
                        <Link to="/">
                        <button 
                        type="text"
                        className="endB">Home
                        </button>
                        </Link>
                        <button 
                        type="text" 
                        className="endB"
                        onClick={this.tryAgain}>Try Again
                        </button>
                    </div>
                ) : (this.showQuestion())}   
            </div>
        );
    }
}

export default Quiz;