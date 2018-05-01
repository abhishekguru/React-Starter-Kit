import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routing} from './route/Router';
import './index.css'
const comp = <h1>Hello, world!</h1>;

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Routing/>
                    </div>
                </Router>
            </div>
        )
    }
}
ReactDOM.render(
    <LandingPage/>, document.getElementById('root'));