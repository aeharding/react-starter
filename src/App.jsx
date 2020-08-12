import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.scss';
import { Computers } from './Computers';
import { Computer } from './Computer';
import { Home } from './Home';
import { Users } from './Users';
import { User } from './User';
import { Header } from './Header';

// TODO move fa setup elsewhere
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDesktop, faUser } from '@fortawesome/free-solid-svg-icons'
library.add(faDesktop)
library.add(faUser)

function App() {
    return (
      <Router>
        <>
          <Header />

          <main className="app__main">
            <Route exact path="/" component={Home} />
            <Route path="/users/:id" component={User} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/computers" component={Computers} />
            <Route path="/computers/:id" component={Computer} />
          </main>
        </>
      </Router>
    );
}

export default App;
