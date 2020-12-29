import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Formdisplay from './Formdisplay';
import Greetings from './Greetings';

function App() {
  return (
    <div>
      <div className="Container">
        <center>
          <Switch>
            <Route exact path="/" component={Formdisplay} />
            <Route exact path="/homepage" component={Greetings} />
          </Switch>
        </center>
      </div>
    </div>
  );
}

export default App;
