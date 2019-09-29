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
    } else if (type === 'iq') {
      await this.setState({
        ...this.state, javascriptQuizQuestions: this.getIqQuestion()
      })
    } else if (type === 'gk') {
      await this.setState({
        ...this.state, javascriptQuizQuestions: this.getGkQuestion()
      })
    } else if (type === 'sport') {
      await this.setState({
        ...this.state, javascriptQuizQuestions: this.getSportsQuestion()
      })
    }

    if (this.state.javascriptQuizQuestions.length) {
      this.setState({ ...this.setState, javascriptQuizQuestion: { ...this.state.javascriptQuizQuestions[this.state.indexOfQuestion] } })
    }
  }
  getSportsQuestion() {
    return [
      {
        question: "Sultan Azlan Shah Cup is related to which among the following Sports?",
        answersChoice: ["Badminton", "Hockey", "Cricket", "Tennis"],
        correctAnswer: "Hockey",
        selectedAnswer: ''
      },
      {
        question: "Sachin Tendulkar hit his 100th international century against which among the following team?",
        answersChoice: ["Sri Lanka", "Bangladesh", "Pakistan", "England"],
        correctAnswer: "Bangladesh",
        selectedAnswer: ''
      },
      {
        question: "Which country win the 1992 World Cup in cricket?",
        answersChoice: ["England", "Sri Lanka", "India", "Pakistan"],
        correctAnswer: "Pakistan",
        selectedAnswer: ''
      },
      {
        question: "Brain Lara belong to which country in cricket?",
        answersChoice: ["India", "South Africa", "England", "West Indies"],
        correctAnswer: "West Indies",
        selectedAnswer: ''
      }, {
        question: "How many numbers of Red Balls are in Snooker?",
        answersChoice: ["13", "15", "18", "19"],
        correctAnswer: "15",
        selectedAnswer: ''
      }, {
        question: "Who is Crstiano Ronaldo?",
        answersChoice: ["Cricketer", "Football player", "Tennis player", "Hockey player"],
        correctAnswer: "Football player",
        selectedAnswer: ''
      }, {
        question: "How many numbers of Red Balls are in Snooker?",
        answersChoice: ["13", "15", "18", "19"],
        correctAnswer: "15",
        selectedAnswer: ''
      }, {
        question: "Who was the first winner of T20 World Cup ?",
        answersChoice: ["India", "Pakistan", "Australia", "West Indies"],
        correctAnswer: "India",
        selectedAnswer: ''
      }, {
        question: "Duration of a footbal game is ____ minutes?",
        answersChoice: ["80", "100", "90", "60"],
        correctAnswer: "90",
        selectedAnswer: ''
      }, {
        question: "Roger Federer belongs to which sports?",
        answersChoice: ["Hockey", "Cricket", "FootBall", "Tennis"],
        correctAnswer: "Tennis",
        selectedAnswer: ''
      },
    ];
  }
  getGkQuestion() {
    return [
      {
        question: "Who invented the “Cell phone”?",
        answersChoice: ["Alan turning", "Matrin Cooper", "Marie Curie", "Alexender"],
        correctAnswer: "Matrin Cooper",
        selectedAnswer: ''
      },
      {
        question: "Who composed the verses of Pakistan national Anthem?",
        answersChoice: ["Hafeez Jallandri", "Nasir Kazmi", "Allama Iqbal", "Faiz Ahmed Faiz"],
        correctAnswer: "Hafeez Jallandri",
        selectedAnswer: ''
      },
      {
        question: "The first nuclear power plant in Pakistan was established at:",
        answersChoice: ["Chashma", "Karachi", "Lahore", "Islamabad"],
        correctAnswer: "Karachi",
        selectedAnswer: ''
      },
      {
        question: "Which is the oldest search engine of the internet?",
        answersChoice: ["Yahoo", "Bing", "Google", "Ask"],
        correctAnswer: "Google",
        selectedAnswer: ''
      },
      {
        question: "CPU is the abbreviation of:",
        answersChoice: ["Central Processing Unit", "Central Programming Unit", "Central Power Unit", "Central Procession Unit"],
        correctAnswer: "Central Processing Unit",
        selectedAnswer: ''
      }, {
        question: "Largest continent by area is?",
        answersChoice: ["Asia", "North America", "Africa", "Antartica"],
        correctAnswer: "Asia",
        selectedAnswer: ''
      },
      {
        question: "Capital of Canada?",
        answersChoice: ["Washington D.C", "Hague", "Oslo", "Otwwa"],
        correctAnswer: "Ottawa",
        selectedAnswer: ''
      }, {
        question: "The study of birds is called?",
        answersChoice: ["Ethnology", "Astrology", "Ornithology", "Anthropology"],
        correctAnswer: "Ornithology",
        selectedAnswer: ''
      },
      {
        question: "3 May is celebrated as the international day of:",
        answersChoice: ["White Cane", "Population", "Press Freedom", "Environment"],
        correctAnswer: "Population",
        selectedAnswer: ''
      }, {
        question: "The world’s largest subway system is in:?",
        answersChoice: ["New York", "Mexico City", "Mosqow", "Tokyo"],
        correctAnswer: "New York",
        selectedAnswer: ''
      }
    ];
  }

  getIqQuestion() {
    return [
      {
        question: "Which number should come next in this series 10,17,26 ______?",
        answersChoice: ["56", "50", "46", "52"],
        correctAnswer: "50",
        selectedAnswer: ''
      },
      {
        question: "The fourth proportional to 5, 10, 25 is ?",
        answersChoice: ["24", "50", "40", "45"],
        correctAnswer: "50",
        selectedAnswer: ''
      },
      {
        question: "Maria has taken 6 exams and her average marks so far are 89. If she gets 100, a perfect score on the remaining 2 exams. What will her new average be?",
        answersChoice: ["89.25", "91.75", "85.65", "95.75"],
        correctAnswer: "91.75",
        selectedAnswer: ''
      },
      {
        question: "Forest is to tree as tree is to?",
        answersChoice: ["Plant", "Branch", "Leaf", "Mangrove"],
        correctAnswer: "Leaf",
        selectedAnswer: ''
      },
      {
        question: "The day after the day after tomorrow is four days before Monday. What day is it today?",
        answersChoice: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        correctAnswer: "Monday",
        selectedAnswer: ''
      }, {
        question: "At a conference, 12 members shook hands with each other before & after the meeting. How many total number of hand shakes occurred?",
        answersChoice: ["100", "132", "145", "140"],
        correctAnswer: "132",
        selectedAnswer: ''
      },
      {
        question: "It is Khadijah’s birthday today. One year from now she will be twice as old as she was 10 years ago. Calculate the present age of Khadijah ?",
        answersChoice: ["19 years", "20 years", "21 years", "30 years"],
        correctAnswer: "21 years",
        selectedAnswer: ''
      }, {
        question: "One third of one half is ?",
        answersChoice: ["1/8", "1/6", "1/2", "1/20"],
        correctAnswer: "1/6",
        selectedAnswer: ''
      },
      {
        question: "What is the ratio of 4 inches to 8 feet?",
        answersChoice: ["1:24", "2:24", "3:14", "4:54"],
        correctAnswer: "1:24",
        selectedAnswer: ''
      }, {
        question: "The price of an article was cut 20% for a sale. By what percent must the item be increased to again sell the article at the original price?",
        answersChoice: ["20%", "25%", "40%", "35%"],
        correctAnswer: "25%",
        selectedAnswer: ''
      }
    ];
  }

  getHtmlQuestion() {
    return [
      {
        question: "HTML stands for?",
        answersChoice: ["Hyper Text Markup Language", "High Text Markup Language", "Hyper Tabular Markup Language", "None of these"],
        correctAnswer: "Hyper Text Markup Language",
        selectedAnswer: ''
      },
      {
        question: "which of the following tag is used to mark a begining of paragraph ?",
        answersChoice: ["<TD>", "<br>", "<p>", "<TR>"],
        correctAnswer: "<p>",
        selectedAnswer: ''
      },
      {
        question: "HTML is a subset of?",
        answersChoice: ["Body", "Title", "Html", "Form"],
        correctAnswer: "Html",
        selectedAnswer: ''
      },
      {
        question: " Web pages starts with which ofthe following tag?",
        answersChoice: ["SGMT", "SGML", "SGMD", "None of these"],
        correctAnswer: "SGML",
        selectedAnswer: ''
      },
      {
        question: "Which of the following attributes of text box control allow to limit the maximum character?",
        answersChoice: ["Size", "Len", "Maxlength", "all of these"],
        correctAnswer: "Maxlength",
        selectedAnswer: ''
      }, {
        question: "www is based on which model?",
        answersChoice: ["Local-server", "Client-server", "3-tier", "None of these"],
        correctAnswer: "Client-server",
        selectedAnswer: ''
      },
      {
        question: "Markup tags tell the web browser?",
        answersChoice: ["How to organise the page", "How to display the page", "How to display message box on page", "None of these"],
        correctAnswer: "How to display the page",
        selectedAnswer: ''
      }, {
        question: "The attribute of <form> tag?",
        answersChoice: ["Method", "Action", "Both(a)(b)", "None of these"],
        correctAnswer: "Both(a)(b)",
        selectedAnswer: ''
      }

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
