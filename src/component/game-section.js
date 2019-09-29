import React, { Component } from 'react';
import VideoModal from './video-modal';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: "",
      currentAnswersChoice: [],
      currentAnswer: "2",
      flag: 0,
      score: 0,
      indexOfQuestion: 0,
      selectedButton: "",
      javascriptQuizQuestion: null,
      next: false,
      javascriptQuizQuestions: [
        {
          question: "what one is used for styling?",
          answersChoice: ["css", "html", "javascript", "git"],
          correctAnswer: "css",
          selectedAnswer: ''
        },
        {
          question: "what one is used for structuring?",
          answersChoice: ["html", "css", "javascript", "git"],
          correctAnswer: "html",
          selectedAnswer: ''
        },
        {
          question: "what one is used for version controlling?",
          answersChoice: ["git", "css", "javascript", "html"],
          correctAnswer: "git",
          selectedAnswer: ''
        },

      ],
      cssQuizQuestions: [
        {
          question: "what one is used for styling?",
          answersChoice: ["css", "html", "javascript", "git"],
          correctAnswer: "css",
          selectedAnswer: ''
        },
        {
          question: "what one is used for structuring?",
          answersChoice: ["html", "css", "javascript", "git"],
          correctAnswer: "html",
          selectedAnswer: ''
        },
        {
          question: "what one is used for version controlling?",
          answersChoice: ["git", "css", "javascript", "html"],
          correctAnswer: "git",
          selectedAnswer: ''
        },

      ],
      htmlQuizQuestions: [
        {
          question: "what one is used for styling?",
          answersChoice: ["css", "html", "javascript", "git"],
          correctAnswer: "css",
          selectedAnswer: ''
        },
        {
          question: "what one is used for structuring?",
          answersChoice: ["html", "css", "javascript", "git"],
          correctAnswer: "html",
          selectedAnswer: ''
        },
        {
          question: "what one is used for version controlling?",
          answersChoice: ["git", "css", "javascript", "html"],
          correctAnswer: "git",
          selectedAnswer: ''
        },

      ],
      show: false,
      correctAnswerVideo: false,
    };
    this.closeModal = this.closeModal.bind(this);
  }

  async componentWillMount() {
    // local assign krde
    const type = localStorage.getItem('type');
    if (type === 'html') {
      await this.setState({
        ...this.state, javascriptQuizQuestions: this.getHtmlQuestion()
      })
    } else if (type === 'css') {
      await this.setState({
        ...this.state, javascriptQuizQuestions: this.getcssQuestion()
      })
    }
    if (this.state.javascriptQuizQuestions.length) {
      this.setState({ ...this.setState, javascriptQuizQuestion: { ...this.state.javascriptQuizQuestions[this.state.indexOfQuestion] } })
    }
  }
  getcssQuestion() {
    return [
      {
        question: "what one css used for styling?",
        answersChoice: ["css", "html", "javascript", "git"],
        correctAnswer: "css",
        selectedAnswer: ''
      },
      {
        question: "what one is css used for structuring?",
        answersChoice: ["html", "css", "javascript", "git"],
        correctAnswer: "html",
        selectedAnswer: ''
      },
      {
        question: "what one is css used for version controlling?",
        answersChoice: ["git", "css", "javascript", "html"],
        correctAnswer: "git",
        selectedAnswer: ''
      },

    ];
  }
  getHtmlQuestion() {
    return [
      {
        question: "what one html used for styling?",
        answersChoice: ["css", "html", "javascript", "git"],
        correctAnswer: "css",
        selectedAnswer: ''
      },
      {
        question: "what one is html used for structuring?",
        answersChoice: ["html", "css", "javascript", "git"],
        correctAnswer: "html",
        selectedAnswer: ''
      },
      {
        question: "what one is html used for version controlling?",
        answersChoice: ["git", "css", "javascript", "html"],
        correctAnswer: "git",
        selectedAnswer: ''
      },

    ];
  }
  selectedOption(answer) {
    this.state.javascriptQuizQuestions[this.state.indexOfQuestion].selectedAnswer = answer;
  }

  go() {
    if (this.state.javascriptQuizQuestions[this.state.indexOfQuestion].correctAnswer === this.state.javascriptQuizQuestions[this.state.indexOfQuestion].selectedAnswer) {
      this.setState({ ...this.state, correctAnswerVideo: true, show: true });
    } else {
      this.setState({ ...this.state, correctAnswerVideo: false, show: true });
    }

  }

  async closeModal() {
    await this.setState({
      ...this.state,
      correctAnswerVideo: false,
      show: false,
      indexOfQuestion: this.state.indexOfQuestion + 1
    });
    if (this.state.javascriptQuizQuestions[this.state.indexOfQuestion]) {
      await this.setState({ ...this.state, javascriptQuizQuestion: { ...this.state.javascriptQuizQuestions[this.state.indexOfQuestion] } });
      return;
    }
    await this.setState({ ...this.state, next: true });
  }

  render() {
    return (
      <div className="QuizArea">
        {this.state.javascriptQuizQuestion ?
          <div>
            <p>{this.state.javascriptQuizQuestion.question}</p>
            <div>
              {this.state.javascriptQuizQuestion.answersChoice.map(answer => {
                return <button onClick={(e) => { this.selectedOption(answer); }}>{answer}</button>
              })}
            </div>
          </div> : ''}
        {this.state.next ? <button className="InstBtn"><Link to="/win-screen">Proceed</Link></button> :
          <button onClick={(e) => { this.go(); }}>Go</button>}
        <VideoModal
          show={this.state.show}
          closeModal={this.closeModal}
          correctAnswerVideo={this.state.correctAnswerVideo} ></VideoModal>
      </div>

    );
  }
}

export default Game;
