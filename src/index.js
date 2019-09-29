import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Quiz from './component/quiz-section'
import TopicSelection from './component/topic-selection';
import UserEntrySection from './component/user-entry-section';
import HealthBar from "./component/health-bar";
import PlayerSelection from './component/select-player';
import WinScreen from './component/win-screen';
import Instruction from './component/instruction';
import GameSection from './component/game-section';
import 'bootstrap/dist/css/bootstrap.min.css';
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();
const routing = (
    <Router history={history}>
        <div>
            {/* <GameSection></GameSection> */}
            <Route path="/" component={App} />
            <Route path="/instruction" component={Instruction} />
            <Route path="/game-section" component={GameSection} />
            <Route path="/topic-section" component={TopicSelection} />
            <Route path="/user-entry-section" component={UserEntrySection} />
            <Route path="/quiz" component={HealthBar} />
            <Route path="/topic-section" component={PlayerSelection} />
            <Route path="/win-screen" component={WinScreen} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
