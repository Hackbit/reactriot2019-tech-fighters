import React, { Component } from 'react';

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQuestion: "",
            currentAnswersChoice: [],
            currentAnswer: "2",
            flag: 0,
            score: 0,
            selectedButton: "",
            javascriptQuiz: [
                {
                    question: "what one is used for styling?",
                    answersChoice: ["css", "html", "javascript", "git"],
                    correctAnswer: "css"
                },
                {
                    question: "what one is used for structuring?",
                    answersChoice: ["html", "css", "javascript", "git"],
                    correctAnswer: "html"
                },
                {
                    question: "what one is used for version controlling?",
                    answersChoice: ["git", "css", "javascript", "html"],
                    correctAnswer: "git"
                }
            ]
        }
    }



    render() {
        return (
            <div>
                {
                    this.state.javascriptQuiz.map(js => {
                        return <div>
                            <h1>{js.currentQuestion}</h1>
                            {
                                js.answersChoice.map(answer => {
                                    return <div>
                                        <button onClick={this.selectedOption} value={this.state.answer}>{answer}</button>
                                        <br />
                                    </div>;
                                })
                            }
                        </div>;
                    })
                }

                <button onClick={this.getQuestions}>submit</button>
            </div>
        );
    }
    // -------------all functions bellow-----------------

    getQuestions = () => {
        let questions;
        let answer;
        let choices = [];
        let i = this.state.flag;

        if (this.state.flag < this.state.javascriptQuiz.length) {
            questions = this.state.javascriptQuiz[i].question;
            answer = this.state.javascriptQuiz[i].correctAnswer;
            console.log("questions: ", questions);
            console.log("answer: ", answer);
            this.setState({ currentQuestion: questions })
            this.setState({ currentAnswer: answer })

            for (let j = 0; j < this.state.javascriptQuiz[i].answersChoice.length; j++) {
                choices.push(this.state.javascriptQuiz[i].answersChoice[j]);
                console.log("choices: ", choices);
                console.log("state: ", this.state.currentAnswersChoice)
            }
            // }
            this.setState({ currentAnswersChoice: choices })
            this.setState({ flag: this.state.flag + 1 })
            console.log("flag: ", this.state.flag)
        }
    }


    selectedOption = (e) => {
        console.log(e.target.value);
        this.setState({ selectedButton: e.target.value })
        console.log("selectedButton: ", this.state.selectedButton);

        if (this.state.currentAnswer == e.target.value) {
            this.setState({ score: this.state.score + 1 })
            console.log();
        }
    }

}

export default Quiz;