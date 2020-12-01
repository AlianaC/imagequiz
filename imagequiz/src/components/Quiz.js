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
        if(numQ < this.state.data.questions.length){
            this.setState({currQ: numQ});
        }else{
            this.setState({showScore: true});
        }
    }

    tryAgain = () => {
        this.setState({score: 0, showScore: false, currQ: 0});
    }

    showQuestion = () => {
        let data = this.state.data;
        if(data.length !== 0){
            console.log(this.state.data.id);
            return (
                <div className="quizSec">
                    <img 
                    src={process.env.PUBLIC_URL + data.questions[this.state.currQ].image} 
                    class="flowerImg" 
                    alt="flower"></img>
                    <div className="quizQuestions">
                        <h4 className="questionText">
                            {this.state.currQ + 1}) {data.questions[this.state.currQ].question}
                        </h4>
                    </div>
                    <div className="answerSec">
                    {data.questions[this.state.currQ].answers.map((answer) => (
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
                    this.setState({data: server.getQuiz(this.props.location.state.id)});    
                }
            }
        }
    }

    render(){

        return(
            <div>
                <h2 className="quizHeader">{this.state.data.name}</h2>
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