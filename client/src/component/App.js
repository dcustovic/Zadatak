import React, { Component } from 'react';
import TopNav from './TopNav';
import MoviesBody from './MoviesBody';
import CreateMovie from './CreateMovie';
import SingleMovie from './SingleMovie';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
              <TopNav />
              <div className="container">
                <Switch>
                  <Route path="/new" component={CreateMovie} />
                  <Route path="/movie/:id" component={SingleMovie} />
                  <Route path="/" exact component={MoviesBody} />
                </Switch>
              </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
